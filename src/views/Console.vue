<template>
  <div class="container">
    <nav>
      <header>
        <a href="/">console</a>
      </header>
      <article>
        <router-link :to="{name: 'dashboard'}">dashboard</router-link><br>
        <router-link :to="{name: 'users'}">user list</router-link>
      </article>
    </nav>
    <main>
      <header>
        <div>header</div>
      </header>
      <article>
        <router-view/>
      </article>
    </main>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
  }

  nav {
    width: 200px;
    height: 100vh;
    border-right: 1px solid #d3d3d3;
  }
  nav header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #d3d3d3;
  }
  main {
    width: calc(100vw - 200px);
  }
  main header {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #d3d3d3;
  }
</style>
