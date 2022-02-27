export interface Applicant {
  firstname: string;
  lastname: string;
  email: string;
  job_title: string;
  monthly_salary: number;
  has_guarantor: boolean;
  preferred_move_in_date: string;
}

export interface ApplDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RatingProps {
  handleMouseEnter: (e: any) => void;
  handleMouseLeave: () => void;
  handleClick: (e: any) => void;
  hovered: string;
  selected: string;
}