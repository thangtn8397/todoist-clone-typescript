/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import { Projects } from '../Projects';
import { useSelectedProject } from '../../contexts/selected-project-context';

function Sidebar() {
  const { selectedProject, setSelectedProject } = useSelectedProject();

  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li
          role="menuitem"
          className={
            selectedProject === 'inbox'
              ? 'sidebar__project active'
              : 'sidebar__project'
          }
          onClick={() => {
            setSelectedProject('inbox');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setSelectedProject('inbox');
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
            selectedProject === 'today'
              ? 'sidebar__project active'
              : 'sidebar__project'
          }
          onClick={() => {
            setSelectedProject('today');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setSelectedProject('today');
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
            selectedProject === 'upcoming'
              ? 'sidebar__project active'
              : 'sidebar__project'
          }
          onClick={() => {
            setSelectedProject('upcoming');
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              setSelectedProject('upcoming');
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
