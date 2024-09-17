import Chance from "chance";

const handler = (req, res) => {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geoHash: chance.geohash(),
  };
  if (chance) {
    res.status(200).json(character);
  } else {
    res.status(404).json({ massege: "Not found!" });
  }
};

export default handler;
