import "./global.css"
import {BrowserRouter} from 'react-router-dom'
import Routes from "./Routes"
import { UserProvider } from './Context/userContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
