<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Home</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in list" :key="item.id">
            <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      authList: [
        {
          title: "Profile",
          link: "/profile"
        },
        {
          title: "Todo List",
          link: "my-todo"
        },
        {
          title: "Logout",
          link: "/logout"
        }
      ],
      guestLlist: [
        {
          title: "Home Page",
          link: "/"
        },
        {
          title: "Register",
          link: "/register"
        },
        {
          title: "Login",
          link: "/login"
        }
      ],
      list: []
    };
  },
  created() {
    const authState = this.$store.state.auth;

    this.list = authState.AUTH_CHECK ? this.authList : this.guestLlist;
  }
};
</script>
