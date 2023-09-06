<template>
  <header>
    <div class="routers">
      <router-link :to="{ name: 'home' }" class="rota">Home</router-link>
      <router-link to="/camisetas" class="rota">Camisetas</router-link>
    </div>
    <main>
      <RouterView />
    </main>
  </header>
</template>
<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  color: white;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}

header {
  background-color: #6304ae;
}

.titulos {
  color: #ff5f0f;
  justify-content: center;
  display: flex;
  font-size: 3rem;
}

.routers {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.rota {
  margin-right: 1rem;
}

.tit {
  background-color: #6304ae;
  margin-top: -2rem;
}

main {
  background-color: #300055;
}
</style>
