const googleSpreadsheet2json = require('./index');

googleSpreadsheet2json({
	spreadsheetID: '1lrW6tZfaIzeqpsxmz59nQHmsWTfRsNAjLH_f8oaiNbY',
	credential: require('../../Private/readSpreadsheetsCredential.json')
}).then(sheets => {
	console.log(`done -> ${Object.keys(sheets).length} sheets`);
	Object.keys(sheets).map(key => {
		const sheet = sheets[key];
		console.log(sheet);
		console.table(sheet);
	});
}).catch(err => console.log(err));