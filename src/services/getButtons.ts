export default async function getButtons() {
  try {
    const buttons = await fetch('api/buttons')
    return await buttons.json()
  } catch (err) {
    return []
  }
}