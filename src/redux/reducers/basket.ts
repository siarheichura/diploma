import { AnyAction } from "redux";
import { ACTIONS } from "../contants";

const defaultState = {
  basket: [],
};

export const basket = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.ADD_STICKER: {
      const updatedBasket = [...state.basket, action.newSticker];
      return { ...state, basket: updatedBasket };
    }
    case ACTIONS.DELETE_STICKER: {
      const updatedBasket = state.basket.filter(
        (item: any) => item.id !== action.id
      );
      return { ...state, basket: updatedBasket };
    }

    default:
      return state;
  }
};
