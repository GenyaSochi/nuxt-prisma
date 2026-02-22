<template>
  <nav class="navigation">
    <NuxtLink to="/">main</NuxtLink>
    <NuxtLink to="/posts">posts</NuxtLink>
    <NuxtLink to="test">test</NuxtLink>
    <NuxtLink to="user">user</NuxtLink>
    <NuxtLink to="users">users</NuxtLink>
    <NuxtLink to="group">group</NuxtLink>
  </nav>
  _______________________________________________________________
  <div>
    <NuxtPage />
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  gap: 20px;
}
</style>
