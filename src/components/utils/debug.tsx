import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';
import { H3 } from '@/ui/typography';
import { FC } from 'react';

interface DebugComponentProps {
  data: any;
  logData?: boolean;
  children?: React.ReactNode;
}

const DebugComponent: FC<DebugComponentProps> = ({ children, data, logData = false }) => {
  if (logData) {
    console.log('data', JSON.stringify(data, null, 2));
    return null;
  }
  return (
    <div className="DebugComponent">
      {data && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <H3
                anchor="debug"
                args={{
                  alignAnchor: 'close',
                  disableCopyToClipboard: true,
                }}
              >
                Debug Data
              </H3>
            </AccordionTrigger>
            <AccordionContent>
              <pre className="text-sm">
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {children}
    </div>
  );
};

export default DebugComponent;
