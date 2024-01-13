<script setup>
const feedbackData = [
  {
    title: "Incroyablement complet, rapide et fiable",
    content:
      "Incontournable ! Facile, léger, ultra complet et très accessible financièrement. Le TOP ! Logiciel juste ahurissant de puissance, de précision et d'efficacité ! Je recommande vivement. Surtout qu'il s'enrichit régulièrement.",
    authorName: "Jean Marc H.",
    authorDetails: "Web marketeur Marketing et publicité Indépendant",
  },
  {
    title: "Incroyablement complet, rapide et fiable",
    content:
      "Incontournable ! Facile, léger, ultra complet et très accessible financièrement. Le TOP ! Logiciel juste ahurissant de puissance, de précision et d'efficacité ! Je recommande vivement. Surtout qu'il s'enrichit régulièrement.",
    authorName: "Jean Marc H.",
    authorDetails: "Web marketeur Marketing et publicité Indépendant",
  },
  {
    title: "Incroyablement complet, rapide et fiable",
    content:
      "Incontournable ! Facile, léger, ultra complet et très accessible financièrement. Le TOP ! Logiciel juste ahurissant de puissance, de précision et d'efficacité ! Je recommande vivement. Surtout qu'il s'enrichit régulièrement.",
    authorName: "Jean Marc H.",
    authorDetails: "Web marketeur Marketing et publicité Indépendant",
  },
];
</script>

<template>
  <div class="feedback">
    <div class="feedback__bg">
      <img class="w-[80%]" src="@/assets/bg-4.svg" alt="background" />
    </div>
    <div class="feedback__content">
      <p class="title text-start">Retour de nos clients</p>
      <div class="flex flex-col">
        <div
          class="flex flex-col gap-[24px]"
          v-for="(item, index) in feedbackData"
          :key="index"
        >
          <div class="feedback__head flex gap-[24px] justify-between">
            <p class="feedback__title">{{ item.title }}</p>
            <img src="@/assets/icons/direction.svg" alt="background" />
          </div>
          <p class="text-white text-start">
            {{ item.content }}
          </p>
          <div>
            <p class="font-bold text-white text-start">{{ item.authorName }}</p>
            <p class="text-white text-start">{{ item.authorDetails }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  @apply relative;
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
    text-align: start;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1px;
  }
  &__content {
    @apply flex gap-[48px] items-center;
  }
}
.title {
  color: #fff;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}
</style>
