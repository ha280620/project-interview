<template>
  <div class="flex flex-col min-h-screen bg-[#f2f2f2]">
    <Header></Header>
    <Body></Body>
    <!-- ------footer-------- -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>
