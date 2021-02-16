<template>
<header>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Exam_vue</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <router-link to="/home"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Profil"><a class="nav-link" href="#">Profil</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Projet"><a class="nav-link" href="#">Projet</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Contact"><a class="nav-link" href="#">Contact</a></router-link>
      </li>
    </ul>
  </div>
</nav>
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
  background-color: darkcyan; /* Dark-grey background */
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
