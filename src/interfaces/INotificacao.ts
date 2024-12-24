export enum tipoNotificao {
  SUCCESS = "alert-success",
  ERROR = "alert-error",
  ALERTA = "alert-warning",
}

export interface INotificacao {
  name: string;
  mensage: string;
  type: tipoNotificao;
}
