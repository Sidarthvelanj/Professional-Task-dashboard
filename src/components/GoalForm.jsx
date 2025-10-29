import React, { useState } from 'react';
import { useGoalStore } from '../store/goalStore.jsx';

function GoalForm({ username }) {
  const { addGoal } = useGoalStore();
  const [form, setForm] = useState({ title: '', category: '', status: 'Not Started' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal({ ...form, createdBy: username });
    setForm({ title: '', category: '', status: 'Not Started' });
  };

  const categories = [
    'Frontend Development',
    'Backend Development',
    'DevOps & Deployment',
    'UI/UX Design',
    'Code Review & QA',
    'API Integration',
    'Database Management',
    'Bug Fixing & Debugging',
    'Team Collaboration',
    'Client Deliverables',
    'Documentation & Reporting',
    'Sprint Planning',
    'Security & Compliance',
    'Performance Optimization',
    'Learning & Upskilling'
  ];

  const inputStyle = "p-3 rounded-lg bg-white dark:bg-black/60 text-gray-900 dark:text-white border border-gray-300 dark:border-white/50 shadow-inner";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-sm text-white dark:text-black">Logged in as: <strong>{username}</strong></p>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Goal Title"
        required
        className={inputStyle}
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
        className={inputStyle}
      >
        <option value="" disabled>Select Category</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className={inputStyle}
      >
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button
        type="submit"
        className="bg-elfonze-accent hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;
