<script setup>
import Title from "@/components/Common/Title.vue";
import Button from "@/components/Common/Button.vue";

//Ajout import useRouter
import { useRouter } from "vue-router";
const router = useRouter();
const tryForFree = async() => {
  router.push("/login");
};

</script>

<template>
  <div class="details">
    <!-- <div class="details__bg">
      <img src="@/assets/bg-3.svg" alt="background" />
    </div> -->
    <div class="flex flex-col gap-[24px]">
      <div class="flex flex-col md:flex-row gap-[48px] max-w-[900px] items-center justify-start">
        <div class="hidden md:block md:w-[40%]">
          <img src="@/assets/details-1.png" alt="details" />
        </div>
        <div class="flex flex-col gap-[24px] md:w-[40%]">
          <Title type="h2" class="text-start" label="Filtrez avec précision" />
          <p class="text-white text-start">
            Vous souhaitez récupérer uniquement les entreprises qui ont un email
            et pas de page Facebook ? C'est possible grâce à nos
            filtres de recherche.
          </p>
          <div class="md:hidden">
          <img src="@/assets/details-1.png" alt="details" />
        </div>
          <!--Ecoute du bouton d'essai gratuit-->
          <Button type="primary" label="Essayez gratuitement" @click="tryForFree"/>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-[48px] max-w-[900px] items-center justify-end">
        <div class="flex flex-col gap-[24px] md:w-[40%]">
          <Title type="h2" class="text-start" label="Des filtres de plus!" />
          <p class="text-white text-start">
            Encore des filtres pour les entreprises qui ont une note entre 3,9 et 4,4
            sur Google Maps et moins de 15 photos? C'est aussi possible grâce à nos
            larges éventails de filtres de recherche.
          </p>
          <!--Ecoute du bouton d'essai gratuit-->
          <Button type="primary" label="Essayez gratuitement" @click="tryForFree"/>
        </div>
        <div class="md:w-[40%]">
          <img src="@/assets/details-2.png" alt="details" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  background-image: url('@/assets/bg-3.svg');
  background-size: cover;
  background-position: center;
  position: relative;
  @apply flex flex-col items-center;
  @apply w-full;
  &__bg {
    @apply absolute w-full;
    z-index: -1;
  }
  @media (max-width: 800px) {
    background: #333;
    padding: 44px 24px;
  }
}
</style>
