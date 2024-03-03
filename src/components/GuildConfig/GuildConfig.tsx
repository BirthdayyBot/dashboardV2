'use client';
import { TimezoneZodSchema } from '@/schema/config';
import AutoForm from '@/ui/auto-form';
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
      <AutoForm formSchema={TimezoneZodSchema}>{/* <AutoFormSubmit>Send now</AutoFormSubmit> */}</AutoForm>
      {/* <AutoForm formSchema={BirthdayChannelZodSchema} /> */}
      {children}
    </div>
  );
};

export default GuildConfigComponent;
