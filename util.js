let startStamp = null;

module.exports = {
	tic: function() {
		startStamp = new Date();
	},
	clearTimer: function() {
		startStamp = null;
	},
	toc: function() {
		return new Date() - startStamp;
	}
}