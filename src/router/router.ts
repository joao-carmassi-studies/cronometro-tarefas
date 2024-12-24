import TabelaProjetos from "@/components/TabelaProjetos.vue";
import FormCriaProjetos from "@/views/FormCriaProjetos.vue";
import ProjetosMain from "@/views/ProjetosMain.vue";
import TarefasMain from "@/views/TarefasMain.vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    component: TarefasMain,
  },
  {
    path: "/projetos",
    component: ProjetosMain,
    children: [
      {
        path: "",
        component: TabelaProjetos,
      },
      {
        path: "novo-projeto",
        component: FormCriaProjetos,
      },
      {
        path: ":id",
        component: FormCriaProjetos,
        props: true,
      },
    ],
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
