<script>
</script>

<template>
  <div class="unused-background">
    <main>
      <div class="main-part">
        <div id="title-inscription">Inscription</div>
        <div class="inscription-form">
          <div class="categorie-title">
            NOM DE L'ASSOCIATION <span style="color: red;">*</span>
          </div>
          <form class="form-inscription">
            <input placeholder="Entrer le nom de l'association" type="text" id="name" name="name" required><br>
          </form>

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
            <input placeholder="Entrer votre mot de passe" type="text" id="password" name="password" required><br>
          </form>

          <div class="categorie-title">
            CONFIRMER LE MOT DE PASSE <span style="color: red;">*</span>
          </div>
          <form class="form-inscription">
            <input placeholder="Confirmer votre mot de passe" type="text" id="password" name="password" required><br>
          </form>

          <button id="mon-bouton">S'inscrire </button>
        </div>


      </div>
    </main>

  
  </div>

</template>

<style scoped>
  main{
    margin-top: 150px;
    display: flex;
    justify-content: center;
  }

  .main-part{
    display: flex;
    width: 90%;
    justify-content: center;
    flex-direction: column;
  }

  #title-inscription{
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: white;
    border-radius: 45px;
    border-width: 1.5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border-color: black;
    border-style: solid;
    padding-top: 1.5rem;
    padding-bottom: 1.3rem;
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    text-align: center;
    background-color: orange;
  }

  .inscription-form{
    padding: 2.5rem;
    padding-top: 0.2rem;
    margin-top: 4rem;
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
    background-color: orange;
    color: aliceblue;
    padding: 0.5rem;
    width: 80%;
    margin-left: 10%;
  }



  @media (prefers-color-scheme: dark) {
    

  #title-inscription{
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: white;
    border-radius: 45px;
    border-width: 1.5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border-color: white;
    border-style: solid;
    padding-top: 1.5rem;
    padding-bottom: 1.3rem;
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    text-align: center;
    background-color: orange;
  }

  .inscription-form{
    padding: 2.5rem;
    padding-top: 0.2rem;
    margin-top: 4rem;
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
}


</style>