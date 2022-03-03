export interface Applicant {
  firstname: string;
  lastname: string;
  email: string;
  job_title: string;
  monthly_salary: number;
  has_guarantor: boolean;
  preferred_move_in_date: string;
  rating?: number;
}

export interface ApplDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  applicant?: Applicant | null;
  currentRating: number | null;
}

export interface RatingProps {
  rating: number;
  applicant?: Applicant | null | undefined;
}

export interface Ratings {
  [key: string]: number;
}