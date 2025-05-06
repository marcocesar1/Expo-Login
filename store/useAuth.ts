import { create } from "zustand";

interface AuthState {
  name: string | null;
  logIn(name: string): boolean;
  logOut(): void;
}

const useAuthStore = create<AuthState>()((set) => ({
  name: null,
  logIn(name: string) {
    set({ name });
    return true;
  },
  logOut() {
    set({ name: null });
  },
}));

export default useAuthStore;
