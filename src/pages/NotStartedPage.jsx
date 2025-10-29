import React from 'react';
import { useGoalStore } from '../store/goalStore.jsx';

function NotStartedPage() {
  const { goals, deleteGoal, setEditingGoal } = useGoalStore();
  const notStartedGoals = goals.filter((goal) => goal.status === 'Not Started');

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl animate-fade-in">
      <h2 className="text-2xl font-bold text-elfonze-accent">⏳ Not Started Goals</h2>
      <ul className="mt-4 space-y-2">
        {notStartedGoals.map((goal) => (
          <li
            key={goal.id}
            className="p-3 rounded-lg bg-white dark:bg-black/10 border border-gray-300 dark:border-white/30 shadow-inner flex justify-between items-center"
          >
            <div>
              <strong>{goal.title}</strong> — <span className="text-sm">{goal.category}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingGoal(goal)}
                className="text-sm px-2 py-1 rounded bg-elfonze-accent text-white hover:bg-orange-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteGoal(goal.id)}
                className="text-sm px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotStartedPage;
