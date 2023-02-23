chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  localStorage.setItem("isShow", localStorage.getItem("isShow") == "show" ? "hidden" : "show");
  location.href = "https://192.168.91.51/";
});

chrome.runtime.sendMessage({ text: "hey" }, function (response) {
  console.log("Response: ", response);
});

setTheme();

function setTheme() {
  // if (localStorage.getItem("isShow") == 'show') {
  setInterval(() => {
    document.querySelectorAll(".thumbnail").forEach((item) => (item.outerHTML = ""));
    let big = document.querySelector("#MediaViewer .media-viewer-content>img");
    if (big) big.style.display = "block";
    document.querySelectorAll(".Avatar img").forEach((item) => (item.style.display = "block"));
    document.querySelectorAll(".status .Avatar").forEach((item) => (item.style.display = "flex"));
    document.querySelectorAll(".ChatInfo .Avatar:not(.no-photo)").forEach((item) => (item.style.display = "block"));
    document.querySelectorAll(".ChatInfo .Avatar.no-photo").forEach((item) => (item.style.display = "flex"));
    document.querySelectorAll(".ProfilePhoto:not(.no-photo)").forEach((item) => (item.style.display = "block"));
    document.querySelectorAll(".ProfilePhoto.no-photo").forEach((item) => (item.style.display = "flex"));
  }, 100);
}
