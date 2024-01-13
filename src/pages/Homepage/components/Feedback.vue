<script setup></script>

<template>
  <div class="feedback">
    <div class="feedback__bg">
      <img src="@/assets/bg-4.svg" alt="background" />
    </div>
    <p class="title text-start">Retour de nos clients</p>
    <div class="flex flex-col gap-[24px]">
      <div class="feedback__head flex gap-[24px] justify-between">
        <p class="feedback__title">Incroyablement complet, rapide et fiable</p>
        <img src="@/assets/direction.svg" alt="background" />
      </div>
      <p class="text-white text-start">
        Incontournable ! Facile, léger, ultra complet et très accessible
        financièrement. Le TOP ! Logiciel juste ahurissant de puissance, de
        précision et d'efficacité ! Je recommande vivement. Surtout qu'il
        s'enrichit régulièrement.
      </p>
      <div>
        <p class="font-bold text-white text-start">Jean Marc H.</p>
        <p class="text-white text-start">
          Web marketeur Marketing et publicité Indépendant
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  @apply flex gap-[48px] relative;
  z-index: 1000;
  &__bg {
    @apply absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &__head {
    border-bottom: 2px solid #fff;
  }
  &__title {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1px;
  }
}
.title {
  color: #fff;
  font-size: 105.8px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}
</style>
