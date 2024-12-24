import type { IProjetos } from "@/interfaces/IProjetos";
import apiProjetos from "@/service/baixaProjetos";
import { defineStore } from "pinia";
import { storeNotificacoes } from "./SNotificacoes";

export const storeProjetos = defineStore("projetos", {
  state: () => {
    return {
      projetos: [] as IProjetos[],
      SNotificacoes: storeNotificacoes(),
    };
  },
  actions: {
    async adicionaProjeto(nome: string) {
      await apiProjetos.post("projetos", {
        nome,
        id: `${Date.now()}`,
      });
    },
    async editaProjeto(proj: IProjetos) {
      await apiProjetos.put(`projetos/${proj.id}`, proj);
    },
    async excluirProjeto(id: string) {
      await apiProjetos.delete(`projetos/${id}`).then((res) => {
        if (res.statusText === "OK") {
          this.projetos = this.projetos.filter((proj) => proj.id != id);
        }
      });
    },
    async baixaProjetos() {
      this.projetos = await apiProjetos.get("projetos").then((res) => {
        return res.data;
      });
    },
  },
});
