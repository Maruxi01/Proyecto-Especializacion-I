<template>
  <div class="sesiones">
    <LoginBar />
    <Sesiones />
  </div>
</template>

<script>
import LoginBar from "@/components/LoginBar.vue";
import Sesiones from "@/components/SesionesCompletadas.vue";

export default {
  name: "SesionesCompletadas",
  components: { LoginBar, Sesiones },
};
</script>
