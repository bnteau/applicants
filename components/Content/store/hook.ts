import { useContext } from "react";
import { Applicant, Ratings } from "../types";
import DrawerContext from "./context";

interface UseStoreReturns {
  applicants: Applicant[] | undefined;
  ratings: Ratings;
  selected: Applicant | null;
  currentRating: number | null;
  updateRating?: (rating:number) => void;
}

export function useStore():UseStoreReturns {
  const context = useContext(DrawerContext);
  console.log("CONTEXT", context);
  return context;
}

// importer contexte
// value exposée useContext(contexte importé)
// return value et utiliser useStore