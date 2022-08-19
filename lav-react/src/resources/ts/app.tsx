import * as React from 'react';
import Header from './components/header';
import MenuDrawer from './components/drawer';

const App: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div>
      <Header isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
      <MenuDrawer isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
      <p>Hello Laravel + React!!</p>
    </div>
  );
};

export default App;
