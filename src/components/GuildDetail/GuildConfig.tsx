import { H3 } from '@/ui/typography';
import { FC } from 'react';

interface GuildConfigComponentProps {
  guildId: string;
  children?: React.ReactNode;
}

const GuildConfigComponent: FC<GuildConfigComponentProps> = ({ children, guildId }) => {
  return (
    <div className="GuildConfigComponent">
      <H3>GuildConfigComponent</H3>
      {children}
    </div>
  );
};

export default GuildConfigComponent;
