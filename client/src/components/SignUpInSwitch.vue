<script>
</script>

<template>
    <main>
        <div class="content-nav-connexion">
            <div class="connexion-nav">
                <div class="title-inscription" id="connexion">Connexion</div>
                <RouterLink class="title-inscription" id="inscription" to="/SignInPage">Inscription</RouterLink>
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

 #inscription{
    transition: 0.4s;
    box-shadow: none;
    background-color: #d06aff;;
    font-style: none;
  } 

.content-nav-connexion{
    display: flex;
    justify-content: center;
  }
.connexion-nav{
    width: 40rem;
    display: flex;
    justify-content: center;
  }

.title-inscription{
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 1rem;
    color: white;
    border-radius: 45px;
    border-width: 1.5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border-color: black;
    border-style: solid;
    padding-top: 1rem;
    padding-bottom: 0.8rem;
    padding-right: 2rem;
    padding-left: 2rem;
    text-align: center;
    background-color: rgb(255, 166, 0);
    width: fit-content;
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