import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import Image from 'next/image';

const ProfileButton = () => {
  const avatarFallback = 'XX';
  const avatarImage = '/images/default_pfp.png';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        {/* <Avatar>
          <AvatarImage src={avatarFallback} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar> */}
        <Avatar>
          <AvatarImage asChild src={avatarImage} draggable={false}>
            <Image src={avatarImage} alt="logo" width={40} height={40} />
          </AvatarImage>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
