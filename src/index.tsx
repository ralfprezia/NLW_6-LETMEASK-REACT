import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

ReactDOM.render(// método usado uma única vez n aaplicação, exibe algo dentro do elemento no html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//vai no index procura o documento 'root' e exibe tudo que está no <App/>
);
