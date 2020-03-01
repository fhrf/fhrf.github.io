function toogleSidebar() {
  const sidebarEle = document.getElementsByClassName("sidebar")[0];
  const didSidebarEleCollapse = sidebarEle.classList.toggle(
    "sidebar-collapsed"
  );

  if (window.innerWidth > 720) {
    const mainContentEle = document.getElementsByClassName("main-content")[0];
    mainContentEle.classList.toggle("main-content-collapsed");
  } else {
    const overlayEle = document.getElementsByClassName("overlay")[0];
    overlayEle.style.display = didSidebarEleCollapse ? "block" : "none";
  }
}

$(document).ready(function() {
  const sidebarEle = document.getElementsByClassName("sidebar")[0];
  const overlayEle = document.getElementsByClassName("overlay")[0];

  overlayEle.addEventListener("click", function() {
    if (
      window.innerWidth < 720 &&
      sidebarEle.classList.contains("sidebar-collapsed")
    ) {
      toogleSidebar();
    }
  });
});
