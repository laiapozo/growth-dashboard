import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
import AddMetric from "./pages/AddMetric";

function App() {
  return (
    <div className="flex h-screen bg-light-gray">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-metric" element={<AddMetric />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
