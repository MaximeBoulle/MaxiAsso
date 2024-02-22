import{ reactive,ref } from 'vue';

export let id_event=ref(0)

export let event = ref([
    {id_event:id_event.value++, title:"Pandora", image:"https://cdn.icon-icons.com/icons2/903/PNG/512/plus_icon-icons.com_69476.png", description:"Réunion hebdomadaire pour jouer à Smash"}
])