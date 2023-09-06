<script>
import CamisetasApi from "@/api/camiseta";
const camisetasApi = new CamisetasApi();
export default {
  data() {
    return {
      camisetas: [],
      camiseta: {},
    };
  },
  async created() {
    this.camisetas = await camisetasApi.buscarTodasAsCamisetas();
  },
  methods: {
    async salvar() {
      if (this.camiseta.id) {
        await camisetasApi.atualizarCamiseta(this.camiseta);
      } else {
        await camisetasApi.adicionarCamiseta(this.camiseta);
      }
      this.camiseta = {};
      this.camisetas = await camisetasApi.buscarTodasAsCamisetas();
    },
    editar(camiseta) {
      Object.assign(this.camiseta, camiseta);
    },
    async excluir(camiseta) {
      await camisetasApi.excluirCamiseta(camiseta.id);
      this.camisetas = await camisetasApi.buscarTodasAsCamisetas();
    },
  },
};
</script>

<template>
  <div class="tit">
  <h1 class="titulos">Camisetas</h1>
  </div>
  <div class="form">
    <input type="text" v-model="camiseta.nome" placeholder="Nome" />
    <input type="text" v-model="camiseta.descrição" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <ul>
    <li v-for="camiseta in camisetas" :key="camiseta.id">
      <span @click="editar(camiseta)">
        ({{ camiseta.id }}) | {{ camiseta.titulo }} | {{ camiseta.descricao }} |
        {{ camiseta.preco }}
      </span>
      <button @click="excluir(camiseta)">X</button>
    </li>
  </ul>
</template>

<style>
li {
  border: solid 3px white;
  margin-bottom: 1px;
}

.form{
  background-color: #ff5f0f;
  align-items: center;
 text-align: center;
}
 input{
  border-radius: 5px ;
  border: none;
 }
</style>
