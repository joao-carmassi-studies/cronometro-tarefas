<template>
  <main class="w-full flex flex-col gap-8 p-10 h-full">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { storeProjetos } from "@/store/SProjetos";

export default {
  data() {
    return {
      storeProjetos: storeProjetos(),
    };
  },
};
</script>
