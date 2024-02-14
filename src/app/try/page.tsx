import { Button } from '@/ui/button';
import { H1, H5 } from '@/ui/typography';
import { Camera } from 'lucide-react';

const Tryout: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-heading">Hello World H1</h1>
        <p className="font-body">Hello World Text</p>
        <H1>Hello World H1</H1>
        <H1 anchor="buttons">Buttons</H1>
        <H5 anchor="buttonsh5">Buttons</H5>
        <div className="buttonGroup grid grid-cols-6 gap-3">
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'expandIcon'} Icon={<Camera color="red" size={48} />} iconPlacement="right">
            Expand Icon
          </Button>
          <Button variant={'ringHover'}>Ring Hover</Button>
          <Button variant={'shine'}>Shine</Button>
          <Button variant={'gooeyRight'}>Gooey Right</Button>
          <Button variant={'gooeyLeft'}>Gooey Left</Button>
          <Button variant={'linkHover1'}>Link Hover 1</Button>
          <Button variant={'linkHover2'}>Link Hover 2</Button>
        </div>
      </div>
    </>
  );
};

export default Tryout;
