'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { navigationMenuTriggerStyle } from '@/ui/navigation-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

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
      <nav className="items-center grid grid-cols-12 h-20 px-20">
        <div className="logo col-span-4 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={'/logo.webp'} alt="website logo" width={50} height={50} />
            <span className="font-heading font-extrabold text-primary text-4xl ml-3">BIRTHDAYY</span>
          </Link>
        </div>
        <div className="col-span-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="space-x-5">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="avatar flex-row-reverse col-span-2">
          <Avatar>
            <AvatarImage src="/default_pfp.png" alt="XXXX" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </>
  );
};
{
  /* <ModeToggle /> */
}

export default NavbarComponent;
