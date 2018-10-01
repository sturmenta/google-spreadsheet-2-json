const GoogleSpreadsheet = require('google-spreadsheet');

exports = module.exports = ({
	spreadsheetID,
	credential,
	maxRow = 1000,
	excludeSheets
}) => {
	return new Promise((resolve, reject) => {
		const doc = new GoogleSpreadsheet(spreadsheetID);
		doc.useServiceAccountAuth(credential, () => {
			doc.getInfo((err, info) => {
				if (err) reject(err);

				const qGetSheetsData = [];
				const sheetsData = {};

				info.worksheets.map((sheet, i) => {
					qGetSheetsData.push(new Promise((resolve, reject) => {
						if (excludeSheets && excludeSheets.includes(i)) resolve();
						else {
							getCellsValue(sheet, maxRow).then(_cells => {
								sheetsData[i] = _cells;
								resolve();
							}).catch(err => reject(err));
						}
					}));
				});

				Promise.all(qGetSheetsData).then(() => resolve(sheetsData)).catch(err => reject(err));
			});
		});
	});
};

const getCellsValue = (sheet, maxRow) => {
	return new Promise((resolve, reject) => {
		sheet.getCells({
			'min-row': 1,
			'max-row': maxRow
		}, (err, cells) => {
			if (err) reject(err); const _cells = {};
			cells.map(cell => {
				_cells[cell.row - 1] = Object.assign({}, _cells[cell.row - 1], { [cell.col - 1]: cell._value });
			});
			resolve(_cells);
		});
	});
};