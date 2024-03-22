<template>
  <div
    class="flex flex-col gap-[25px] max-w-[1200px] px-[24px] h-[360px] md:h-[200px] lg:h-auto"
  >
    <Title type="h3" label="BIENVENUE SUR PINKSCRAP" />
    <h1 class="title">
      Prospectez efficacement avec le générateur
      <span class="title--blink">{{ titleStyled }}</span>
      <span id="cursor" class="blink">|</span>
    </h1>
    <p class="text-blackScale">
      Transformez Google Maps en machine à clients. Essayez gratuitement pendant
      7 jours sans engagement.
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Title from "@/components/Common/Title.vue";

const titleStyled = ref("intégré à Google Maps.");

onMounted(() => {
  clearText();
});

function clearText() {
  const contenu = titleStyled.value;
  titleStyled.value = "";

  let index = contenu.length;
  const effacement = setInterval(() => {
    index--;
    titleStyled.value = contenu.slice(0, index);
    if (index === 0) {
      clearInterval(effacement);
      setTimeout(writeText, 1000);
    }
  }, 150);
}

function writeText() {
  const contenu = "intégré à Google Maps.";
  let index = 0;
  const ecriture = setInterval(() => {
    index++;
    titleStyled.value = contenu.slice(0, index);
    if (index === contenu.length) {
      clearInterval(ecriture);
      setTimeout(clearText, 1000);
    }
  }, 150);
}
</script>

<style lang="scss" scoped>
.title {
  color: #272d4e;
  text-align: center;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  @media (max-width: 600px) {
    font-size: 36px;
    line-height: normal;
  }
  &--blink {
    // background-color: #7366FE;
    padding: 0 8px;
    border-radius: 4px;
    background: rgba(115, 102, 254, 0.15);
  }
}

.blink {
  animation: blink-animation 1s steps(2, start) infinite;
  color: var(--color-primary);
  @media (max-width: 600px) {
    font-size: 36px;
  }
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>

<!-- <script setup>
import Title from "@/components/Common/Title.vue";
</script>

<template>
  <div class="flex flex-col gap-[25px] max-w-[1000px]">
    <Title type="h3" label="BIENVENUE SUR PINKSCRAP" />
    <Title type="h1" label="Générateur de">
      prospects depuis Google Maps</Title
    >
    <p class="text-blackScale">
      Transformez Google Maps en machine à clients.Essayez gratuitement pendant
      7 jours sans engagement.
    </p>
  </div>
</template>

<style lang="scss" scoped></style> -->
