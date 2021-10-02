const persons = [
  {
    name: "Sarah Smith",
    age: 37,
  },
  {
    name: "Jack Jones",
    age: 33,
  },
  {
    name: "Michael Cook",
    age: 18,
  },
  {
    name: "Lisa Crow",
    age: 35,
  },
  {
    name: "Samuel Jackson",
    age: 53,
  },
  {
    name: "Pamela Black",
    age: 47,
  },
  {
    name: "Carlton Moore",
    age: 21,
  },
  {
    name: "Peter White",
    age: 36,
  },
];

const api = (person) => {
  let randomTime = Math.random() * 500 + 500;

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(randomTime);
      }, randomTime);
    } catch {
      reject();
    }
  });
};

persons.map((person) => {
  if (person.age >= 35) {
    const promise = api(person);
    promise.then((income) => console.log(income));
  }
});
