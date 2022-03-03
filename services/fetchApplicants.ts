import { Applicant } from "../components/Content/types";
import applicants from "./applicants.json";

// function fetchData qui importe le json
export function fetchApplicants(): Promise<Applicant[]> {
  return new Promise((res) => {
    setTimeout(() => res(applicants), 1000);
  });
}