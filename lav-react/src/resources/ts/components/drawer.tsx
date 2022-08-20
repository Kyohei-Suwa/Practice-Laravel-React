import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  Box, Button, colors, Divider, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import { IMenu } from '../constants/menus';

interface IMenuProps {
  menuList:IMenu[],
  isOpen:boolean,
  setIsOpen:(isOpen:boolean)=>void
}

const MenuDrawer:React.FC<{menuProp:IMenuProps}> = (props) => {
  const { menuProp } = props;
  const { menuList, isOpen, setIsOpen } = menuProp;

  const list = (
    <Box
      component="span"
      sx={{ width: 250 }}
    >
      <List>
        {/** JSX Elements Loop */}
        {menuList.map((text, index) => (
          <>
            {/** React.Fragment for Multi elements */}
            <ListItem key={menuList[index].name}>
              <ListItemButton>
                <ListItemText primary={menuList[index].name} />
              </ListItemButton>
            </ListItem>
            {menuList[index].childs !== undefined
            && menuList[index].childs?.map((child, cIndex) => (
              <ListItem key={child.name}>
                <ListItemButton>
                  {/** String Concat -- Template Literal */}
                  <ListItemText primary={`---    ${child.name}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment key="left">
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => { setIsOpen(false); }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(30, 139, 195, 1)',
          },
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          {list}
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuDrawer;
