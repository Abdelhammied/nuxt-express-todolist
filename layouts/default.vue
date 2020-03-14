<template>
  <div>
    <Navbar />
    <Header />
    <nuxt />
  </div>
</template>


<script>
import Header from "~/components/Layouts/Header";
import Navbar from "~/components/Layouts/Navbar";
export default {
  components: {
    Header,
    Navbar
  }
};
</script>

<style>
</style>
