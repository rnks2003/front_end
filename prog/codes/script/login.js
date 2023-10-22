function isValid() {
    const defUser = "admin";
    const defPass = "admin";

    var inUser = document.getElementById("usr").value;
    var inPass = document.getElementById("pass").value;

    if (defUser == inUser && defPass == inPass) {
      window.open(
        "/Users/rnks/Desktop/front_end/prog/codes/html/home.html",
        "_self"
      );
    } else {
      alert("Enter valid credentials");
    }
  }
  function reset() {
    document.getElementById("usr").value = "";
    document.getElementById("pass").value = "";
  }