<script >
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from "vue";



</script>

<template>
  <header>
    

    <div class="wrapper">

      <nav> 
        <RouterLink to="/">HomePage</RouterLink>
        <RouterLink to="/event/add">AddBookPages</RouterLink>
        
      </nav>

    </div>

  </header>

  <RouterView />

</template>

<style scoped>

</style>
