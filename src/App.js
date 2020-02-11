import React from 'react';

import Main from './pages/Main';

// importanto o style global
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
