const fs = require('fs');
const googleSpreadsheet2json = require('./index');

googleSpreadsheet2json({
	spreadsheetID: '1mi4uqapcSSGoJzwYd4Abn4i37Qm3G5nXj-pp4tYMjp4',
	credential: require('../../Private/readSpreadsheetsCredential.json'),
	// maxRow: 200, // optional
	// excludeSheets: [1, 2, 3, 4] //optional //starting in 0
}).then(sheets => {
	console.log(`done -> ${Object.keys(sheets).length} sheets`);
	fs.writeFileSync('./spreadsheet.json', JSON.stringify(sheets, null, 2), 'utf8');
}).catch(err => console.log(err));