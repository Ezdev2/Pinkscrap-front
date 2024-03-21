<script setup>
defineProps({
  type: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <button class="primary" v-if="type === 'primary'">{{ label }}</button>
  <button class="secondary" v-else-if="type === 'secondary'">
    {{ label }}
  </button>
  <button class="access" v-else-if="type === 'access'"></button>
  <button class="icon" v-else-if="type === 'icon'">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.primary {
  display: flex;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  color: #fff;
  background: var(--color-primary);
  &:hover {
    background: var(--color-bgBlack);
  }
}
.secondary {
  display: flex;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  color: #fff;
  background: var(--color-blackScale);
  &:hover {
    background: var(--color-bgBlack);
  }
}
.icon {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--color-black);
  &:hover {
    background: var(--color-bgBlack);
  }
}
</style>
