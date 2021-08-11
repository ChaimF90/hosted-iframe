import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 25%;
`;

const Right = styled.div`
  flex: 1;
`;

function App() {
  const [url, setUrl] = useState('');
  const [urlToDisplay, setUrlToDisplay] = useState('');

  return (
    <Container>
      <Left>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button onClick={() => setUrlToDisplay(url)}>Set</button>
      </Left>

      <Right>
        <iframe title="iframe" style={{ height: '100%', width: '100%' }} src={urlToDisplay} />
      </Right>

    </Container>
  );
}

export default App;
