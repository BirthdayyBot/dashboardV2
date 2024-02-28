import { AccordionContent, AccordionItem, AccordionTrigger, Button, Separator } from '@/ui';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { beautifyObjectName } from '../utils';
import AutoFormObject from './object';

export default function AutoFormArray({
  name,
  item,
  form,
  path = [],
  fieldConfig,
}: {
  name: string;
  item: z.ZodArray<any>;
  form: ReturnType<typeof useForm>;
  path?: string[];
  fieldConfig?: any;
}) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name,
  });
  const title = item._def.description ?? beautifyObjectName(name);

  return (
    <AccordionItem value={name} className="border-none">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        {fields.map((_field, index) => {
          const key = [...path, index.toString()].join('.');
          return (
            <div className="flex flex-col mt-4" key={`${key}`}>
              <AutoFormObject
                schema={item._def.type as z.ZodObject<any, any>}
                form={form}
                fieldConfig={fieldConfig}
                path={[...path, index.toString()]}
              />
              <div className="flex justify-end my-4">
                <Button
                  variant="secondary"
                  size="icon"
                  type="button"
                  className="hover:bg-zinc-300 hover:text-black focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-white dark:text-black dark:hover:bg-zinc-300 dark:hover:text-black dark:hover:ring-0 dark:hover:ring-offset-0 dark:focus-visible:ring-0 dark:focus-visible:ring-offset-0"
                  onClick={() => remove(index)}
                >
                  <Trash className="size-4 " />
                </Button>
              </div>

              <Separator />
            </div>
          );
        })}
        <Button type="button" variant="secondary" onClick={() => append({})} className="flex items-center mt-4">
          <Plus className="mr-2" size={16} />
          Add
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
