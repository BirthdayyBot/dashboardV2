import { GuildChannelInfoMock, GuildInfoMock } from '@/mock/guild.mock';
import { H3 } from '@/ui/typography';
import {
  ConfigBirthdayMessageInput,
  ConfigChannelInput,
  ConfigRoleInput,
  ConfigTimezoneOffsetInput,
} from './ConfigInput';

interface GuildConfigComponentProps {
  guildId: string;
  children?: React.ReactNode;
}

export default function GuildConfigComponent({ children, guildId }: GuildConfigComponentProps) {
  return (
    <div className="GuildConfigComponent">
      <H3>GuildConfigComponent</H3>
      <ConfigRoleInput
        configType="role"
        guildId="980559116076470272"
        roles={GuildInfoMock.roles}
        defaultRole="980560581306232844"
      />
      <ConfigChannelInput
        configType="channel"
        guildId="980559116076470272"
        channels={GuildChannelInfoMock}
        defaultChannel="1080819909317099541"
      />
      <ConfigTimezoneOffsetInput defaultTimezoneOffset={'0'} guildId="980559116076470272" option={2} />
      <br />
      <ConfigBirthdayMessageInput
        defaultBirthdayMessage="Happy Birthday!"
        premium={true}
        guildId="980559116076470272"
      />
    </div>
  );
}
