import api from "./api";

export default {
  createSession() {
    return api.get('http://localhost:8000/sanctum/csrf-cookie');
  },

  login(params) {
    return api.post('http://localhost:8000/api/login', params);
  },

  logout() {
    return api.delete('http://localhost:8000/api/logout');
  },

  postProduk(params) {
    return api.post(`http://localhost:8000/api/produk`, params);
  },

  getProduk() {
    return api.get('http://localhost:8000/api/produk');
  },

  getProdukId(id) {
    return api.get(`http://localhost:8000/api/produk/${id}`);
  },

  putProduk(id, params) {
    return api.post(`http://localhost:8000/api/produk-edit/${id}`, params);
  },

  deleteProduk(id) {
    return api.delete(`http://localhost:8000/api/produk/${id}`);
  },

};