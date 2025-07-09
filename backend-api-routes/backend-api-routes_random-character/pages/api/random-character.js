import Chance from "chance";
const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    age: chance.age(),
    profession: chance.profession(),
  };

  res.status(200).json(character);
}
