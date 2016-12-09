// 控制台提示
import cslM from './m/csl';

// dom相关封装
import dom from './m/dom';

// 选区相关封装
import selection from './m/selection';

// 全局配置
import globalConf from './c/conf';

// --------------- 全局常量 ------------------
const emptyFn = function() {};

/**
 * 基本构造函数
 *
 * @param {string} id      根元素id
 * @param {object} argConf 编辑器配置，参考全局配置conf
 */
let E = function(id, argConf) {
	let E = this;
	// 根元素
	E.baseEle = dom.getById(id);

	// 配置
	E.conf = Object.assign(globalConf, argConf);

	// 提示
	E.csl = cslM(E.conf.debug);

	if (!E.baseEle) {
		csl.error(`未找到id为 '${id}' 的元素！`);
		return;
	}

	// 初始化
	E.init();
};

// 构造函数原型链变量简化
E.fn = E.prototype;

// 编辑器初始化
E.fn.init = function() {
	let that = this,
		menuBaseEle = dom.create('div'),
		cntBaseEle = dom.create('div'),
		{
			conf,
			baseEle
		} = that,
		initCnt = baseEle.innerHTML;
	const lang = conf.lang[conf.langType]; //语言包
	that.nextTimeRestoreSelection = false; // 下次失去焦点恢复选区
	that.menuBaseEle = menuBaseEle; //菜单栏根元素
	that.cntBaseEle = cntBaseEle; //可编辑区域根元素

	// --------------- 根元素设置样式、清空内容、添加类名 ------------------
	dom.setStyle(baseEle, {
		width: conf.width,
		height: conf.height
	});
	dom.content(baseEle, '');
	dom.addClass(baseEle, 'dai-editor');

	// --------------- 菜单、内容根元素添加样式、内容、绑定事件 ------------------
	dom.addClass(menuBaseEle, 'dai-editor-menu-list');
	dom.addClass(cntBaseEle, 'dai-editor-cnt');
	dom.editable(cntBaseEle);
	dom.content(cntBaseEle, initCnt);
	dom.pushChild(baseEle, [menuBaseEle, cntBaseEle]);
	cntBaseEle.addEventListener('focus', function() {
		dom.addClass(baseEle, 'z-on');
	});
	cntBaseEle.addEventListener('blur', function() {
		if (that.nextTimeRestoreSelection) {
			// 失去焦点时恢复选区
			selection.restore();
			that.nextTimeRestoreSelection = false;
		} else {
			dom.removeClass(baseEle, 'z-on');
		}
	});
	cntBaseEle.addEventListener('scroll', function() {
		if (this.scrollTop > 0) {
			dom.addClass(menuBaseEle, 'z-on');
		} else {
			dom.removeClass(menuBaseEle, 'z-on');
		}
	});

	// --------------- 添加菜单功能列表 ------------------
	that.menuEleList = {}; // 菜单元素
	conf.menus.forEach((menuGroup) => {
		let menuGroupEle = dom.create('div');
		dom.addClass(menuGroupEle, 'dai-editor-menu-group');
		dom.pushChild(menuBaseEle, menuGroupEle);
		Object.keys(menuGroup).forEach((id) => {
			let menuEle = dom.create('div'),
				btnEle = dom.create('a');
			dom.addClass(menuEle, 'dai-editor-menu-item');
			dom.addClass(btnEle, 'dai-editor-menu-item-btn');
			dom.setAttr(btnEle, {
				title: lang[id]
			});
			dom.text(btnEle, menuGroup[id]);
			dom.pushChild(menuEle, btnEle);
			dom.pushChild(menuGroupEle, menuEle);
			that.menuEleList[id] = {
				'item': menuEle,
				'btn': btnEle
			};
		})
	});

	// --------------- 菜单功能绑定 ------------------

	/**
	 * 菜单按钮绑定事件
	 *
	 * @param  {node}     ele      按钮节点
	 * @param  {string}   cmd      命令（原生或自定义
	 * @param  {string}   opt      命令参数
	 * @param  {Function} callback 回调函数
	 */
	const menuEventBind = function(ele, cmd, opt=null, callback=emptyFn) {
		ele.addEventListener('mousedown', function(e) {
			// 阻止默认事件（防止失去选区
			e.preventDefault();
			e.stopPropagation();

			// 保存选区
			selection.save();
			that.nextTimeRestoreSelection = true;
		});
		ele.addEventListener('click', function() {
			if(document.queryCommandSupported(cmd)){
				document.execCommand(cmd, false, opt);
			}else{

			}
			callback();
		});
	};

	// --------------- 简单粗暴的一些菜单功能 ------------------
	let simpleMenuCmdList = {
		// id: cmd
		bold: 'bold',
		underline: 'underline',
		strikethrough: 'strikeThrough',
		italic: 'italic',
		eraser: 'removeFormat',
		orderlist: 'insertOrderedList',
		unorderlist: 'insertUnorderedList',
		alignleft: 'justifyLeft',
		aligncenter: 'justifyCenter',
		alignright: 'justifyRight',
		undo: 'undo',
		redo: 'redo'
	};
	Object.keys(simpleMenuCmdList).forEach((id) => {
		let els = that.menuEleList[id];
		if (els) {
			menuEventBind(els['btn'], simpleMenuCmdList[id]);
		}
	});

	// --------------- :引用 ------------------
	(function () {
		menuEventBind(that.menuEleList.quote['btn'], 'formatBlock', '<BLOCKQUOTE>');
	})();

};

// 获取内容
E.fn.getCnt = function() {
	let {
		cntBaseEle
	} = this;
	return dom.content(cntBaseEle);
};

// 设置内容
E.fn.setCnt = function(cnt) {
	let {
		cntBaseEle
	} = this;
	return dom.content(cntBaseEle, cnt);
};

// 获取焦点
E.fn.focus = function() {
	let {
		cntBaseEle
	} = this;
	return cntBaseEle.onfocus();
};

// 失去焦点
E.fn.blur = function() {
	let {
		cntBaseEle
	} = this;
	return cntBaseEle.onblur();
};

// 销毁实例
E.fn.destroy = function() {
	let {
		baseEle
	} = this;
	dom.content(baseEle, '');
};

// 模块接口
export default E;
