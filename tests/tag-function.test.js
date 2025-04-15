function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "Parjo";
  const lastName = "Raharjo";

  tagFunction`Hello ${name} ${lastName}!, How are you?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test("tag function sql", () => {
  //   const name = "Parjo'; DROP table users;";
  const name = "Parjo";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});

// Array pertama menjadi data String nya, dan Array kedua menjadi data parameter nya
// ● Misal untuk data `Hello ${name}!, how are you?`, dimana misal $name adalah Parjo, akan diubah
// menjadi :
// ● Array 1 : [“Hello ”, “!, how are you?”]
// ● Array 2 : [“Parjo”]
