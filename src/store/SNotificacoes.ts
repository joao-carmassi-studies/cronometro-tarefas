import { tipoNotificao, type INotificacao } from "@/interfaces/INotificacao";
import { defineStore } from "pinia";

export const storeNotificacoes = defineStore("notificacao", {
  state() {
    return {
      notificacoes: [] as INotificacao[],
    };
  },
  actions: {
    criaNotificacao(name: string, mensage: string, type: tipoNotificao) {
      const item = {
        name,
        mensage,
        type,
      } as INotificacao;
      this.notificacoes.push(item);
      setTimeout(() => {
        this.notificacoes.shift();
      }, 5000);
    },
  },
});
