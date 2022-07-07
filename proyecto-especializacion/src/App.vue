<!-- eslint-disable  -->
<template>
  <div id="app">
    <SesionesCompletadas />
   
  </div>
</template>

<script>
/* eslint-disable */
import SesionesCompletadas from "./components/SesionesCompletadas.vue";
import IniciarSesion from "./components/IniciarSesion.vue";
import RegistrarUsuario from "./components/RegistrarUsuario.vue";
import VerSesion from "./components/VerSesion.vue";

export default {
  name: "App",
  components: {
    SesionesCompletadas,
    IniciarSesion,
    RegistrarUsuario,
    VerSesion
  },
};
</script>

<style></style>
