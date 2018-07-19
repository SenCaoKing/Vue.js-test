/* 声明式渲染 */
// ① 文本插值
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// ② 绑定元素特性
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '页面加载于' + new Date().toLocaleString()
	}
});

/* 条件与循环 */
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: '学习 Javascript' },
			{ text: '学习 Vue' },
			{ text: '整个牛项目' }
		]
	}
});

