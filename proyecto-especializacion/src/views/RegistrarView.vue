<template>
  <div class="registrar">
    <Navbar />
    <Registrar />
  </div>
</template>

<script>
import Registrar from "@/components/RegistrarUsuario.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "RegistrarView",
  components: { Registrar, Navbar },
};
</script>
