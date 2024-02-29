import { z } from 'zod';

export const TimezoneZodSchema = z.object({
  timezone: z.coerce.number().min(-11, { message: 'Cannot submit a offset lower then -11' }).max(12).default(0),
});

export const BirthdayChannelZodSchema = z.object({
  birthdayChannel: z.string().optional(),
});
