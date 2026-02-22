<template>
  <h1>Group</h1>
  <div v-for="group of data" :key="group.id">
    {{ group }}
  </div>
  <h1>group Add</h1>
  <form @submit.prevent="addgroup">
    <input type="text" placeholder="name" v-model="addgroupObj.name" />
    <input type="text" placeholder="email" v-model="addgroupObj.email" />
    <button>add</button>
    <p v-if="addText">{{ addText }}</p>
  </form>
  <h1>group Edit</h1>
  <form @submit.prevent="editgroup">
    <input type="text" placeholder="email" v-model="editgroupObj.email" />
    <input type="text" placeholder="name" v-model="editgroupObj.name" />
    <button>set</button>
    <p v-if="editText">{{ editText }}</p>
  </form>
  <h1>group Delete</h1>
  <form @submit.prevent="deletegroup">
    <input type="text" placeholder="id" v-model="deleteId" />
    <button>delete</button>
    <p v-if="deleteText">{{ deleteText }}</p>
  </form>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/groups')
const addgroupObj = ref({name:'', email:''})
const editgroupObj = ref({ name: '', email: '' })
const addText = ref('')
const editText = ref('')
const deleteText = ref('')
const deleteId = ref('')
const addgroup = async () => {
  addText.value = ''
  if (!addgroupObj.value.email) {
    addText.value = 'input email'
    return
  }
  const result = await $fetch('/api/groups', {
    method: 'POST',
    body: addgroupObj.value
  })
  if (result?.id) {
    addgroupObj.value = { name: '', email: '' }
    refresh()
  } else {
    addText.value = 'email already exist'
  }
}
const editgroup = async () => {
  editText.value = ''
  if (!editgroupObj.value.email) {
    editText.value = 'input email'
    return
  }
  const result = await $fetch('/api/groups', {
    method: 'PUT',
    body: editgroupObj.value
  })
  if (result) {
    editgroupObj.value = { name: '', email: '' }
    refresh()
  } else {
    editText.value = 'email not exist'
  }
}
const deletegroup = async () => {
  deleteText.value=''
  if (!deleteId.value) {
    deleteText.value = 'input id'
    return
  }
  const result = await $fetch(`/api/groups/${deleteId.value}`, {
    method: 'delete'
  })
  if (result) {
    deleteId.value = ''
    deleteText.value = `group ${Object.values(result)} deted`
    refresh()
  } else {
    deleteText.value = 'group not exist'
  }
}

</script>
