export default function ({ store, redirect }) {
  let authStore = store.state.auth;

  if (authStore.AUTH_CHECK === false || authStore.AUTH_USER === null) {
    return redirect('/login')
  }
}
