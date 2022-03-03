import React, { useState } from 'react';
import { Applicant, Ratings } from '../types';
import DrawerContext from './context';
import { fetchApplicants } from '../../../services/fetchApplicants';
import useSWR from 'swr';

interface Provider {
  children: any;
}

const StoreProvider: React.FC<Provider> = ({ children }) => {
  const [selected, setSelected] = useState<Applicant | null>(null);
  const [ratings, setRatings] = useState<Ratings>({});
  const { data: applicants } = useSWR<Applicant[]>(
    '/applicants',
    fetchApplicants,
    {
      fallbackData: [],
    }
  );

  function selectApplicant(applicant: Applicant): void {
    setSelected(applicant);
  }

  function deselectApplicant() {
    setSelected(null);
  }

  function updateRatingByEmail(email: string, rating: number): void {
    if (!rating || !email) {
      console.warn('no email or rating');
      return;
    }
    setRatings({ ...ratings, [email]: rating });
  }

  function updateRating(rating: number): void {
    if (!selected) return;
    updateRatingByEmail(selected.email, rating);
  }

  const currentRating = selected ? ratings[selected.email] : null;

  const value = {
    applicants,
    ratings,
    selected,
    currentRating,
    updateRating,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default StoreProvider;
