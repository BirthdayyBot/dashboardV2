'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui';
import AutoForm, { AutoFormSubmit } from '@/ui/autoform';
import React from 'react';
import { z } from 'zod';

export default function AutoFormApiComponent() {
  const [formSchema, setFormSchema] = React.useState<z.ZodObject<any, any, any> | null>(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Create an object where keys are user names and values are user ids
        const userEnum = data.reduce((acc: any, user: any) => {
          acc[user.name] = user.id;
          return acc;
        }, {});

        // Create a Zod schema with the userEnum
        const formSchema = z.object({
          options: z.nativeEnum(userEnum),
        });
        setFormSchema(formSchema);
      });
  }, []);

  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>API Example</CardTitle>
            <CardDescription>The form select options are fetched from an API.</CardDescription>
          </CardHeader>

          <CardContent>
            {formSchema ? (
              <AutoForm formSchema={formSchema} onSubmit={console.log}>
                <AutoFormSubmit>Send now</AutoFormSubmit>
              </AutoForm>
            ) : (
              <div>Loading...</div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
