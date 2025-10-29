import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useGoalStore = create((set) => ({
  goals: [],
  editingGoal: null,

  addGoal: (goal) =>
    set((state) => ({
      goals: [...state.goals, { ...goal, id: nanoid() }],
    })),

  deleteGoal: (id) =>
    set((state) => ({
      goals: state.goals.filter((goal) => goal.id !== id),
    })),

  setEditingGoal: (goal) =>
    set(() => ({
      editingGoal: goal,
    })),

  editGoal: (updatedGoal) =>
    set((state) => ({
      goals: state.goals.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      ),
      editingGoal: null,
    })),

  setGoals: (goals) => set(() => ({ goals })),
}));
