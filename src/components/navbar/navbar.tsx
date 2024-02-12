'use client';
import { Burger, Button, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '@styles/components/navbar.module.css';
import { useState } from 'react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/public', label: 'Public' },
  { link: '/try', label: 'Tryout' },
  { link: '/private', label: 'Private' },
  { link: '/guilds', label: 'Guilds' },
];

const NavbarComponent: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Button
      component="a"
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        LOGO
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default NavbarComponent;
