'use client';
import AutoForm from '@/ui/auto-form';
import { H3 } from '@/ui/typography';
import { FC } from 'react';
import * as z from 'zod';

interface GuildConfigComponentProps {
  guildId: string;
  children?: React.ReactNode;
}

const GuildConfigComponent: FC<GuildConfigComponentProps> = ({ children, guildId }) => {
  const TimezoneSchema = z.object({
    timezone: z.number().min(-11, { message: 'Cannot submit a offset lower then -11' }).max(12).default(0),
  });

  return (
    <div className="GuildConfigComponent">
      <H3>GuildConfigComponent</H3>
      <AutoForm formSchema={TimezoneSchema}>{/* <AutoFormSubmit>Send now</AutoFormSubmit> */}</AutoForm>

      {children}
    </div>
  );
};

export default GuildConfigComponent;
