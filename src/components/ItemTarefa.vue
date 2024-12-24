<template>
  <div
    onclick="my_modal_5.showModal()"
    @click="abreModal(tarefa)"
    class="font-semibold cursor-pointer bg-base-100 flex gap justify-between h-16 shadow-md outline-2 outline outline-primary rounded-lg px-7 items-center"
  >
    <p class="capitalize px-2 break-words w-1/3">
      {{ tarefa?.descricao || "Tarefa sem descrição" }}
    </p>
    <p class="w-1/3 px-2 break-words">{{ tarefa.projeto?.nome || "N/D" }}</p>
    <ExibeTempo
      class="w-1/3 px-2"
      :tempoEmSegundos="tarefa?.duracaoEmSegundos"
    />
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import ExibeTempo from "./ExibeTempo.vue";
import type ITarefa from "@/interfaces/ITarefa";

export default {
  components: { ExibeTempo },
  props: {
    tarefa: { type: Object as PropType<ITarefa>, required: true },
  },
  methods: {
    abreModal(tarefa: ITarefa) {
      this.$emit("tarefaDoModal", tarefa);
    },
  },
  emits: ["tarefaDoModal"],
};
</script>
