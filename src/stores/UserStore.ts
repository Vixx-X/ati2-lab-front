import { User } from 'user';
import create from 'zustand';
import _create from 'zustand/vanilla';

interface UserState {
  user: User | null;
  lang: string | null;
  refeatcher: Function | null;
}

export const _userStore = _create<UserState>()((set, get) => ({
  user: null,
  lang: '',
  setLang: (lang: string) => set({ lang }),
  refeatcher: null,
  update: (user: User, refeatcher: Function) => set({ user, refeatcher }),
  refeatch: () => get().refeatcher?.(),
}));

// We also create a hook to get the vanilla auth store state inside react
export const userStore = create(_userStore);
export default userStore;
