<template>
<div class="wrapper">
  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key=" recipe.id">
      <div class="info">
        <h1>{{recipe.name}}</h1>
        <h2>{{ recipe.country}} | {{recipe.category}}</h2>
      </div>
      <div class="image">
        <router-link :to="'/recipe/' + recipe.id">
          <img :src="recipe.image">
        </router-link>
      </div>
      <div class="favorites">
        <router-link :to="'/recipe/' + recipe.id">
          <button class="auto">View Recipe</button>
        </router-link>
        <button class="auto" @click="removeFromFavorites(recipe)">Remove From Favorites</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import Vue from 'vue'
export default {
  name: 'FavoritesList',
  props: {
    recipes: Array
  },
  methods: {
    removeFromFavorites(item) {
      if (this.$root.$data.favorites.indexOf(item) >= 0) {
        this.$root.$data.favorites.splice(this.$root.$data.favorites.indexOf(item), 1);
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

.recipes {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-top: 50px;
}

.recipe img {
  border: 2px solid #333;
  height: 300px;
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

.favorites {
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
