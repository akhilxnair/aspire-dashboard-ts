// Import Modules
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import Components
import CardPreview from "@/components/CardPreview";
import Transactions from "@/components/Transactions";

const MainContent = () => {
  return (
    <Tabs defaultValue="my-debit-cards" className="w-full">
      <TabsList className="bg-transparent p-0 flex gap-4 ">
        <TabsTrigger
          value="my-debit-cards"
          className="data-[state=active]:text-black rounded-none px-1"
        >
          My debit cards
        </TabsTrigger>
        <TabsTrigger
          value="all-company-cards"
          className="data-[state=active]:text-black rounded-none px-1 "
        >
          All company cards
        </TabsTrigger>
      </TabsList>

      <TabsContent value="my-debit-cards">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <CardPreview />
          </div>
          <div>
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