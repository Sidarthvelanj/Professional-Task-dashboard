import React from 'react';
import GoalCard from './GoalCard.jsx';

function GoalList({ goals }) {
  if (goals.length === 0) {
    return (
      <p className="text-center text-elfonze-soft dark:text-elfonze-soft">
        No goals in this category.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <GoalCard key={index} goal={goal} index={index} />
      ))}
    </div>
  );
}

export default GoalList;
