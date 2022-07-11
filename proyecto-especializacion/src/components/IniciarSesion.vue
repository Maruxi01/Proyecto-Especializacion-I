<!-- eslint-disable  -->
<template>
  <div class="container">
    <div class="row justify-content-md-center" id="login">
      <div class="col-8 me-2" id="form-container">
        <div class="header">
          <h1>Iniciar Sesión</h1>
          <p>Completa tus datos para iniciar sesión</p>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label me-2">Username:</label>
          <input type="text" class="form-control me-2" id="exampleFormControlInput1" placeholder="Username">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label me-2">Password:</label>
          <input type="password" class="form-control me-2" placeholder="Password">
        </div>
        <div class="d-flex justify-content-center">
          <router-link to="/sesionesCompletadas" class="btn btn-primary me-2">Iniciar Sesion</router-link> 

        </div><br>
        <div class="d-flex justify-content-center" >
          <p>¿No tienes una cuenta?</p>
        </div>
        <div class="d-flex justify-content-center">
          <router-link to="/registrar" class="btn btn-link me-2">Regístrate</router-link> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "IniciarSesion",
  
};

</script>

<style scoped>
#login{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
#form-container{
  width: 500px;
  background-color:white ;
  padding: 3vw;
  border-radius:30px;

}
.header{
  text-align: center;
}

</style>
