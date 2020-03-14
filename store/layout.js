export const state = () => ({
  pageTitle: 'test',
  pageSubTitle: '',
  headerBackground: ''
})

export const mutations = {
  setPageTitle(state, pageTitle) {
    state.pageTitle = pageTitle;
  },
  setPageSubTitle(state, pageSubTitle) {
    state.pageSubTitle = pageSubTitle;
  },
  setheaderBackground(state, headerBackground) {
    state.headerBackground = headerBackground;
  },
}

export const getters = {
  pageTitle(state) {
    return state.pageTitle
  },
  pageSubTitle(state) {
    return state.pageSubTitle
  },
  headerBackground(state) {
    return state.headerBackground
  },
}
