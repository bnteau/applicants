import { useContext } from "react";
import DrawerContext, { DrawerContextProps } from "./context";

export function useStore():DrawerContextProps {
  const context = useContext(DrawerContext);
  return context;
}