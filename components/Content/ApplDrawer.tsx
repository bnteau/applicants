import {
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import Rating from './Rating';
import { StyledDrawerBody } from './styles';
import { ApplDrawerProps } from './types';

export function ApplDrawer({ isOpen, onClose }: ApplDrawerProps): JSX.Element {
  const [hovered, setHovered] = useState('');
  const [selected, setSelected] = useState('');

  function handleMouseEnter(e: any) {
    const target = e.currentTarget.id;
    setHovered(target);
  }

  function handleMouseLeave() {
    setHovered('');
  }

  function handleClick(e: any) {
    console.log(e.currentTarget);
    const target = e.currentTarget.id;
    setSelected(target);
  }

  const items = [
    { subtitle: 'Job title', value: 'Salesperson' },
    { subtitle: 'Salary', value: '2500€ / month' },
    { subtitle: 'Has a garantor', value: 'Yes' },
    { subtitle: 'Preferred move-in date', value: '01/03/2022' },
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
            John Doe
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <StyledDrawerBody>
            <div className="item">
              <a href="#" className="email">
                john.doe@gmail.com
              </a>
            </div>
            {items.map((item) => (
              <div className="item" key={item.subtitle}>
                <p className="subtitle">{item.subtitle}</p>
                <p className="value">{item.value}</p>
              </div>
            ))}
            <Rating
              handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              handleClick={handleClick}
              hovered={hovered}
              selected={selected}
            />
          </StyledDrawerBody>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
