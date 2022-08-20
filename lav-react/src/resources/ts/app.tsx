import * as React from 'react';
import Header from './components/header';
import MenuDrawer from './components/drawer';
import Menus from './constants/menus';

const App: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div>
      <Header isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
      <MenuDrawer menuProp={{ menuList: Menus, isOpen: isOpenDrawer, setIsOpen: setOpenDrawer }} />
      <p>Hello Laravel + React!!</p>
    </div>
  );
};

export default App;
