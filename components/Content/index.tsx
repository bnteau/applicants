import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { applicants } from '../../services/applicants';
import { ApplDrawer } from './ApplDrawer';

const StyledContent = styled.div`
  width: 80%;
  margin: 2em auto;

  & table tbody tr {
    cursor: pointer;
    &:hover {
      background-color: #e7ded9;
    }
  }
`;

// interface Applicant {
//   firstname: string;
//   lastname: string;
//   email: string;
//   job_title: string;
//   monthly_salary: number;
//   has_guarantor: boolean;
//   preferred_move_in_date: string;
// }

export interface ApplDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StyledDrawerBody = styled.div`
  .item {
    padding: 10px 0;
  }

  .email {
    text-decoration: underline;
    color: blue;
  }

  .subtitle {
    font-weight: bold;
  }

  .stars svg {
    cursor: pointer;
    margin-right: 5px;
  }
`;

export default function Content(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Tr onClick={onOpen}>
                <Td>{`${appl.firstname} ${appl.lastname}`}</Td>
                <Td>{appl.job_title}</Td>
                <Td>{appl.monthly_salary}€ / month</Td>
                <Td>{appl.has_guarantor ? 'Yes' : 'No'}</Td>
                <Td>{appl.preferred_move_in_date}</Td>
              </Tr>
              <ApplDrawer isOpen={isOpen} onClose={onClose} />
            </>
          ))}
        </Tbody>
      </Table>
    </StyledContent>
  );
}
