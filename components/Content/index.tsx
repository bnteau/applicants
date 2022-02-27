import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { applicants } from '../../services/applicants';
import { ApplDrawer } from './ApplDrawer';
import { StyledContent } from './styles';

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
