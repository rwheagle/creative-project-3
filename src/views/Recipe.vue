<template>
<div class="all">

  <div class="wrapper">
    <div class="image">
      <img :src="recipe.image">
    </div>
    <div class="recipe">
      <h1>{{recipe.name}}</h1>
      <div class="ingredients">
        <div class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <h3>{{ingredient.measure}} {{ingredient.name}}</h3>
        </div>
      </div>
      <h3>{{recipe.instructions}}</h3>
      <p>Country: {{recipe.country}} | Category: {{recipe.category}}</p>
      <p><a :href='recipe.source'>Source</a></p>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  width: 66%;
}

.image img {
  border: 2px solid #333;
  height: 250px;
  object-fit: cover;
}

.image {
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 33%;
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  margin: 4%;
  justify-content: space-around;
}
.ingredient{
  margin: 10px;
}
</style>
