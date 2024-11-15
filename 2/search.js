function searchData(data, query) {
  const lowerCase = query.toLowerCase();
  return data.filter((item) => item.toLowerCase().includes(lowerCase));
}

const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];

const searchQuery = "ar";
const result = searchData(data, searchQuery);
console.log(result);
//result : [ 'Tarjaya', 'Daruna', 'Warsoni' ]
