import { create } from "zustand";

export const userStore = create((set,get) => ({
    user: {},
    setUser: (data) => {
       
    set({ user: data });
    
    }

}))