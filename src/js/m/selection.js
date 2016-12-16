/*---------------------------------------------------------------
 |                           选区方法                           |
 ---------------------------------------------------------------*/

export default {
	rangeData: null,
	getRange() {
		return this.rangeData;
	},
	setRange(range) {
		this.rangeData = range;
	},
	getString() {
		return this.getRange().toString();
	},
	// 保存选区
	save() {
		// 使用 try catch 来防止没有选区时的报错
		try {
			let range = document.getSelection().getRangeAt(0);
			this.setRange(range);
		} catch (ex) {
		}
	},
	// 恢复选区
	restore() {
		let selection, range;

		range = this.getRange();

		if (!range) {
			return;
		}
		// 使用 try catch 来防止 IE 某些情况报错
		try {
			selection = document.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		} catch (ex) {
		}
	}
};
