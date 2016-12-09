export default {
	// 全屏时的 z-index
	zIndex: 10000,

	// 是否debug
	debug: true,

	// 编辑器宽度
	width: '100%',

	// 编辑器高度
	height: '400px',

	// 菜单吸顶：false - 不吸顶；number - 吸顶，值为top值
	menuFixed: 0,

	// 编辑源码时，过滤 javascript
	jsFilter: true,

	// 编辑器允许的标签
	legalTags: 'p,h1,h2,h3,h4,h5,h6,blockquote,table,ul,ol,pre',

	// 语言
	langType: 'zh-cn',

	// 语言包
	lang: {
		'zh-cn': {
			bold: '粗体',
			underline: '下划线',
			italic: '斜体',
			forecolor: '文字颜色',
			bgcolor: '背景色',
			strikethrough: '删除线',
			eraser: '清空格式',
			source: '源码',
			quote: '引用',
			fontfamily: '字体',
			fontsize: '字号',
			head: '标题',
			orderlist: '有序列表',
			unorderlist: '无序列表',
			alignleft: '左对齐',
			aligncenter: '居中',
			alignright: '右对齐',
			link: '链接',
			text: '文本',
			submit: '提交',
			cancel: '取消',
			unlink: '取消链接',
			table: '表格',
			emotion: '表情',
			img: '图片',
			video: '视频',
			'width': '宽',
			'height': '高',
			location: '位置',
			loading: '加载中',
			searchlocation: '搜索位置',
			dynamicMap: '动态地图',
			clearLocation: '清除位置',
			langDynamicOneLocation: '动态地图只能显示一个位置',
			insertcode: '插入代码',
			undo: '撤销',
			redo: '重复',
			fullscreen: '全屏',
			openLink: '打开链接'
		},

		// 英文
		en: {
			bold: 'Bold',
			underline: 'Underline',
			italic: 'Italic',
			forecolor: 'Color',
			bgcolor: 'Backcolor',
			strikethrough: 'Strikethrough',
			eraser: 'Eraser',
			source: 'Codeview',
			quote: 'Quote',
			fontfamily: 'Font family',
			fontsize: 'Font size',
			head: 'Head',
			orderlist: 'Ordered list',
			unorderlist: 'Unordered list',
			alignleft: 'Align left',
			aligncenter: 'Align center',
			alignright: 'Align right',
			link: 'Insert link',
			text: 'Text',
			submit: 'Submit',
			cancel: 'Cancel',
			unlink: 'Unlink',
			table: 'Table',
			emotion: 'Emotions',
			img: 'Image',
			video: 'Video',
			'width': 'width',
			'height': 'height',
			location: 'Location',
			loading: 'Loading',
			searchlocation: 'search',
			dynamicMap: 'Dynamic',
			clearLocation: 'Clear',
			langDynamicOneLocation: 'Only one location in dynamic map',
			insertcode: 'Insert Code',
			undo: 'Undo',
			redo: 'Redo',
			fullscreen: 'Full screnn',
			openLink: 'open link'
		}
	},

	// 菜单配置
	menus: [
		{
			bold: '粗体',
			underline: '下划线',
			italic: '斜体',
			forecolor: '文字颜色',
			bgcolor: '背景色',
			strikethrough: '删除线',
			fontfamily: '字体',
			fontsize: '字号',
			head: '标题',
			eraser: '清空格式'
		},
		{
			quote: '引用',
			orderlist: '有序列表',
			unorderlist: '无序列表',
			table: '表格'
		},
		{
			alignleft: '左对齐',
			aligncenter: '居中',
			alignright: '右对齐'
		},
		{
			link: '链接',
			emotion: '表情',
			img: '图片',
			video: '视频'
		},
		{
			undo: '撤销',
			redo: '重复',
			fullscreen: '全屏'
		}
	],

	// 颜色配置
	colors: {
		// 'value': 'title'
		'#880000': '暗红色',
		'#800080': '紫色',
		'#ff0000': '红色',
		'#ff00ff': '鲜粉色',
		'#000080': '深蓝色',
		'#0000ff': '蓝色',
		'#00ffff': '湖蓝色',
		'#008080': '蓝绿色',
		'#008000': '绿色',
		'#808000': '橄榄色',
		'#00ff00': '浅绿色',
		'#ffcc00': '橙黄色',
		'#808080': '灰色',
		'#c0c0c0': '银色',
		'#000000': '黑色',
		'#ffffff': '白色'
	},

	// 字体
	familys: [
		'宋体', '黑体', '楷体', '微软雅黑',
		'Arial', 'Verdana', 'Georgia',
		'Times New Roman', 'Microsoft JhengHei',
		'Trebuchet MS', 'Courier New', 'Impact', 'Comic Sans MS', 'Consolas'
	],

	// 字号
	fontsizes: {
		// 格式：'value': 'title'
		1: '12px',
		2: '13px',
		3: '16px',
		4: '18px',
		5: '24px',
		6: '32px',
		7: '48px'
	},

	// 表情包
	emotionsShow: 'icon', // 显示项，默认为'icon'，也可以配置成'value'
	emotions: {
		// 'default': {
		//     title: '默认',
		//     data: './emotions.data'
		// },
		'weibo': {
			title: '微博表情',
			data: [{
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
				value: '[草泥马]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
				value: '[神马]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
				value: '[浮云]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif',
				value: '[给力]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif',
				value: '[围观]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif',
				value: '[威武]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif',
				value: '[熊猫]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif',
				value: '[兔子]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif',
				value: '[奥特曼]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif',
				value: '[囧]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif',
				value: '[互粉]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif',
				value: '[礼物]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif',
				value: '[呵呵]'
			}, {
				icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif',
				value: '[哈哈]'
			}]
		}
	},

	// 百度地图的key
	mapAk: 'TVhjYjq1ICT2qqL5LdS8mwas',

	// 上传图片的配置
	// server地址
	uploadImgUrl: '',
	// 超时时间
	uploadTimeout: 20 * 1000,
	// 用于存储上传回调事件
	uploadImgFns: {},
	// 自定义上传图片的filename
	// uploadImgFileName : 'customFileName',

	// 自定义上传，设置为 true 之后，显示上传图标
	customUpload: false,
	// 自定义上传的init事件
	// customUploadInit : function () {....},

	// 自定义上传时传递的参数（如 token）
	uploadParams: {
		/* token: 'abcdef12345' */
	},

	// 自定义上传是的header参数
	uploadHeaders: {
		/* 'Accept' : 'text/x-json' */
	},

	// 隐藏网络图片，默认为 false
	hideLinkImg: false,

	// 是否过滤粘贴内容
	pasteFilter: true,

	// 是否粘贴纯文本，当 editor.config.pasteFilter ::: false 时候，此配置将失效
	pasteText: false,

	// 插入代码时，默认的语言
	codeDefaultLang: 'javascript',
};
