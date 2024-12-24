<template>
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Editando uma tarefa</h3>
      <p class="py-4">Decrição:</p>
      <input
        v-model="inputModal"
        type="text"
        class="input shadow-sm duration-75 focus:outline-primary input-bordered w-full"
      />
      <div class="modal-action">
        <form class="flex gap-3" method="dialog">
          <button
            class="btn border-2 hover:btn-error hover:text-base-100 border-error bg-base-100 text-error"
          >
            Cancelar
          </button>
          <button @click="editarTarefa" class="btn btn-primary text-base-100">
            Save
          </button>
        </form>
      </div>
    </div>
  </dialog>
  <section class="flex flex-col">
    <FormCronometro @salvarTarefa="salvarTarefas" />
    <div class="p-8">
      <ul v-if="STarefas.tarefas.length" class="flex flex-col gap-5">
        <li v-for="(tarefa, index) in STarefas.tarefas" :key="index">
          <ItemTarefa
            @tarefaDoModal="abreModalTarefa($event)"
            :tarefa="tarefa"
          />
        </li>
      </ul>
      <p v-else class="font-semibold tracking-wider">
        *Nehum tarefa adicionada a lista*
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import type ITarefa from "@/interfaces/ITarefa";
import FormCronometro from "./CronometroTarefas.vue";
import ItemTarefa from "./ItemTarefa.vue";
import { storeTarefas } from "@/store/STarefas";

export default {
  components: {
    FormCronometro,
    ItemTarefa,
  },
  data() {
    return {
      STarefas: storeTarefas(),
      inputModal: "",
      tarefaSelecionada: null as ITarefa | null,
    };
  },
  created() {
    this.STarefas.baixaTarefas();
  },
  methods: {
    abreModalTarefa(tarefaRecebida: ITarefa) {
      this.tarefaSelecionada = tarefaRecebida;
      this.inputModal = this.tarefaSelecionada.descricao;
    },
    async salvarTarefas(tarefa: ITarefa) {
      await this.STarefas.salvaTarefa(tarefa);
      this.STarefas.tarefas.push(tarefa);
    },
    async editarTarefa() {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada.descricao = this.inputModal;
        this.STarefas.editaTarefa(this.tarefaSelecionada);
      }
    },
  },
};
</script>
