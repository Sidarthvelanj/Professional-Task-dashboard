import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ClipboardList,
  CheckCircle,
  Hourglass,
  User,
  MoonStar,
  Sun,
  Pencil
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

function Sidebar({ username }) {
  const { dark, toggleTheme } = useTheme();

  const linkStyle = `
    flex items-center gap-2 px-4 py-2
    border border-white/30
    rounded transition
    hover:bg-white/40 dark:hover:bg-black/30
    text-white dark:text-black
    font-medium
  `;

  return (
    <aside className="
      w-full md:w-64
      z-20
      backdrop-blur-xl
      rounded-2xl
      shadow-2xl
      p-6
      flex flex-col justify-between
      bg-black/70 dark:bg-white/80
      text-white dark:text-black
      border border-white/30
      transition-all
    ">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Navigation</h2>

        <NavLink to="/form" className={linkStyle}>
          <Pencil size={18} /> Add Goal
        </NavLink>
        <NavLink to="/in-progress" className={linkStyle}>
          <ClipboardList size={18} /> In Progress
        </NavLink>
        <NavLink to="/completed" className={linkStyle}>
          <CheckCircle size={18} /> Completed
        </NavLink>
        <NavLink to="/not-started" className={linkStyle}>
          <Hourglass size={18} /> Not Started
        </NavLink>
      </div>

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="flex items-center gap-2 text-sm">
          <User size={16} /> Logged in as:
        </div>
        <p className="font-semibold">{username}</p>

        <button
          onClick={toggleTheme}
          className="
            mt-4 w-full flex items-center justify-center gap-2
            px-4 py-2 rounded
            bg-white/20 dark:bg-black/20
            text-white dark:text-black
            hover:bg-white/30 dark:hover:bg-black/30
            transition
          "
        >
          {dark ? <Sun size={16} /> : <MoonStar size={16} />} Toggle {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
