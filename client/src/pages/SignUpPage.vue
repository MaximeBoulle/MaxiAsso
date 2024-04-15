<script>
  import SignUpForm from "@/components/SignUpForm.vue";
  import SignUpInSwitch from "../components/SignUpInSwitch.vue";

  export default {
    components: {
      SignUpInSwitch,
      SignUpForm
    },
  }
</script>


<template>
  <main>
    <SignUpInSwitch/>
    <SignUpForm/>
  </main>
</template>

<style scoped>
    main{
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
</style>