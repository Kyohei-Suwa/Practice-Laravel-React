import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {
  Box, Divider, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import { To } from 'react-router-dom';
import { IMenu } from '../constants/menus';

interface IMenuProps {
  menuList:IMenu[],
  isOpen:boolean,
  setIsOpen:(isOpen:boolean)=>void
  setTo:(to:To) => void
}

const MenuDrawer:React.FC<{menuProp:IMenuProps}> = (props) => {
  const { menuProp } = props;
  const {
    menuList, isOpen, setIsOpen, setTo,
  } = menuProp;

  const handleClick = (url:string) => {
    setTo(url);
  };
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
              <ListItemButton
                key={`btn--${menuList[index].name}`}
                onClick={() => {
                  handleClick(menuList[index].url);
                  setIsOpen(false);
                }}
              >
                <ListItemText
                  key={`txt--${menuList[index].name}`}
                  primary={menuList[index].name}

                />
              </ListItemButton>
            </ListItem>
            {menuList[index].childs !== undefined
            && menuList[index].childs?.map((child, cIndex) => (
              <ListItem key={child.name}>
                <ListItemButton
                  key={`btn--${child.name}`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {/** String Concat -- Template Literal */}
                  <ListItemText
                    key={`txt--${child.name}`}
                    primary={`---    ${child.name}`}

                  />
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
