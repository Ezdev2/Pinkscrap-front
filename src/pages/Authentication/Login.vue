<script setup>
import image from "../../assets/details-2.png";
import { useRouter } from "vue-router";
const router = useRouter();
const HomeBtn = () => {
  router.push("/");
};
const SignUp = () => {
  router.push("/register");
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
          <h1>Inscription</h1>
          <div class="d-block">
            <label>Adresse email *</label>
            <input type="email" placeholder="Adresse email" />
            <label>Mot de passe *</label>
            <input type="password" placeholder="Mot de passe" />
          </div>
          <p class="span-compte">
            Vous n'avez pas un compte? <a @click="SignUp">Inscrivez-vous ici</a>
          </p>
          <button>Se connecter</button>
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
</style>
