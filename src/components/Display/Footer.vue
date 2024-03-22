<script setup>
const addressLink = [
  {
    icon: "@/assets/icons/mail.svg",
    text: "attincidunt@immob!lo.fr",
    link: "#",
  },
  {
    icon: "@/assets/icons/phone.svg",
    text: "06 00 00 00 00",
    link: "#",
  },
  {
    icon: "@/assets/icons/localisation.svg",
    text: "Arcu augue elit nec",
    link: "#",
  },
];

const socialLink = [
  {
    icon: "@/assets/icons/linkedin.svg",
    link: "#",
  },
  {
    icon: "@/assets/icons/facebook.svg",
    link: "#",
  },
  {
    icon: "@/assets/icons/instagram.svg",
    link: "#",
  },
  {
    icon: "@/assets/icons/twitter.svg",
    link: "#",
  },
];

import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  // Mettre à jour l'année toutes les secondes
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 1000);
});

</script>

<template>
  <div class="footer">
    <div class="flex flex-col gap-[24px]">
      <img src="@/assets/logo.svg" alt="details" />
      <p class="text-white">© Copyright {{ currentYear }}</p>
    </div>
    <div class="flex flex-col items-start gap-[24px]">
      <p class="footer__title">Menu</p>
      <a href="#">Accueil</a>
      <a href="#">Tableau</a>
      <a href="#">Se connecter</a>
    </div>
    <div class="flex flex-col items-start gap-[24px]">
      <p class="footer__title">Payement</p>
      <img class="w-2/3" src="@/assets/stripe.svg" alt="details" />
    </div>
    <div class="flex flex-col items-start gap-[24px]">
      <p class="footer__title">Nous contacter</p>
      <div class="flex flex-col gap-[12px]">
        <div class="flex gap-[12px]">
          <img src="@/assets/icons/mail.svg" alt="address" />
          <a href="">attincidunt@immob!lo.fr</a>
        </div>
        <div class="flex gap-[12px]">
          <img src="@/assets/icons/phone.svg" alt="address" />
          <a href="">06 00 00 00 00</a>
        </div>
        <div class="flex gap-[12px]">
          <img src="@/assets/icons/localisation.svg" alt="address" />
          <a href="">Arcu augue elit nec</a>
        </div>
      </div>
      <div class="flex gap-[12px]">
        <a href="#"><img src="@/assets/icons/linkedin.svg" alt="address" /></a>
        <a href="#"><img src="@/assets/icons/facebook.svg" alt="address" /></a>
        <a href="#"><img src="@/assets/icons/instagram.svg" alt="address" /></a>
        <a href="#"><img src="@/assets/icons/twitter.svg" alt="address" /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply bg-bgFooter w-full;
  display: flex;
  flex-wrap: wrap;
  padding: 80px 194px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 20px;
  &__title {
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media only screen and (max-width: 550px) {
  .footer {
    padding: 80px;
    gap: 35px;
  }
}
</style>
