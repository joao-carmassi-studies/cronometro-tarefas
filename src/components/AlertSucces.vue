<template>
  <div class="absolute bottom-5 right-5 flex flex-col gap-3 items-end">
    <div
      v-for="notificacao in SNotificacoes.notificacoes"
      :key="notificacao.name"
      role="alert"
      class="w-fit alert"
      :class="notificacao.type"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ notificacao.mensage }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { storeNotificacoes } from "@/store/SNotificacoes";

export default {
  data() {
    return {
      SNotificacoes: storeNotificacoes(),
    };
  },
};
</script>
