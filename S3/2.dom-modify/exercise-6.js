const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const lista = document.createElement("ul");

apps.forEach((app) => {
  let listItem = document.createElement("li");

  listItem.textContent = app;

  lista.appendChild(listItem);
});

document.body.appendChild(lista);
