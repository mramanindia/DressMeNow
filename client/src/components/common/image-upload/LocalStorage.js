function setStorage(imageLocation) {
  localStorage.setItem("imgSrc", imageLocation);
}

function getStorage() {
  const imageLocation = localStorage.getItem("imgSrc");
  if (imageLocation == null || imageLocation.length.trim == 0) {
    return "";
  }
  return imageLocation;
}
export { setStorage, getStorage }
