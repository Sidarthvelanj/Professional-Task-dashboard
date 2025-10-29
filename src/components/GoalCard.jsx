import React, { useState } from 'react';
import { useGoalStore } from '../store/goalStore.jsx';

function GoalCard({ goal, index }) {
  const { updateGoal, deleteGoal } = useGoalStore();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(goal);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateGoal(index, form);
    setEditing(false);
  };

  return (
    <div className="bg-[#0F0F0F]/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md border border-[#374151] rounded-xl p-4 shadow-lg">
      {editing ? (
        <>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="p-2 rounded bg-white text-gray-900 border border-gray-300 mb-2 w-full dark:bg-[#1F2937] dark:text-white dark:border-[#374151]"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="p-2 rounded bg-white text-gray-900 border border-gray-300 mb-2 w-full dark:bg-[#1F2937] dark:text-white dark:border-[#374151]"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="p-2 rounded bg-white text-gray-900 border border-gray-300 mb-2 w-full dark:bg-[#1F2937] dark:text-white dark:border-[#374151]"
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleUpdate}
              className="bg-[#F97316] text-white px-3 py-1 rounded hover:bg-orange-600"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-[#374151] text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-[#F97316] dark:text-[#F97316]">{goal.title}</h2>
          <p className="text-sm text-[#D1D5DB] dark:text-[#D1D5DB]">Category: {goal.category}</p>
          <span className="inline-block px-2 py-1 text-xs rounded bg-[#FACC15] text-gray-900 mt-1">
            {goal.status}
          </span>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setEditing(true)}
              className="bg-[#F97316] text-white px-3 py-1 rounded hover:bg-orange-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteGoal(index)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default GoalCard;
