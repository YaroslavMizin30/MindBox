import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App';
import './src/index.css';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode);

root.render(<App />);
