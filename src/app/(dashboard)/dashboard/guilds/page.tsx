import { GuildDisplayComponent } from '@components/GuildDisplayComponent';
import { Suspense } from 'react';

const GuildsPage: React.FC = () => {
  return (
    <div className="GuildsPage">
      <h3 className="font-heading font-bold text-3xl">GuildsPage</h3>
      {/* Grid with cards of icon, names of the guild. */}
      <Suspense fallback={<GuildDisplayComponent loading />}>
        <GuildDisplayComponent />
      </Suspense>
    </div>
  );
};

export default GuildsPage;
