import { create } from "zustand";
import { User } from "@/types";

interface AppStore {
  user: User | null;
  setUser: (user: User | null) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const useStore = create<AppStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  currentPage: "home",
  setCurrentPage: (currentPage) => set({ currentPage }),
}));
