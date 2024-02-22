<script setup>

import {ref} from 'vue';
import {id_event} from '../globalState';

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
</script>

<template>
  
  <main>

    <section class="image">
      <img :src="event_create.image" alt="image couldn't load">
  
    </section>
    <section class="form_name">
        <form methode="post" action="#" id="Name_event_description_form" @submit.prevent>
                <fieldset class="Name_event_description">
                    <input v-model="event_create.title" placeholder="Ajouter un titre">
                    <input v-model="event_create.description" placeholder="Ajouter une description">
                </fieldset>
        </form>
      </section>

    <section class="propierties_event">
      <form>
        <fieldset id="box1">
          <input type="checkbox" id="Texte" >
          <label for="Texte">Texte</label>
          <input type="checkbox" id="Obligatoire" >
          <label for="Obligatoire">Obligatoire</label>
          <input type="checkbox" id="Paragraphe" >
          <label for="Paragraphe">Paragraphe</label>
          <input type="checkbox" id="Choix unique" >
          <label for="Choix unique">Choix unique</label>
          <input type="checkbox" id="Date" >
          <label for="Date">Date</label>
          <input type="checkbox" id="Heure" >
          <label for="Heure">Heure</label>
        </fieldset>
      </form>
    </section>

    
  </main>
  
</template>

<style scoped>

main
{
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3%;
  border-radius: 41px;
  background: #fbf6f6f6;
}

.image
{
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width:100%;
  border-radius: 50px;
  background: #efeaea;
  margin-top:2%
}

img
{
  transition: width 2s;
  height: 90%;
  width: 50%;
  border-radius: 12px;
  margin-bottom: 5%;
  margin-top: 1%;
}


.Name_event_description
{
  display:flex;
  flex-direction: column;
  height: 100%;
  width:99%;
  padding:0%;
  border:none;
}

#Name_event_description_form
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:80%;
  border-width: 0%;
  margin-bottom: 5%;
  margin-top: 5%;
  text-align:center;
}

.form_name
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:100%;
  border-width: 0%;
  background: #868585;
  margin-bottom: 5%;
  margin-top: -15%;
  z-index: 1;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

input 
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

input::placeholder
{
  color: white;
  font-size: 120%;
}

</style>