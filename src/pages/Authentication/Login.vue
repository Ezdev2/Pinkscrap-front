<script setup>
import Button from "@/components/Common/Button.vue";
import image from "../../assets/details-2.png";
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import HomeService from "../../service/homeService";

const router = useRouter();
const HomeBtn = () => {
  router.push("/");
};
const SignUp = () => {
  router.push("/register");
};

let token = null;

onMounted(() => {
    //Ajout de récupération de token par cookie
    token = getCookie('token');
});

const email = ref('');
const password = ref('');
const showEmailErrorMessage = ref(false);
const showPasswordErrorMessage = ref(false);

function getCookie(id) {
   let value = document.cookie.match('(^|;)?' + id + '=([^;]*)(;|$)');
   return value ? unescape(value[2]) : null;
}

//Affichage d'erreur de connexion
const displayError = (error) => {
  const consoleContainer = document.getElementById('consoleError');
  consoleContainer.innerHTML = '';
  const errorMessageElement = document.createElement('p');
  errorMessageElement.textContent = error;
  errorMessageElement.style.padding = '10px';
  errorMessageElement.style.color = 'red';
  errorMessageElement.style.marginBottom = '5px';

  consoleContainer.appendChild(errorMessageElement);
  setTimeout(() => {
    consoleContainer.removeChild(errorMessageElement);
  }, 8000);
};

function setCookie(id, value) {
  // Définit un cookie expirant dans 7 jours
  // var date = new Date();
  // date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
  // var expires = ";expires=" + date.toUTCString();
  document.cookie = id + '=' + value;
}

const submitLoginData  = async () => {
  try {
    if(!email.value.trim()) {
      document.getElementById("email").focus();
      showEmailErrorMessage.value = true;
        setTimeout(() => {
          showEmailErrorMessage.value = false;
        }, 3000);
    } else if(!password.value.trim()){
      showPasswordErrorMessage.value = true;
        setTimeout(() => {
          showPasswordErrorMessage.value = false;
        }, 3000);
    } else {
        const loginData = {
          email: email.value,
          password: password.value,
        };

        const { errorMessage, data, status } = await HomeService.postLoginData(loginData);
        
        if (status === 200) {
          const { error, customerUrl, url } = await HomeService.getSubscription({
            email: data.user.email,
            id: data.user.id,
          }, data.token);
          if (customerUrl) {
            console.log('Client authentifié.');
            window.location.replace(customerUrl);
            setCookie('token', data.token);
          } else if (url) {
            console.log('Nouveau client authentifié.');
            window.location.replace(url);
          } else if (error) {
              console.log('Erreur d\'authentification Stripe :', error);
          } else {
            displayError('Erreur d\'authentification.');
          }
        } else {
          console.error(errorMessage);
          displayError('Erreur de connexion : ' + errorMessage);
        }
    }         
    
  } catch (error) {
    console.error("Erreur lors de la soumission des données de connexion :", error);
    return [];
  }

};

</script>

<template>
  <div class="row">
    <div class="colonne">
      <a class="flex gap-[12px] items-center" href="/" @click="HomeBtn">
        <img src="../../assets/chevron.svg" alt="back" />
        <span class="back-text">Revenir à la page d'accueil</span>
      </a>
      <div class="color">
        <div class="division">
          <h1>Connexion</h1>
          <!--Ajout de console d'erreur lors du traitement de la connexion-->
          <div id="consoleError" style="margin: 0 auto;"/>
          <div class="d-block">
            <label>Adresse email *</label>
            <!--Ajout de span d'erreur propre à chaque champs-->
            <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showEmailErrorMessage">Votre email est requis.</span>
            <input v-model="email" id="email" type="email" placeholder="Adresse email"/>
            
            <label>Mot de passe *</label>
            <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showPasswordErrorMessage">Mot de passe requis.</span>
            <input v-model="password" id="password" type="password" placeholder="Mot de passe"/>
          </div>
          <p class="span-compte">
            Vous n'avez pas un compte? <a @click="SignUp">Inscrivez-vous ici</a>
          </p>
          <!--Import de Button.vue et écoute du bouton de connexion-->
          <Button
            style="width: fit-content"
            type="primary"
            :label="'Se connecter'"
            @click="submitLoginData"
          />
        </div>
      </div>
    </div>
    <div class="colonne-right bg-img">
      <div class="color1">
        <h1 class="titlecol2">Bienvenue sur PINKSCRAP !</h1>
        <p>
          Optimisez votre stratégie de prospection en accédant à une sélection
          exhaustive de leads B2B, extraits méticuleusement de la base de
          données GMap, afin de cibler efficacement vos clients potentiels et
          renforcer votre présence sur le marché.
        </p>
      </div>
      <div class="bg-col">
        <img :src="image" alt="Image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  background: url("../../assets/bg-log.svg");
}
.bg-col img {
  // background-color: red;
  position: absolute;
  bottom: -220px;
  right: -30px;
}
.div-inp {
  width: 49%;
}
.d-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.color1 {
  width: 90%;
  p {
    color: #fff;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
}
a {
  cursor: pointer;
}
label {
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 5px;
  padding-top: 10px;
  display: block;
  width: 60%;
  // background: red;
  margin-top: 10px;
}
.division {
  width: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  background-color: #007bff;
  color: #fff;
  padding: 0;
  width: 60%;
  height: 40px;
}
input {
  width: 60%;
  height: 40px;
  padding: 0 15px;
  border: none;
  outline: none;
  border: 1px solid #e4dede;
  border-radius: 5px;
  color: #333;
}
h1 {
  font-size: 25px;
  // background-color: coral;
  padding: 10px 0;
  font-weight: bolder;
}
.titlecol2 {
  color: #fff;
}
.colonne {
  position: relative;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 60%;
  text-align: justify;
}
.colonne-right {
  position: relative;
  display: flex;
  width: 40%;
  text-align: start;
  padding: 80px;
}
.param {
  padding: 5px 0;
  color: #fff;
}
.back-text {
  line-height: 0px;
  margin-top: -4px;
}
.span-compte {
  // background: red;
  padding: 20px 0;
  color: #333;
  display: block;
}

@media (max-width: 992px) {
  .colonne {
    width: 100%;
  }
}
@media (max-width: 550px) {
  label, input ,button{
    width: 100%;
  }
  .colonne{
    padding: 10px;
    width: 100%;
    height: 100vh;
  }
  .colonne-right{
    display: none;
  }
}
</style>
