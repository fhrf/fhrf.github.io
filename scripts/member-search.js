const validIds = [
  { 
    id: "TS-SU-206",
    file: "TS-SU-206.jpg",
  },
  { 
    id: "MH-SU-142",
    file: "MH-SU-142.jpg",
  },
  { 
    id: "TS-DU-198",
    file: "TS-DU-198.jpg",
  },
  { 
    id: "TS-DU-200",
    file: "TS-DU-200.jpg",
  },
  { 
    id: "TS-SU-151",
    file: "TS-SU-151.jpg",
  },
  { 
    id: "TS-SU-197",
    file: "TS-SU-197.jpg",
  },
  { 
    id: "MH-DU-205",
    file: "MH-DU-205.jpg",
  },
  {
    id: "TS-SU-148",
    file: "TS-SU-148.jpg",
  },
  {
    id: "MH-DU-203",
    file: "MH-DU-203.jpg",
  },
   {
    id: "DL-SU-192",
    file: "DL-SU-192.jpg",
  },
  {
    id: "MH-DU-142",
    file: "MH-DU-142.jpg",
  },
  {
    id: "DH-DU-193",
    file: "DH-DU-193.jpg",
  },
  {
    id: "DH-DU-194",
    file: "DH-DU-194.jpg",
  },
  {
    id: "MH-SU-137",
    file: "MH-SU-137.jpg",
  },
  {
    id: "MH-SU-189",
    file: "MH-SU-189.jpg",
  },
  {
    id: "MH-SU-190",
    file: "MH-SU-190.jpg",
  },
  {
    id: "MH-SU-191",
    file: "MH-SU-191.jpg",
  },
  {
    id: "MH-SU-193",
    file: "MH-SU-193.jpg",
  },
  {
    id: "TS-NU-146",
    file: "TS-NU-146.jpg",
  },
  {
    id: "TS-SU-147",
    file: "TS-SU-147.jpg",
  },
  {
    id: "MH-NU-001",
    file: "MH-NU-001.jpg",
  },
  {
    id: "MH-NU-002",
    file: "MH-NU-002.jpg",
  },
  {
    id: "MH-DU-195",
    file: "MH-DU-195.jpg",
  },
  {
    id: "MH-TU-196",
    file: "MH-TU-196.jpg",
  },
  {
    id: "MH-SU-045",
    file: "MH-SU-045.jpg",
  },
  {
    id: "MH-SU-210",
    file: "MH-SU-210.jpg",
  },
  {
    id: "MH-DU-209",
    file: "MH-DU-209.jpg",
  },
  {
    id: "MH-TU-205",
    file: "MH-TU-205.jpg",
  },
  {
    id: "MH-DU-209",
    file: "MH-DU-209.jpg",
  },
  {
    id: "MH-TU-205",
    file: "MH-TU-205.jpg",
  },
  {
    id: "MH-TU-211",
    file: "MH-TU-211.jpg",
  }
];
const idCardImg = document.getElementById("idCardImg");
const memberIdErrorField = document.getElementById("memberIdErrorField");

function onMemberSearch(e) {
  e.preventDefault();

  const enteredValue = document
    .getElementById("memberIdField")
    .value.toUpperCase();

  const validId = validIds.find((validid) => validid.id === enteredValue);

  if (validId) {
    let image = new Image();
    const imgSrc = `../media/id-cards/${validId.file}`;

    image.onload = () => {
      idCardImg.setAttribute("src", imgSrc);
      idCardDownloadLink.setAttribute("href", imgSrc);
      memberIdErrorField.style.display = "none";
    };

    image.onerror = () => {
      idCardImg.setAttribute("src", "");
      idCardDownloadLink.setAttribute("href", "");
      memberIdErrorField.style.display = "block";
    };

    image.src = imgSrc;

    if (image.complete) {
      image.onload.call(image);
    }
  } else {
    alert("Invalid id! Please retry!");
  }
}
