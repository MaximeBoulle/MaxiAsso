<script>
    import TheHeader from '@/components/TheHeader.vue';
    import { computed, ref, watch } from 'vue';

    export const connected = ref(false);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('my-button').addEventListener('click', function() {
        var mail = document.getElementById('mail').value;
        var password = document.getElementById('password').value;

        if (mail === 'maxi@gmail.com' && password === 'asso') {
            console.log('Connexion success !');
            connected.value = true; // Mettre à jour la valeur de connected
            console.log(connected.value);
        } else {
            console.log('Mail or password incorrect');
        }
    });
});

</script>

<template>
  <div class="unused-background">
    <main>
      <div class="main-part">
        <div class="inscription-form">
          <div class="categorie-title">
            MAIL <span style="color: red;">*</span>
          </div>
          <form class="form-inscription">
            <input placeholder="Entrer votre Email" type="text" id="mail" name="mail" required><br>
          </form>
          <div class="categorie-title">
            MOT DE PASSE <span style="color: red;">*</span>
          </div>
          <form class="form-inscription">
            <input placeholder="Entrer votre mot de passe" type="password" id="password" name="password" required><br>
          </form>
          <button  @click="toggleConnected" class="btn btn-white btn-animate" id="my-button">Se connecter</button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main{
    margin-top: 5vh;
    display: flex;
    justify-content: center;
  }
  

.unused-background {
    position: relative;
  }


  .main-part{
    display: flex;
    width: 90%;
    justify-content: center;
    flex-direction: column;
  }

  

  
  .inscription-form{
    padding: 2.5rem;
    padding-top: 0.2rem;
    background-color: rgb(255, 235, 235);
    justify-content: center;
    border-radius: 15px;
    height: fit-content;
  }

  .categorie-title{
    font-size:small;
    font-weight: 550;
    color: rgb(53, 53, 53);
    padding-top: 1rem;
    margin-left: -0.3rem;
    height: 2rem;
    margin-top: 1rem;
  }

  .form-inscription{
    input{
      background-color: white;
      padding: 1rem;
      border-radius: 14px;
      border-width: 1.5px;
      border-color: black;
      border-style: solid;
      width: 90%;
    }
  }

  button{
    margin-top: 2rem;
    border-radius: 15px;
    border-width: 1.5px;
    border-style:solid;

    background-color: rgba(19, 213, 131, 0.61);
    padding: 0.5rem;
    width: 80%;
    margin-left: 10%;
  }
  button:hover{
    margin-top: 2rem;
    border-radius: 15px;
    border-width: 1.5px;
    border-style:solid;
    transition: 0.2s;
    background-color: rgba(6, 247, 146, 0.61);
    padding: 0.5rem;
    width: 80%;
    margin-left: 10%;
  }




.btn:link,
.btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
    content: "";
    display: inline-block;
    z-index: -1;
    transition: all .4s;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.btn-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}





  @media (prefers-color-scheme: dark) {
    

  


  .unused-background {
    position: relative;
  }

  .inscription-form{
    padding: 2.5rem;
    padding-top: 0.2rem;
    background-color: rgb(45, 43, 43);
    justify-content: center;
    border-radius: 15px;
    height: fit-content;
  }

  

  .categorie-title{
    font-size:small;
    font-weight: 550;
    color: rgb(53, 53, 53);
    padding-top: 1rem;
    margin-left: -0.3rem;
    height: 2rem;
    margin-top: 1rem;
  }

  .form-inscription{
    input{
      background-color: #736D6D;
      padding: 1rem;
      border-radius: 14px;
      border-width: 1.5px;
      border-color: white;
      border-style: solid;
      width: 90%;
    }
  }

  .categorie-title{
    font-size:small;
    font-weight: 550;
    color: white;
    padding-top: 1rem;
    margin-left: -0.3rem;
    height: 2rem;
    margin-top: 1rem;
  }

  .form-inscription{
    input{
      background-color: rgba(0, 0, 0, 0.118);
      padding: 1rem;
      border-radius: 14px;
      border-width: 1.5px;
      border-color: white;
      border-style: solid;
      width: 90%;
    }
  }
}

@media (min-width: 768px) {
  main{
    display: flex;
    justify-content: center;
    width: 40rem;
  }

  


  .unused-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    transition: 0.5s;
  }
  @media (prefers-color-scheme: dark) {
    .unused-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    transition: 0.5s;
  }
  button{
    color: white;
  }
  }
}


</style>