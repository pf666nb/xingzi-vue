<template>
    <footer>

        <div class="centers">

            <div class="footer-top">

                <ul>

                    <li><a href="#"><i class="fa fa-wrench"></i>预约维修服务</a><span>|</span></li>

                    <li><a href="#"><i class="fa fa-rotate-right"></i>7天无理由退货</a><span>|</span></li>

                    <li><a href="#"><i class="fa fa-refresh"></i>15天免费换货</a><span>|</span></li>

                    <li><a href="#"><i class="fa fa-gift"></i>满150元包邮</a><span>|</span></li>

                    <li><a href="#"><i class="fa fa-map-marker"></i>520余家售后服务</a></li>

                </ul>

            </div>

            <hr>

            <div class="footer-con">

                <div class="footer-con-l">

                    <ul>

                        <li>帮助中心

                            <ul>

                                <li><a href="#">账户管理</a></li>

                                <li><a href="#">购物指南</a></li>

                                <li><a href="#">订单操作</a></li>

                            </ul>

                        </li>

                        <li>服务支持

                            <ul>

                                <li><a href="#">售后服务</a></li>

                                <li><a href="#">自助服务</a></li>

                                <li><a href="#">相关下载</a></li>

                            </ul>

                        </li>

                        <li>线下门店

                            <ul>

                                <li><a href="#">杏子之家</a></li>

                                <li><a href="#">服务网点</a></li>

                                <li><a href="#">授权体验店</a></li>

                            </ul>

                        </li>

                        <li>关于杏子

                            <ul>

                                <li><a href="#">了解杏子</a></li>

                                <li><a href="#">加入杏子</a></li>

                                <li><a href="#">投资者关系</a></li>

                            </ul>

                        </li>

                        <li>关注我们

                            <ul>

                                <li><a href="#">新浪微博</a></li>

                                <li><a href="#">官方微信</a></li>

                                <li><a href="#">联系我们</a></li>

                            </ul>

                        </li>

                        <li>特色服务

                            <ul>

                                <li><a href="#">F码通道</a></li>

                                <li><a href="#">礼物码</a></li>

                                <li><a href="#">防伪查询</a></li>

                            </ul>

                        </li>

                    </ul>

                </div>

                <div class="footer-con-r">

                    <h3>400-100-5678</h3>

                    <span>周一至周日&nbsp;8:00-18:00<br/>(仅收市话费)</span>

                    <p><button><a href="#"><i class="fa fa-commenting"></i>联系客服</a></button></p>

                </div>

            </div>

            <div class="footer-but">

                <div class="footer-but1"><img src="D:/my-mi/images/footlogo.png" alt=""></div>

                <div class="footer-but2">

                    <ul>

                        <li><a href="#">杏子商城</a><span>|</span></li>

                        <li><a href="#">MIUI</a><span>|</span></li>

                        <li><a href="#">米家</a><span>|</span></li>

                        <li><a href="#">米聊</a><span>|</span></li>

                        <li><a href="#">多看</a><span>|</span></li>

                        <li><a href="#">游戏</a><span>|</span></li>

                        <li><a href="#">路由器</a><span>|</span></li>

                        <li><a href="#">米粉卡</a><span>|</span></li>

                        <li><a href="#">政企服务</a><span>|</span></li>

                        <li><a href="#">杏子天猫店</a><span>|</span></li>

                        <li><a href="#">隐私政策</a><span>|</span></li>

                        <li><a href="#">商城用户协议</a><span>|</span></li>

                        <li><a href="#">账号协议</a><span>|</span></li>

                        <li><a href="#">问题反馈</a><span>|</span></li>

                        <li><a href="#">廉政举报</a><span>|</span></li>

                        <li><a href="#">诚信合规</a><span>|</span></li>

                        <li><a href="#">Select Region</a></li>

                    </ul>

                    <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</p>

                    <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告 </p>

                    <p>增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证 </p>

                    <p>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>

                    <div style="margin-top: 15px">

                        <ul>

                            <li><a href="#"><img src="src/assets/truste.png" alt="隐私认证" style="width: 85px;"></a></li>

                            <li><a href="#"><img src="src/assets/v-logo-2.png" alt="诚信网站"></a></li>

                            <li><a href="#"><img src="src/assets/icon3.png" alt="可信网站"></a></li>

                            <li><a href="#"><img src="src/assets/check.png" alt="保障中心"></a></li>

                            <li><a href="#"><img src="src/assets/chekc2.png" alt="放心消费"></a></li>

                        </ul>

                    </div>

                </div>


            </div>

        </div>

    </footer>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    /*通用设置*/



    li{

        list-style: none;

    }

    a{

        text-decoration: none;

    }

    .clear{

        clear: both;

    }

    .centers{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 120rem;
        align-items: center;
        margin:0 auto;

        overflow: hidden;

    }

    /*底部*/

    footer{

        width: 100%;

        background-color: #fff;

    }

    .footer-top{

        height:100px;

    }

    .footer-top ul li{

        float: left;

        height: 60px;

        line-height: 60px;

        margin:20px 0px;

    }

    .footer-top ul li a{

        display:inline-block;

        color: #888;

        height: 50px;

        line-height: 50px;

        margin:5px 0px;

        font-size: 20px;

    }

    .footer-top ul li span{

        display: inline-block;

        color: #ccc;

        font-size: 20px;

        height: 50px;

        line-height: 50px;

        margin:0px 59.5px;

    }

    .footer-top ul li a:hover{

        color: #FF6F28;

    }

    .footer-con{

        overflow: hidden;

        padding-bottom: 30px;

    }

    .footer-con-l{

        width: 1000px;

        float: left;

    }



    .footer-con-l>ul{

        margin-top: 20px;

        overflow: hidden;

        border-right: 1px solid #ccc;

    }

    .footer-con-l>ul>li{

        font-size: 17px;

        margin-top: 30px;

        margin-right:95px;

        color: #666;

        float: left;

    }

    .footer-con-l>ul>li ul{

        margin-top: 15px;

        margin-bottom: 20px;

    }

    .footer-con-l>ul>li ul li a{

        color: #888;

        display: block;

        font-size: 14px;

        margin-top: 15px;

    }

    .footer-con-l>ul>li ul li a:hover{

        color: #FF6F28;

        font-size: 16px;

    }

    .footer-con-r{

        width: 225px;

        margin-top: 20px;

        float: left;



    }

    .footer-con-r h3{

        margin-top: 30px;

        color: #FF6F28;

        font-size: 20px;

        text-align: center;

    }

    .footer-con-r span{

        display: block;

        color: #888;

        font-size: 12px;

        text-align: center;

        margin:15px 0px;

    }

    .footer-con-r p{

        text-align: center;

    }

    .footer-con-r p button{

        border:1px solid #ff6f28;

    }

    .footer-con-r p button a{

        display: block;

        font-weight: bold;

        color: #ff6f28;

        width: 100px;

        height: 30px;

        line-height: 30px;

        background: #fff;

    }

    .footer-con-r p button a:hover{

        background:  #ff6f28;

        color: #fff;

    }

    .footer-but{

        background: #ccc;

        padding: 30px 0px;

    }

    .footer-but1{

        float: left;

    }

    .footer-but2{

        padding-left:5px;

        display: inline-block;

    }

    .footer-but2 ul li{

        float: left;

    }

    .footer-but2>ul>li span{

        color: #666;

        font-size: 14px;

    }

    .footer-but2>ul>li a{

        font-size: 14px;

        padding: 0px 5px;

        color: #888;

    }

    .footer-but2>ul>li a:hover{

        color: red;

    }

    .footer-but2 p{

        margin-top: 5px;

        font-size: 12px;

        color: #888;

    }
</style>
