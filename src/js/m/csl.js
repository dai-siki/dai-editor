/* 错误提示（console
 ---------------------------------------------------------------*/
const emptyFn = function() {},
	prefix = '【DaiEditor】',
	csl = {
		log(msg) {
			console.log(prefix + msg);
		},
		error(msg) {
			console.error(prefix + msg);
		},
		info(msg) {
			console.info(prefix + msg);
		},
		warn(msg) {
			console.warn(prefix + msg);
		}
	};

export default function(isAllowed) {
	if (isAllowed) {
		return csl;
	} else {
		return {
			log: emptyFn,
			error: emptyFn,
			info: emptyFn,
			warn: emptyFn
		};
	}
};
