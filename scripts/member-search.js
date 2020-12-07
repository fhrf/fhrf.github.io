const validIds = [ 
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
