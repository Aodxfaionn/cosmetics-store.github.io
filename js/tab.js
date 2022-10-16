function clearClass(elem, itemClass) {
  elem.classList.remove(itemClass);
}
function addClass(elem, itemClass) {
  elem.classList.add(itemClass);
}

const tab = function () {
  let tabNav = document.querySelectorAll(".pravila__list-item");
  let tabContent = document.querySelectorAll(".pravila__container");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => clearClass(item, "pravila__list-active"));
    addClass(this, "pravila__list-active");
    tabName = this.dataset.tabName;
    selectTabContent(tabName);
  }

  function selectTabContent(selectName) {
    tabContent.forEach((item) => {
      item.classList.contains(selectName)
        ? addClass(item, "is-active")
        : clearClass(item, "is-active");
    });
  }
};

tab();
