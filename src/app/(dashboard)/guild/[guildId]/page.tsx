import GuildConfigComponent from '@components/GuildDetail/GuildConfig';
import GuildInformationDisplayComponent from '@components/GuildDetail/GuildInformationDisplay';

type GuildDetailPageProps = {
  params: {
    guildId: string;
  };
};

export default function GuildDetailPage({ params }: GuildDetailPageProps) {
  const { guildId } = params;
  return (
    <div>
      guild detail page {guildId}
      <GuildInformationDisplayComponent guildId={guildId} />
      <GuildConfigComponent guildId={guildId} />
    </div>
  );
}
