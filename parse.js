const fs = require('fs');
const json = JSON.parse(fs.readFileSync('./spreadsheet.json', 'utf8'));
const randomId = require('./randomId');

const keys = [];
Object.keys(json[0][0]).map(key => keys.push(json[0][0][key]));

const objectsList = [];
Object.keys(json[0]).map(key1 => {
	if(key1 !== '0'){
		const item = {};
		item.id = randomId();
		Object.keys(json[0][key1]).map(key2 => {
			console.log('json[0][key1][key2]', json[0][key1][key2]);
			item[keys[key2]] = json[0][key1][key2];
		});
		objectsList.push(item);
	}
});

console.log('objectsList', objectsList);

fs.writeFileSync('./spreadsheet2.json', JSON.stringify(objectsList, null, 2), 'utf8');