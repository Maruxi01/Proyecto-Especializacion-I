<!-- eslint-disable  -->
<template>
  <div id="app">
    <LoginBar/>
    <SesionesCompletadas />
   
  </div>
</template>

<script>
/* eslint-disable */
import SesionesCompletadas from "./components/SesionesCompletadas.vue";
import IniciarSesion from "./components/IniciarSesion.vue";
import RegistrarUsuario from "./components/RegistrarUsuario.vue";
import VerSesion from "./components/VerSesion.vue";
import LoginBar from "./components/LoginBar.vue";

export default {
  name: "App",
  components: {
    SesionesCompletadas,
    IniciarSesion,
    RegistrarUsuario,
    VerSesion,
    LoginBar
  },
};
</script>

<style></style>
