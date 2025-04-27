// Import Modules
import { Eye, EyeOff } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type FC } from "react";

// Import Store
import { useCardStore, Card } from "@/store/cardStore";

// Import Icons
import GPay from "@/assets/icons/GPay.svg?react";
import VisaLogo from "@/assets/icons/VisaLogo.svg?react";
import CancelCard from "@/assets/icons/CancelCard.svg?react";
import FreezeCard from "@/assets/icons/FreezeCard.svg?react";
import ReplaceCard from "@/assets/icons/ReplaceCard.svg?react";
import SetSpendLimit from "@/assets/icons/SetSpendLimit.svg?react";
import AspireLogoWhite from "@/assets/icons/AspireLogoWhite.svg?react";

const CardPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showCardNumber, setShowCardNumber] = useState(false);

  const cards: Card[] = useCardStore((state) => state.cards);
  const toggleFrozen = useCardStore((state) => state.toggleFrozen);

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
              <div className={`bg-green-500 m-2 text-white rounded-xl p-7 pt-20 relative shadow-md h-64 flex flex-col justify-between overflow-hidden transition-all ${card.frozen ? "opacity-50" : ""}`}>
                {card.frozen && (
                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center z-10 rounded-xl">
                    <span className="text-white text-lg font-bold">Frozen</span>
                  </div>
                )}
                <div className="flex flex-col gap-4 z-0">
                  <div className="text-2xl font-bold tracking-wider">{card.name ?? "Name"}</div>
                  <div className="text-xl tracking-widest">
                    {showCardNumber ? card.number : card.masked}
                  </div>
                  <div className="flex gap-9 text-sm">
                    <div>Thru: {card.expiry ?? "00/00"}</div>
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
        <ActionButton
          Icon={FreezeCard}
          label={cards[selectedIndex]?.frozen ? "Unfreeze" : "Freeze card"}
          onClick={() => toggleFrozen(cards[selectedIndex]?.id)}
        />
        <ActionButton Icon={SetSpendLimit} label="Set spend limit" />
        <ActionButton Icon={GPay} label="Add to GPay" />
        <ActionButton Icon={ReplaceCard} label="Replace card" />
        <ActionButton Icon={CancelCard} label="Cancel card" />
      </div>

    </div>
  );
};

const ActionButton = ({
  Icon,
  label,
  onClick,
}: {
  Icon: FC;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center cursor-pointer" onClick={onClick}>
      <Icon />
      <div className="text-xs w-15 text-center">{label}</div>
    </div>
  );
};

export default CardPreview;
