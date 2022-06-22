import { SELECTEDSECTION } from "../ActionType";

export const setSelectedSection = (SelectedSection) => {
  return {
    type: SELECTEDSECTION,
    SelectedSection: SelectedSection,
  };
};
