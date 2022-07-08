//Question 1.1-1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const newArr = itemsObject.map((item) => {
  return { quantity: item.quantity * 2, price: item.price * 2 };
});
console.log(newArr);

function newArray(input) {
  return input.map((input) => {
    return { quantity: input.quantity * 2, price: input.price * 2 };
  });
}
console.log(newArray(itemsObject));

//Question 1.2
const filterObject = itemsObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);
console.log(filterObject);

function filterObject1(input) {
  return input.filter((input) => {
    return input.quantity > 2 && input.price > 300;
  });
}
console.log(filterObject1(itemsObject));

//Question 1.3
const totalObject = itemsObject
  .map((item) => item.quantity * item.price)
  .reduce((previousVal, currentVal) => previousVal + currentVal);
console.log(totalObject);

function sumAll(input) {
  return input.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
}

console.log(sumAll(itemsObject));

// Question 2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
function removeNonAlph1(str) {
  return str.toLowerCase().replace(/[^a-z]/g, "");
}
console.log(removeNonAlph1(string));

//Question 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function merge(num1, num2) {
  const combine = [...num1, ...num2];
  const map = new Map();
  const defaultValue = { uuid: null, name: null, role: null };
  for (let i of combine) {
    let uuid = i.uuid;
    if (!map.has(uuid)) {
      map.set(uuid, { ...defaultValue, ...i });
    } else {
      let cur = map.get(uuid);
      cur = { ...cur, ...i };
      map.set(uuid, cur);
    }
  }
  return [...map.values()].sort((a, b) => a.uuid - b.uuid);
}

console.log(merge(first, second));
