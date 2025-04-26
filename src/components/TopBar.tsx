// Import Modules
import { Button } from "@/components/ui/button";

// Import Icons
import AddIcon from "@/assets/icons/AddIcon.svg?react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-sm">Available balance</p>
        <div className="flex items-center gap-3 ">
          <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
            S$
          </span>
          <h1 className="text-2xl font-bold tracking-tight">3,000</h1>
        </div>
      </div>
      <Button className="bg-primaryBlue hover:bg-primaryBlue/90">
        <AddIcon className="inline-block mr-1" /> New card
      </Button>
    </div>
  );
};

export default TopBar;