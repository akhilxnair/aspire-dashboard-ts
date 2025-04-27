// Import Components
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Dashboard = () => (
  <div className="flex w-full">
    <Sidebar />
    <div className="flex-1 p-4 md:p-15 bg-gray-50 min-h-screen flex flex-col">
      <TopBar />
      <MainContent />
    </div>
  </div>
);

export default Dashboard;