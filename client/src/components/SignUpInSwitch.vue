<script>
</script>

<template>
    <main>
        <div class="content-nav-connexion">
            <div class="connexion-nav">
                <RouterLink class="btn btn-white btn-animate title-inscription" id="connexion" to="/SignInPage">Connexion</RouterLink>
                <RouterLink class="btn btn-white btn-animate title-inscription" id="inscription" to="/SignUpPage">Inscription</RouterLink>
            </div>
        </div>
    </main>
</template>


<style scoped>

main{
    text-align: center;
    display: flex;
    justify-content: center;
  }

 

.content-nav-connexion{
    display: flex;
    justify-content: center;
  }
.connexion-nav{
    width: 70vh;
    display: flex;
    justify-content: center;
  }

.title-inscription{
    font-style: none;
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 3rem;
    color: white;
    border-radius: 45px;
    border-width: 1.5px;
    border-color: black;
    border-style: solid;
    background-color: rgb(255, 166, 0);
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


#inscription{
    background-color: #d06aff;
} 



@media (prefers-color-scheme: dark) {


.title-inscription{
    color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border-color: white;
}
}


@media (min-width: 768px) {
  main{
    display: flex;
    justify-content: center;
  }

  .title-inscription{
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: white;
    border-radius: 45px;
    border-width: 1.5px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.5);
    border-color: black;
    border-style: solid;
    padding-top: 1.5rem;
    padding-bottom: 1.3rem;
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    text-align: center;
    background-color: orange;
    width: fit-content;
  }
}

</style>