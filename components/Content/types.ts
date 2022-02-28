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
}

export interface RatingProps {
  // handleClick?: (e: any) => void;
  applicant?: Applicant | null | undefined;
  value: number;
  onSelect: (n: number) => void;
}