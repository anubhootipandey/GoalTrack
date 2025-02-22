import { Check, Plus, Trash2Icon } from "lucide-react";
import { useState, useEffect } from "react";

const Goals = () => {
  const [goals, setGoals] = useState<
    { title: string; description: string; completed: boolean }[]
  >([]);

  const [showForm, setShowForm] = useState(false);
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDescription, setGoalDescription] = useState("");

  useEffect(() => {
    const savedGoals = localStorage.getItem("goals");
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  const updateLocalStorage = (updatedGoals: typeof goals) => {
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (goalTitle.trim() === "" || goalDescription.trim() === "") return;

    const newGoals = [
      ...goals,
      { title: goalTitle, description: goalDescription, completed: false },
    ];
    updateLocalStorage(newGoals);
    setGoalTitle("");
    setGoalDescription("");
    setShowForm(false);
  };

  const toggleComplete = (index: number) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    );
    updateLocalStorage(updatedGoals);
  };

  const deleteGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    updateLocalStorage(updatedGoals);
  };

  return (
    <div className="p-4 sm:p-6 md:ml-72 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-bold">🎯 Your Goals</h2>
        <button
          className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition"
          onClick={() => setShowForm(true)}
        >
          <Plus />
        </button>
      </div>

      {goals.length === 0 ? (
        <p className="text-gray-500 mt-20 text-center text-lg">
          No goals added yet. Click on + button to add goals...
        </p>
      ) : (
        <ul className="mt-12 space-y-4">
          {goals.map((goal, index) => (
            <li
              key={index}
              className={`p-4 rounded-md shadow-md flex items-center justify-between transition-all ${
                goal.completed ? "bg-green-100 line-through text-gray-500" : "bg-white"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="p-2 border text-green-700 font-bold rounded hover:bg-green-200"
                  onClick={() => toggleComplete(index)}
                >
                  <Check size={16} />
                </button>
                <button
                  className="p-2 border text-red-500 font-bold rounded hover:bg-red-200"
                  onClick={() => deleteGoal(index)}
                >
                  <Trash2Icon size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showForm && (
        <div className="fixed inset-0 flex md:ml-42 items-center justify-center px-4">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Goal</h2>
            <form onSubmit={addGoal} className="space-y-4">
              <input
                type="text"
                placeholder="Goal Title"
                className="w-full p-2 border rounded outline-none"
                value={goalTitle}
                onChange={(e) => setGoalTitle(e.target.value)}
              />
              <textarea
                placeholder="Goal Description"
                className="w-full p-2 border outline-none rounded"
                value={goalDescription}
                onChange={(e) => setGoalDescription(e.target.value)}
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-3 py-2 rounded hover:bg-gray-500"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-white text-black px-3 py-2 rounded hover:bg-gray-100"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;
