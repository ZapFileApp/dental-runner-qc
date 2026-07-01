const quebecCities = [
  "St-Agapit", "St-Aime", "St-Albert", "St-Alexandre-de-Kamouraska", "St-Alexis-de-Matapedia",
  "St-Joseph-de-Beauce", "St-Joseph-de-Sorel", "St-Joseph-de-la-Rive", "St-Jovite", "St-Jude",
  "St-Just-de-Bretenieres", "St-Lambert", "St-Lambert-de-Lauzon", "St-Laurent", "St-Leon-le-Grand",
  "St-Leonard", "St-Leonard-d`Aston", "St-Liboire", "St-Lin", "St-Louis-de-France",
  "St-Luc", "St-Ludger", "St-Magloire", "St-Malachie", "St-Malo",
  "St-Marc-des-Carrieres", "St-Methode-de-Frontenac", "St-Michel-de-Bellechasse", "St-Moose", "St-Nazaire-d`Acton",
  "St-Nicolas", "St-Noel", "St-Odilon-de-Cranbourne", "St-Ours", "St-Pacome",
  "St-Pamphile", "St-Pascal", "St-Patrice-de-Beaurivage", "St-Paul-d`Abbotsford", "St-Paul-de-Montminy",
  "St-Paulin", "St-Philippe-de-Neri", "St-Pie", "St-Pie-de-Guire", "St-Pierre",
  "St-Pierre-de-Wakefield", "St-Pierre-les-Becquets", "St-Polycarpe", "St-Prime", "St-Prosper-de-Dorchester",
  "St-Raymond", "St-Redempteur", "St-Remi", "St-Rene-de-Matane", "St-Roch-de-Mekinac",
  "St-Roch-des-Aulnaies", "St-Romuald", "St-Sauveur", "St-Sauveur-des-Monts", "St-Simeon",
  "St-Simon-de-Bagot", "St-Simon-de-Rimouski", "St-Sylvere", "St-Sylvestre", "St-Theophile",
  "St-Thomas-d`Aquin", "St-Timothee", "St-Tite", "St-Tite-des-Caps", "St-Ubalde",
  "St-Ulric", "St-Urbain", "St-Victor", "St-Wenceslas", "St-Zacharie",
  "St-Zenon", "St-Zephirin", "St-Zotique", "St. Ambroise de Chicoutimi", "St. Basile de Portneuf",
  "St. Bernard de Dorchester", "St. Come de Kennebec", "St. Edouard de Frampton", "St. Fabien de Rimouski", "St. Ferdinand d`Halifax",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
