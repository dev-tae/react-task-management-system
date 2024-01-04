
import TaskList from '../src/components/TaskList'; // Note the '.client' in the import

export default function Home() {
  // ... other parts of your component

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* ... other parts of your component */}
      
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-2 gap-10">
          <section className="bg-white p-6 rounded shadow flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">To-Do</h2>
            
            {/* TaskList for to-do tasks */}
            <TaskList showCompleted={false} />
            
            {/* ... Add New Task button and other UI */}
          </section>
          
          <section className="bg-white p-6 rounded shadow flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Completed</h2>
            
            {/* TaskList for completed tasks */}
            <TaskList showCompleted={true} />
            
            {/* ... other UI elements */}
          </section>
        </div>
      </div>
      
      {/* ... other parts of your component */}
    </main>
  );
}
