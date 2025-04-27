import { create } from 'zustand';

type Card = {
  id: number;
  number: string;
  masked: string;
  name?: string;
  expiry?: string;
};

type CardStore = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  cards: [
    { id: 1, number: '1234 5678 9012 3456', masked: '•••• •••• •••• 3456' },
    { id: 2, number: '9876 5432 1098 7654', masked: '•••• •••• •••• 7654' },
    { id: 3, number: '1111 2222 3333 4444', masked: '•••• •••• •••• 4444' },
  ],
  setCards: (cards) => set({ cards }),
}));
