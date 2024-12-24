import type { IProjetos } from "./IProjetos";

export default interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  id: number;
  projeto: IProjetos;
}
