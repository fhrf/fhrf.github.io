# Welcome
This is an official website codebase of Human Rights NGO -

## First Human Rights Foundation

FHRF, a non-profit NGO, was established as the will of citizens to participate actively in the Protection of Human Rights

FHRF strives to bring together all the people who believe in democracy and human rights values in – social , political, economic areas.

Learn more on [about webpage](https://fhrf.in/about.html)

## Live Hosting ⛅️
The code (master branch) is hosted with GitHub pages ([fhrf.github.io](fhrf.github.io))

Moreover, a custom domain ([fhrf.in](https:fhrf.in)) is linked the GH page

## Contributions 🚀

The website uses plain HTML, CSS & basic JS.

You can contribute this project by either improving documentation, website styling (UI/UX) or code structure

Checkout [open issues](https://github.com/fhrf/fhrf.github.io/issues)

> For every commit you make, vercel bot will automatically deploy website preview (To see the status of your deployment, click below or on the icon next to each commit)

## Code structure ↠

- External libraries
  - Bootstrap - for styling

- HTML Files - `/` directory
  - `index.html` - home page
  - `about.html` - about ngo
  - `donate.html` - donationation details
  - `events.html` - past event information
  - `volunteer.html` - info about current & prospectus members
  - `contact.html` - contact details

- CSS Files - `/styles`
  - `config.css` - almost all website styling
  - `images.css` - image styling
  - `typography.css` - content styling

- JS Files - `/scripts`
  - `quotes.js` - random quote generator service invoked on every page except home page
  - `load-events.js` - loads all event data from `/events-data.json` into event page
  - `member-search.js` - membership card search service which using members data in same file
  - `sidebar.js` - script to dynamically handle sidebar on desktop & mobile screens

- Media (images, pdf) - `/media`
  - `activities`
    - a separate, numerical ordered, directory is created for every event
    - all event images are numerically numbered
    - and the files are then mapped in `events-data.json` file
  - `id-cards` - membership cards are stored here
  - others - there are other directories and files which have team images, favicon, membership form, et cetera
