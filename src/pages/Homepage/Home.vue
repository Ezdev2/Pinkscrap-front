<script setup>
import HeaderSection from "./components/Header.vue";
import Description from "./components/Description.vue";
import TableSection from "./components/ScrapTable.vue";
import DetailSection from "./components/Details.vue";
import Demo from "./components/Demo.vue";
import Feedback from "./components/Feedback.vue";
import CallToAction from "./components/CallToAction.vue";
import Witness from "./components/Witness.vue";
</script>

<template>
  <div class="home flex flex-col items-center gap-[34px] md:gap-[122px]">
    <HeaderSection />
    <TableSection />
    <Description />
    <DetailSection />
    <Demo />
    <Witness />
    <div class="flex flex-col gap-[80px] bg-bgBlack w-full px-[24px] md:px-[122px] py-[80px]">
      <Feedback />
      <CallToAction />
    </div>

    <div class="home__bg">
      <img src="@/assets/bg-1.svg" alt="camera" class="card-security__img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  // display: flex;
  position: relative;
  margin: none;
  // flex-direction: column;
  // align-items: center;
  // gap: 122px;
  align-self: stretch;
  &__bg {
    @apply absolute top-0 w-[90%] right-[12px];
    z-index: -1;
  }
}
</style>
