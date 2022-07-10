<!-- eslint-disable  -->
<template>
<header>
    <nav class="navbar navbar-light light-grey">
  <div class="container-fluid">
    <a class="navbar-brand" style="color: white">Sesiones</a>
    <form class="d-flex">
      <input class="form-control me-2" type="user" placeholder="User" aria-label="User">
      <input class="form-control me-2" type="user" placeholder="Password" aria-label="Password"></input>
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
</header>
</template>

<script>
/* eslint-disable */
export default {
  name: "LoginBar",
};
</script>

<style>
.light-grey{
  background-color: #5383E8;
}
.btn-primary {
  background-color: #28344E !important;
}
</style>