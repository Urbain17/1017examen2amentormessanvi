<template>
<div class="container">
  <div class="row row-cols-2">
    <div class="col">Amentor Messanvi</div>
    <div class="col">Age : 90 ans</div>
    <div class="col">Apprenant</div>
    <div class="col">Résident</div>
  </div>
</div>


</template>

<script>
import {MixinTranslations} from "../mixins/translationMixin";
export default {
  mixins: [MixinTranslations],
  name: "Profil",
};
</script>