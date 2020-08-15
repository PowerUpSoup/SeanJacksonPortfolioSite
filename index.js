function myFunction() {
    var x = document.getElementById("page-nav");
    if (x.className === "page-nav") {
      x.className += " expanded";
    } else {
      x.className = "page-nav";
    }
  }