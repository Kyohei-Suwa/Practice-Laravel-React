import * as React from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import Header from './components/header';
import MenuDrawer from './components/drawer';
import Menus from './constants/menus';
import { locationMap } from './constants/menus';
import TopPage from './routes/topPage';
import PrivatePage from './routes/tempPage';

const App: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = React.useState(false);
  const [displayName, setDisplayName] = React.useState('TOP');
  const navigate = useNavigate();
  const location = useLocation();

  // Update Display with Location Update
  React.useEffect(() => {
    const displayed = locationMap.find((menu) => menu[1] === location.pathname);
    if (displayed !== undefined) {
      setDisplayName(displayed[0]);
    }
  }, [location]); // 2nd Argument needs for update only when location change

  return (
    <div>
      <Header displayName={displayName} isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
      <Routes>
        <Route path={Menus[0].url} element={<TopPage />} />
        <Route path={Menus[0].url} element={<TopPage />} />
        <Route path={Menus[1].url} element={<PrivatePage />} />
      </Routes>
      <MenuDrawer menuProp={{
        menuList: Menus, isOpen: isOpenDrawer, setIsOpen: setOpenDrawer, setTo: navigate,
      }}
      />
    </div>
  );
};

export default App;
