import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import React, { useState } from 'react';
import { applicants } from '../../services/applicants';
import { ApplDrawer } from './ApplDrawer';
import { StyledContent } from './styles';
import { Applicant } from './types';

export default function Content(): JSX.Element {
  const [selected, setSelected] = useState<Applicant | null>(null);

  const closeDrawer = () => setSelected(null);

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
          {applicants.map((appl) => (
            <>
              <Tr onClick={() => setSelected(appl)}>
                <Td>{`${appl.firstname} ${appl.lastname}`}</Td>
                <Td>{appl.job_title}</Td>
                <Td>{appl.monthly_salary}€ / month</Td>
                <Td>{appl.has_guarantor ? 'Yes' : 'No'}</Td>
                <Td>{appl.preferred_move_in_date}</Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
      <ApplDrawer
        isOpen={!!selected}
        onClose={closeDrawer}
        applicant={selected}
      />
    </StyledContent>
  );
}
