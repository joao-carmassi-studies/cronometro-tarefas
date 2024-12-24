<template>
  <div class="flex">
    <AsidePrincipal />
    <RouterView class="h-screen" />
  </div>
  <AlertSucces />
</template>

<script lang="ts">
import AlertSucces from "./components/AlertSucces.vue";
import AsidePrincipal from "./components/AsidePrincipal.vue";

export default {
  components: {
    AsidePrincipal,
    AlertSucces,
  },
};
</script>
