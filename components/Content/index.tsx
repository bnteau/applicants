import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import React, { useState } from 'react';
import applicants from '../../services/applicants.json';
import { ApplDrawer } from './ApplDrawer';
import { StyledContent } from './styles';
import { Applicant, Ratings } from './types';

// useSWR qui fetch avec cette fonction en attendant l'api

export default function Content(): JSX.Element {
  const [selected, setSelected] = useState<Applicant | null>(null);
  const [ratings, setRatings] = useState<Ratings>({});

  const closeDrawer = () => setSelected(null);

  function handleUpdateRating(rating: number) {
    if (!selected) return;
    setRatings({ ...ratings, [selected.email]: rating });
  }

  const currentRating = selected ? ratings[selected.email] : null;

  return (
    <StyledContent>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Jobtitle</Th>
            <Th>Salary</Th>
            <Th>Garantor</Th>
            <Th>Move-in date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applicants.map((appl: Applicant) => (
            <Tr onClick={() => setSelected(appl)} key={appl.email}>
              <Td>{`${appl.firstname} ${appl.lastname}`}</Td>
              <Td>{appl.job_title}</Td>
              <Td>{appl.monthly_salary}€ / month</Td>
              <Td>{appl.has_guarantor ? 'Yes' : 'No'}</Td>
              <Td>{appl.preferred_move_in_date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ApplDrawer
        isOpen={!!selected}
        onClose={closeDrawer}
        applicant={selected}
        currentRating={currentRating}
        onUpdateRating={handleUpdateRating}
      />
    </StyledContent>
  );
}
