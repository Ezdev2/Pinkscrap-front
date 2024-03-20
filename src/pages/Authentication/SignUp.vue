<script setup>
import image from "../../assets/details-2.png";
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="colonne">
          <div class="color">
            <h1>Sing Up</h1>
            <div class="d-block">
              <label>Prenom *</label>
              <input type="text" placeholder="Prenom" />
              <label>Nom *</label>
              <input type="text" placeholder="Nom" />
              <label>Adresse email *</label>
              <input type="email" placeholder="Adresse email" />
              <label>Numero Telephone *</label>
              <input type="tel" placeholder="Numero Telephone" />
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
              <button>s'inscrire</button>
            </div>
          </div>
        </div>
        <div class="colonne bg-img">
          <div class="color1">
            <h1 class="titlecol2">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ad illo perspiciatis, laboriosam dignissimos itaque. Quidem assumenda consequatur numquam tenetur asperiores, voluptates, dolorum praesentium dignissimos non placeat aut facere fugiat?
            </p>
          </div>
          <div class="bg-col">
            <img :src="image" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  background: url("../../assets/bg-log.svg");
}
img {
  // background-color: red;
  position: absolute;
  bottom: -80px;
  right: -60px;
}
.container {
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  // background-color: aqua;
  background-color: #fff;
  overflow: hidden;
}
.color1,
.color {
  width: 80%;
  // background-color: blue;
  margin: 20px auto;
}
.color1{
  width: 90%;
}
.d-block {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
label {
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 5px;
  padding-top: 10px;
}
button {
  background-color: #007bff;
  color: #fff;
  padding: 0;
  height: 40px;
  margin: 30px 0;
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
  width: 50%;
  min-height: 1px;
  height: 820px;
  padding-right: 15px;
  padding-left: 15px;
  // border: 1px solid black;
  text-align: justify;
}
p {
  // background-color: red;
  padding: 5px 0;
  color: #fff;
}

@media (max-width: 992px) {
  .colonne {
    // flex: 0 0 50%;
    width: 100%;
  }
}
</style>
