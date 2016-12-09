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
	setStyle(ele, opts){
		Object.keys(opts).forEach((k)=>{
			ele.style[k] = opts[k];
		});
	}
}
