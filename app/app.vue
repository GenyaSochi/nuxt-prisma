<template>
  <nav class="navigation">
    <NuxtLink to="/">main</NuxtLink>
    <NuxtLink to="/posts">posts</NuxtLink>
    <NuxtLink to="test">test</NuxtLink>
    <NuxtLink to="user">user</NuxtLink>
    <NuxtLink to="users">users</NuxtLink>
  </nav>
  <div>    
    <NuxtPage />
  </div>
</template>

<style scoped>
.navigation {
display: flex;
gap: 20px;
background-color: rgb(155, 155, 218);
}
</style>
