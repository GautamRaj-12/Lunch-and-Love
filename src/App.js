import './App.css';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
