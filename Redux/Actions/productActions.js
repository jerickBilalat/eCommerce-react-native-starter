import * as API from "../../Api";
import {
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
  QUERY_PRODUCTS_FAILED,
  QUERY_PRODUCTS_SUCCEEDED,
  QUERY_PRODUCTS_STARTED,
} from "./types";

export function queryProducts(
  skip = 0,
  limit = 3,
  filters = {},
  prevState = []
) {
  return (dispatch) => {
    dispatch(queryProductsStarted());

    return API.queryProducts({ skip, limit, filters })
      .then((res) => {
        const data = {
          articles: [...prevState, ...res.data],
          size: prevState.length + res.data.length,
        };
        return dispatch(queryProductsSucceeded(data));
      })
      .catch((err) => {
        // todo show error in ui
        return dispatch(queryProductsFailed(err.message));
      });
  };
}

function queryProductsSucceeded(data) {
  return {
    type: QUERY_PRODUCTS_SUCCEEDED,
    payload: {
      products: data.articles,
      size: data.size,
    },
  };
}

function queryProductsFailed(errorMessage) {
  return {
    type: QUERY_PRODUCTS_FAILED,
    payload: {
      errorMessage,
    },
  };
}

function queryProductsStarted() {
  return {
    type: QUERY_PRODUCTS_STARTED,
  };
}
