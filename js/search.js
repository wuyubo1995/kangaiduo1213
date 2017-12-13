;(function(){
	var vue = new Vue({
		el:"#app",
		data:{
			hotKey:[],
			searchList:[],
			historySearch:[]
		},
		methods:{
			addHistorySearch:function(e){
				var search,tag;
				localStorage.search==""?search=[]:search=localStorage.search.split(",");
				if($(e.currentTarget).find("p").length>0){
					tag = $(e.currentTarget).find("p");
				}
				else{
					tag = $(e.currentTarget);
				}
				if(search.indexOf(tag.text())==-1){
					search.push(tag.text());
				}
				vue.$data.historySearch = search;
				localStorage.search = search.join(",");
			}
		}
	});
	// 发送热门关键字请求
	$.ajax({
		url:"/GetHotKeyWords",
		dataType:"json",
		success:function(data){
			changeHotKey(data);
			$(".search-change").on("tap",function(){
				changeHotKey(data);
			});
		}
	});
	// 监听搜索输入框
	$(".search-search-text input").on({
		keyup:function(){
			// 搜索列表请求
			$.ajax({
				url:"/SearchPanGuWordResult",
				dataType:"json",
				data:{KeyWord:this.value},
				success:function(data){
					vue.$data.searchList = data;
				}
			});
		}
	});
	// 清除点击事件
	$(".search-search-text span").on("tap",function(){
		$(".search-search-text input").val("");
		vue.$data.searchList = [];
	})
	// 刷新关键字函数
	function changeHotKey(data){
		var arr = data.slice();
		vue.$data.hotKey=[];
		for(var n=0;n<8;n++){
			var index=randInt(arr.length-1,0);
			vue.$data.hotKey.push(arr[index]);
			arr.splice(index,1);
		}
	}
	/*------------------------产生b-a之间的随机整数--------------------*/
	function randInt(a,b){
		if(a<b){
			var temp=a;
			a=b;
			b=temp;
		}
		return parseInt(Math.random()*(a-b+1)+b);
	}
	// 本地存储
	// 首次进入页面或用户清空缓存后首次访问页面
	if(localStorage.search){
	}
	else{
		localStorage.search="";

	}
	var search;
	localStorage.search==""?search=[]:search=localStorage.search.split(",");
	vue.$data.historySearch = search;
	//清空历史搜索
	$(".search-clear-history").on("tap",function(){
		localStorage.search="";
		vue.$data.historySearch=[];
	});
	// 点击返回
	$(".search-back").on("tap",function(){
		history.back();
	});
	
})();