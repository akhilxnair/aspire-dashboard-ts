import { Button } from "@/components/ui/button";

const CardPreview = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-6">
      <div className="bg-green-500 rounded-lg p-6 text-white flex flex-col space-y-4">
        <h2 className="text-lg font-bold">Mark Henry</h2>
        <p>•••• •••• •••• ••••</p>
        <div className="flex justify-between text-sm">
          <span>Thru: 12/20</span>
          <span>CVV: ***</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Button variant="outline">Freeze card</Button>
        <Button variant="outline">Set spend limit</Button>
        <Button variant="outline">Add to GPay</Button>
        <Button variant="outline">Replace card</Button>
        <Button variant="outline">Cancel card</Button>
      </div>
    </div>
  );
};

export default CardPreview;