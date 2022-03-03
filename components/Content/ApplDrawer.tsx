import {
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Rating from './Rating';
import { useStore } from './store/hook';
import { StyledDrawerBody } from './styles';
import { ApplDrawerProps } from './types';

export function ApplDrawer({
  isOpen,
  onClose,
  applicant,
  currentRating,
  onUpdateRating,
}: ApplDrawerProps): JSX.Element {
  const store = useStore();

  useEffect(() => console.log(store), [store]);

  const items = [
    { subtitle: 'Job title', value: applicant?.email },
    { subtitle: 'Salary', value: `${applicant?.email}€ / month` },
    { subtitle: 'Has a garantor', value: applicant?.email ? 'Yes' : 'No' },
    {
      subtitle: 'Preferred move-in date',
      value: applicant?.preferred_move_in_date,
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
            <Rating
              rating={currentRating || 0}
              applicant={applicant}
              onUpdateRating={onUpdateRating}
            />
          </StyledDrawerBody>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
