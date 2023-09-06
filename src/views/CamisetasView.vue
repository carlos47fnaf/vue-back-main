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
    <input type="text" v-model="camiseta.titulo" placeholder="Nome" />
    <input type="text" v-model="camiseta.descrição" placeholder="Descrição" />
    <input type="number" v-model="camiseta.preço" />
    <button id="botao" @click="salvar">Salvar</button>
  </div>

  <ul style="list-style: none">
    <li v-for="camiseta in camisetas" :key="camiseta.id">
      <span @click="editar(camiseta)">
        <div class="sub">
          <div class="titulo">{{ camiseta.titulo }}</div>
          <div class="id">Id ({{ camiseta.id }})</div>
        </div>

        <div class="descricao">{{ camiseta.descricao }}</div>

        <div class="bot">
          <button @click="excluir(camiseta)">Apagar</button>
          <div class="preco">R${{ camiseta.preco }}</div>
        </div>
      </span>
    </li>
  </ul>
</template>

<style scoped>
li {
  border: outset 3px #fdf7f7;
  margin-bottom: 5px;
  background-color: white;
  padding: 5px;
  margin-left: -23px;
  margin-right: 1rem;
}

.form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ff5f0f;
  align-items: center;
  text-align: center;
  border: none;
  height: 3rem;
}
input {
  border: 1px solid #ff5f0f;
  height: 1.5rem;
  font-size: medium;
}
.sub {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  background-color: #ff5f0f;
  border: 2px groove #f35100;
  font-weight: bold;
  height: 25px;
  text-align: center;
  align-items: center;
}

.bot {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  color: #ff5f0f;
}
.titulo {
  margin-left: 5px;
}
.id {
  margin-right: 2px;
}
.descricao {
  margin-left: 2px;
}
.preco {
  margin-left: 2px;
}

button {
  border-radius: 0%;
  border: groove 3px #e24f06;
  color: white;
  font-weight: bold;
  background-color: #ff5f0f;
}

#botao {
  background-color: #fdf7f7;
  color: #ff5f0f;
  border: none;
  height: 1.5rem;
  margin-left: 5px;
}
</style>
