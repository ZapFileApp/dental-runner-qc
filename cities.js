const quebecCities = [
  "Abercorn", "Acton Vale", "Adamsville", "Aguanish", "Albanel",
  "Alma", "Alouette", "Amos", "Amqui", "Angliers",
  "Anjou", "Anse-Saint-Jean", "Armagh", "Arundel", "Asbestos",
  "Ascot", "Ascot Corner", "Ashuapmushuan", "Aston-Jonction", "Ayer`s Cliff",
  "Aylmer", "Bagotville", "Baie-Comeau", "Baie-Johan-Beetz", "Baie-Sainte-Catherine",
  "Baie-St-Paul", "Baie-Trinite", "Baie-d`Urfe", "Baie-de-Shawinigan", "Baie-des-Sables",
  "Baie-du-Febvre", "Barachois", "Barkmere", "Barraute", "Batiscan",
  "Beaconsfield", "Beaucanton", "Beauceville", "Beauharnois", "Beaulac-Garthby",
  "Beaumont", "Beauport", "Beaupre", "Becancour", "Bedford",
  "Belle Neige", "Bellefeuille", "Belleterre", "Beloeil", "Bergeronnes",
  "Berthierville", "Betsiamites", "Biencourt", "Bishopton", "Black Lake",
  "Blainville", "Blanc-Sablon", "Bois-des-Filion", "Boisbriand", "Boischatel",
  "Bonaventure", "Bonne-Esperance", "Boucherville", "Bouchette", "Breakeyville",
  "Brigham", "Brome", "Bromont", "Bromptonville", "Brossard",
  "Brownsburg", "Bryson", "Buckingham", "Bury", "Cabano",
  "Cacouna", "Cadillac", "Calumet", "Campbell`s Bay", "Candiac",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
