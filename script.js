const Person = require("../models/Person.js");

// Create a new person document
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Jane Doe",
    age: 28,
    favoriteFoods: ["Pizza", "Sushi"],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    console.log("Saved:", data);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log("Many created:", people);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push("hamburger"); // Add new food

    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true }, // Return updated doc
    (err, updatedDoc) => {
      if (err) return console.error(err);
      done(null, updatedDoc);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, deletedDoc) => {
    if (err) return console.error(err);
    done(null, deletedDoc);
  });
};

const removeManyPeople = (done) => {
  Person.remove({ name: "Mary" }, (err, result) => {
    if (err) return console.error(err);
    done(null, result);
  });
};

const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 }) // Sort by name ascending
    .limit(2) // Limit to 2 results
    .select("-age") // Exclude age
    .exec((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
};
