import { FormLabel } from '@/ui/form';
import { cn } from '@/utils/shadcn';

function AutoFormLabel({ label, isRequired, className }: { label: string; isRequired: boolean; className?: string }) {
  return (
    <>
      <FormLabel className={cn(className)}>
        {label}
        {isRequired && <span className="text-destructive"> *</span>}
      </FormLabel>
    </>
  );
}

export default AutoFormLabel;
