import React, { useState, useEffect } from 'react';
import { useGoalStore } from '../store/goalStore.jsx';

function EditGoalForm() {
  const { editingGoal, editGoal, setEditingGoal } = useGoalStore();
  const [form, setForm] = useState(editingGoal || { title: '', category: '', status: 'Not Started' });

  useEffect(() => {
    if (editingGoal) setForm(editingGoal);
  }, [editingGoal]);

  if (!editingGoal) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editGoal(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50"
    >
      <div className="bg-white dark:bg-black p-6 rounded-xl shadow-2xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-elfonze-accent">Edit Goal</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Goal Title"
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/30 shadow-inner"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/30 shadow-inner"
        >
          <option value="" disabled>Select Category</option>
          <option>Frontend Development</option>
          <option>Backend Development</option>
          <option>DevOps & Deployment</option>
          <option>UI/UX Design</option>
          <option>Code Review & QA</option>
          <option>API Integration</option>
          <option>Database Management</option>
          <option>Bug Fixing & Debugging</option>
          <option>Team Collaboration</option>
          <option>Client Deliverables</option>
          <option>Documentation & Reporting</option>
          <option>Sprint Planning</option>
          <option>Security & Compliance</option>
          <option>Performance Optimization</option>
          <option>Learning & Upskilling</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-white/30 shadow-inner"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setEditingGoal(null)}
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-elfonze-accent text-white hover:bg-orange-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditGoalForm;
