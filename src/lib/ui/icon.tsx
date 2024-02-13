import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

export interface LucideIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export default LucideIcon;
