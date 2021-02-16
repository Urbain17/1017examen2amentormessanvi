<template>
  <div>
    <div v-if="showProfil">
      <Profil></Profil>
    <div class="title">
      <h1 class="h1">Home</h1>
    </div>
    <div class="content img">
      <img
        class="resize"
        src="https://images.freeimages.com/images/large-previews/b77/down-home-1228563.jpg"
      />
    </div>
    <div class="normalize content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import Profil from "../views/Profil.vue";
export default {
  data(){
    return {
      showProfil: false,
    };
  },
  components: {
    Profil,
  },
  name: "Home",
  methods: {},
  created(){
    var loggedIn = false;
    if (loggedIn) {
      this.showProfil = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>