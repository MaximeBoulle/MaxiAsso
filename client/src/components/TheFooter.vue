<!-- Footer of the pages-->
<script setup>

</script>

<template>
  <footer>
    <div>
     Copyright  ©2024 MaxiAsso
    </div>
  </footer>
</template>

<style scoped>
footer{
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 2rem;
  padding: 1rem 0 0 0;
  background-color: rgb(255, 235, 235);
  display: flex;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow-y: auto;
  margin-top: 15vh;
  border-radius: 10px 10px 0 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  
}

@media (prefers-color-scheme: dark) {
  footer{ 
    background-color: rgb(45, 43, 43);
    color: white;
  }
}


</style>