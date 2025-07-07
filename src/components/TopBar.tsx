// Import Modules
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

// Import Store
import { useCardStore, Card } from "@/store/cardStore";

// Import Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import Icons
import AddIcon from "@/assets/icons/AddIcon.svg?react";

const generateCardNumber = () =>
  Array(4)
    .fill(0)
    .map(() =>
      Math.floor(1000 + Math.random() * 9000).toString()
    )
    .join(" ");

const generateExpiry = () => {
  const year = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1;
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  return `${month}/${String(year).slice(-2)}`;
};

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  const { cards, setCards } = useCardStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const number = generateCardNumber();
    setCards([
      {
        id: Date.now(),
        number,
        masked: "•••• •••• •••• " + number.split(" ")[3],
        name: cardName,
        expiry: generateExpiry(),
      } as Card,
      ...cards,
    ]);
    setCardName("");
    setOpen(false);
  };

  return (
    <>
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
        <Button className="bg-primaryBlue hover:bg-primaryBlue/90" onClick={() => setOpen(true)}>
          <AddIcon className="inline-block mr-1" /> New card
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Card</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Cardholder Name"
              value={cardName}
              onChange={e => setCardName(e.target.value)}
              required
            />
            <DialogFooter>
              <Button type="submit" className="bg-primaryBlue hover:bg-primaryBlue/90">
                Create Card
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopBar;