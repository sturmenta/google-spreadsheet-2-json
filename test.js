const googleSpreadsheet2json = require('./index');

googleSpreadsheet2json({
	spreadsheetID: '10FoJGSlPTjKOEuGnvx4e94HRRu2tEtwuhaZrgQgXsaE',
	credential: require('../../Private/readSpreadsheetsCredential.json'),
	maxRow: 200, // optional
	excludeSheets: [1, 2, 3, 4] //optional //starting in 0
}).then(sheets => {
	console.log(`done -> ${Object.keys(sheets).length} sheets`);
	Object.keys(sheets).map(key => {
		console.log(sheets[key]);
		console.table(sheets[key]);
	});
}).catch(err => console.log(err));