'use client';

import { Button } from '@/ui/button';
import { navigationMenuTriggerStyle } from '@/ui/navigation-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import ProfileButton from './profileDropdown';

const links = [
  { link: '/', label: 'Home' },
  { link: '/public', label: 'Public' },
  { link: '/try', label: 'Tryout' },
  { link: '/private', label: 'Private' },
  { link: '/guilds', label: 'Guilds' },
];

const NavbarComponent: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="items-center grid grid-cols-12 h-20 px-20">
        <div className="logo col-span-4 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={'/images/logo.webp'} alt="website logo" width={50} height={50} />
            <span className="font-heading font-extrabold text-primary text-4xl ml-3">BIRTHDAYY</span>
          </Link>
        </div>
        <div className="col-span-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="space-x-5">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/guilds">
                  Guilds
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/guild/1234">
                  Guild
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="avatar flex-row-reverse col-span-2 grid grid-cols-3">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <ProfileButton />
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
