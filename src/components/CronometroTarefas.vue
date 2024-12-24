<template>
  <section
    class="h-20 w-full shadow-md bg-base-100 flex justify-between gap-7 items-center px-5"
  >
    <input
      class="input w-full focus:outline-primary duration-75 input-bordered"
      type="text"
      placeholder="Digite o nome da tarefa"
      v-model="descricao"
    />
    <select
      class="select select-bordered w-fit focus:outline-primary duration-75"
      v-model="selectProjetos"
    >
      <option disabled selected value="">Selecione o projeto</option>
      <option
        v-for="(projeto, index) in storeProjetos.projetos"
        :key="index"
        :value="projeto.nome"
      >
        {{ projeto.nome }}
      </option>
    </select>
    <div class="flex items-center gap-7">
      <ExibeTempo :tempoEmSegundos="tempoEmSegundos" />
      <button
        @click="iniciar"
        :disabled="cronometroRodando"
        class="btn rounded-md btn-success text-base-100"
      >
        Start
      </button>
      <button
        @click="parar"
        :disabled="!cronometroRodando"
        class="btn rounded-md btn-error text-base-100"
      >
        Stop
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { storeProjetos } from "@/store/SProjetos";
import ExibeTempo from "./ExibeTempo.vue";

export default {
  components: {
    ExibeTempo,
  },
  data() {
    return {
      selectProjetos: "",
      descricao: "",
      tempoEmSegundos: 0,
      temporizador: 0,
      cronometroRodando: false,
      storeProjetos: storeProjetos(),
    };
  },
  methods: {
    iniciar() {
      this.temporizador = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
      this.cronometroRodando = true;
    },
    parar() {
      clearInterval(this.temporizador);
      this.cronometroRodando = false;
      this.$emit("salvarTarefa", {
        duracaoEmSegundos: this.tempoEmSegundos,
        descricao: this.descricao,
        projeto: this.storeProjetos.projetos.find(
          (projeto) => projeto.nome === this.selectProjetos
        ),
      });
      this.tempoEmSegundos = 0;
      this.descricao = "";
      this.selectProjetos = "";
    },
  },
};
</script>
