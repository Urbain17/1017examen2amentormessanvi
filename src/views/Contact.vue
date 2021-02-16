<template>
  <div class="container">
    <form>
        <br>
      <!-- name -->
      <label for="name">Nom :</label>
      <input type="text" name="name" /><br><br>
      <!-- firstname -->
      <label for="firstname"> Prénom :</label>
      <input type="text" name="firstname" /><br><br>
      <!-- email -->
      <label for="email">Courriel :</label>
      <input type="text" name="email" /><br><br>
      <!-- categorie -->
      <label for=exampleFormControl>Catégories</label>
      <select class="form-control" id="exampleFormControl">
            <option v-for="(item, index) in categories" :key="index">
              {{ item.name }}
            </option>
            <option></option>
            <option>1</option>
            <option>2</option>
          </select>
        <br>
      <!-- message -->
      <label for="message">Message :</label>
      <textarea name="message"></textarea><br><br>

      <button class="button">Submit</button>
    </form>
  </div>
</template>