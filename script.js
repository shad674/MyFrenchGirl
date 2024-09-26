function videoUrl(video) {
  if (video === "blopper2.MOV" || video === "blopper4.MOV") {
    console.log(video);
    slider.style.objectFit = "cover";
  } else {
    slider.style.objectFit = "contain";
  }
  document.getElementById("slider").src = video;
}
