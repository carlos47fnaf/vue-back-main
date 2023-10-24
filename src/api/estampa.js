import axios from "axios";
export default class estampasApi {
  async buscarTodasAsEstampas() {
    const { data } = await axios.get("/estampas/");
    return data;
  }

  async adicionarEstampa(estampa) {
    const { data } = await axios.post("/estampas/", estampa);
    return data;
  }

  async atualizarEstampa(estampa) {
    const { data } = await axios.put(`/estampas/${estampa.id}/`, estampa);
    return data;
  }
  async excluirEstampa(id) {
    const { data } = await axios.delete(`/estampas/${id}/`);
    return data;
  }
}
