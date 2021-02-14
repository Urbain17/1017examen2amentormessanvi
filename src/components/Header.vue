<template>
<header>
  <div>
    <div class="icon-bar">
      <router-link to="/home"><i class="fa fa-home"></i></router-link>
      <router-link class="nav-link" to="/login"
        ><i class="fa fa-sign-in"></i
      ></router-link>
      <router-link class="nav-link" to="/contact"
        ><i class="fa fa-envelope-square"></i
      ></router-link>
      <router-link class="nav-link" to="/register">
        <i class="fa fa-user"></i>
      </router-link>
      <router-link class="nav-link" to="/hook"
        ><i class="fa fa-info-circle"></i
      ></router-link>
    </div>
  </div>

</header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

 .icon-bar {
  width: 100%; /* Full-width */
  background-color: #555; /* Dark-grey background */
  overflow: auto; /* Overflow due to float */
}

.icon-bar router-link {
  float: left; /* Float links side by side */
  text-align: center; /* Center-align text */
  width: 20%; /* Equal width (5 icons with 20% width each = 100%) */
  padding: 12px 0; /* Some top and bottom padding */
  transition: all 0.3s ease; /* Add transition for hover effects */
  color: white; /* White text color */
  font-size: 36px; /* Increased font size */
}

.icon-bar router-link:hover {
  background-color:darkblue; /* Add a hover color */
}


 

</style>
