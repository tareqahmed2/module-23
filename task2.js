// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function findSmallName(names) {
  //   console.log(names);
  let smallestName = names[0];
  //   console.log(len);
  for (const name of names) {
    if (name.length < smallestName.length) {
      smallestName = name;
    }
    // console.log(name);
  }
  return smallestName;
}

const name = findSmallName(heights2);
console.log(name);
