<!-- eslint-disable  -->
<template>
  <div class="container">
    <div class="row justify-content-md-center" id="login">
      <div class="col-8" id="form-container">
        <div class="header">
          <h1>Iniciar Sesión</h1>
          <p>Completa tus datos para iniciar sesión</p>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Username:</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="username">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Password:</label>
          <input type="password" class="form-control" >
        </div>
        <div class="d-flex justify-content-center">
          <input class="btn btn-primary" type="submit" value="Iniciar Sesión">
        </div><br>
        <div class="d-flex justify-content-center" >
          <p>¿No tienes una cuenta?</p>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-link ">Regístrate</button>
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
}
.header{
  text-align: center;
}

</style>
