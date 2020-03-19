<template>
<div id="app">
  <div id="nav">
    <img src="images/recipe.jpg">
    <h1>Kyler's Recipes</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favorites</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div class=footer>
    <a href="https://github.com/rwheagle/creative-project-3">GitHub Link</a>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  background-color: #FFF;
  position: fixed;
  height: 5%;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  align-content: center;
}

.footer a {
  text-decoration: none;
  font-size: 1.5em;
  align-content: center;
  margin: 10px;
}
</style>
