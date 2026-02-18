import Stats from "./components/stats";
import { DataTable } from "./components/table/data-table";
function App() {
  return (
  
    <div className="flex flex-col gap-4 p-4 w-full h-full">
    <h1 className="text-xl font-bold">Welcome Admin</h1>
    <Stats />
    <DataTable />
    </div>
  )
}

export default App
