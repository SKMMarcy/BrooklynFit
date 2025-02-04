import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import { SocketProvider } from './contexts/SocketProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <BrowserRouter>
        <SocketProvider>
           <App />
        </SocketProvider>
      </BrowserRouter>
    </UserContextProvider>,
);
