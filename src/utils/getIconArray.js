export const getIconArray = (techsNamesAray = [], techsArray = []) => {
  try {
    const selectedTechs = techsArray.filter( tech => techsNamesAray.includes(tech.name) )
    return selectedTechs
  } catch (error) {
    console.log(error);
  }
}
