<template>
  <div class="home">
    <LoginBar />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/IniciarSesion.vue";
import LoginBar from "@/components/LoginBar.vue";

export default {
  name: "HomeView",
  components: { Login, LoginBar },
};
</script>
