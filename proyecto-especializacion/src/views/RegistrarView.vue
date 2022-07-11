<template>
  <div class="registrar">
    <LoginBar />
    <Registrar />
  </div>
</template>

<script>
import Registrar from "@/components/RegistrarUsuario.vue";
import LoginBar from "@/components/LoginBar.vue";
export default {
  name: "RegistrarView",
  components: { Registrar, LoginBar },
};
</script>
