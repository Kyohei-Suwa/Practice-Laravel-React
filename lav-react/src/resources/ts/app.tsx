import * as React from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import Header from './components/header';
import MenuDrawer from './components/drawer';
import Menus, { locationMap } from './constants/menus';
import ContentBreadCrumbs from './components/contentBreadCrumbs';
import TopPage from './routes/topPage';
import PrivatePage from './routes/tempPage';
import InformationSnackBar from './components/informationBar';

const App: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = React.useState(false);
  const [displayName, setDisplayName] = React.useState('TOP');
  const [messageState, setMessageState] = React.useState<{message:string, open:boolean}>({
    message: '',
    open: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Update Display with Location Update
  React.useEffect(() => {
    const displayed = locationMap.find((menu) => menu[1] === location.pathname);
    if (displayed !== undefined) {
      setDisplayName(displayed[0]);
      setMessageState({ message: displayName, open: true });
    }
  }, [location]); // 2nd Argument needs for update only when location change

  return (
    <div>
      <InformationSnackBar
        message={messageState.message}
        open={messageState.open}
        setMessageState={setMessageState}
      />
      <Header displayName={displayName} isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
      <ContentBreadCrumbs setTo={navigate} />
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
