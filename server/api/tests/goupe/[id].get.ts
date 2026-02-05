export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return `it's group id get. id = ${id}`
})