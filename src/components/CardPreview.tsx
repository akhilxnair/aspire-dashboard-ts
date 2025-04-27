// Import Modules
import { Eye, EyeOff } from "lucide-react";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Import Icons
import AspireLogoWhite from "@/assets/icons/AspireLogoWhite.svg?react";
import FreezeCard from "@/assets/icons/FreezeCard.svg?react";
import SetSpendLimit from "@/assets/icons/SetSpendLimit.svg?react";
import GPay from "@/assets/icons/GPay.svg?react";
import ReplaceCard from "@/assets/icons/ReplaceCard.svg?react";
import CancelCard from "@/assets/icons/CancelCard.svg?react";
import VisaLogo from "@/assets/icons/VisaLogo.svg?react";


const CardPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showCardNumber, setShowCardNumber] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setShowCardNumber(false);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const cards = [
    { id: 1, number: "1234 5678 9012 3456", masked: "•••• •••• •••• 3456" },
    { id: 2, number: "9876 5432 1098 7654", masked: "•••• •••• •••• 7654" },
    { id: 3, number: "1111 2222 3333 4444", masked: "•••• •••• •••• 4444" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => setShowCardNumber((prev) => !prev)}
        className="flex items-center gap-2 text-sm font-bold text-green-500 transition-colors self-end"
      >
        {showCardNumber ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <Eye className="w-4 h-4 text-green-500" />
        )}
        {showCardNumber ? "Hide card number" : "Show card number"}
      </button>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >
              <div className="bg-green-500 m-2 text-white rounded-xl p-7 pt-20 relative shadow-md h-64 flex flex-col justify-between overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-bold tracking-wider">Mark Henry</div>

                  <div className="text-xl tracking-widest">
                    {showCardNumber ? card.number : card.masked}
                  </div>

                  <div className="flex gap-9 text-sm">
                    <div>Thru: 12/30</div>
                    <div>CVV: <span className="text-2xl font-bold align-middle" style={{ lineHeight: "12px" }}>***</span></div>
                  </div>
                </div>

                <div className="absolute top-7 right-7"><AspireLogoWhite /></div>
                <div className="absolute bottom-7 right-7 "><VisaLogo /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`transition-all h-2 rounded-full ${selectedIndex === index
              ? "bg-green-500 w-4"
              : "bg-gray-300 w-2"
              }`}
          />
        ))}
      </div>

      <div className="w-full flex-wrap flex flex-row bg-blue-100 gap-4 max-w-md rounded-xl p-5 mt-4">
        <ActionButton Icon={FreezeCard} label="Freeze card" />
        <ActionButton Icon={SetSpendLimit} label="Set spend limit" />
        <ActionButton Icon={GPay} label="Add to GPay" />
        <ActionButton Icon={ReplaceCard} label="Replace card" />
        <ActionButton Icon={CancelCard} label="Cancel card" />
      </div>

    </div>
  );
};

const ActionButton = ({ Icon, label }: { Icon: FunctionComponent; label: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center cursor-pointer">
      <Icon />
      <div className="text-xs w-15 text-center">{label}</div>
    </div>
  );
};

export default CardPreview;
