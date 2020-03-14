export const state = () => ({
  AUTH_USER: null,
  AUTH_CHECK: false
})

export const mutations = {
  login(state, user) {
    state.AUTH_USER = user;
    state.AUTH_CHECK = true;
  },
  logout(state) {
    state.AUTH_USER = null;
    state.AUTH_CHECK = false
  }

}

export const getters = {
  authUser(state) {
    return state.AUTH_USER
  }
}
