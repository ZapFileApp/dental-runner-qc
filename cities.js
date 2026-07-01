const quebecCities = [
  "Evain", "Fabre", "Fabreville", "Falardeau", "Farnham",
  "Fassett", "Ferland", "Ferme-Neuve", "Fermont", "Fleurimont",
  "Forestville", "Fort-Coulonge", "Fortierville", "Fossambault-sur-le-Lac", "Frampton",
  "Franklin Centre", "Frelighsburg", "Fugereville", "Gaspe", "Gatineau",
  "Gentilly", "Girardville", "Godbout", "Gracefield", "Granby",
  "Grand-Mere", "Grand-Remous", "Grande-Entree", "Grande-Riviere", "Grande-Vallee",
  "Grandes-Bergeronnes", "Grandes-Piles", "Greenfield Park", "Grenville", "Guigues",
  "Ham-Nord", "Hammond", "Hampstead", "Harrington Harbour", "Havre-Aubert",
  "Havre-St-Pierre", "Havre-aux-Maisons", "Hebertville", "Hebertville-Station", "Hemmingford",
  "Henryville", "Howick", "Hudson", "Hull", "Huntingdon",
  "Iberville", "Ile-aux-Coudres", "Iles-de-la-Madeleine", "Inukjuak", "Inverness",
  "Joliette", "Jonquiere", "Joutel", "Kangiqsualujjuaq", "Kangirsuk",
  "Kateville", "Kazabazua", "Kingsbury", "Kingsey Falls", "Kirkland",
  "Knowlton", "Kuujjuaq", "L`Acadie", "L`Ancienne-Lorette", "L`Ange-Gardien",
  "L`Annonciation", "L`Assomption", "L`Avenir", "L`Epiphanie", "L`Ile-Aux-Noix",
  "L`Ile-Bizard", "L`Ile-Cadieux", "L`Ile-Dorval", "L`Ile-Perrot", "L`Ile-d`Entree",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
