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

let fieldset_form = ref([
    {id_event:id_event.value++, title:"", type:""}
])
</script>

<template>
  
  <main>

    <section class="image">
      <img :src="event_create.image" alt="image couldn't load" class="image_event" >
  
    </section>

    <section class="form_name">
        <button @click= "show_form" class="bloc-top">
            <span id="Title_form_name">Nom de l'événement</span>
            <img class="bouton_add" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png">
        </button>
        <form methode="post" action="#" id="Name_event_description_form" @submit.prevent>
                <fieldset class="Name_event_description">
                    <input v-model="event_create.title" placeholder="Ajouter un titre">
                    <input v-model="event_create.description" placeholder="Ajouter une description">
                </fieldset>
        </form>
      </section>

    

    <section class="propierties_event">
      <section class="Name_event">
        <form methode="post" action="#" id="Name_fiedlset" @submit.prevent>
          
          <input  v-model="event_create.title" placeholder="Ajouter un titre">


        </form>
      </section>
      
      <form class="event_form">

        <fieldset id="box1">

          <section class="checbox_colonne">
              
            <section>
              <input type="checkbox" id="Texte" >
              <label for="Texte">Texte</label>
              
            </section>

            <section>
              <input type="checkbox" id="Choix unique" >
              <label for="Choix unique">Choix unique</label>
            </section>
              
            <section>
              <input type="checkbox" id="Choix multiple" >
              <label for="Choix unique">Choix multiple</label>
              
            </section>
                            
          </section>
          
          <section class="checbox_colonne">

            <section>
              <input type="checkbox" id="Paragraphe" >
              <label for="Paragraphe">Paragraphe</label>
            </section>
            
            <section>
              <input type="checkbox" id="Date" >
              <label for="Date">Date</label>
            </section>
            
            <section>
              <input type="checkbox" id="Heure" >
              <label for="Heure">Heure</label>
            </section>
              
            
          </section>
          
          <section class="checbox_colonne">
            <input type="checkbox" id="Obligatoire" >
            <label for="Obligatoire">Obligatoire</label>
          </section>

          
          
        </fieldset>

      </form>
    </section>

    
  </main>
  
</template>

<style scoped>

main
{
  padding: 5%;
  margin: 10% 5% 0% 5%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 41px;
  background-color: rgb(217, 217, 217,0.26);
  font-family: 'inter', sans-serif;

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
  background: rgb(217, 217, 217,1);
  margin-top:2%
}

.image_event
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
  display: none;
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

#Title_form_name
{
  display: block;
}

#Name_fiedlset
{
  width: 50%;
  color: black;
}

#Name_fiedlset input
{
  color: black;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

#Name_fiedlset ::placeholder
{
  color: black;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  height : 5vh
}

.propierties_event
{
  width: 100%;
}

.event_form
{
  font-size: 0.84rem;;
  height: 100%;
}


.event_form fieldset
{
  flex-wrap: wrap;
  display: flex;
  padding: 0.1%;
  margin: 0;
  width: 100%;
  background-color: rgb(255, 255, 255,1);
  padding-top: 10%;
}

.checbox_colonne
{
  flex: 1;
  max-width: 50%;
  margin-right: 2.5%;
  margin-left: 2.5%
}


.checbox_colonne input
{
  width: 10%;
  margin-right: 2%;
}

.checbox_colonne section
{
  display: inline-flex;
  width: 279%;
  align-items: center;
}

.checbox_colonne label
{
  width: 300%;
}

</style>