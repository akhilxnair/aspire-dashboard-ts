// Import Modules
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import Components
import CardPreview from "@/components/CardPreview";
import Transactions from "@/components/Transactions";

const MainContent: React.FC = () => {
  return (
    <Tabs defaultValue="my-debit-cards" className="w-full h-full">
      <TabsList className="bg-transparent p-0 flex gap-4 ">
        <TabsTrigger
          value="my-debit-cards"
          className="data-[state=active]:text-black text-black/30 rounded-none px-1"
        >
          My debit cards
        </TabsTrigger>
        <TabsTrigger
          value="all-company-cards"
          className="data-[state=active]:text-black text-black/30 rounded-none px-1 "
        >
          All company cards
        </TabsTrigger>
      </TabsList>

      <TabsContent value="my-debit-cards">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 bg-white rounded-xl shadow-lg p-10  h-full">
          <div className="col-span-10 xl:col-span-5 space-y-6">
            <CardPreview />
          </div>
          <div className="col-span-10 xl:col-span-5 space-y-6">
            <Transactions />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="all-company-cards">
        {/* Content for All Company Cards */}
      </TabsContent>
    </Tabs>
  );
};

export default MainContent;