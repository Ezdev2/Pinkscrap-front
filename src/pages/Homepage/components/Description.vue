<script setup>
import Title from "@/components/Common/Title.vue";
import Button from "@/components/Common/Button.vue";
</script>

<template>
  <div class="desc">
    <div class="flex md:flex-row flex-col gap-[24px] md:gap-[80px] items-center p-[24px] md:px-[122px] md:py-[80px]">
      <div class="flex flex-col items-start md:w-[40%] gap-[24px]">
        <Title
          type="h5"
          class="text-start"
          label="Cherchez par ville, région ou pays sur Pinkscrap.com?"
        />
        <p class="text-blackScale text-start">
          Choisissez parmi les 4000+ catégories de Google Maps, et ciblez
          précisément par pays, région, département ou ville dans 195 pays.
        </p>
        <Button class="w-full" type="secondary" label="Essayez gratuitement" />
      </div>
      <div>
        <img src="@/assets/desc.png" alt="description" />
      </div>
    </div>
    <div class="desc__bg">
      <img src="@/assets/bg-2.svg" alt="background" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.desc {
  position: relative;
  &__bg {
    @apply absolute bottom-0 w-[50%] right-[0];
    z-index: -1;
  }
}
</style>
