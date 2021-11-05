import { AnyAction } from "redux";
import { ACTIONS } from "../contants";

const defaultState = {
  basket: [],
};

export const basket = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.ADD_STICKER: {
      const updadetBasket = [...state.basket, action.newSticker];
      return { ...state, basket: updadetBasket };
    }

    default:
      return state;
  }
};
