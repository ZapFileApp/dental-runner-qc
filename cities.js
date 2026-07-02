const quebecCities = [
  "Terrebonne", "Tete-a-la-Baleine", "Thetford Mines", "Thurso", "Tingwick",
  "Tremblay", "Tring-Jonction", "Trois-Pistoles", "Trois-Rivieres", "Umiujaq",
  "Upton", "Val-Alain", "Val-Barrette", "Val-Belair", "Val-Brillant",
  "Val-David", "Val-d`Or", "Val-des-Bois", "Valcartier", "Valcourt",
  "Vallee-Jonction", "Vanier", "Varennes", "Vaudreuil", "Vaudreuil Dorion",
  "Vaudreuil-sur-le-Lac", "Venise-en-Quebec", "Vercheres", "Verdun", "Victoriaville",
  "Ville-Marie", "Vimont", "Wakefield", "Warden", "Warwick",
  "Waskaganish", "Waswanipi", "Waterloo", "Waterville", "Weedon",
  "Weedon Centre", "Wemindji", "Wendover", "West Brome", "Westbury",
  "Westmount", "Wickham", "Windsor", "Woburn", "Wotton",
  "Yamachiche", "Yamaska", "Yamaska-Est",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
