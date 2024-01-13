<script setup>
import Title from "@/components/Common/Title.vue";
import Button from "@/components/Common/Button.vue";
</script>

<template>
  <div class="details">
    <!-- <div class="details__bg">
      <img src="@/assets/bg-3.svg" alt="background" />
    </div> -->
    <div class="">
      <div class="flex gap-[48px] max-w-[900px] items-center justify-start">
        <div class="w-[40%]">
          <img src="@/assets/details-1.png" alt="details" />
        </div>
        <div class="flex flex-col gap-[24px] w-[40%]">
          <Title type="h2" class="text-start" label="Filtrez avec précision" />
          <p class="text-white text-start">
            Vous souhaitez récupérer uniquement les entreprises qui ont un email
            et pas de page Facebook ? Celles qui ont une note entre 3,9 et 4,4
            sur Google Maps et moins de 15 photos ?C'est possible grâce à nos
            filtres de recherche.
          </p>
          <Button type="primary" label="Essayez gratuitement" />
        </div>
      </div>
      <div class="flex gap-[48px] max-w-[900px] items-center justify-end">
        <div class="flex flex-col gap-[24px] w-[40%]">
          <Title type="h2" class="text-start" label="Filtrez avec précision" />
          <p class="text-white text-start">
            Vous souhaitez récupérer uniquement les entreprises qui ont un email
            et pas de page Facebook ? Celles qui ont une note entre 3,9 et 4,4
            sur Google Maps et moins de 15 photos ?C'est possible grâce à nos
            filtres de recherche.
          </p>
          <Button type="primary" label="Essayez gratuitement" />
        </div>
        <div class="w-[40%]">
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
}
</style>
