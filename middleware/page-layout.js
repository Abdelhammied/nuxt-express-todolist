const pages = {
  register: {
    pageTitle: 'Register',
    pageSubTitle: 'Register And Start TODOS'
  }
}

const defaultHeaderBackground = 'home-bg.jpg'

export default function ({ route, store }) {
  let path = route.path.substr(1);

  if (path in pages) {
    store.commit('layout/setPageTitle', pages[path].pageTitle)
    store.commit('layout/setPageSubTitle', pages[path].pageSubTitle)

    if (!pages[path].headerBackground) {
      pages[path].headerBackground = defaultHeaderBackground;
    }

    store.commit('layout/setheaderBackground', `/images/header/${pages[path].headerBackground}`)
  }
}
