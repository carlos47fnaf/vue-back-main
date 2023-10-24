<script>
import EstampasApi from "@/api/estampa";
const estampasApi = new EstampasApi();
export default {
  data() {
    return {
      estampas: [],
      estampa: {},
    };
  },
  async created() {
    this.estampas = await estampasApi.buscarTodasAsEstampas();
  },
  methods: {
    async salvar() {
      if (this.estampa.id) {
        await estampasApi.atualizarEstampa(this.estampa);
      } else {
        await estampasApi.adicionarEstampa(this.estampa);
      }
      this.estampa = {};
      this.estampas = await estampasApi.buscarTodasAsEstampas();
    },
    editar(estampa) {
      Object.assign(this.estampa, estampa);
    },
    async excluir(estampa) {
      await estampasApi.excluirEstampa(estampa.id);
      this.estampas = await estampasApi.buscarTodasAsEstampas();
    },
  },
};
</script>

<template>
  <div class="tit">
    <h1 class="titulos">Estampas</h1>
  </div>
  <div class="form">
    <input type="text" v-model="estampa.titulo" placeholder="Nome" />
    <input type="text" v-model="estampa.descrição" placeholder="Descrição" />
    <input type="number" v-model="estampa.preço" />
    <button id="botao" @click="salvar">Salvar</button>
  </div>

  <ul style="list-style: none">
    <li v-for="estampa in estampas" :key="estampa.id">
      <span @click="editar(estampa)">
        <div class="sub">
          <div class="titulo">{{ estampa.titulo }}</div>
          <div class="id">Id ({{ estampa.id }})</div>
        </div>

        <div class="descricao">{{ estampa.descricao }}</div>
        <div class="bot">
          <button @click="excluir(estampa)">Apagar</button>
          <div class="preco">R${{ estampa.preco }}</div>
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
