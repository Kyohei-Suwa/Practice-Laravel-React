import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { NavigateFunction, To } from 'react-router-dom';
import Button from '@mui/material/Button';

const ContentBreadCrumbs:React.FC<{setTo:NavigateFunction}> = (props) => {
  const { setTo } = props;
  const handleClick = (url:string) => {
    setTo(url);
  };

  // TODO Routing With Link, Link with NavigateFunction or Else... use LinkRouter ?
  // TODO Dynamic Adding BreadCrumb Link. With Binding Link URL... if this resolved, above TODO too resolve?
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          TOP
        </Link>
        <Button color="inherit" onClick={() => { setTo('/private'); }}>
          Private
        </Button>
        <Typography color="text.primary">BreadCrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default ContentBreadCrumbs;
