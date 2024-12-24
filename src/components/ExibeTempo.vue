<template>
  <p>{{ formataTempo }}</p>
</template>

<script lang="ts">
export default {
  props: {
    tempoEmSegundos: { type: Number, required: true },
  },
  computed: {
    formataTempo(): string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substring(11, 19);
    },
  },
};
</script>
