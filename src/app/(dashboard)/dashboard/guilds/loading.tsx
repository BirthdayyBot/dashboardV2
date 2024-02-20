import { GuildDisplayComponent } from '@components/GuildDisplayComponent';

const Loading: React.FC = () => {
  return (
    <div className="GuildsLoadingPage">
      <GuildDisplayComponent loading />
    </div>
  );
};

export default Loading;
