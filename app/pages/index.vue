<template>
  <h1>Hello</h1>
  <div v-for="user of data" :key="user.id">
    {{ user }}
  </div>
</template>

<script setup lang="ts">

const { data }= await useFetch('/api/user')
</script>