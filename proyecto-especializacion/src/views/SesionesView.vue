<template>
  <div class="sesiones">
    <Navbar />
    <Sesiones />
  </div>
</template>

<script>
import Sesiones from "@/components/SesionesCompletadas.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "SesionesCompletadas",
  components: { Sesiones, Navbar },
};
</script>
