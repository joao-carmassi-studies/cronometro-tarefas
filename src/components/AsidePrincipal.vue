<template>
  <section
    class="bg-primary py-8 px-6 flex flex-col gap-5 justify-center h-screen min-w-fit w-fit"
  >
    <button @click="trocaTema" class="btn btn-outline text-base-100">
      Ativa tema {{ palavraTema }}
    </button>
    <hr class="border-base-100" />
    <nav class="text-base-100 text-lg h-full w-full">
      <ul class="flex flex-col gap-3">
        <li>
          <RouterLink
            class="flex w-fit btn bg-transparent border-2 text-base-100 hover:bg-base-100 hover:text-primary border-base-100 duration-300 gap-1 items-center"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="1.75"
            >
              <path d="M5 3v18"></path>
              <path d="M19 21v-18"></path>
              <path d="M5 7h14"></path>
              <path d="M5 15h14"></path>
              <path d="M8 13v4"></path>
              <path d="M11 13v4"></path>
              <path d="M16 13v4"></path>
              <path d="M14 5v4"></path>
              <path d="M11 5v4"></path>
              <path d="M8 5v4"></path>
              <path d="M3 21h18"></path>
            </svg>
            Tarefas</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="flex w-fit btn bg-transparent border-2 text-base-100 hover:bg-base-100 hover:text-primary border-base-100 duration-300 items-center gap-1"
            to="/projetos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
              stroke-width="1.75"
            >
              <path
                d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
              ></path>
              <path d="M7 8h10"></path>
              <path d="M7 12h10"></path>
              <path d="M7 16h10"></path>
            </svg>
            Projetos
          </RouterLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      html: document.querySelector("html"),
      palavraTema: "escuro",
    };
  },
  methods: {
    trocaTema() {
      if (this.palavraTema === "escuro") {
        this.html?.setAttribute("data-theme", "dark");
        this.palavraTema = "claro";
      } else {
        this.html?.setAttribute("data-theme", "light");
        this.palavraTema = "escuro";
      }
    },
  },
};
</script>
