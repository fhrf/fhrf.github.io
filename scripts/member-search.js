const validIds = ["MH-SU-137"];
const idCardImg = document.getElementById("idCardImg");
const memberIdErrorField = document.getElementById("memberIdErrorField");

function onMemberSearch(e) {
  e.preventDefault();

  const enteredValue = document
    .getElementById("memberIdField")
    .value.toUpperCase();

  let image = new Image();
  const imgSrc = `../media/id-cards/${enteredValue}.jpeg`;

  image.onload = () => {
    console.log("loaded");
    idCardImg.setAttribute("src", imgSrc);
    idCardDownloadLink.setAttribute("href", imgSrc);
    memberIdErrorField.style.display = "none";
  };

  image.onerror = () => {
    console.log("error");
    idCardImg.setAttribute("src", "");
    idCardDownloadLink.setAttribute("href", "");
    memberIdErrorField.style.display = "block";
  };

  image.src = imgSrc;

  if (image.complete) {
    console.log("complete");
    image.onload.call(image);
  }
}
