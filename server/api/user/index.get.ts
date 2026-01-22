export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany()
    return users
  } catch(e) {
    console.log(e)
    return []
  }
})