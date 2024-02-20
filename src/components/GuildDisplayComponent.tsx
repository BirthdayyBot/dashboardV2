import GuildCard from './GuildOverview/GuildCard';

export function GuildDisplayComponent({ loading = false }) {
  const placeholderImage = '/images/placeholder.svg';
  const guildGridCN = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';

  const loadingCards = Array(8)
    .fill(0)
    .map((_, index) => <GuildCard key={index} loading />);
  if (loading) {
    return <div className={guildGridCN}>{loadingCards}</div>;
  }

  return (
    <div className={guildGridCN}>
      {[1, 2, 3, 4, 5, 6, 7].map((n) => {
        return (
          <GuildCard
            iconUrl="/images/default_pfp.png"
            botAdded={n % 2 === 0}
            guildName={'GuildName' + n}
            key={n}
            guildId="#"
          />
        );
      })}
      <GuildCard loading />
    </div>
  );
}
