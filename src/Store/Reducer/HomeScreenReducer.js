import { SELECTEDSECTION } from "../ActionType";

const initialState = {
  SelectedSection: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTEDSECTION:
      return {
        ...state,
        SelectedSection: action.SelectedSection,
      };

    default:
      return state;
  }
};
