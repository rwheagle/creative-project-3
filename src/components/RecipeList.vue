<template>
<div class="wrapper">
  <template v-if="recipes.length !== 0">
    <div class="recipes">
      <div class="recipe" v-for="recipe in recipes" :key=" recipe.id">
        <div class="info">
          <h1>{{ recipe.name}}</h1>
          <h2>{{ recipe.country}} | {{recipe.category}}</h2>

        </div>
        <div class="image">
          <router-link :to="'/recipe/' + recipe.id">
            <img :src="recipe.image">
          </router-link>
        </div>
        <div class="buttons">
          <router-link :to="'/recipe/' + recipe.id">
            <button class="auto">View Recipe</button>
          </router-link>
          <button class="auto" @click="addToFavorites(recipe)">Add to Favorites</button>
        </div>
      </div>
    </div>

  </template>
  <template v-else>
    <div class="none">
      <h1>No Recipes Found</h1>
      <h3>Please retry with a new query.</h3>
    </div>
  </template>

</div>
</template>
<script>
//import Vue from 'vue'
export default {
  name: 'RecipeList',
  props: {
    recipes: Array
  },
  methods: {
    addToFavorites(item) {
      if (this.$root.$data.favorites.indexOf(item) < 0) {
        this.$root.$data.favorites.push(item);
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

.none {
  display: block;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

.recipes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-top: 50px;
  width: 25%;
}

.recipe img {
  border: 2px solid #333;
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.recipe .image {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.info {
  background: #8bbdd9;
  color: #FFF;
  padding: 10px;
  height: 80px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

button {
  height: 50px;
  background: #e4f0f6;
  color: Black;
  border: none;
}
</style>
