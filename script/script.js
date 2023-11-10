// Loader
var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Tab Ujian
function showTab(evt, jenisSoal) {
  var tabContent = document.getElementsByClassName("tab-content");

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tabLink = document.getElementsByClassName("tab-link");

  for (var i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" active", "");
  }

  document.getElementById(jenisSoal).style.display = "block";
  evt.currentTarget.className += " active";
}
