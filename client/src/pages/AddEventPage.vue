<script setup>

import {ref} from 'vue';
import {id_event} from '../globalState';

let event_create = ref(
  {id_event:"", title:"", image:"https://cdn.icon-icons.com/icons2/903/PNG/512/plus_icon-icons.com_69476.png", description:"", event_block:{title_block:""}}
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
  hide_title.display = (hide_title.display ==="flex") ? "none" : "flex";
 

}

let fieldset_form = ref([
    {id_event:id_event.value++, title:"", type:""}
])
</script>

<template>
  
  <main>
    
    <form @submit.prevent class="form_page">
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
          
          <input  v-model="event_create.event_block.title_block" placeholder="Ajouter un titre">


        </form>
      </section>
      
      <form class="event_form" >

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

      <form class="event_form" >

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
    </form>

    <section id="add-button">
        
        <button @click="submit" id="add_event">

          <span class="add_button_image"></span> 
        </button>
    
        <p>Ajouter un champ</p>
      </section>
    

    

    

    <section id="validate-button">

      <button @click="submit" id="validate_event">Valider</button>
        
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
  border-radius: 25px;
  background-color: rgb(217, 217, 217,0.26);
  font-family: 'inter', sans-serif;
  height: 91%;

}

.form_page
{
  display: flex;
  flex-direction: column;
  height:200%;
}

.image
{
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150%;
  width:100%;
  border-radius: 25px;
  background: rgb(217, 217, 217,1);
  margin-top:2%
}

.image_event
{
  height: 100%;
  width: 50%;
  border-radius: 12px;
  margin-bottom: 5%;
  margin-top: 1%;
}

.form_name
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:100%;
  background: #868585;
  margin-bottom: 5%;
  margin-top: -15%;
  z-index: 1;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 1rem;
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

#Title_form_name
{
  display: flex;
}

.bloc-top img {
    width: 14%
}

#Name_event_description_form
{
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120%;
  width:80%;
  margin-bottom: 5%;
  margin-top: 5%;
  text-align:center;
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

.Name_event_description input 
{
    margin: 2% 0;
    padding: 2%;
    width: 100%;
    box-sizing: border-box;
    border: none; /* Retire les bordures des zones de texte */
    background: none; 
    color: white;
    text-align: center;
    font-size: 1.3rem;
}



.Name_event_description input::placeholder
{
  color: white;
  font-size: 100%;
}

.propierties_event
{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 135%;
}

.Name_event
{
  display: flex;

}

#Name_fiedlset
{
  width: 100%;
  color: black;
}

#Name_fiedlset input
{
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  margin: 2% 0;
  padding: 2%;
  width: 100%;
  box-sizing: border-box;
  border: none; /* Retire les bordures des zones de texte */
  background: none; 
}

#Name_fiedlset ::placeholder
{
  color: black;
  font-size: 1.5rem;
  text-align: left;
  height : 5vh
}


.event_form
{
  font-size: 1rem;;
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
  height: 75%;
}

.checbox_colonne
{
  flex: 1;
  padding-right: 0.9rem ;
}

.checbox_colonne section
{
  display: inline-flex;
  width: 116%;
  align-items: center;
}




.checbox_colonne input
{
  width: 10%;
  margin-right: 2%;
}



.checbox_colonne label
{
  width: 300%;
}

#add-button
{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}


#add_event
{
    display: flex;
    border-radius: 25px;
    border: none;
    width: 10%;
    justify-content: center;
    align-items: center;
}

.add_button_image {
    width: 100%;
    height: 30%;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png");
    background-size: cover;
    background-position: center;
}



#add-button p
{
  display: flex;
}


</style>