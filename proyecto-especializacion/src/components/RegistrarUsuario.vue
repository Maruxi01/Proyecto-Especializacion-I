<!-- eslint-disable  -->
<template>
  <div>
    <div class="container-md justify-content-center">
      <div class="row justify-content-center" id="register">
        <div class="col-6" id="form-container">
          <div id="header">
            <br />
            <h1>Registro de usuario</h1>
            <hr />
          </div>
          <form class="formulario">
            <div class="col mb-3">
              <labe class="form-label">Username:</labe>
              <input type="text" class="form-control" placeholder="username" />
            </div>
            <div class="col mb-3">
              <labe class="form-label">Clave:</labe>
              <input type="text" class="form-control" placeholder="clave" />
            </div>
            <div class="col mb-3">
              <labe class="form-label">Repetir clave:</labe>
              <input type="text" class="form-control" placeholder="repetir clave" />
            </div>
            <div class="d-flex justify-content-center ">
              <input class="btn btn-primary" type="submit" value="Registrarse">
            </div>
          </form><br/>
           <div class="d-flex justify-content-center" >
          <p>¿Ya tienes una cuenta?</p>
        </div>
        <div class="d-flex justify-content-center">
          <router-link to="/" class="btn btn-link me-2">Inicia Sesion</router-link> 
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "RegistrarUsuario",
  data() {
    return {
      usuario: {
        idUsuario: "",
        username: "",
        clave: "",
        sessions: {
        },
      },
    };
  },
};
</script>

<style scoped>
#register {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}
#form-container {
  width: 500px;
  background-color: white;
  padding: 3vw;
  border-radius:30px;
}
</style>
