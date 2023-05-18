import React from 'react';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import Content from 'components/Content/Content';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  );
};

export default App;
