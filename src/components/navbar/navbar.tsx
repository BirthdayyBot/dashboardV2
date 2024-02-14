'use client';

import { ModeToggle } from 'src/components/button/toggleTheme';

const links = [
  { link: '/', label: 'Home' },
  { link: '/public', label: 'Public' },
  { link: '/try', label: 'Tryout' },
  { link: '/private', label: 'Private' },
  { link: '/guilds', label: 'Guilds' },
];

const NavbarComponent: React.FC = () => {
  return (
    <>
      <ModeToggle />
    </>
  );
};

export default NavbarComponent;
