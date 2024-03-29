<script setup>
import Button from "@/components/Common/Button.vue";
import image from "../../assets/details-2.png";
import { useRouter } from "vue-router";

//Ajout ref de vue et de HomeService
import { ref, watch } from 'vue';
import HomeService from "../../service/homeService";

const router = useRouter();
const HomeBtn = () => {
  router.push("/");
};
const Login = () => {
  router.push("/login");
};

//Ajout des infos du client
const firstname = ref('');
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const enterprise = ref('');
const comment = ref('');
const password = ref('');
const confirmPassword = ref('');

//Gestion d'erreur pour chaque champs 
const showMissingFirstnameFieldErrorMessage = ref(false);
const showMissingNameFieldErrorMessage = ref(false);
const showEmailErrorMessage = ref(false);
const showPhoneNumberErrorMessage = ref(false);
const showPasswordErrorMessage = ref(false);
const showMatchErrorMessage = ref(false);

//Test email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailPattern.test(email);
    return isValid;
}

//Test numéro téléphone
function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d+$/;
    let isValid = phonePattern.test(phoneNumber);
    return isValid;
}

// Test mdp
function isPasswordValid(password) {
    //au moins 1 lettre en minuscule et en majuscule, 1 chiffre et 8 caractères
    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    let isValid = passwordPattern.test(password);
    return isValid ? true : false;
}

// Test correspondance de mdp
function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}

watch(
  email, 
  (newEmail) => {
    showEmailErrorMessage.value = !isValidEmail(newEmail);
});

watch(
  phoneNumber, 
  (newPhoneNumber) => {
    showPhoneNumberErrorMessage.value = !isValidPhoneNumber(newPhoneNumber);
});

//Affichage d'erreur lors de la soumission du formulaire d'inscription
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

//Ajout de fonction de soumission post du formulaire
const submitForm  = async () => {
  try {
    //Validation de chaque champs utile pour faciliter le traitement serveur 
    if(!firstname.value.trim()){
      document.getElementById("firstname").focus();
      showMissingFirstnameFieldErrorMessage.value = true;
        setTimeout(() => {
          showMissingFirstnameFieldErrorMessage.value = false;
        }, 5000);
    } else if(!name.value.trim()){
      document.getElementById("name").focus();
      showMissingNameFieldErrorMessage.value = true;
        setTimeout(() => {
          showMissingNameFieldErrorMessage.value = false;
        }, 5000);
    } else if(isValidEmail(email.value) && isValidPhoneNumber(phoneNumber.value)){
      if(!isPasswordValid(password.value)){
        showPasswordErrorMessage.value = true;
        setTimeout(() => {
            showPasswordErrorMessage.value = false;
        }, 5000);
      } else if(!passwordsMatch(password.value, confirmPassword.value)){
        showMatchErrorMessage.value = true;
        setTimeout(() => {
          showMatchErrorMessage.value = false;
        }, 5000);
      } else {
        const formData = {
          firstname: firstname.value,
          name: name.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          enterprise: enterprise.value,
          comment: comment.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        };

        const { errorMessage, status } = await HomeService.postFormData(formData);
          
        if (status === 201) {
          console.log('Formulaire soumis et enregistré avec succès!');
          Login();
        } else if (errorMessage) {
          document.getElementById("firstname").focus();
          displayError('Erreur lors de l\'inscription : ' + errorMessage);
        }
      }
    }
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire d'inscription :", error);
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
        <h1>Inscription</h1>
        <div class="d-block">
          <div class="div-inp">
            <div id="consoleError" style="margin: 0 auto;"/>
            <label>Prenom *</label>
            <!--Ajout de v-model pour le traitement data et affichage d'erreur lors de l'inscription-->
            <div>
              <input v-model="firstname" id="firstname" type="text" placeholder="Prenom" autofocus/>
              <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showMissingFirstnameFieldErrorMessage">Ce champs est requis.</span>
            </div>
            <label>Nom *</label>
            <div>
              <input v-model="name" id="name" type="text" placeholder="Nom"/>
              <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showMissingNameFieldErrorMessage">Ce champs est requis.</span>
            </div>
            <label>Adresse email *</label>
            <div>
                <input v-model="email" type="email" placeholder="Adresse email"/>
                <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showEmailErrorMessage">Email invalide</span>
            </div>
            <label>Numero Telephone *</label>
            <div>
                <input v-model="phoneNumber" type="tel" placeholder="Numéro de téléphone"/>
                <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showPhoneNumberErrorMessage">Numéro de téléphone invalide</span>
            </div>
          </div>
          <div class="div-inp">
            <label>Entreprise</label>
            <input v-model="enterprise" type="text" placeholder="Entreprise"/>
            <label>Comment allez-vous</label>
            <select v-model="comment">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <label>Mot de passe *</label>
            <div>
                <input v-model="password" type="password" placeholder="Mot de passe"/>
                <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showPasswordErrorMessage">Mot de passe invalide! Le mot de passe doit contenir : 1 lettre en minuscule et en majuscule, 1 chiffre et au moins 8 caractères.</span>
            </div>
            <label>Confirmation *</label>
            <div>
                <input v-model="confirmPassword" type="password" placeholder="Confirmation"/>
                <span :style="'color: red; font-size: 14px; margin-top: 5px;'" v-if="showMatchErrorMessage">Les mots de passe ne correspondent pas.</span>
            </div>
          </div>
        </div>
        <div class="division">
          <p class="span-compte">
            Vous avez déjà un compte? <a @click="Login">Connexion</a>
          </p>
          <Button
            style="width: fit-content"
            type="primary"
            :label="'S\'inscrire'"
            @click="submitForm"
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
  bottom: -225px;
  right: -30px;
}
.div-inp {
  width: 49%;
}
.d-block {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
}
.color{
  // background-color: red;
  overflow-y: scroll;
  scrollbar-width: none;
  height: 80vh;
}
.color1 {
  width: 90%;
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
  width: 100%;
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
  width: 50%;
  height: 40px;
}
select,
input {
  width: 100%;
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
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
  text-align: justify;
}
.colonne-right {
  position: relative;
  display: flex;
  width: 40%;
  text-align: start;
  padding: 60px 80px;
}
p {
  // background-color: red;
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
@media (max-width: 1098px) {
  .div-inp{
    width: 100%;
  }
}
@media (max-width: 992px) {
  .colonne {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .colonne-right{
    display: none;
  }
  .colonne {
  // background-color: aqua;
  padding: 10px;
  height: 100vh;
}
button {
  background-color: #007bff;
  color: #fff;
  padding: 0;
  width: 100%;
  height: 40px;
}
.color{
  height: 100vh;
}

}
</style>
