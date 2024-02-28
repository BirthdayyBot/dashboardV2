import { FC } from 'react';

interface ConfigInputProps {
  configType: 'role' | 'channel' | 'string' | 'number';
  children?: React.ReactNode;
}

const ConfigInput: FC<ConfigInputProps> = ({ children, configType }) => {
  return (
    <div className="ConfigInput">
      <h3 className="font-heading text-3xl font-bold">ConfigInput</h3>

      {children}
    </div>
  );
};

export default ConfigInput;
