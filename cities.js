const quebecCities = [
  "Sorel-Tracy", "Squatec", "St-Adelphe", "St-Adolphe-d`Howard", "St-Adolphe-de-Dudswell",
  "St-Agapit", "St-Aime", "St-Albert", "St-Alexandre-de-Kamouraska", "St-Alexis-de-Matapedia",
  "St-Alexis-des-Monts", "St-Alphonse-Rodriguez", "St-Andre", "St-Andre-Avellin", "St-Andre-Est",
  "St-Andre-du-Lac-St-Jean", "St-Anselme", "St-Antoine", "St-Antoine-de-Tilly", "St-Apollinaire",
  "St-Augustin-de-Desmaures", "St-Barnabe", "St-Barthelemy", "St-Basile-Sud", "St-Basile-le-Grand",
  "St-Blaise-sur-Richelieu", "St-Boniface-de-Shawinigan", "St-Bruno", "St-Bruno-de-Montarville", "St-Calixte-de-Kilkenny",
  "St-Casimir", "St-Celestin", "St-Cesaire", "St-Charles-de-Bellechasse", "St-Chrysostome",
  "St-Clet", "St-Constant", "St-Cyrille-de-Wendover", "St-Damase", "St-Damien-de-Buckland",
  "St-Denis", "St-Edouard-de-Lotbiniere", "St-Eleuthere", "St-Emile", "St-Emile-de-Suffolk",
  "St-Ephrem-de-Beauce", "St-Ephrem-de-Tring", "St-Eugene-de-Guigues", "St-Eustache", "St-Fabien-de-Panet",
  "St-Felicien", "St-Felix-de-Kingsey", "St-Felix-de-Valois", "St-Fidele-de-Mont-Murray", "St-Flavien",
  "St-Francois-du-Lac", "St-Fulgence", "St-Gabriel", "St-Gabriel-de-Brandon", "St-Gedeon",
  "St-Georges", "St-Georges-de-Beauce", "St-Georges-de-Cacouna", "St-Gerard", "St-Germain-de-Grantham",
  "St-Gregoire-de-Greenlay", "St-Guillaume", "St-Hilarion", "St-Hippolyte", "St-Honore-de-Beauce",
  "St-Honore-de-Chicoutimi", "St-Hugues", "St-Irenee", "St-Jacques", "St-Jean-Chrysostome",
  "St-Jean-Port-Joli", "St-Jean-de-Dieu", "St-Jean-de-Matha", "St-Jean-sur-Richelieu", "St-Jerome",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
