<template>
  <form @submit.prevent="salvaProjetos" class="flex gap-4 flex-col">
    <label for="inputProjetos" class="flex flex-col gap-1 font-semibold"
      >Nome do projeto:
      <input
        type="text"
        id="inputProjetos"
        class="input input-bordered outline-none duration-300 focus:outline-none focus:border-primary font-normal"
        v-model="inputProjetos"
      />
    </label>
    <button type="submit" class="btn w-fit btn-primary text-base-100">
      Salvar
    </button>
  </form>
</template>

<script lang="ts">
import { tipoNotificao } from "@/interfaces/INotificacao";
import { storeNotificacoes } from "@/store/SNotificacoes";
import { storeProjetos } from "@/store/SProjetos";

export default {
  data() {
    return {
      inputProjetos: "",
      SProjetos: storeProjetos(),
      SNotificacoes: storeNotificacoes(),
    };
  },
  mounted() {
    if (this.id) {
      const proj = this.SProjetos.projetos.find((proj) => proj.id === this.id);
      this.inputProjetos = proj?.nome || "";
    }
  },
  props: {
    id: String,
  },
  methods: {
    async salvaProjetos() {
      if (this.id) {
        try {
          await this.SProjetos.editaProjeto({
            nome: this.inputProjetos,
            id: this.id,
          });
          this.SNotificacoes.criaNotificacao(
            "Editado",
            `Projeto editado com sucesso!`,
            tipoNotificao.SUCCESS
          );
        } catch (error) {
          this.SNotificacoes.criaNotificacao(
            "Error",
            `Erro ao editar projeto! ${error}`,
            tipoNotificao.ERROR
          );
          throw new Error(`${error}`);
        }
      } else {
        try {
          await this.SProjetos.adicionaProjeto(this.inputProjetos);
          this.SNotificacoes.criaNotificacao(
            "Criado",
            `Projeto criado com sucesso!`,
            tipoNotificao.SUCCESS
          );
        } catch (error) {
          this.SNotificacoes.criaNotificacao(
            "Error",
            `Erro ao salvar projeto! ${error}`,
            tipoNotificao.ERROR
          );
          throw new Error(`${error}`);
        }
      }
      this.inputProjetos = "";
      this.$router.push("/projetos");
    },
  },
};
</script>
