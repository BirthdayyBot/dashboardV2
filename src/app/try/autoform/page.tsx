import AutoFormComponent from '@components/GuildConfig/AutoForm';
import AutoFormApiComponent from './AutoFormApiComponent';

export default function AutoFormPage() {
  return (
    <div className="AutoFormPage">
      <h1>AutoFormPage</h1>
      <AutoFormApiComponent />
      <AutoFormComponent />
    </div>
  );
}
