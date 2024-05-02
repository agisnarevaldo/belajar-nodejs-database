function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const name = "agisna";
  const lastName = "revaldo";
  tagFunction`Hello ${name} ${lastName}, How are you?`;
  tagFunction`Bye ${name} ${lastName}, See you later`;
});

test("tag funcitn sql", () => {
  const name = "agisna";
  const age = "21";

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
