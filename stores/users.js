import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,

    }),
    persist: true
})