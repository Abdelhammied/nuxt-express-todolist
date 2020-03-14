<template>
  <header class="masthead" :style="'background-image: url( ' + headerBackground + ' )'">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>{{ pageTitle }}</h1>
            <span class="subheading">{{ pageSubTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    pageTitle: "layout/pageTitle",
    pageSubTitle: "layout/pageSubTitle",
    headerBackground: "layout/headerBackground"
  })
};
</script>

<style scoped>
</style>
