<script setup>
import Navbar from "./components/Display/Navbar.vue";
import Footer from "./components/Display/Footer.vue";
import { onBeforeRouteUpdate, useRouter } from 'vue-router';

const route = useRouter();
</script>

<template>
  <div>
    <Navbar  v-if="!['/register', '/login'].includes($route.path)" />
    <router-view v-slot="{ Component }">
      <transition appear name="fade-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer v-if="!['/register', '/login'].includes($route.path)" />
  </div>
</template>

<style lang="scss" scoped>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.4s ease;
  visibility: hidden;
  transition-delay: 0.1s;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
  visibility: visible;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!-- <script setup>
import Home from "./pages/Homepage/Home.vue";
import Navbar from "./components/Display/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <Home />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
