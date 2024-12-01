export const deleteSpacesFromText = (text) => {
  const textWithoutSpaces = text.trim().split(" ").join("").toLowerCase();
  return textWithoutSpaces
}
