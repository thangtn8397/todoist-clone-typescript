import React, { useState } from 'react';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import { Projects } from '../Projects';

function Sidebar() {
  const [active, setActive] = useState('inbox');
  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li
          role="menuitem"
          className={
            active === 'inbox' ? 'sidebar__project active' : 'sidebar__project'
          }
          onClick={() => {
            setActive('inbox');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setActive('inbox');
            }
          }}
        >
          <span>
            <InboxOutlinedIcon />
          </span>
          Inbox
        </li>
        <li
          role="menuitem"
          className={
            active === 'today' ? 'sidebar__project active' : 'sidebar__project'
          }
          onClick={() => {
            setActive('today');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setActive('today');
            }
          }}
        >
          <span>
            <TodayOutlinedIcon />
          </span>
          Today
        </li>
        <li
          role="menuitem"
          className={
            active === 'upcoming'
              ? 'sidebar__project active'
              : 'sidebar__project'
          }
          onClick={() => {
            setActive('upcoming');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setActive('upcoming');
            }
          }}
        >
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
