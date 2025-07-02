import { create } from "zustand";

export const userStore = create((set,get) => ({
    user: {},
    token: false,
    setUser: (data) => {
       
    set({ user: data });
    
    },
    setToken: () => {
        set({ token: true });
    }

}))