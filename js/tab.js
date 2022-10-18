function clearClass(elem, itemClass) {
  elem.classList.remove(itemClass);
}
function addClass(elem, itemClass) {
  elem.classList.add(itemClass);
}

function tabClick(nameTab, containerName, newClass) {
  let tabNav = document.querySelectorAll(nameTab);
  let tabContent = document.querySelectorAll(containerName);
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => clearClass(item, newClass));
    addClass(this, newClass);
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
}

tabClick(".pravila__list-item", ".pravila__container", "pravila__list-active");
tabClick(".tab-item", ".productContainer", "tab-active");
