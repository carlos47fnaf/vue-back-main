<script>
import MoletonsApi from "@/api/moletom";
const moletonsApi = new MoletonsApi();
export default {
  data() {
    return {
      moletons: [],
      moletom: {},
    };
  },
  async created() {
    this.moletons = await moletonsApi.buscarTodasOsMoletons();
  },
  methods: {
    async salvar() {
      if (this.moletom.id) {
        await moletonsApi.atualizarMoletom(this.moletom);
      } else {
        await moletonsApi.adicionarMoletom(this.moletom);
      }
      this.moletom = {};
      this.moletons = await moletonsApi.buscarTodasOsMoletons();
    },
    editar(moletom) {
      Object.assign(this.moletom, moletom);
    },
    async excluir(moletom) {
      await moletonsApi.excluirCamiseta(moletom.id);
      this.moletons = await moletonsApi.buscarTodasOsMoletons();
    },
  },
};
</script>

<template>
  <div class="tit">
    <h1 class="titulos">Moletons</h1>
  </div>
  <div class="form">
    <input type="text" v-model="moletom.titulo" placeholder="Nome" />
    <input type="text" v-model="moletom.descrição" placeholder="Descrição" />
    <input type="number" v-model="moletom.preço" />
    <button id="botao" @click="salvar">Salvar</button>
  </div>

  <ul style="list-style: none">
    <li v-for="moletom in moletons" :key="moletom.id">
      <span @click="editar(moletom)">
        <div class="sub">
          <div class="titulo">{{ moletom.titulo }}</div>
          <div class="id">Id ({{ moletom.id }})</div>
        </div>

        <div class="descricao">{{ moletom.descricao }}</div>
        <div class="bot">
          <button @click="excluir(moletom)">Apagar</button>
          <div class="preco">R${{ moletom.preco }}</div>
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
