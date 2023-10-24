import axios from "axios";
export default class moletonsApi {
  async buscarTodasOsMoletons() {
    const { data } = await axios.get("/moletons/");
    return data;
  }

  async adicionarMoletom(moletom) {
    const { data } = await axios.post("/moletons/", moletom);
    return data;
  }

  async atualizarMoletom(moletom) {
    const { data } = await axios.put(`/moletons/${moletom.id}/`, moletom);
    return data;
  }
  async excluirMoletom(id) {
    const { data } = await axios.delete(`/moletons/${id}/`);
    return data;
  }
}
