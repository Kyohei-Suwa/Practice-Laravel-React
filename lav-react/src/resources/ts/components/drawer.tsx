import * as React from 'react';
import Drawer from '@mui/material/Drawer';

const MenuDrawer:React.FC<{isOpen:boolean, setIsOpen:(isOpen:boolean)=>void}> = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <React.Fragment key="left">
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => { setIsOpen(false); }}
      >
        <h4>Hello Drawer!</h4>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuDrawer;
