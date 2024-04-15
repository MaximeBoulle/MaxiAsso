<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import TheFooter from '@/components/TheFooter.vue';
  import TheHeader from '@/components/TheHeader.vue';
  import SignInForm from '@/components/SignInForm.vue';
  import { computed, ref, watch } from 'vue';
  import { connected } from '@/components/SignInForm.vue';


  const nameAsso = ref(connected.valueOf ? 'Connexion' : 'Asso Maxi');


    window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    if (mobile_menu.classList.contains('is-active')) {
        menu_btn.classList.add('is-active');
    } else {
        menu_btn.classList.remove('is-active');
    }
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    }
    )
    };

// Mettre à jour nameAsso chaque fois que connected.value change
watch(connected, (newValue) => {
  console.log("Ca bouge !")
  nameAsso.value = newValue ? 'Asso Maxi' : 'Connected';
});

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
      <div class="nav-full-size">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/SignInPage">About us</RouterLink>
        <RouterLink to="/test">Contact</RouterLink>
      </div>
      <router-link to="/SignInPage" class="profile-asso" id="profile-asso-header">
        <div id="nom-asso"> {{ nameAsso }}</div>
        <img id="profil-logo" src="../assets/2815428.png" alt="profil-logo">
      </router-link>
    </div>
  </header>
  <nav class="mobile-nav">
    <router-link to="/SignInPage" class="profile-asso">
      <div id="nom-asso"> {{ nameAsso }}</div>
      <img id="profil-logo" src="../assets/2815428.png" alt="profil-logo">
    </router-link>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/books/add">About us</RouterLink>
    <RouterLink to="/test">Contact</RouterLink>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Actor, Helvetica, sans-serif;
}

header {
  z-index: 1000; 
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 235, 235);
}







.hamburger {
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

.hamburger .bar,
.hamburger:after,
.hamburger:before {
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
  transform: translate(0px, 11px) rotate(-45deg);
  background-color: orange;
}

.hamburger.is-active:after {
  transform: translate(0px, -11px) rotate(45deg);
  background-color: orange;
}

.hamburger.is-active .bar {
  opacity: 0;
}

.mobile-nav {
  position: fixed;
  top: 8.45rem;
  right: 100%;
  width: 100%;
  min-height: 100vh;
  display: block;
  z-index: 98;
  background-color: rgb(255, 235, 235);
  transition: 0.4s;
  

  a {
    display: block;
    width: 100%;
    max-width: 16rem;
    margin: 4vh auto 4vh  ;
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

  a:hover {
    background-color: rgb(249, 205, 205);
    transition: 0.4s;
  }


  .profile-asso {
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

  .profile-asso:hover {
    background-color: rgb(249, 205, 205);
    transition: 0.4s;
  }

  #profil-logo {
    width: 4rem;
    height: 4rem;
    position: fixed;
    margin-top: -3rem;
    margin-left: 5.5rem;
  }

  #nom-asso {
    padding-top: 0.6rem;
    white-space: nowrap; 

  }
}

.mobile-nav.is-active {
  right: 0;
}




.logo {
  font-size: 1.4rem;
  font-weight: 500;
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

  .unused-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.891);
    z-index: -1;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    transition: 0.5s;

  }

}


@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }

  .hamburger {
    display: none;
  }

  .container {
    padding: 2rem 3rem 1rem 7rem;
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
  }


  .profile-asso {
    display: flex;
    justify-content: right;
    width: fit-content;
    height: fit-content;
    max-width: 22rem;
    background-color: white;
    padding: 0.5rem;

    border-radius: 10px;
    color: rgba(0, 0, 0, 0.602);
    font-size: 1.4rem;
    font-style: none;
    text-decoration: none;
    margin-top: -0.5rem;
  }

  .profile-asso:hover {
    background-color: rgb(249, 205, 205);
    transition: 0.4s;
  }

  #profil-logo {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }

  #nom-asso {
    padding-top: 0.8rem;
    margin-left: 1rem;
    white-space: nowrap; 

  }

  .nav-full-size {
    display: flex;
    justify-content: space-between;
    max-width: 30rem;
    width: 100%;
    margin: auto;
    white-space: nowrap; 

    font-size: 1.2rem;

    a {
      color: #EDA10C;
      text-decoration: none;
      font-style: none;
      margin-right: 5%;
      margin-left: 5%;
      padding: 0.2rem;

    }

    a:hover {
      background-color: rgba(255, 255, 255, 0.907);
      transition: 0.4s;
      border-radius: 10px;
    }
  }

  

}

@media (max-width: 767px) {
  .container {
    padding-top: 5rem;
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

  #profile-asso-header {
    display: none;
    white-space: nowrap; 

  }

  .nav-full-size {
    display: none
    
  }
}

@media (prefers-color-scheme: dark) {
  template {
    background-color: black;
  }

  header {
    background-color: rgb(45, 43, 43);
  }

  .mobile-nav {
    background-color: rgb(45, 43, 43);

    a {
      background-color: rgb(45, 43, 43);
    }

    a:hover {
      background-color: rgba(255, 255, 255, 0.907);
      transition: 0.4s;
    }
  }

  .logo {
    background-color: #433c3c;
  }

 

  .mobile-nav {
    .profile-asso {
      background-color: white;
    }
  }
}
</style>