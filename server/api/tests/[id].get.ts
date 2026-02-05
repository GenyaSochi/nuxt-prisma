export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return `it's id get. id = ${id}`
})