import { Button } from '@/ui/button';
import { H1 } from '@/ui/typography';

const Tryout: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-heading">Hello World H1</h1>
        <p className="font-body">Hello World Text</p>
        <H1>Hello World H1</H1>
        <H1>Buttons</H1>
        <div className="buttonGroup grid grid-cols-6 gap-3">
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'expandIcon'}>Expand Icon</Button>
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
