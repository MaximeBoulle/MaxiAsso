<script setup>
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('form-inscription').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var name = document.getElementById('name').value;
        var mail = document.getElementById('mail').value;
        var password = document.getElementById('password').value;
        var confirm_password = document.getElementById('confirm_password').value;

        console.log("Name : ", name);
        console.log("Mail : ", mail);
        console.log("Password : ", password);
      });

      // check if the password is twice the same
      function validatePassword() {
      if (password.value != confirm_password.value) {
        console.log("Don't match");
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        console.log("Match");
        confirm_password.setCustomValidity('');
      }
    }
      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;  
  });

  


</script>

<template>
  <div class="unused-background">
    <main>
      <div class="main-part">
        <div class="inscription-form">
          <form class="form-inscription" id="form-inscription">
            <div class="categorie-title">
              NOM DE L'ASSOCIATION <span style="color: red;">*</span>
            </div>
            <input placeholder="Entrer le nom de l'association" type="text" id="name" name="name" required><br>
            <div class="categorie-title">
              MAIL <span style="color: red;">*</span>
            </div>
            <input placeholder="Entrer votre Email" type="email" id="mail" name="mail" required><br>
            <div class="categorie-title">
              MOT DE PASSE <span style="color: red;">*</span>
              <div id="more-information">
              Doit contenir au moins 8 caractères dont une minuscule, une majuscule et un chiffre 
            </div>
            </div>
            
            <input placeholder="Entrer votre mot de passe" type="password" id="password" name="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"><br>
            <div class="categorie-title">
              CONFIRMER LE MOT DE PASSE <span style="color: red;">*</span>
            </div>
            <input placeholder="Confirmer votre mot de passe" type="password" id="confirm_password" name="password" required><br>
            <button type="submit" class="btn btn-white btn-animate" id="mon-bouton">S'inscrire </button>
          </form>
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

  #more-information{
    height: fit-content;
    color: #736D6D;
    font-size: 0.75rem;
    text-decoration: none;
    font-weight: normal;
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
    height: auto;
    min-height: 2rem;
    font-size:small;
    font-weight: 550;
    color: rgb(53, 53, 53);
    padding-top: 1rem;
    margin-left: -0.3rem;
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
    background-color: rgba(20, 250, 154, 0.61);
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
    button{
      color: white
    }
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
    min-height: 2rem;
    height: auto;
    font-size:small;
    font-weight: 550;
    color: rgb(53, 53, 53);
    padding-top: 1rem;
    margin-left: -0.3rem;
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
      color: white;
    }
  }

  .categorie-title{
    height: auto;
    min-height: 2rem;
    font-size:small;
    font-weight: 550;
    color: white;
    padding-top: 1rem;
    margin-left: -0.3rem;
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
  }
}


</style>