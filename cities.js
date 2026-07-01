const quebecCities = [
  "Cantley", "Cap-Chat", "Cap-Rouge", "Cap-Saint-Ignace", "Cap-a-l`Aigle",
  "Cap-aux-Meules", "Cap-de-la-Madeleine", "Cap-des-Rosiers", "Caplan", "Carignan",
  "Carillon", "Carleton", "Causapscal", "Chambly", "Chambord",
  "Champlain", "Chandler", "Chapais", "Chapeau", "Charette",
  "Charlemagne", "Charlesbourg", "Charlevoix", "Charny", "Chartierville",
  "Chateau-Richer", "Chateauguay", "Chelsea", "Cheneville", "Chesterville",
  "Chevery", "Chibougamau", "Chicoutimi", "Chisasibi", "Chomedey",
  "Chute-aux-Outardes", "Chute-des-Passes", "Clericy", "Clermont", "Cloridorme",
  "Clova", "Coaticook", "Colombier", "Compton", "Contrecoeur",
  "Cookshire", "Cote-St-Luc", "Coteau-du-Lac", "Courcelette", "Courcelles",
  "Cowansville", "Crabtree", "Danville", "Daveluyville", "Deauville",
  "Degelis", "Delisle", "Delson", "Desbiens", "Deschaillons-sur-Saint-Laurent",
  "Deux-Montagnes", "Disraeli", "Dolbeau-Mistassini", "Dollard-des-Ormeaux", "Donnacona",
  "Dorval", "Drummondville", "Dubuisson", "Dunham", "Duparquet",
  "Dupuy", "Duvernay", "East Angus", "East Broughton", "East Farnham",
  "East Hereford", "Eastmain", "Eastman", "Entrelacs", "Esterel",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
