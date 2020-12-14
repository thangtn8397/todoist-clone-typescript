import React from 'react';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import { Projects } from '../Projects';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li className="inbox sidebar__project">
          <span>
            <InboxOutlinedIcon />
          </span>
          Inbox
        </li>
        <li className="today sidebar__project">
          <span>
            <TodayOutlinedIcon />
          </span>
          Today
        </li>
        <li className="upcoming sidebar__project">
          <span>
            <DateRangeOutlinedIcon />
          </span>
          Upcoming
        </li>
      </ul>
      <Projects />
    </div>
  );
}

export default Sidebar;
