<template>
<div>
  <FavoritesList :recipes="recipes" />
</div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
export default {
  name: 'Home',
  components: {
     FavoritesList
  },
  computed: {
     recipes() {
      return this.$root.$data.favorites;
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
