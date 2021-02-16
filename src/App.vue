<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Header></Header>
    <Login></Login>
    <router-view />
    <Home></Home>
    <Footer></Footer>
    
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    
    Footer,
 
  }
}
</script>
