// ;(function(Vue,VueRouter,axios){

	var routes = [{
		path:"/index",
		component:index
	},
	{
		path:"/mine",
		component:mine
	},
	{
		path:"/register",
		component:register
	},
	{
		path:"/search",
		component:search
	},
	{
		path:"/shoppingCar",
		component:shoppingCar
	},
	{
		path:"/shoppingAddr",
		component:shoppingAddr
	},
	{
		path:"/shoppingList",
		component:shoppingList
	},
	{
		path:"/submitOrder",
		component:submitOrder
	},
	{
		path:"/enter",
		component:enter
	},
	{
		path:"/enterOrder",
		component:enterOrder
	},
	{
		path:"/seckill",
		component:seckill
	},
	{
		path:"/allkind",
		component:allkind
	},
	{
		path: "/seek",
		component: seek
	},
	{
		path: "/sign",
		component: sign
	},{
		path: "/transportation",
		component: transportation
	},{
		path: "/man",
		component: man
	},{
		path: "/woman",
		component: woman
	},{
		path:"/shoppingContent",
		component:shoppingContent
	},

	{
		path:"/",
		redirect:"/index"
	}
	];
	// 创建路由实例
	var router = new VueRouter({
		routes:routes
	});
	// 创建vue实例
	var vue = new Vue({
		el:"#app",
		router:router,
		data:{
			personalInfo:{},
			isEnter:false,
			userList:{}
		},
		created(){
			axios.get("json/personalInfo.json",{
				params:{
				}
			}).then((res)=>{
				this.personalInfo = res.data;
			});
			axios.get("json/userList.json",{
				params:{
				}
			}).then((res)=>{
				this.userList = res.data;
			});
		},
	});
	var bus = new Vue();
// })(Vue,VueRouter,axios);