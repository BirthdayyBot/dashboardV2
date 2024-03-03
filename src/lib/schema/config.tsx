import { z } from 'zod';

export const TimezoneZodSchema = z.object({
  timezone: z.coerce.number().min(-11, { message: 'Cannot submit a offset lower then -11' }).max(12).default(0),
});

export const BirthdayChannelZodSchema = () => {
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Create an object where keys are user names and values are user ids
  //     const userEnum = data.reduce((acc: any, user: any) => {
  //       acc[user.name] = user.id;
  //       return acc;
  //     }, {});

  //     // Create a Zod schema with the userEnum
  //     const formSchema = z.object({
  //       user: z.nativeEnum(userEnum),
  //     });
  //   });
  return z.object({
    birthdayChannel: z.string().optional(),
  });
};
