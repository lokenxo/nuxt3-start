<template>
  <div>
    <h1>HELLO</h1>
    MY_ENV_VAR = {{$config.myEnvVar}}<br>
    MY_SECRET_ENV_VAR = {{$config.myOtherEnvVar}}

  </div>
</template>

<script>
export default {
  //https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
  mounted() {
    console.log(this.$config.myEnvVar);
    console.log(this.$config.myOtherEnvVar);
  },
  data() {
    return {

    }
  }
}
</script>
