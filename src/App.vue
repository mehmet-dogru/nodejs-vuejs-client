<template>
  <div>
    <AppNavbar />
    <router-view />
  </div>
</template>
<script>
import AppNavbar from "./components/appNavbar.vue";
export default {
  components: { AppNavbar },
};
</script>
