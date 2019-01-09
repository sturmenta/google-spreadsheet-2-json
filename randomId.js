exports = module.exports = ( _length = 20 ) => {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let text = '';
	for ( let i = 0; i < _length; i++ ) { text += possible.charAt( Math.floor( Math.random() * possible.length ) ); } //eslint-disable-line
	return text;
};