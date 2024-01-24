document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  if (user === "user@1" && password === "user") {
    Swal.fire({
      title: "Login Berhasil",
      icon: "success",
    }).then(() => {
      // Redirect to index.html after the user clicks "OK"
      window.location.href = "register kendaraan.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Username / Password Salah!",
    });
  }
});
