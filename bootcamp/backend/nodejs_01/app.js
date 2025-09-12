console.log("Welcome to Node.js application!");

function multplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multplicationTable(5);
