<script setup>
  window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    if (mobile_menu.classList.contains('is-active')) {
      menu_btn.classList.add('is-active');
    } else {
      menu_btn.classList.remove('is-active');
    }

    menu_btn.addEventListener('click', function(){
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      }
    )
  }


</script>

<template>
  <header>
    <div class="container">
      <button class="hamburger is-active">
          <div class="bar"></div>
      </button>
      <div class="logo">
        <span class="orange">Maxi</span><span class="violet">Asso</span>
      </div>
    </div>
  </header>
  <nav class="mobile-nav">
    <div class="profile-asso">
      <div id="nom-asso">Efrei Chef</div>
      <img id="profil-logo" src="../assets/2815428.png" alt="profil-logo">
    </div>
    <RouterLink to="/">HomePage</RouterLink>
    <RouterLink to="/books/add">AddBookPages</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
  </nav>
  <div class="unused-background"></div>

</template>

<style scoped>
  *{
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Actor, Helvetica, sans-serif;
  }

  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 223, 223, 0.61);


    .container{
      padding-top: 4rem;
      padding-bottom: 32px;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      max-width: 1600px;
      margin: 0 auto;
      padding-left: 12px;
      padding-right: 12px;
    }
  }



  .hamburger{
    position: fixed;
    display: block;
    width: 40px;
    cursor: pointer;
    left: 10%;

    appearance: none;
    background: none;
    outline: none;
    border: none;
  }

  .hamburger .bar , .hamburger:after, .hamburger:before{
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    margin: 6px 0px;
    transition: 0.4s;
  }

  .hamburger:before {
  background-color: orange;
  border-radius: 15px;
}

.hamburger:after {
  background-color: #d06aff;
  border-radius: 15px;
}

  .hamburger .bar {
  background-color: #FFD600;
  border-radius: 15px;
}

.hamburger .bar::before {
  background-color: green;
}

.hamburger .bar::after {
  background-color: blue;
}

.hamburger.is-active:before {
  transform: translate(0px, 11px) rotate(-45deg) ;
  background-color: orange;
}

.hamburger.is-active:after {
  transform: translate(0px, -11px) rotate(45deg) ;
  background-color: orange;
}

  .hamburger.is-active .bar{
    opacity: 0;
  }

  .mobile-nav{
    position: fixed;
    top: 8.45rem;
    right: 100%;
    width: 100%;
    min-height: 100vh;
    display: block;
    z-index: 98;
    background-color: rgba(255, 223, 223, 0.61);
    transition: 0.4s;


    a{
      display: block;
      width: 100%;
      max-width: 16rem;
      margin: 4rem auto 4rem;
      text-align: center;
      padding: 12px, 16px;
      background-color: rgb(255, 255, 255);

      padding: 1rem;
      border-radius: 5px;
      color: orange;
      font-size: 1.6rem;
      font-style: none;
      text-decoration: none;
    }

    a:hover{
      background-color: rgb(249, 205, 205);
      transition: 0.4s;
    }


    .profile-asso{
      justify-content: center;
      text-align: center;
      width: 100%;
      max-width: 22rem;
      height: 5rem;
      margin: 4rem auto 4rem;
      text-align: center;
      padding: 12px, 16px;
      background-color: rgba(208, 106, 255, 0.21);

      padding: 1rem;
      border-radius: 15px;
      color: rgba(0, 0, 0, 0.602);
      font-size: 1.6rem;
      font-style: none;
      text-decoration: none;
      margin-bottom: 6rem;
    }

    .profile-asso:hover{
      background-color: rgb(249, 205, 205);
      transition: 0.4s;
    }

    #profil-logo{
      width: 4rem;
      height: 4rem;
      position: fixed;
      margin-top: -3rem;
      margin-left: 5.5rem;
    }

    #nom-asso{
      padding-top: 0.6rem;
    }
  }

  .mobile-nav.is-active{
    right: 0;
  }


  @media (min-width: 768px){
    .mobile-nav{
      display: none;
    }
    .hamburger{
      display: none;
    }

  }

  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  .logo{
    font-size: 1.4rem;
    font-weight : 500;
    text-align: center;
    background-color: white;
    color: orange;
    font-family: "Merriweather Sans", sans-serif;
    border-radius: 2rem;
    padding: 1.2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 80%;

    .orange {
      color: #EDA10C;
    }

    .violet {
      color: #AD00FF;
    }
  }

  

  

  @media (prefers-color-scheme: dark) {
  /* Styles pour le mode sombre */

  
  template {
    background-color: black;
  }
  header {
    background-color: rgba(71, 68, 68, 0.61); 
  }

  .mobile-nav{
    background-color: rgba(71, 68, 68, 0.581);
    a{
      background-color: rgba(71, 68, 68, 0.61);

    }

    a:hover{
      background-color: rgba(255, 255, 255, 0.907);
      transition: 0.4s;
    }
  }

  .logo{
    background-color: #433c3c;
  }
  .unused-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1; /* Assurez-vous que la div est en arrière-plan */
  }

  .mobile-nav {.profile-asso{
    background-color: white;
  }
}

  

}


</style>