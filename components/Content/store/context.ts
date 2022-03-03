import { createContext } from "react";
import { Applicant, Ratings } from "../types";

interface DrawerContextProps {
  applicants: Applicant[] | undefined;
  ratings: Ratings;
  selected: Applicant | null;
  currentRating: number | null;
  updateRating?: (rating:number) => void;
}

const defaultValue = {
  applicants: [],
  ratings: {},
  selected: null,
  currentRating: null,
}

const DrawerContext = createContext<DrawerContextProps>(defaultValue);

export default DrawerContext;