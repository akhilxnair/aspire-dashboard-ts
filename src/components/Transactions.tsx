// Import Modules
import type { ReactElement } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Import Icons
import FileStorage from "@/assets/icons/FileStorage.svg?react";
import FlightsIcon from "@/assets/icons/FlightsIcon.svg?react";
import MegaphoneIcon from "@/assets/icons/MegaphoneIcon.svg?react";
import CardDetailsIcon from "@/assets/icons/CardDetailsIcon.svg?react";
import RecentTransactionIcon from "@/assets/icons/RecentTransactionIcon.svg?react";
import TransactionCardIcon from "@/assets/icons/TransactionCardIcon.svg?react";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon.svg?react";

type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: string;
  icon: ReactElement;
  iconBg: string;
  amountColor: string;
  typeLabel: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "+ S$150",
    type: "Refund",
    icon: <FileStorage />,
    iconBg: "bg-blue-100",
    amountColor: "text-green-500",
    typeLabel: "Refund on debit card",
  },
  {
    id: 2,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "- S$150",
    type: "Charge",
    icon: <FlightsIcon />,
    iconBg: "bg-green-100",
    amountColor: "#222222",
    typeLabel: "Charged to debit card",
  },
  {
    id: 3,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "- S$150",
    type: "Charge",
    icon: <MegaphoneIcon />,
    iconBg: "bg-pink-100",
    amountColor: "#222222",
    typeLabel: "Charged to debit card",
  },
  {
    id: 4,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "- S$150",
    type: "Charge",
    icon: <FileStorage />,
    iconBg: "bg-blue-100",
    amountColor: "#222222",
    typeLabel: "Charged to debit card",
  },
];

const Transactions = () => {
  return (
    <Accordion type="multiple" className="space-y-4">
      <AccordionItem value="card-details" className="rounded-xl bg-[#F5F9FF] border-0">
        <AccordionTrigger className="flex w-full items-center justify-between px-6 py-6 text-[#0C365A] font-normal text-base rounded-xl hover:bg-[#eaf6fb]">
          <span className="flex items-center gap-2">
            <CardDetailsIcon />
            Card details
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          {/* Card details content here */}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="recent-transactions" className="rounded-xl bg-[#F5F9FF] shadow border border-[#F0F0F0]">
        <AccordionTrigger className="flex w-full items-center justify-between px-6 py-6 text-[#0C365A] font-normal text-base rounded-xl hover:bg-gray-50">
          <span className="flex items-center gap-2">
            <RecentTransactionIcon />
            Recent transactions
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-0 pb-0">
          <div className="divide-y divide-[#F0F0F0]">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-start px-6 py-4 gap-3 bg-white">
                <div className={`flex-shrink-0 rounded-full ${tx.iconBg} w-10 h-10 flex items-center justify-center`}>
                  {tx.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#222]">{tx.title}</span>
                    <span className={`font-bold ${tx.amountColor} text-sm`}>
                      {tx.amount}
                    </span>
                  </div>
                  <span className="text-xs text-[#AAAAAA]">{tx.date}</span>
                  <div className="flex items-center gap-1 mt-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium text-blue-600`}>
                      <div className={`flex items-center justify-center rounded-full w-6 h-5 bg-[#325BAF]`}>
                        <TransactionCardIcon />
                      </div>
                      {tx.typeLabel}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <ChevronRightIcon />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#edfff5] rounded-b-xl px-6 py-4 text-center text-[#01D167] font-medium cursor-pointer">
            View all card transactions
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Transactions;