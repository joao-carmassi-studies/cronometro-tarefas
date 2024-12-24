<template>
  <h1 class="text-2xl text-primary">Projetos:</h1>
  <RouterLink
    to="/projetos/novo-projeto"
    class="btn w-fit btn-primary text-base-100"
    >Novo projeto +</RouterLink
  >
  <div class="overflow-auto max-h-full">
    <table v-if="SProjetos.projetos.length" class="w-full tracking-wider">
      <thead>
        <tr>
          <th class="text-start py-1">Nome:</th>
          <th class="text-start py-1">ID:</th>
          <th class="text-start py-1">Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-t border-gray-500"
          v-for="projeto in SProjetos.projetos"
          :key="projeto.id"
        >
          <td class="py-3">{{ projeto.nome || "Projeto sem nome" }}</td>
          <td class="py-3">{{ projeto.id }}</td>
          <td class="py-3 flex gap-2">
            <RouterLink
              :to="`/projetos/${projeto.id}`"
              class="btn btn-outline min-h-0 h-fit py-2"
              >Editar</RouterLink
            >
            <button
              @click="excluir(projeto.id)"
              class="btn btn-error text-base-100 min-h-0 h-fit py-2"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="font-semibold tracking-wider">
      *Nehum projeto adicionado a lista*
    </p>
  </div>
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
  created() {
    this.SProjetos.baixaProjetos();
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
    async excluir(id: string) {
      try {
        await this.SProjetos.excluirProjeto(id);
        this.SNotificacoes.criaNotificacao(
          "Apagado",
          "Projeto apagado com sucesso!",
          tipoNotificao.SUCCESS
        );
      } catch (error) {
        this.SNotificacoes.criaNotificacao(
          "Erro",
          "Erro ao apagar projeto!",
          tipoNotificao.ERROR
        );
        throw new Error(`${error}`);
      }
    },
  },
};
</script>
