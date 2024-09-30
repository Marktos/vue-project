import { defineStore } from "pinia";

export const userStore = defineStore('user', {
  state: () => ({
    form: {
      user: '',
      password: '',
      remember: false
    }
  }),
  actions: {
    setUser(formData: { user: string, password: string, remember: boolean}) {
      this.form = formData
    }
  }
})
