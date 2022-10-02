const URI = 'http://18.217.249.129:9000'
// const URI = "http://127.0.0.1:3000";

async function operation() {
  // e.preventDefault();
  // let form = document.addEventListener('submitForm')
  // console.log(form);
  const data = {};

  data.name = document.querySelector("#name").value;
  data.email = document.querySelector("#email").value;
  data.phone = document.querySelector("#phone").value;
  data.notes = document.querySelector("#message").value;

  console.log(data);
  if (!data.name || data.name == "") {
    document.querySelector("#submitErrorMessage").value = "Ingrese un nombre";
    setTimeout(() => {
      document.querySelector("#submitErrorMessage").value = "";
    }, 1500);
    return;
  }
  if (!data.email || data.email == "") {
    document.querySelector("#submitErrorMessage").value = "Ingrese un email";
    setTimeout(() => {
      document.querySelector("#submitErrorMessage").value = "";
    }, 1500);
    return;
  }
  if (!data.phone || data.phone == "") {
    document.querySelector("#submitErrorMessage").value = "Ingrese un telefono";
    setTimeout(() => {
      document.querySelector("#submitErrorMessage").value = "";
    }, 1500);
    return;
  }
  if (!data.notes || data.notes == "") {
    document.querySelector("#submitErrorMessage").value = "Ingrese un mensaje";
    setTimeout(() => {
      document.querySelector("#submitErrorMessage").value = "";
    }, 1500);
    return;
  }
  if (data.name !== '' && data.email !== '' && data.phone !== '' && data.notes !== '') {
    console.log('ejecutando fetch', data);
    await fetchUser(data)
  }
}

async function fetchUser(data) {
  await fetch(`${URI}/rest/v1/user`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);

        document.querySelector("#name").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#phone").value = '';
        document.querySelector("#message").value = '';
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
