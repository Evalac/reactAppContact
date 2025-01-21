import axios from 'axios';

axios.defaults.baseURL = 'https://678e5cfea64c82aeb1201d5c.mockapi.io';

async function addMaterials(values) {
  const resp = await axios.post('/materials', values);
  return resp.data;
}

async function getMaterials() {
  const resp = await axios.get('/materials');
  return resp.data;
}

async function deleteMaterials(id) {
  const resp = await axios.delete(`/materials/${id}`);
  return resp.data;
}

async function updateMaterials(fields) {
  const resp = await axios.put(`materials/${fields.id}`, fields);
  return resp.data;
}

export { addMaterials, getMaterials, deleteMaterials, updateMaterials };
