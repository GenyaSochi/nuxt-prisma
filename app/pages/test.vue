<template>
  <div>
    <p>tests</p>

    <p>/api/tests | GET - {{ indexAll }}</p>
    <p>/api/tests/:id | GET - {{ idGet }}</p>
    <p>/api/tests/delete | DELETE - {{ indexDelete }}</p>
    <p>/api/tests | POST - {{ indexPost }}</p>
    <p>/api/tests | PUT - {{ indexPut }}</p> 
    <p>/api/tests/local | GET - {{ localGet }}</p>
    //----------------------------------------------------------------


    <p>goupe</p>

    <p>/api/tests/goupe/:id | GET - {{ indexIdGoupe }}</p>
    <p>/api/tests/goupe' | DELETE - {{ indexDelGoupe }}</p>
    <p>/api/tests/goupe | GET - {{ indexGetGoupe }}</p>
    <p>/api/tests/goupe | POST - {{ indexPostGoupe }}</p>
    <p>/api/tests/goupe | PUT - {{ indexPutGoupe }}</p>
    <p>/api/tests/goupe/local | GET - {{ localGetGoupe }}</p>
    //-----------------------------------------------------------------

    <p>users</p>

    <p>/api/users/:name | GET - {{ idUsers }}</p>
    <p>/api/users/createMany | POST {{ createUsers }}</p>
    <p>/api/users' | GET - {{ indexUsers }}</p>
    <p>/api/users | POST - {{ indexPostUsers }}</p>
  </div>
</template>

<script setup lang="ts">
//tests-----------------------------------------------------------
const indexAll = await $fetch('/api/tests')
const idGet = await $fetch('/api/tests/7')
const indexDelete = await $fetch('/api/tests', {method:'DELETE'})
const indexPost = await $fetch('/api/tests', {method:'POST'})
const indexPut = await $fetch('/api/tests', {method:'PUT'})
const localGet = await $fetch('/api/tests/local')

//goupe------------------------------------------------------------
const indexIdGoupe = await $fetch('/api/tests/goupe/5')
const indexDelGoupe  = await $fetch('/api/tests/goupe', {method:'DELETE'})
const indexGetGoupe = await $fetch('/api/tests/goupe')
const indexPostGoupe = await $fetch('/api/tests/goupe', {method:'POST'})
const indexPutGoupe = await $fetch('/api/tests/goupe', {method:'PUT'})
const localGetGoupe = await $fetch('/api/tests/goupe/local')

//users--------------------------------------------------------------

const idUsers = await $fetch('/api/users/Vasya')
const createUsers = await $fetch('/api/users/createMany', {method:'POST' })
const indexUsers = await $fetch('/api/users')
const indexPostUsers = await $fetch('/api/users', {method:'POST'})

</script>