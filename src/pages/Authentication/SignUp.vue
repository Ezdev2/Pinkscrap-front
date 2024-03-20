<script setup>
import image from "../../assets/details-2.png";
import { useRouter } from "vue-router";
const router = useRouter();
const HomeBtn = () => {
  router.push("/");
};
const Login = () => {
  router.push("/login");
};
</script>

<template>
  <div class="row">
    <div class="colonne">
      <a class="flex gap-[12px] items-center" href="/" @click="HomeBtn">
        <img src="../../assets/chevron.svg" alt="back" />
        <span class="back-text">vers la page home</span>
      </a>
      <div class="color">
        <h1>Inscription</h1>
        <div class="d-block">
          <div class="div-inp">
            <label>Prenom *</label>
            <input type="text" placeholder="Prenom" />
            <label>Nom *</label>
            <input type="text" placeholder="Nom" />
            <label>Adresse email *</label>
            <input type="email" placeholder="Adresse email" />
            <label>Numero Telephone *</label>
            <input type="tel" placeholder="Numero Telephone" />
          </div>
          <div class="div-inp">
            <label>Entreprise *</label>
            <input type="text" placeholder="Entreprise" />
            <label>Comment Allez-vous</label>
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <label>Mot de passe *</label>
            <input type="password" placeholder="Mot de passe" />
            <label>Confirmation *</label>
            <input type="password" placeholder="Confirmation" />
          </div>
        </div>
        <div class="division">
          <p class="span-compte">Vous avez déjà un compte? <a @click="Login">Connexion</a></p>
          <button>s'inscrire</button>
        </div>
      </div>
    </div>
    <div class="colonne bg-img">
      <div class="color1">
        <h1 class="titlecol2">Lorem ipsum dolor sit amet.</h1>
        <p class="param">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ad
          illo perspiciatis, laboriosam dignissimos itaque. Quidem assumenda
          consequatur numquam tenetur asperiores, voluptates, dolorum
          praesentium dignissimos non placeat aut facere fugiat?
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
  justify-content: space-between;
  width: 100%;
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
a{
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
  padding: 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  // min-height: 1px;
  // height: 820px;
  // border: 1px solid black;
  text-align: left;
}
.param {
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
  display: block;
}

@media (max-width: 992px) {
  .colonne {
    width: 100%;
  }
}
</style>
