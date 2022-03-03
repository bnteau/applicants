import { useContext } from "react";
import DrawerContext, { DrawerContextProps } from "./context";

export function useStore():DrawerContextProps {
  const context = useContext(DrawerContext);
  console.log("CONTEXT", context);
  return context;
}

// importer contexte
// value exposée useContext(contexte importé)
// return value et utiliser useStore 