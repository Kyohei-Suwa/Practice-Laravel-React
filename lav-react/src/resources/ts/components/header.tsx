import * as React from 'react';
import {
  Box, AppBar, Toolbar, IconButton, IconButtonTypeMap, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// TypeScript TypeDefinition on FanctionalComponents
const Header:React.FC<{isOpen:boolean, setIsOpen:(isOpen:boolean) => void}> = (props) => {
  const { isOpen, setIsOpen } = props;
  // React Hooks Sample
  const [iconButtonToggle, setIconButtonToggle] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* JSX Comment Out ! */}
          {/* MUI components sample of AppBar and Accessing Props By React Hook */}
          <IconButton size="large" edge="start" color={iconButtonToggle ? 'inherit' : 'error'} aria-label="menu" sx={{ mr: 2 }} onClick={() => handleClick()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {iconButtonToggle ? 'Bye!' : 'Hello!'}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
