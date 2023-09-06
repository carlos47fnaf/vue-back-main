import axios from "axios";
export default class camisetasApi {
  async buscarTodasAsCamisetas() {
    const { data } = await axios.get("/camisetas/");
    return data;
  }

  async adicionarCamiseta(camiseta) {
    const { data } = await axios.post("/camisetas/", camiseta);
    return data;
  }

  async atualizarCamiseta(camiseta) {
    const { data } = await axios.put(`/camisetas/${camiseta.id}/`, camiseta);
    return data;
  }
  async excluirCamiseta(id) {
    const { data } = await axios.delete(`/camisetas/${id}/`);
    return data;
  }
}
