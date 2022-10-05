const clients = [
  { name: "John", email: "john2@mail.com" },
  { name: "John", email: "john1@mail.com" },
  { name: "Ann", email: "Ann@mail.com" },
  { name: "Ann", email: "whoAnnita@mail.com" },
  { name: "Vitya", email: "only228@mail.com" },
  { name: "Tony", email: "tony01@mail.com" },
  { name: "Vitya", email: "princess@mail.com" },
  { name: "Vitya", email: "ak-47@mail.com" },
  { name: "Alice", email: "rabbit@mail.com" },
  { name: "Luke", email: "Skyswimmer@mail.com" },
  { name: "Aragorn", email: "Agronom@mail.com" },
];

let resault = [];
let clientName = "";

function clientEmail(name) {
  for (const client of clients) {
    if (name === client.name) resault.push(client.email);
  }
  return resault;
}

console.log(clientEmail("Vitya"));
// console.log(clientEmail("Ann"));

// for (const client of clients) {
//   if (client.name === "Vitya") resault.push(client.email);
// }

// console.log(clientEmails)

// модули еще не проходил, это моя следующая тема
