<script setup>

import {ref} from 'vue';

let event_create = ref(
  {id_event:"", title:"", image:"https://cdn.icon-icons.com/icons2/903/PNG/512/plus_icon-icons.com_69476.png", description:""}
  )

  async function submit()
  {
    event_create.value.id_event=id_event.value++
  }

let source_image="https://cdn.icon-icons.com/icons2/903/PNG/512/plus_icon-icons.com_69476.png"


console.log(typeof source_image)
  
let loaded = 0
const {img} = defineProps({
  user: Object
});

//Fonction pour montrer le sous-menu
function show_form()
{
  let dropdown = document.getElementById("Name_event_description_form");
  let hide_title = document.getElementById("Title_form_name");
  console.log(hide_title.display)
  
  //condition pour tester si le menu est déjà montrer ou non si "flex" alors on met none (pour le faire disparaitre) sinon on met flex
  dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
  hide_title.display = (hide_title.display ==="block") ? "none" : "block";

}
</script>
<template>

  <main>
  <section class="image">
  <img src="https://www.julia-migenes.com/wp-content/uploads/2023/07/NewJeans-se-transforme-en-The-Powerpuff-Girls-dans-New-Jeans.jpg" alt="supershy image" class="supershy-image"/>
  </section>
  <section class="form_name">
        <button @click= "show_form" class="bloc-top">
            <span id="Title_form_name">Nom de l'événement</span>
            <img class="bouton_add" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png">
        </button>
        <form methode="post" action="#" id="Name_event_description_form" @submit.prevent d>
                <fieldset class="Name_event_description">
                  <p>{{ event_create.title || ' le titre' }}</p>
                  <p>{{ event_create.description || 'la description description' }}</p>
                </fieldset>
        </form>
  </section>
  <section>
    <h1>information de l'évenement</h1>
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
      <input type="time" id="heure" name="heure" required step="900">
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
  
  .form_name
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width:90%;
  border-width: 0%;
  background: #868585;
  margin-bottom: 5%;
  margin-top: -15%;
  z-index: 1;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
}

.form_name input 
{
    margin: 2% 0;
    padding: 2%;
    width: 100%;
    box-sizing: border-box;
    border: none; /* Retire les bordures des zones de texte */
    background: none; 
    color: white;
    text-align: center;
}

.form_name input::placeholder
{
    color: white;
    text-align: center;
}
.bloc-top {
    padding: 2%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 118%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:  #868585;
    color: #f1f1f1;
    cursor: pointer;
    border-radius:  5px;
}
.bloc-top img {
    width: 14%
}
.Name_event_description
{
  margin: 0;
  padding:0;
  border: none;
}

#Title_form_name
{
  display: block;
}

  @media (min-width: 768px) {
    main {
      padding: 10px;
    
    }

    .image{
      margin-left: 0%;
      width: 50%;
      display: flex
    }

    .supershy-image {
      max-width: 100%;
    }

    input {
      width: calc(100% - 20px);
    }
    .form_name
    {
      display:none;
    }
  }


  </style>