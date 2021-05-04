import {
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
  QUERY_PRODUCTS_FAILED,
  QUERY_PRODUCTS_SUCCEEDED,
  QUERY_PRODUCTS_STARTED,
  FLASH_MESSAGE,
} from "../Actions/types";

const initialState = {
  toShop: [],
  prodDetail: null,
  isLoading: false,
  toShopSize: 0,
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case QUERY_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case QUERY_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        toShop: action.payload.products,
        toShopSize: action.payload.size,
        isLoading: false,
      };
    case QUERY_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload };
    case GET_PRODUCTS_TO_SHOP:
      return {
        ...state,
        toShop: action.payload.articles,
        toShopSize: action.payload.size,
      };
    case ADD_PRODUCT:
      return { ...state, addProduct: action.payload };
    case CLEAR_PRODUCT:
      return { ...state, addProduct: action.payload };
    case GET_PRODUCT_DETAIL:
      return { ...state, prodDetail: action.payload };
    case CLEAR_PRODUCT_DETAIL:
      return { ...state, prodDetail: action.payload };
    default:
      return state;
  }
}
