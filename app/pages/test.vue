<template>
  <div>
    <p>tests</p>
    <p>/api/tests | GET - {{ indexAll }}</p>
    <p>/api/tests/:id | GET - {{ idGet }}</p>
    <p>/api/tests/delete | DELETE - {{ indexDelete }}</p>
    <!-- <p>/api/tests | POST - {{ indexPost }}</p>
    <p>/api/tests | PUT - {{ indexPut }}</p> -->
    <p>/api/tests/local | GET - {{ localGet }}</p>
    //----------------------------------------------------------------


    <p>goupe</p>
    <p>/api/tests/goupe/:id | GET - {{ indexIdGoupe }}</p>
    <!-- <p>/api/tests/goupe/delete' | DELETE - {{ indexDelGoupe }}</p> -->
    <p>/api/tests/goupe | GET - {{ indexGetGoupe }}</p>
    <p>/api/tests/goupe/local | GET - {{ localGetGoupe }}</p>
    //-----------------------------------------------------------------

    <p>users</p>
    <p>/api/users/name/:name | GET - {{ idUsers }}</p>
    <p></p>
  </div>
</template>


<script setup lang="ts">
//tests-----------------------------------------------------------
const indexAll = await $fetch('/api/tests')
const idGet = await $fetch('/api/tests/:id')
const indexDelete = await $fetch('/api/tests/delete')
// const indexPost = await $fetch('/api/tests')
// const indexPut = await $fetch('/api/tests')
const localGet = await $fetch('/api/tests/local')

//goupe------------------------------------------------------------
const indexIdGoupe = await $fetch('/api/tests/goupe/:id')
// const indexDelGoupe  = await $fetch('/api/tests/goupe/delete')
const indexGetGoupe = await $fetch('/api/tests/goupe')
const localGetGoupe = await $fetch('/api/tests/goupe/local')

//users--------------------------------------------------------------

const idUsers = await $fetch('/api/users/name/:name')
</script>