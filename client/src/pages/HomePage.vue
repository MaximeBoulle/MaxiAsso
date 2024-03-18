<script setup>

import { ref } from 'vue';

  const heureInput = document.getElementById('heure');
  heureInput.addEventListener('click', () => {
    const heureArrivee = heureInput.value.split(':');
    const heure = parseInt(heureArrivee[0]);
    const minutes = parseInt(heureArrivee[1]);

    if (minutes % 15 !== 0) {
      const prochaineMinuteMultiple = Math.ceil(minutes / 15) * 15;
      heureInput.value = `${heure.toString().padStart(2, '0')}:${prochaineMinuteMultiple.toString().padStart(2, '0')}`;
    }
  });
</script>


<template>

  <main>
  <section class="image">
  <img src="https://www.julia-migenes.com/wp-content/uploads/2023/07/NewJeans-se-transforme-en-The-Powerpuff-Girls-dans-New-Jeans.jpg" alt="supershy image" class="supershy-image"/>
  </section>

    <section class="formulaire">

      <form action="">
        <label class="boxename" for="name">PRENOM</label>
        <input type="text" id="firstname" name="firstname" required>
        <label class="boxename" for="name">NOM</label>
        <input type="text" id="name" name="name" required>
        <label class="boxename" for="email">MAIL</label>
        <input type="email" id="email" name="email" required>
        <label class="boxename" for="heure">HEURE D'ARRIVEE</label>
        <input type="time" id="heure" name="heure" required>
        <button type="submit">S'inscrire</button>
      </form>
    </section>

  </main>

</template>

<style scoped>
  body {
display: flex;
  }
  .image {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    margin-bottom: 4%;
    padding :0%;
  }
  main {
    padding: 5%;
    margin: 10% 5% 0% 5%;
    background-color: #f0f0f0;
    height: 80%;    
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    font-family: 'inter', sans-serif;
  }
  .supershy-image {
    width: 90%;
    height: auto;
    display: block;
    align-items: center;
    border-radius: 1.5vh;
  }
  .formulaire{
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 0.9rem;
    font-weight: 500;
  }
  input {
    text-indent: 5%;
    padding-left: 1%;
    width: 90%;
    margin: 1%;
    height: 5vh;
    border-radius: 15px;
    font-size: 1.15rem;

  }

  label.boxename {
    width: 90%;
    margin : 2%;
  }

  button {
    width: 80%;
    margin-top: 10%;
    height: 5vh;
    border-radius: 15px;
    background-color: #60deab;


  }
</style>

