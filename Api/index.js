import axios from "axios";

const API_BASE_URL = "https://tcrec-api.herokuapp.com";

const client = axios.create({
  baseURL: API_BASE_URL,
});

function queryProducts(queryStatements) {
  return client.post("api/products", queryStatements);
}

function queryProductById(id) {
  return client.get(`api/products/${id}`);
}

function queryMultipleProductsByIds(ids) {
  return client.get(`api/products/by_ids?ids=${ids}`);
}

export { queryProducts, queryMultipleProductsByIds, queryProductById };
