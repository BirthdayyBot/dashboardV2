import { Button } from '@/ui/button';
import { H1, H3, H5, P } from '@/ui/typography';
import { ArrowRightIcon } from 'lucide-react';

const Tryout: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-heading">Hello World H1</h1>
        <p className="font-body">Hello World Text</p>
        <P className="">Hello World Text</P>
        <H1>Hello World H1</H1>
        <H1 anchor="buttons">Buttons</H1>
        <H3
          anchor="buttonsh3"
          args={{
            alwaysDisplay: true,
          }}
        >
          Button Close Anchor
        </H3>
        <H5 anchor="buttonsh5">Buttons Anchor Far</H5>
        <div className="buttonGroup grid grid-cols-6 gap-3">
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'success'}>Success</Button>
          <Button variant={'warning'}>Warning</Button>
          <Button variant={'info'}>Info</Button>

          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'expandIcon'} Icon={<ArrowRightIcon color="white" size={30} />} iconPlacement="right">
            Expand Icon
          </Button>
          <Button variant={'ringHover'}>Ring Hover</Button>
          <Button variant={'shine'}>Shine</Button>
          <Button variant={'gooeyRight'}>Gooey Right</Button>
          <Button variant={'gooeyLeft'}>Gooey Left</Button>
          <Button variant={'linkHover1'}>Link Hover 1</Button>
          <Button variant={'linkHover2'}>Link Hover 2</Button>
        </div>
        <br />
        <div></div>
      </div>
    </>
  );
};

export default Tryout;
