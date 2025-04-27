import { create } from 'zustand';

export type Card = {
  id: number;
  number: string;
  masked: string;
  name?: string;
  expiry?: string;
  frozen?: boolean;
};

type CardStore = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
  toggleFrozen: (id: number) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  cards: [
    { id: 1, number: '1234 5678 9012 3456', masked: '•••• •••• •••• 3456', frozen: false },
    { id: 2, number: '9876 5432 1098 7654', masked: '•••• •••• •••• 7654', frozen: false },
    { id: 3, number: '1111 2222 3333 4444', masked: '•••• •••• •••• 4444', frozen: false },
  ],
  setCards: (cards: Card[]) => set({ cards }),
  toggleFrozen: (id: number) =>
    set((state) => ({
      cards: state.cards.map((card) => (card.id === id ? { ...card, frozen: !card.frozen } : card)),
    })),
}));
