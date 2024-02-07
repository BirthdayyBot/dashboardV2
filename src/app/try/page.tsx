import MantineTryout from '@components/try';
import { Button, Container, Title } from '@mantine/core';
import Link from 'next/link';

const Tryout: React.FC = () => {
  return (
    <>
      <MantineTryout />

      <Container>
        <h1>Hello World H1</h1>
        <Title order={2}>Hello World Title</Title>
        <Title order={3}>Hello World Title</Title>
        <p>Hello World Text</p>
        <Button component={Link} href="/hello">
          Next link button
        </Button>
      </Container>
    </>
  );
};

export default Tryout;
