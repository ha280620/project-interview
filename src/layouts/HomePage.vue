<template>
  <div class="flex flex-col min-h-screen bg-[#f2f2f2]">
    <Header></Header>
    <!-- ------footer-------- -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
  },
};
</script>
