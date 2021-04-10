$(document).ready(function () {
  let eventsData = [];
  const eventsContainer = document.getElementById("events-container");

  fetch("/events-data.json")
    .then((response) => response.json())
    .then((data) => {
      eventsData = data;

      eventsData.forEach((event) => {
        const eventImgs = event.files.map(
          (file) => `<img src="media/activities/${event.folderName}/${file}" loading="lazy" />`
        ).join('');

        let eventDom = new DOMParser().parseFromString(
          `<div class="row mt-5">
                    <div class="col-12">
                        <h3 class="font-heading">${event.name}</h3>
                    </div>
                    <div class="col-12">
                        <p class="font-content">${event.description}</p>
                    </div>

                    <div class="col-12 imgContainer">
                        ${eventImgs}
                    </div>
                </div>`,
          "text/html"
        ).body.firstChild;

        eventsContainer.appendChild(eventDom);
      });
    })
    .catch();
});
