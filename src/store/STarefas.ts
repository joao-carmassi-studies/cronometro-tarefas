import type ITarefa from "@/interfaces/ITarefa";
import apiProjetos from "@/service/baixaProjetos";
import { defineStore } from "pinia";

const URL_API = "tarefas";

export const storeTarefas = defineStore("tarefas", {
  state() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  actions: {
    async baixaTarefas() {
      await apiProjetos.get(URL_API).then((res) => {
        this.tarefas = res.data;
      });
    },
    async salvaTarefa(tarefa: ITarefa) {
      await apiProjetos.post(URL_API, tarefa);
    },
    async editaTarefa(tarefa: ITarefa) {
      await apiProjetos.put(`${URL_API}/${tarefa.id}`, tarefa);
    },
  },
});
