var allkind = {
		template:`
			<div id="allkind">
				<!-- 头部部分 -->
				<!-- 部件开始：header start -->
				<header class="n-header">
					<div class="n-logo"><router-link  to="/index"></router-link></div>
					<span class="header-t">全部分类</span>
					<div class="header-r">
						<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">1</span></router-link>
					</div>
				</header>
				<!-- header end -->
				<!-- 搜索部件 -->
				<!-- 产品页搜索 -->
				<div class="n-clearfix clear">
					<div class="search-box">
						<form>
							<div class="search_l">
								<input type="text" name="pageText" class="search_text" value="六味地黄丸" maxlength="38">
								<span class="relaicon"></span>
							</div>
							<div class="search_r">
								<a href="###">搜药</a>
							</div>
						</form>
					</div>
				</div>
				<!-- 分类 -->
				<div class="n-containall clear">
					<ul class="conainul clear">
						<li class="n_list" v-for="item in allkind">
							<div class="li_to"  @click="show">
								<div class="rgmess">
									<h2>{{item.til}}</h2>
									<p v-if="item.list.length >=3">{{item.list[0].name}}/{{item.list[1].name}}/{{item.list[2].name}}</p>
								</div>
							</div>
							<div class="fenlei clear hide">
								<!-- 部件开始 分组：类目部件 -->
								<router-link to="/shoppingList" v-for="item in item.list">{{item.name}}</router-link>
							</div>
						</li>
					</ul>
				</div>
				<!-- app下载 -->
				<div class="download_app">
					<div class="down_app">
						<div class="download-logo"></div>
						<div class="alogo">
							<p class="client-name">下载APP立送200元券</p>
							<p class="client-logon">一元秒杀  天天抢~</p>
				      	</div>
				      	<div class="open_now"><a href="###"><span>立即下载</span></a></div>
				      	<div class="close-btn-con">
					        <a href="###" class="close-btn-icon" @click="hide">x</a>
				      	</div>
					</div>
				</div>
				<!-- 底部 -->
				<footer class="n-footer clear">
					<div class="padd">
						<p>
							<span><router-link  to="/enter">登录</router-link></span>
							<span><router-link  to="/register">注册</router-link></span>
						</p>					
						<router-link  to="/index" class="backtp">首页</router-link>
					</div>
					<div class="fot clear">
						<ul>
							<li><a href="###">用药问答<span class="grycol">|</span></a></li>
							<li><a href="###">心愿单<span class="grycol">|</span></a></li>
							<li><a href="###">帮助<span class="grycol">|</span></a></li>
							<li><a href="###">反馈<span class="grycol">|</span></a></li>
							<li><a href="###">关于康爱多</a></li>
						</ul>
					</div>
					<div class="app_down">
						<a href="###"><p class="foot foorPHon"><span>400-8808-488</span></p></a>
						<a href="###"><p class="foot footwx"><span>关注康爱多微信立送200元</span></p></a>
					</div>
					<div class="app_down" id="app_dowml"><a href="###">下载iPhone客户端</a></div>
					<ul class="footmess clear">
						<li><span class="radius45">正</span>正品保障</li>
						<li><span class="radius45">隐</span>隐私配送</li>
						<li><span class="radius45">专</span>专业药师</li>
						<li><span class="radius45">付</span>货到付款</li>
					</ul>
					<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
				</footer>
			</div>
		`,
		data(){
			return {
				allkind:[]
			}
		},
		created(){
			axios.get("json/allkind.json", {
				params:{

				}
			}).then((res) =>{
				this.allkind = res.data
			})
		},
		methods: {
			allkinds(e){
				axjos.get("json/allkind.json", {
					params:{
						list: e.currentTarget.name
					}.then((res) =>{
						this.allkind = res.data
					})
				})
			},
			show(e){
				var tag;
				tag = e.currentTarget.nextElementSibling;
				$(tag).toggleClass("hide").parent().siblings().find(".fenlei").addClass("hide");
				$(tag).siblings().toggleClass("li_topa").parent().siblings().find(".li_topa").removeClass("li_topa");
			},
			hide(e){
				var app = e.currentTarget;
				$(app).parents(".download_app").hide();
			}
		}
	},
	seek = {
		template: `
			<div id="w-box">
				<!-- 头部 -->
				<header class="w-header">
					<div class="w-logo"><router-link  to="/index"></router-link></div>
					<span class="header-t">自助找药</span>
					<div class="header-r">
						<a class="header_ser" href="###"></a>
						<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">1</span></router-link>
					</div>
				</header>
				<!-- header end -->
				<!-- 导航菜单 -->
				<div class="w-nav clear">
					<ul>
						<li class="fir_nav"><a href="###">按人群<span>|</span></a></li>
						<li><a href="###">按科室<span>|</span></a></li>
						<li><a href="###">按品牌</a></li>
					</ul>
				</div>
				<div id="a_box">
					<!-- 男人 -->
					<div class="w-info clear" id="coman">
						<div class="coning">
							<img src="http://res3.360kad.com/theme/mobile/img//back_man.png">
						</div>
						<div class="w-contain_nav">
							<div>
								<a href="###" class="contain_fir">男人</a>
								<a href="###" @click="wom">女人</a>
								<a href="###" @click="all">综合</a>
							</div>
						</div>
						<div class="conmass">
					        <span class="select0" @click="cik">头部</span>
					        <span class="select1" @click="cik">脸部</span>
					        <span class="select2" @click="cik">肚子</span>
					        <span class="select3" @click="cik">肝</span>
					        <span class="select4" @click="cik">生殖器</span>
					        <span class="select5" @click="cik"> <i>生殖性病</i></span>
					        <span class="select6" @click="cik">性生活</span>
					        <span class="select7" @click="cik">脚</span>
					        <span class="select8" @click="cik">肾</span>
					        <span class="select9" @click="cik"> <i>泌尿系统</i></span>
					        <span class="select10" @click="cik">前列腺</span>
					        <span class="select11" @click="cik">腋下</span>
					        <span class="select12" @click="cik">鼻子</span>
					    </div>
					</div>
					<!-- 女人 -->
					<div class="w-info clear" id="noman">
						<div class="coning">
							<img src="http://res1.360kad.com/theme/mobile/img//back_woman.png">
						</div>
						<div class="w-contain_nav">
							<div>
								<a href="###" @click="mans">男人</a>
								<a href="###"  class="contain_fir">女人</a>
								<a href="###" @click="all">综合</a>
							</div>
						</div>
						<div class="woman">
					        <span class="select0" @click="cik">头部</span>
					        <span class="select1" @click="cik">脸部</span>
					        <span class="select2" @click="cik">子宫</span>
					        <span class="select3" @click="cik">生殖器</span>
					        <span class="select4" @click="cik"><i>生殖性病</i></span>
					        <span class="select5" @click="cik">性生活</span>
					        <span class="select6" @click="cik">肾</span>
					        <span class="select7" @click="cik">肚子</span>
					        <span class="select8" @click="cik">手</span>
					        <span class="select9" @click="cik">胸部</span>
					    </div>
					</div>
					<!-- 综合 -->
					<div class="w-info clear" id="conall">
						<div class="coning">
							<img src="http://res1.360kad.com/theme/mobile/img//back_znhe.png">
						</div>
						<div class="w-contain_nav">
							<div>
								<a href="###" @click="mans">男人</a>
								<a href="###" @click="wom">女人</a>
								<a href="###" class="contain_fir">综合</a>
							</div>
						</div>
						<div class="mconmass">
						    <span class="select0" @click="cik">眼睛</span>
						    <span class="select1" @click="cik">口</span>
						    <span class="select2" @click="cik">鼻子</span>
						    <span class="select3" @click="cik">耳朵</span>
						    <span class="select4" @click="cik"><i>呼吸系统</i></span>
						    <span class="select5" @click="cik">肠胃道</span>
						    <span class="select6" @click="cik">脚</span>
						    <span class="select7" @click="cik">头部</span>
						    <span class="select8" @click="cik">颈部</span>
						    <span class="select9" @click="cik">皮肤</span>
						    <span class="select10" @click="cik">心</span>
						    <span class="select11" @click="cik">血液</span>
						    <span class="select12" @click="cik">腰</span>
						    <span class="select13" @click="cik">腿</span>
						</div>
					</div>
				</div>
				<!-- 筛选条件 -->
				<!-- 头部 -->
				<div class="condition0 clear hd">
					<ul class="conainul">
						<li class="fatherli" v-for="item in seek">
							<span class="fonblue">{{item.til}}</span>
							<div class="fen">
								<div><a href="###" v-for="item in item.all">{{item.name}}</a></div>								
							</div>
							<div class="father" v-for="item in item.list"><span><a href="###">{{item.name}}</a></span></div>	
						</li>
					</ul>
				</div>
				<!-- 底部 -->
				<footer class="n-footer clear">
					<div class="padd">
						<p>
							<span><router-link  to="/enter">登录</router-link></span>
							<span><router-link  to="/register">注册</router-link></span>
						</p>					
						<router-link  to="/index" class="backtp">首页</router-link>
					</div>
					<div class="fot clear">
						<ul>
							<li><a href="###">用药问答<span class="grycol">|</span></a></li>
							<li><a href="###">心愿单<span class="grycol">|</span></a></li>
							<li><a href="###">帮助<span class="grycol">|</span></a></li>
							<li><a href="###">反馈<span class="grycol">|</span></a></li>
							<li><a href="###">关于康爱多</a></li>
						</ul>
					</div>
					<div class="app_down">
						<a href="###"><p class="foot foorPHon"><span>400-8808-488</span></p></a>
						<a href="###"><p class="foot footwx"><span>微信下单专享50元限时特惠</span></p></a>
					</div>
					<ul class="footmess clear">
						<li><span class="radius45">正</span>正品保障</li>
						<li><span class="radius45">隐</span>隐私配送</li>
						<li><span class="radius45">专</span>专业药师</li>
						<li><span class="radius45">付</span>货到付款</li>
					</ul>
					<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
				</footer>
				<div class="black" @click="hide"></div>
			</div>
		`,
		data(){
			return {
				seek: []
			}
		},
		created(){
			axios.get("json/seek.json",{
				params:{
					
				}
			}).then((res) =>{
				this.seek = res.data
			})
		},
		methods:{
			medicine(e){
				axios.get("json/seek.json",{
					params:{
						list: e.currentTarget.name,
						all: e.currentTarget.name
					}.then((res)=>{
						this.seek = res.data
				
					})					
				})
			},
			cik(){
				$(".condition0, .black").show();
			},
			hide(){
				$(".condition0, .black").hide()
			},
			mans(){
				$("#coman").show().siblings().hide();
			},
			wom(){
				$("#noman").show().siblings().hide();
			},
			all(){
				$("#conall").show().siblings().hide();
			}
		}
	},
	sign = {
		template: `
			<div id="s-box">
				<!-- 头部 -->
				<header class="s-header">
					<div class="s-logo"><router-link  to="/index"></router-link></div>
					<span class="header-t">每日签到</span>
					<div class="header-r">
						<a class="header_ser" href="###"></a>
						<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">1</span></router-link>
					</div>
				</header>
				<!-- header end -->
				<div class="s-nav">
					<div class="s_img">
						<img src="img/mrqdIimg.jpg">
					</div>
					<div class="sign_box">
						<p>今天是<span id="serdate"><i id="ServeYear">&nbsp;2017年</i><i id="ServeMonth">&nbsp;11月</i><i id="ServeDate">&nbsp;9日&nbsp;</i></span>，我要签到：</p>
						<a href="###" @click="shop">立即签到</a>
					</div>
					<div class="rule_box">
						<p>活动规则：</p>
						<p>1.登录才能签到</p>
						<p>2.每次登录后点击签到按钮才能送积分</p>
						<p>3.每天只送一次，积分为5分</p>
						<p>4.积分自领取之日起1年内有效</p>
					</div>
				</div>
				<!-- 底部 -->
				<footer class="n-footer clear">
					<div class="padd">
						<p>
							<span><router-link  to="/enter">登录</router-link></span>
							<span><router-link  to="/register">注册</router-link></span>
						</p>					
						<router-link  to="/index" class="backtp">首页</router-link>
					</div>
					<div class="fot clear">
						<ul>
							<li><a href="###">用药问答<span class="grycol">|</span></a></li>
							<li><a href="###">心愿单<span class="grycol">|</span></a></li>
							<li><a href="###">帮助<span class="grycol">|</span></a></li>
							<li><a href="###">反馈<span class="grycol">|</span></a></li>
							<li><a href="###">关于康爱多</a></li>
						</ul>
					</div>
					<div class="app_down">
						<a href="###"><p class="foot foorPHon"><span>400-8808-488</span></p></a>
						<a href="###"><p class="foot footwx"><span>关注康爱多微信立送200元</span></p></a>
					</div>
					<div class="app_down" id="app_dowml"><a href="###">下载iPhone客户端</a></div>
					<ul class="footmess clear">
						<li><span class="radius45">正</span>正品保障</li>
						<li><span class="radius45">隐</span>隐私配送</li>
						<li><span class="radius45">专</span>专业药师</li>
						<li><span class="radius45">付</span>货到付款</li>
					</ul>
					<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
				</footer>
				<div class="black"></div>
				<div class="poput">
					<a href="###" class="poput_clik"  @click="shut">x</a>
					<p class="remove"><span></span>请先登录</p>
					<p class="btn"><router-link  to="/enter" class="ok">确定</router-link></p>
					
				</div>
			</div>
		`,
		methods: {
			shop(){
				$(".black, .poput").show();
			},
			shut(){
				$(".black, .poput").hide();
			}
		}
	},
	transportation = {
		template: `
			<div id="t-box">
				<!-- 头部 -->
				<header class="t-header">
					<span class="header_l"><a href="###">首页</a></span>
					<span class="header_t">物流查询</span>
				</header>
				<!-- 内容 -->
				<div class="gird">
					<p class="title">通过输入订单的收货人手机号码进行查询</p>
					<div class="search clear">
						<input type="text" placeholder="输入收货人手机号码" class="se_input se-tet">
						<div class="se_btn"></div>
					</div>
					<div class="code">
						<input type="text" maxlength="4" class="co_input se-tet" placeholder="输入验证码">
						<div class="co_img"><img id="imgVerify" src="img/w1.jpg"></div>
					</div>
					<div class="btn-submit disabled">查询</div>
				</div>
				<div class="grid-empty">
		            <p>该手机号码没有在送货中的订单 !</p>
		        </div>
				<div class="grid-info"></div>
				<footer class="t-foo">
					<ul class="footmess clear">
						<li><span class="radius45">正</span>正品保障</li>
						<li><span class="radius45">隐</span>隐私配送</li>
						<li><span class="radius45">专</span>专业药师</li>
						<li><span class="radius45">付</span>货到付款</li>
					</ul>
					<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
				</footer>
			</div>
		`
	},
	man = {
		template: `
			<div id="m-box">
				<!-- 头部 -->
				<header class="m-header">
					<div class="m-logo"><a href="###"></a></div>
					<span class="header-t">男科专题</span>
					<div class="header-r">
						<a class="header_ser" href="###"></a>
						<a href="###" class="header_shop"><span class="shop-num">0</span></a>
					</div>
				</header>
				<!-- header end -->
				<!-- nav -->
				<div class="m-nav">
					<ul class="swiper">
						<li class="licur"><span class="redbg"></span>肾虚肾亏</li>
						<li><span></span>阳痿早泄</li>
						<li><span></span>男性不育</li>
						<li><span></span>前列腺疾病</li>
						<li><span></span>泌尿疾病</li>
						<li><span></span>防脱发生发</li>
						<li><span></span>男性保健</li>
						<li><span></span>兴趣生活</li>
					</ul>
				</div>
				<!-- 内容 -->
				<div class="m-info">
					<div class="m-img">
						<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_01.jpg">
						<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_02.jpg">
						<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_03.jpg">
						<div class="rel">
							<ul class="clear">
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
							</ul>
							<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_04.jpg">
						</div>
						<div class="rel">
							<ul class="clear">
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
								<li><a href="###"></a></li>
							</ul>
							<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_05.jpg">
						</div>
						<div class="clum">
							<!-- 肾虚 -->
							<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_06.jpg">
							<div class="pro">
								<ul>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
									<li>
										<a href="###" class="pro_img"><img src="imgs/a1.jpg"></a>
										<div class="pro_tet">
											<p class="name"><a href="###">星辰牌 龟鹿补肾片 0.43g*12片*4板*5小盒</a></p>
											<p class="price">
												<span class="new-price">￥498</span>
												<span class="older-price">￥526</span>
											</p>
										</div>
										<a href="###" class="miao-btn">立即购买</a>
									</li>
								</ul>
								<div class="clear"></div>
							</div>
						</div>
						<a href="###"><img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_22.jpg"></a>
						<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_23.jpg">
					</div>
					<footer class="m-foot">
						<ul>
							<li><a href="###">登录</a></li>
							<li><a href="###">注册</a></li>
							<li><a href="###">首页</a></li>
							<li><a href="###">下载客户端</a></li>
						</ul>
					</footer>
				</div>
			</div>	
		`
	},
	woman = {
		template: `
			<div id="y-box">
				<!-- 头部 -->
				<header class="y-header">
					<div class="y-logo"><a href="###"></a></div>
					<span class="header-t">妇科专题</span>
					<div class="header-r">
						<a class="header_ser" href="###"></a>
						<a href="###" class="header_shop"><span class="shop-num">0</span></a>
					</div>
				</header>
				<!-- header end -->
				<!-- nav -->
				<div class="m-nav">
					<ul class="swiper">
						<li class="licur"><span class="redbg"></span>减肥</li>
						<li><span></span>更年期</li>
						<li><span></span>阴道炎</li>
						<li><span></span>月经不调</li>
						<li><span></span>避孕药</li>
						<li><span></span>乳腺增生</li>
						<li><span></span>色斑</li>
						<li><span></span>气血双补</li>
						<li><span></span>白带异常</li>
						<li><span></span>痛经</li>
						<li><span></span>贫血</li>
						<li><span></span>子宫肿瘤</li>
					</ul>
				</div>
				<!-- 内容 -->
				<div class="y-info">
					<!-- 头部宣传 -->
					<div class="tb">
						<img src="http://res3.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img1.jpg" alt="">
						<img src="http://res4.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img2.jpg" alt="">
					</div>
					<!-- 频道宣传 -->
					<div class="pd">
						<div class="pd_one">
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<img src="http://res1.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img3.jpg" alt="">
						</div>
						<div class="pd_two">
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<img src="http://res4.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img4.jpg" alt="">
						</div>
						<div class="pd_three">
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<a href="###"></a>
							<img src="http://res1.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img5.jpg" alt="">
						</div>
					</div>
					<!-- 减肥 -->
					<div class="lose-wei">
						<div class="clum"><img src="http://res2.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img6.jpg" alt=""></div>
						<div class="drug">
							<ul class="drug_item clear">
								<li>
									<a href="###" class="pro_img"><img class="img" src="http://image.360kad.com/group1/M00/AB/E0/CgAgEVk-oleAc62DAAGQ46VjBgk174.jpg_180x180.jpg"></a>
									<div class="pro_tet">
										<p class="pro-name text-elli">雅塑 奥利司他胶囊 0.12g*18粒*2板</p>
										<p class="pro-adv text-elli">【双11狂欢】低至279元，满6盒加111.11元带走原品，满10盒赠价值196元减肥美容礼包（奥利司他+维生素C+蜂蜜），数量有限！</p>
										<p class="price">
											<span class="new-price">￥389</span>起
											<span class="older-price">￥498</span>
										</p>
									</div>
									<a href="###" class="miao-btn">立即购买</a>
								</li>
								<li>
									<a href="###" class="pro_img"><img class="img" src="http://image.360kad.com/group1/M00/AB/E0/CgAgEVk-oleAc62DAAGQ46VjBgk174.jpg_180x180.jpg"></a>
									<div class="pro_tet">
										<p class="pro-name text-elli">雅塑 奥利司他胶囊 0.12g*18粒*2板</p>
										<p class="pro-adv text-elli">【双11狂欢】低至279元，满6盒加111.11元带走原品，满10盒赠价值196元减肥美容礼包（奥利司他+维生素C+蜂蜜），数量有限！</p>
										<p class="price">
											<span class="new-price">￥389</span>起
											<span class="older-price">￥498</span>
										</p>
									</div>
									<a href="###" class="miao-btn">立即购买</a>
								</li>
								<li>
									<a href="###" class="pro_img"><img class="img" src="http://image.360kad.com/group1/M00/AB/E0/CgAgEVk-oleAc62DAAGQ46VjBgk174.jpg_180x180.jpg"></a>
									<div class="pro_tet">
										<p class="pro-name text-elli">雅塑 奥利司他胶囊 0.12g*18粒*2板</p>
										<p class="pro-adv text-elli">【双11狂欢】低至279元，满6盒加111.11元带走原品，满10盒赠价值196元减肥美容礼包（奥利司他+维生素C+蜂蜜），数量有限！</p>
										<p class="price">
											<span class="new-price">￥389</span>起
											<span class="older-price">￥498</span>
										</p>
									</div>
									<a href="###" class="miao-btn">立即购买</a>
								</li>
							</ul>
							<div class="clear"></div>
						</div>
					</div>
				</div>
			</div>
		`
	};