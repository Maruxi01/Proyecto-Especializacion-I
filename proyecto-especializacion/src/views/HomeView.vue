<template>
  <div class="home">
    <Navbar />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/IniciarSesion.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: { Login, Navbar },
};
</script>
