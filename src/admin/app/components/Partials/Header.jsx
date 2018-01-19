import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import TopHeader from '../Partials/TopHeader';

const recentsIcon = <FileCloudDownload />;
const CloudDownIcon = <FileCloudDownload />;
const nearbyIcon = <IconLocationOn />;

const stylePaper = {
  height: '60%',
  marginTop: 5
};

const styleItem = {
  width: 120
};

function Header({
  open,
  openDrawer,
  closeDrawer,
  switchButtons,
  history,
  buttonNav
}) {
  console.log(open);
  console.log(buttonNav);
  const title = `React + Redux + Material-UI`;

  const selectIndex = (params) => {
    switchButtons(params.buttonNav);
    history.push(`/admin/${params.action}`);
  };

  return (
    <div>
      <header className="header">
        <AppBar title={title} onLeftIconButtonTouchTap={openDrawer}>
          <Paper zDepth={1} style={stylePaper}>
            <BottomNavigation selectedIndex={buttonNav.activeIndex}>
              <BottomNavigationItem
                label="News"
                icon={recentsIcon}
                onClick={() => selectIndex({
                  action: 'news',
                  buttonNav: { activeIndex: 0 }
                })}
                style={styleItem}
              />
              <BottomNavigationItem
                label="Users"
                icon={CloudDownIcon}
                onClick={() => selectIndex({
                  action: 'users',
                  buttonNav: { activeIndex: 1 }
                })}
                style={styleItem}
              />
              <BottomNavigationItem
                label="Employees"
                icon={nearbyIcon}
                onClick={() => selectIndex({
                  action: 'employees',
                  buttonNav: { activeIndex: 2 }
                })}
                style={styleItem}
              />
            </BottomNavigation>
          </Paper>
        </AppBar>
      </header>
      <Drawer
        docked={false}
        width="15%"
        open={open}
        onRequestChange={closeDrawer}
      >
        <TopHeader>Side Bar</TopHeader>
        <MenuItem onClick={closeDrawer}>Menu Item</MenuItem>
        <MenuItem onClick={closeDrawer}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  switchButtons: PropTypes.func.isRequired,
  buttonNav: PropTypes.shape({
    activeIndex: PropTypes.number.isRequired
  }).isRequired
};

export default Header;
