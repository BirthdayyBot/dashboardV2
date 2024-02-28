import { H1, P } from '@/ui/typography';
import { formatGuildIcon } from '@/utils/discord';
import { APIGuild } from 'discord-api-types/v10';
import Image from 'next/image';

interface GuildInformationDisplayComponentProps {
  guildId: string;
  guildData: APIGuild;
  children?: React.ReactNode;
}

// async function getData() {
//   const res = await fetch('https://api.example.com/...');
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default async function GuildInformationDisplayComponent({
  children,
  guildId,
  guildData,
}: GuildInformationDisplayComponentProps) {
  return (
    <div className="GuildInformationDisplayComponent">
      <div
        className="bg-banner h-52 flex items-center w-full bg-center bg-cover rounded-md"
        style={{ backgroundImage: 'url(http://localhost:3000/images/banner.png)' }} // Improve the Url of the banner
      >
        <div className="guildIcon flex justify-center w-full">
          <div className="border-primary bg-background bg-opacity-70 mx-auto bg-black border-4 rounded-lg">
            <Image
              src={guildData.icon ? formatGuildIcon(guildData.icon, guildData.id) : '/images/logo.webp'}
              alt="guild icon"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="guildName mt-2 text-center">
        <H1>{guildData.name}</H1>
        <P>{guildData.id}</P>
      </div>
      {children}
    </div>
  );
}
