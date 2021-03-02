<template>
  <!-- Footer -->
  <footer class="page-footer font-small pt-4">
    <!-- Copyright -->
    <div class="footer-copyright text-center">
      <p class="text-align-center">
        <span v-copyright-directive></span> - Projet final
      </p>
      <a href="https://github.com/Urbain17/1017examen2amentormessanvi/blob/main/LICENSE" target="_blank" >Conditions d'utilisation</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>
<script>
export default {
  methods: {},

};
</script>
<style scoped>
.page-footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  text-align: center;
}

.page-footer a,
.page-footer a:link,
.page-footer a:visited,
.page-footer a:active {
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.page-footer a:hover {
  color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.15);
  text-decoration: underline;
  cursor: pointer;
}

.page-footer {
  color: rgba(255, 255, 255, 0.4);
  background: #26262a;
}
</style>
