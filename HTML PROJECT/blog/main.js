window.addEventListener("load", () => {
    let menuItems = document.querySelectorAll('.menu li:not(:empty):not(:only-child)');
      for (let item of menuItems) {
        item.addEventListener("mouseover", function (e) {
          this.querySelector(".submenu").style.display = "block";
        });
        item.addEventListener("mouseout", function () {
          this.querySelector(".submenu").style.display = "none";
        });
      }
});