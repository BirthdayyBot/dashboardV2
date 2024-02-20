import { Card } from '@/ui/card';
import { Label } from '@/ui/label';
import { Skeleton } from '@/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type GuildCardProps =
  | { loading: true }
  | {
      loading?: false;
      botAdded: boolean;
      guildId: string;
      iconUrl: string;
      guildName: string;
      children?: React.ReactNode;
    };

const GuildCard: FC<GuildCardProps> = (props) => {
  const imageSize = 500;
  const guildCardClassName =
    'GuildCard col-span-1 cursor-pointer text-center rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground';

  if (props.loading) {
    return (
      <Card className={guildCardClassName}>
        <Skeleton className="rounded-md w-full sm:h-72 lg:h-52 max-h-full" />
        <div className="mt-2">
          <Skeleton className="w-full h-[20px]" />
        </div>
      </Card>
    );
  }

  const { children, botAdded, iconUrl, guildName, guildId } = props;

  return (
    <Link href={`${guildId}`}>
      <Card className={guildCardClassName}>
        <Image
          src={iconUrl}
          alt="GuildIcon"
          width={imageSize}
          height={imageSize}
          draggable="false"
          className={`rounded-md ${!botAdded ? 'grayscale' : ''}`}
        />
        <div className="mt-2 font-heading">
          <Label>{guildName}</Label>
        </div>
        {children}
      </Card>
    </Link>
  );
};

export default GuildCard;
