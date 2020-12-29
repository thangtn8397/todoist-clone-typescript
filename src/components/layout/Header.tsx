import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { useQuickAddTaskContext } from '../../contexts/quick-add-task-context';

function Header() {
  const { setShowQuickAddTask } = useQuickAddTaskContext();
  return (
    <nav className="header">
      <div className="header__left-control">
        <span>
          <MenuIcon />
        </span>
        <span>
          <HomeOutlinedIcon />
        </span>
        <div className="header__quick-find">
          <span>
            <SearchOutlinedIcon />
          </span>
          <input type="text" />
        </div>
      </div>
      <div className="header__right-group">
        <span>
          <AddOutlinedIcon
            onClick={() => {
              setShowQuickAddTask(true);
            }}
          />
        </span>
        <span>
          <NotificationsNoneOutlinedIcon />
        </span>
      </div>
    </nav>
  );
}

export default Header;
