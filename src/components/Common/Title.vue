<script setup>
defineProps({
  type: {
    type: String,
    default: "h1",
  },
  label: {
    type: [String, Number],
  },
});
</script>

<template>
  <component :is="type">
    {{ label }}
    <slot />
  </component>
</template>

<style lang="scss" scoped>
h1 {
  color: #272d4e;
  text-align: center;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
}
h2 {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
h3 {
  color: #7366fe;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
h4 {
  color: #ffba49;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  text-align: start;
  line-height: normal;
}
h5 {
  color: #272d4e;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
}
</style>
