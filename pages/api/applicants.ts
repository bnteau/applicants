import applicants from "../../services/applicants.json";

export default function getApplicants(req:any, res:any) {
  res.status(200).json(applicants)
}