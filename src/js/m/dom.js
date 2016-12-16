/*---------------------------------------------------------------
 |                          封装dom操作                         |
 ---------------------------------------------------------------*/
export default {
	create(tagName) {
		return document.createElement(tagName);
	},
	setAttr(ele, attr) {
		Object.keys(attr).forEach(function(name) {
			ele.setAttribute(name, attr[name]);
		});
	},
	getById(id) {
		return document.getElementById(id);
	},
	// 节点类型
	type(ele) {
		return ele.nodeType;
	},
	// 节点文本
	text(ele, text = null) {
		if (typeof text == 'string') {
			ele.innerText = text;
		}
		return ele.innerText;
	},
	// 节点内容
	content(ele, html = null) {
		if (typeof html == 'string') {
			ele.innerHTML = html;
		}
		return ele.innerHTML;
	},
	// 元素内容可编辑
	editable(ele, yn = true) {
		ele.contentEditable = yn;
	},
	// 元素内容可编辑
	isEditable(ele) {
		return ele.isContentEditable;
	},
	// 添加子元素，塞到尾部
	pushChild(par, chi) {
		if (Array.isArray(chi)) {
			chi.forEach((ele) => {
				par.appendChild(ele)
			})
		} else {
			return par.appendChild(chi);
		}
	},
	/**
	 * 元素是否有某个class
	 */
	hasClass(ele, classname) {
		let classArr = ele.className.split(' '),
			res = false;
		if (classArr.length > 0 && classArr.indexOf(classname) !== -1) {
			res = true;
		}
		return res;
	},
	/**
	 * 给元素添加类
	 * @param {[dom]} ele 元素节点
	 * @param {[string，array]} cn  [可以是数组或字符串]
	 */
	addClass(ele, cn) {
		let oldClassArr = ele.className.split(' '),
			cnArr;
		if (Array.isArray(cn)) {
			cnArr = cn;
		} else {
			cnArr = cn.split(' ');
		}
		if (oldClassArr.length > 0 && cnArr.length > 0) {
			oldClassArr.forEach((n) => {
				if (cnArr.indexOf(n) == -1) {
					cnArr.push(n);
				}
			});
		}
		ele.className = cnArr.join(' ');
	},
	removeClass(ele, cn) {
		let oldClassArr = ele.className.split(' '),
			cnArr;
		if (Array.isArray(cn)) {
			cnArr = cn;
		} else {
			cnArr = cn.split(' ');
		}
		if (cnArr.length > 0 && oldClassArr.length > 0) {
			oldClassArr = oldClassArr.filter(function(name) {
				return cnArr.indexOf(name) === -1;
			});
			ele.className = oldClassArr.join(' ');
		}
	},
	/**
	 * 添加style样式
	 * @param {node} ele  DOM元素
	 * @param {object} opts 键值对
	 */
	setStyle(ele, opts) {
		Object.keys(opts).forEach((k) => {
			ele.style[k] = opts[k];
		});
	},
	/**
	 * 判断一个元素是不是块状元素（适用编辑器
	 * @param {node} ele  DOM元素
	 */
	isBlock(ele) {
		let block = ['div', 'p', 'blockquote', 'dl', 'ul', 'ol', 'table', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
		return block.indexOf(ele.nodeName.toLowerCase()) !== -1;
	},
	/**
	 * 判断一个元素包含另一个元素
	 * @param {node} ele  DOM元素
	 */
	contain(e1, e2) {
		let isContain = false;

		function check(e1, e2) {
			if (e1 === e2) {
				isContain = true;
			} else if (e1.nodeType === 1 && e1.hasChildNodes()) {
				let childs = e1.childNodes,
					len = childs.length;
				for (let i = 0; i < len; i++) {
					check(childs[i], e2);
				}
			}
		}
		check(e1, e2);
		return isContain;
	},
	/**
	 * 得到块状父元素
	 * @param {node} ele  DOM元素
	 */
	getBlockParent(ele) {
		let resNode = null,
			{
				isBlock
			} = this;

		function check(ele) {
			if (isBlock(ele)) {
				resNode = ele;
			} else if (ele.parentNode !== null) {
				check(ele.parentNode);
			}
		}
		check(ele);
		return resNode;
	},
	/**
	 * 给元素添加一个父元素
	 * @param {string} tagName 标签类型
	 * @param {node} ele     要添加父元素的元素节点
	 */
	addParent(tagName, ele) {
		let parEle = document.createElement(tagName);
		if (ele.parentNode !== null) {
			ele.parentNode.insertBefore(parEle, ele);
			this.pushChild(parEle, ele);
			return parEle;
		} else {
			return null;
		}
	},
	/**
	 * 移除一个元素，但保留子元素
	 *
	 * @param  {node} ele [description]
	 * @return {[type]}     [description]
	 */
	removeParent(ele) {
		let parEle = ele.parentNode;
		if (parEle !== null) {
			if (ele.nodeType == 1 && ele.hasChildNodes()) {
				// 这里把子节点列表转为数组很必要，直接for循环，因为ele.childNodes动态在变，所以会出错
				let childs = Array.prototype.slice.call(ele.childNodes);
				childs.forEach((node) => {
					parEle.insertBefore(node, ele);
				});
			}
			parEle.removeChild(ele);
		}
		return parEle;
	}
}
