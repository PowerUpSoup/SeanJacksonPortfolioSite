function myFunction() {
    var x = document.getElementById("navigation-menu");
    if (x.className === "navigation-menu") {
      x.className += " expanded";
    } else {
      x.className = "navigation-menu";
    }
  }