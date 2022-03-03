import { createContext } from "react";
import { Applicant, Ratings } from "../types";

export interface DrawerContextProps {
  applicants: Applicant[];
  ratings: Ratings;
  selected: Applicant | null;
  currentRating: number;
  updateRating: (rating:number) => void;
  selectApplicant: (applicant:Applicant) => void;
  deselectApplicant: () => void;
}

const defaultValue:DrawerContextProps = {
  applicants: [],
  ratings: {},
  selected: null,
  currentRating: 0,
  selectApplicant: () => null,
  deselectApplicant: () => null,
  updateRating: () => null,
}

const DrawerContext = createContext<DrawerContextProps>(defaultValue);

export default DrawerContext;