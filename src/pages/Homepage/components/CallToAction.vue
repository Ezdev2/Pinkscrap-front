<script setup>
import Title from "@/components/Common/Title.vue";
import Button from "@/components/Common/Button.vue";
</script>

<template>
  <div class="cta">
    <div class="flex justify-between w-full">
      <div>
        <Title type="h4" class="text-start" label="Prêt au décollage ?" />
        <p class="text-white text-start">
          Essayez gratuitement pendant 7 jours et récupérez jusqu'à 100 leads.
        </p>
      </div>
      <Button type="primary" label="Essayez gratuitement" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  display: flex;
  padding: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border: 0.4px solid #7b7878;
}
</style>
