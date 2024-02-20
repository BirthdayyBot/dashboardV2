import { H2, H5 } from '@/ui/typography';
import { GuildDisplayComponent } from '@components/GuildDisplayComponent';
import { Suspense } from 'react';

const GuildsPage: React.FC = () => {
  return (
    <div className="GuildsPage">
      <H2>Guild Overview</H2>
      <H5 className="text-inherit">Select a guild to continue</H5>
      <div className="mt-3">
        <Suspense fallback={<GuildDisplayComponent loading />}>
          <GuildDisplayComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default GuildsPage;
