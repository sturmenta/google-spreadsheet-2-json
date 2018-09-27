# Google SpreadSheet -> JSON

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

## Examples

Test result:

<img width='500' src="https://i.imgur.com/TiuqCP7.png">

Spreadsheets used:

<img width='500' src="https://i.imgur.com/35zMDNs.png">

and

<img width='500' src="https://i.imgur.com/RFS20bR.png">

# Help

- The spreadsheetID can be obtained from the spreadsheet link:
docs.google .com/spreadsheets/d/ `1lrW6tZfaIceqpsxmz59nQHmsWFfRsNAjLH_f8oaiNbY` /edit#gid=1898934030

## Get a credential

1) Go to the [Google Developers Console](https://console.developers.google.com/project)
2) Select your project or create a new one (and then select it)
3) Enable the Drive API for your project
- In the sidebar on the left, expand APIs & services -> library
- Search for "drive"
- Click on "Drive API"
- click the blue "Enable API" button
4) Create a service account for your project
- In the sidebar on the left, expand APIs & services > Credentials
- Click blue "Add credentials" button
- Select the "Service account key" option -> new service account type
- Select the "JSON" key type option
- Click blue "Create" button
- your JSON key file is generated and downloaded to your machine (it is the only copy!)
- note your service account's email address (also available in the JSON key file)
5) Share the doc (or docs) with your service account using the email noted above
