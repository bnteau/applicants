import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { ApplDrawer } from './ApplDrawer';
import { useStore } from './store/hook';
import { StyledContent } from './styles';
import { Applicant } from './types';

export default function Content(): JSX.Element {
  const { applicants, selectApplicant } = useStore();

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
          {applicants?.map((appl: Applicant) => (
            <Tr onClick={() => selectApplicant(appl)} key={appl.email}>
              <Td>{`${appl.firstname} ${appl.lastname}`}</Td>
              <Td>{appl.job_title}</Td>
              <Td>{appl.monthly_salary}€ / month</Td>
              <Td>{appl.has_guarantor ? 'Yes' : 'No'}</Td>
              <Td>{appl.preferred_move_in_date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ApplDrawer />
    </StyledContent>
  );
}
