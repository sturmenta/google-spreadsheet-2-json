# Google SpreadSheet -> JSON/DataTable

An easy and quick way to get data from GoogleSpreadSheet

## Install

`npm i -S google-spreadsheet-2-json`

## Use

```javascript
const googleSpreadsheet2json = require('google-spreadsheet-2-json');

googleSpreadsheet2json({
	spreadsheetID: '1lrW6tZfaIceqpsxmz59nQHmsWFfRsNAjLH_f8oaiNbY',
	credential: require('../../Private/readSpreadsheetsCredential.json')
}).then(sheets => {
	console.log(`done -> ${Object.keys(sheets).length} sheets`);
	Object.keys(sheets).map(key => {
		console.log(sheets[key]);
		console.table(sheets[key]);
	});
}).catch(err => console.log(err));
```