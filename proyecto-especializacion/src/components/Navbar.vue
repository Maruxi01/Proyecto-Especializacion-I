<!-- eslint-disable  -->
<template>
  <nav class="navbar navbar-light light-grey">
    <div class="container-fluid">
      <a class="navbar-brand">Sesiones</a>
    <div class="d-flex" id="links">
        <router-link to="/registrar" id="registrar">Regístrate </router-link> |
        <router-link to="/" id="cerrar"> Cerrar Sesion</router-link>
    </div>
    </div>

  </nav>

</template>

<script>
/* eslint-disable */
export default {
  name: "navbar",
};
</script>

<style scoped>
.light-grey {
  background-color: #5383E8;
}

.btn-primary {
  background-color: #28344E !important;
}
a.navbar-brand {
  color: white;
}

#registrar{
  margin-right: 1vw; 
  color:white;
  text-decoration: none;
}
#cerrar{
  margin-left: 1vw;
  color:white;
  text-decoration: none;
}

</style>