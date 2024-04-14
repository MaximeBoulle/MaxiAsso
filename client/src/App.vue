<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import TheFooter from "@/components/TheFooter.vue";
  import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader/>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    <TheFooter/>
  </footer>
</template>

<style scoped>
</style>
