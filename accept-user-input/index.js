let username;

document.getElementById("mySubmit")
  .addEventListener("click", () => {
    username = document.getElementById("myText").value;

    document.getElementById("helloH1")
      .textContent = `Hello, ${username}`;

  }) 

