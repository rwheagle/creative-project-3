<template>
<div class="all">
<h1>{{recipe.name}}</h1>
<div class="wrapper">
  <div class="image">
    <img :src="recipe.image">
  </div>
  <div class="recipe">
    <div class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.name">
      <h4>{{ingredient.measure}} {{ingredient.name}}</h4>
    </div>
    <h3>{{recipe.instructions}}</h3>
    <p>Country: {{recipe.country}} | Category: {{recipe.category}}</p>
    <p><a href='recipe.source'>Source</a></p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  computed: {
    recipe() {
      return this.$root.$data.recipes.find(recipe => recipe.id === parseInt(this.$route.params.id));
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}
.all {
  display: block;
  align-items: center;
  justify-content: center;
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
</style>
