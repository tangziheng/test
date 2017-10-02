var app=angular.module("app",["ui.router","homeModule","dMoudle","newsModule","allModule","otherModule","ink1Module","ink2Module","pencil1Module","pencil2Module"]);
/*引用ui.router（并非是angular1的路由），该模块与index.html中的ui-view关联，
 * 能将index.js里的所有返回内容都显示到与ui-view关联的元素中；
 * 引用dmoudle，将dmoudle模块中的返回值注入，在视图层中形成由2个a标签组成的导航栏；
 * */
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("home/all");//当什么也没匹配上的时候，跳转到home页面
	$stateProvider
	.state("home",{
		"url":"/home",//为自行设置的一个首页网址
		templateUrl:"views/home.html"//引用views/home.html里的东西
	})
	.state("home.news",{
		"url":"/news",
		templateUrl:"views/news.html",
		controller:"newsctrl"
	})
	.state("home.news.n1",{
		"url":"/n1",
		templateUrl:"views/n1.html",
		controller:"n1ctrl"
	})
	.state("home.news.n2",{
		"url":"/n2",
		templateUrl:"views/n2.html",
		controller:"n2ctrl"
	})
	.state("home.news.n3",{
		"url":"/n3",
		templateUrl:"views/n3.html",
		controller:"n3ctrl"
	})
	.state("home.news.n4",{
		"url":"/n4",
		templateUrl:"views/n4.html",
		controller:"n4ctrl"
	})
	.state("home.news.n5",{
		"url":"/n5",
		templateUrl:"views/n5.html",
		controller:"n5ctrl"
	})
	.state("home.index",{
		"url":"/index",
		templateUrl:"views/index.html",
		controller:"homectrl"
	})
	.state("home.all",{
		"url":"/all",
		templateUrl:"views/all.html",
		controller:"allctrl"
	})
	.state("home.other",{
		"url":"/other",
		templateUrl:"views/other.html",
		controller:"otherctrl"
	})
	.state("home.ink1",{
		"url":"/ink1",
		templateUrl:"views/ink1.html",
		controller:"ink1ctrl"
	})
	.state("home.ink2",{
		"url":"/ink2",
		templateUrl:"views/ink2.html",
		controller:"ink2ctrl"
	})
	.state("home.pencil1",{
		"url":"/pencil1",
		templateUrl:"views/pencil1.html",
		controller:"pencil1ctrl"
	})
	.state("home.pencil2",{
		"url":"/pencil2",
		templateUrl:"views/pencil2.html",
		controller:"pencil2ctrl"
	})
	
})
