import { create } from "zustand";
import { getUser } from "../services/http.service";

interface AuthState {
  email: string | null;
  name: string | null;
  isChecking: boolean;
  logIn(name: string): boolean;
  check(): void;
  logOut(): void;
}

const useAuthStore = create<AuthState>()((set) => ({
  name: null,
  email: null,
  isChecking: true,
  logIn(name: string) {
    set({ name, email: "marco@email.test" });
    return true;
  },
  async check() {
    set({ isChecking: true });
    await new Promise((r) => setTimeout(r, 1000));

    const user = await getUser();
    set({
      email: user.email,
      name: user.name,
      isChecking: false,
    });
  },
  logOut() {
    set({ name: null, email: null });
  },
}));

export default useAuthStore;
