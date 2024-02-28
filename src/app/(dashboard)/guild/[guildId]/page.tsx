import { fetchDiscordGuildInformation } from '@/utils/discord';
import GuildConfigComponent from '@components/GuildConfig/GuildConfig';
import GuildInformationDisplayComponent from '@components/GuildDetail/GuildInformationDisplay';
import DebugComponent from '@components/utils/debug';

type GuildDetailPageProps = {
  params: {
    guildId: string;
  };
};

//create server function that fetches guild information with the guildId
async function fetchGuildInformation(guildId: string) {
  'use server';
  return fetchDiscordGuildInformation(guildId);
}

export default async function GuildDetailPage({ params }: GuildDetailPageProps) {
  const { guildId } = params;
  const guildInformation = await fetchGuildInformation(guildId);
  return (
    <div className="GuildDetailPage">
      <GuildInformationDisplayComponent guildId={guildId} guildData={guildInformation} />
      <GuildConfigComponent guildId={guildId} />
      {/* <AutoFormComponent /> */}
      <DebugComponent data={guildInformation} />
    </div>
  );
}
