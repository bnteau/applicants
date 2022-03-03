import {
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Rating from './Rating';
import { useStore } from './store/hook';
import { StyledDrawerBody } from './styles';

export function ApplDrawer(): JSX.Element {
  const { deselectApplicant, selected: applicant } = useStore();

  const items = [
    { subtitle: 'Job title', value: applicant?.email },
    { subtitle: 'Salary', value: `${applicant?.email}€ / month` },
    { subtitle: 'Has a garantor', value: applicant?.email ? 'Yes' : 'No' },
    {
      subtitle: 'Preferred move-in date',
      value: applicant?.preferred_move_in_date,
    },
  ];

  function onClose() {
    deselectApplicant();
  }

  return (
    <Drawer isOpen={!!applicant} placement="right" onClose={onClose}>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading
            as="h3"
            size="md"
            style={{ borderBottom: '2px solid #13292a', padding: '1em 0' }}
          >
            {applicant?.firstname} {applicant?.lastname}
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <StyledDrawerBody>
            <div className="item">
              <a href="#" className="email">
                {applicant?.email}
              </a>
            </div>
            {items.map((item) => (
              <div className="item" key={item.subtitle}>
                <p className="subtitle">{item.subtitle}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
            <Rating />
          </StyledDrawerBody>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
