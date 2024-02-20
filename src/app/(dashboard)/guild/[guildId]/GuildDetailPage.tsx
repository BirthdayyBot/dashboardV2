import { GuildDetailPageProps } from './page';

export default function GuildDetailPage({ params }: GuildDetailPageProps) {
  return <div>guild detail page {params.guildId}</div>;
  <GuildInformationDisplayComponent />;
  <GuildConfigComponent />;
}
