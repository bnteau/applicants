import React, { useState } from 'react';
import { Applicant, Ratings } from '../types';
import DrawerContext, { DrawerContextProps } from './context';
import useSWR from 'swr';
import axios from 'axios';

interface Provider {
  children: any;
}

function fetcher() {
  return axios.get('/api/applicants').then((res) => res.data);
}

const StoreProvider: React.FC<Provider> = ({ children }) => {
  const [selected, setSelected] = useState<Applicant | null>(null);
  const [ratings, setRatings] = useState<Ratings>({});
  const { data: applicants } = useSWR<Applicant[]>('/applicants', fetcher, {
    fallbackData: [],
  });

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

  function updateRating(rating: number): void | undefined {
    if (!selected) return;
    updateRatingByEmail(selected.email, rating);
  }

  const currentRating = selected ? ratings[selected.email] : 0;

  const value: DrawerContextProps = {
    applicants: applicants as Applicant[],
    ratings,
    selected,
    currentRating,
    updateRating,
    selectApplicant,
    deselectApplicant,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default StoreProvider;
