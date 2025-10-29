import React from 'react';
import GoalForm from '../components/GoalForm.jsx';

function FormPage({ username }) {
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl animate-fade-in">
      <GoalForm username={username} />
    </div>
  );
}

export default FormPage;
