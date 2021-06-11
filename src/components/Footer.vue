<template>

    <div class="site-footer">
        <div class="footer-related">
            <div class="footer-article w1100">
                <dl class="contact clearfix">
                    <dt class="fl">
                        <i class="iconfont"></i>
                    </dt>
                    <dd class="fl">
                        <p class="text">人工客服</p>
                        <p class="tel">400-xxx-xx13</p>
                        <a href="##">在线咨询</a>
                    </dd>
                </dl>
                <dl class="col-article">
                    <dt>帮助中心</dt>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">账户管理</a></dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">购物指南</a></dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">订单操作</a></dd>
                </dl>
                <dl class="col-article">
                    <dt>关注我们</dt>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">新浪微博</a></dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">官方微信</a></dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">联系我们</a></dd>
                </dl>
                <dl class="col-article">
                    <dt>线下门店</dt>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">NEWBEE TOWN</a>
                    </dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">服务网点</a></dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">授权体验店</a></dd>
                </dl>
                <dl class="col-article">
                    <dt>关于杏子</dt>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">了解杏子</a>
                    </dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">加入杏子</a>
                    </dd>
                    <dd><a rel="nofollow" href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">捐赠维护</a>
                    </dd>
                </dl>
            </div>
            <div class="footer-links w1100">
                <p>友情链接：</p>
                <div class="clearfix">
                    <a href="/index">杏子商城</a>
                    <a href="/admin">后台管理系统</a>
                    <a href="https://edu.csdn.net/course/detail/26258">课程视频</a>
                    <a href="https://juejin.im/book/5da2f9d4f265da5b81794d48/section/5da2f9d6f265da5b794f2189">课程文档</a>
                    <a href="https://gitee.com/newbee-ltd/newbee-donate">捐赠</a>
                    <a href="https://github.com/newbee-ltd/newbee-mall/issues">问题反馈</a>
                    <a href="https://github.com/newbee-ltd/newbee-mall">GitHub 地址</a>
                    <a href="https://gitee.com/newbee-ltd/newbee-mall">码云Gitee 地址</a>
                </div>
            </div>
            <div class="footer-info w1100">
                <div class="info-text w1100">
                    <p><a href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">杏子商城 &nbsp; | &nbsp;
                        Powered by coderwu&nbsp;
                        | &nbsp;</a>
                        &nbsp;QQ：1340701723&nbsp;&nbsp;
                    </p>
                    <p><a href="https://gitee.com/newbee-ltd/newbee-mall" target="_blank">Copyright ©xingzi.ltd All
                        Rights
                        Reserved.&nbsp; | &nbsp; 浙ICP备17008806号-5 </a></p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style-type: none;
        font-family: Microsoft Yahei;
    }
    @media screen and (max-width: 1225px) {
        body {
            width: 1226px;
        }
    }
    img {
        border: none;
    }
    a {
        border: none;
        text-decoration: none;
        color: #000;
    }
    .border {
        border: 1px solid #f00;
    }
    .center {
        margin: 0 auto;
    }
    .w {
        width: 1226px;
        margin: 0 auto;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear {
        clear: both;
    }
    .clearfix::after {
        content: "";
        height: 0;
        display: block;
        clear: both;
        visibility: hidden;
    }
    .mt20 {
        margin-top: 20px;
    }
    .mt10 {
        margin-top: 10px;
    }
    .ml20 {
        margin-left: 20px;
    }
    .ml40 {
        margin-left: 40px;
    }
    .mr40 {
        margin-right: 40px;
    }
    .mb20 {
        margin-bottom: 20px;
    }
    .border2 {
        border: 2px solid #ff6700;
    }
    .ft20 {
        font-size: 20px;
    }
    .ftbc {
        color: #ff6700;
        font-weight: bold;
    }
    .pr {
        padding-right: 40px;
    }
    .h3 {
        font-size: 22px;
        font-weight: bold;
    }
    .all-sort-list {
        position: relative;
        float: left;
        width: 228px;
        border-top: none;
        background: #000;
        height: 100%;
    }

    .all-sort-list .item {
        height: 49px;
        border-top: 1px solid #FFFFFF;
    }

    .all-sort-list .item.bo {
        border-top: none;
    }

    .all-sort-list .item h3 {
        height: 30px;
        line-height: 45px;
        font-size: 15px;
        font-weight: normal;
        width: 199px;
        overflow: hidden;
    }

    .all-sort-list .item span {
        padding: 0px 5px;
        color: #1baeae;
        font-family: "\5B8B\4F53";
    }

    .all-sort-list .item a {
        color: #fff;
        text-decoration: none;
    }

    .all-sort-list .item a:hover {
        font-weight: bold;
        color: #1baeae;
    }

    .all-sort-list .item-list {
        display: none;
        position: absolute;
        width: 495px;
        min-height: 200px;
        _height: 200px;
        background: #FFF;
        left: 210px;
        box-shadow: 0px 0px 10px #DDDDDD;
        border: 1px solid #DDD;
        top: 3px;
        z-index: 10;
    }

    .item-list .subitem {
        float: left;
        width: 477px;
        padding: 0px 4px 0px 8px;
    }

    .item-list .subitem dl {
        border-top: 1px solid #EEE;
        padding: 6px 0px;
        overflow: hidden;
        zoom: 1;
    }

    .item-list .subitem .fore1 {
        border-top: none;
    }

    .item-list .subitem dt {
        float: left;
        width: 84px;
        line-height: 20px;
        text-align: left;
        padding: 3px 6px 0px 0px;
        font-weight: 700;
        color: #1baeae;
    }

    .item-list .subitem dt a {
        color: #1baeae;
        text-decoration: underline;
    }

    .item-list .subitem dd {
        float: left;
        width: 415px;
        padding: 3px 0px 0px;
        overflow: hidden;
    }

    .item-list .subitem dd em {
        float: left;
        height: 14px;
        line-height: 14px;
        padding: 0px 8px;
        margin-top: 5px;
        border-left: 1px solid #CCC;
    }

    .item-list .subitem dd em a, .item-list .cat-right dd a {
        color: #666;
        text-decoration: none;
    }

    .item-list .subitem dd em a:hover, .item-list .cat-right dd a:hover {
        font-weight: normal;
        text-decoration: underline;
    }

    #content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }

    #content #banner {
        width: 1226px;
        flex-shrink: 0;
        height: 447px;
    }

    #content #banner #cate_menu {
        width: 234px;
        height: 100%;
        background-color: #0c0c13;
        box-sizing: border-box;
        position: relative;
    }

    #content #banner #cate_menu > ul {
        position: relative;
        padding: 20px 0;
    }

    #content #banner #cate_menu > ul:hover li:last-of-type {
        display: block;
    }

    #content #banner #cate_menu > ul > li {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 30px;
        font-size: 14px;
    }

    #content #banner #cate_menu > ul > li:last-of-type {
        display: none;
        padding: 0;
        width: 800px;
        height: 461px;
        z-index: 2;
        position: absolute;
        left: 100%;
        top: 0;
    }

    #content #banner #cate_menu > ul > li:hover {
        background-color: #1baeae;
    }

    #content #banner #cate_menu > ul > li a {
        color: #fff;
        margin-left: 10px;
    }

    #content #banner #cate_menu > ul > li .pop {
        box-shadow: 2px 3px 5px #ccc;
        width: 800px;
        height: 461px;
        background-color: #fff;
        padding: 20px 0 0 20px;
        font-size: 12px;
        box-sizing: border-box;
    }

    #content #banner #cate_menu > ul > li .pop > li {
        margin-bottom: 10px;
        white-space: nowrap;
    }

    #content #banner #cate_menu > ul > li .pop > li .title {
        float: left;
        width: 70px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
    }

    #content #banner #cate_menu > ul > li .pop > li .title .iconfont {
        font-size: 12px;
    }

    #content #banner #cate_menu > ul > li .pop > li .list {
        float: left;
        max-width: 700px;
    }

    #content #banner #cate_menu > ul > li .pop > li .list li {
        float: left;
        margin-top: 2px;
        margin-bottom: 5px;
    }

    #content #banner #cate_menu > ul > li .pop > li .list li a {
        display: block;
        height: 16px;
        margin-left: 0;
        line-height: 16px;
        white-space: nowrap;
        padding: 0 10px;
        text-align: center;
        color: #666;
        border-left: 1px solid #e0e0e0;
    }

    #content #banner #cate_menu > ul > li .pop > li .list li a:hover {
        color: #1baeae;
    }

    #content #banner .swiper-container {
        width: 998px;
        height: 100%;
    }

    #content #banner .swiper-container .swiper-wrapper .swiper-slide img {
        width: 100%;
        height: 100%;
    }

    #content #sub_banner {
        display: flex;
        width: 1226px;
        flex-shrink: 0;
        justify-content: space-between;
        height: 295px;
        margin-top: 15px;
    }

    #content #sub_banner .selector {
        width: 234px;
        height: 100%;
    }

    #content #sub_banner .selector .sidebar {
        float: left;
        display: block;
        width: 78px;
        height: 85px;
    }

    #content #sub_banner .selector .sidebar img {
        opacity: 0.8;
    }

    #content #sub_banner .selector .sidebar img:hover {
        opacity: 1;
    }

    #content #sub_banner .hot-image {
        width: 295px;
        height: 295px;
    }

    #content #sub_banner .hot-image a {
        display: block;
        width: 100%;
        height: 100%;
    }

    #content #sub_banner .hot-image a img {
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

    #content #sub_banner .hot-image a img:hover {
        opacity: 1;
    }

    #content #flash {
        width: 1226px;
        flex-shrink: 0;
        height: 398px;
        margin-top: 20px;
    }

    #content #flash > h2 {
        height: 58px;
        line-height: 58px;
    }

    #content #flash ul {
        display: flex;
        justify-content: space-between;
    }

    #content #flash ul li {
        width: 234px;
        height: 352px;
        background-color: #fafafa;
        border-top: 1px solid #ffa500;
    }

    #content #flash ul li:nth-child(2) {
        border-color: #008000;
    }

    #content #flash ul li:nth-child(3) {
        border-color: #00f;
    }

    #content #flash ul li:nth-child(4) {
        border-color: #f00;
    }

    #content #flash ul li:nth-child(5) {
        border-color: #008080;
    }

    #content #flash ul li a {
        display: block;
        font-size: 14px;
        text-align: center;
    }

    #content #flash ul li a img {
        width: 160px;
        height: 160px;
        opacity: 0.8;
        margin: 37px;
    }

    #content #flash ul li a .discount {
        font-size: 12px;
        color: #b0b0b0;
        margin: 15px 0;
    }

    #content #flash ul li a .item_price {
        color: #1baeae;
    }

    #content #flash ul li a:hover img {
        opacity: 1;
    }

    #content #flash .time {
        background-color: #f1eded;
    }

    #content #flash .time .name {
        margin-top: 53px;
        font-size: 21px;
        color: #ef3a3b;
    }

    #content #flash .time img {
        width: 34px;
        height: 53px;
    }

    #content #flash .time .text {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.54);
    }

    #content #flash .time .flashTime {
        margin: 28px 33px 0;
        color: #fff;
        font-size: 24px;
        line-height: 46px;
        display: flex;
        justify-content: center;
    }

    #content #flash .time .flashTime .box {
        width: 46px;
        height: 46px;
        background-color: #605751;
    }

    #content #flash .time .flashTime .dosh {
        height: 46px;
        font-size: 28px;
        color: #605751;
    }

    #content #recommend {
        width: 1226px;
        position: relative;
        flex-shrink: 0;
        height: 730px;
        margin-top: 20px;
        background-color: #f5f5f5;
    }

    #content #recommend > h2 {
        height: 58px;
        line-height: 58px;
    }

    #content #recommend .more {
        position: absolute;
        top: 18px;
        right: 30px;
    }

    #content #recommend .more:hover {
        color: #1baeae;
    }

    #content #recommend ul {
        display: flex;
        height: 614px;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
    }

    #content #recommend ul li {
        width: 234px;
        height: 314px;
        background-color: #fff;
        margin-bottom: 20px;
        margin-left: 4px;
        margin-right: 6px;
    }

    #content #recommend ul li:nth-child(1) .hot-image,
    #content #recommend ul li:nth-child(6) .hot-image {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #content #recommend ul li:hover {
        box-shadow: 0px 0px 30px #ccc;
    }

    #content #recommend ul li:hover .comment {
        transform: translateY(0);
    }

    #content #recommend ul li a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        text-align: center;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    #content #recommend ul li a .info {
        width: 104px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #fff;
        font-size: 10px;
    }

    #content #recommend ul li a .new {
        background-color: #83c44e;
    }

    #content #recommend ul li a .discount {
        background-color: #f00;
    }

    #content #recommend ul li a > p {
        height: 25px;
        line-height: 25px;
        font-size: 14px;
    }

    #content #recommend ul li a .item_price {
        color: #1baeae;
    }

    #content #recommend ul li a .counter {
        height: 15px;
        line-height: 15px;
        color: #aaa;
        font-size: 12px;
    }

    #content #recommend ul li a img {
        width: 160px;
        height: 160px;
        margin: 10px 0 20px;
    }

    #content #recommend ul li a .comment {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(101%);
        transition: transform 0.4s;
        box-sizing: border-box;
        height: 70px;
        padding: 10px 0 0 30px;
        background-color: #1baeae;
        color: #fff;
        text-align: left;
    }

    #content #recommend ul li a .comment p {
        font-size: 12px;
        margin-top: 5px;
    }
    #header {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: #333;
    }

    #header .center {
        width: 1226px;
        height: 40px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #header .center ul li a {
        display: flex;
        align-items: center;
        height: 12px;
        font-size: 14px;
        color: #b0b0b0;
        padding: 0 8px;
        border-right: 1px solid #b0b0b0;
    }

    #header .center ul li:last-of-type a {
        border-right: none;
    }

    #header .center .fl {
        flex-shrink: 0;
        display: flex;
        width: 680px;
    }

    #header .center .fr {
        display: flex;
        height: 40px;
    }

    #header .center .fr .user {
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
        position: relative;
    }

    #header .center .fr .user:hover .username {
        color: #1baeae;
        background-color: #fff;
    }

    #header .center .fr .user:hover .selector {
        padding: 7px 0;
        height: 120px;
    }

    #header .center .fr .user .username {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 40px;
        color: #b0b0b0;
        position: relative;
        z-index: 201;
    }

    #header .center .fr .user .selector {
        position: absolute;
        left: 0;
        top: 40px;
        width: 100%;
        z-index: 200;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        height: 0;
        background-color: #fff;
        overflow: hidden;
        transition: all 0.2s;
    }

    #header .center .fr .user .selector li {
        width: 100%;
        height: 27px;
        margin-top: 8px;
    }

    #header .center .fr .user .selector li:hover a {
        color: #1baeae;
        background-color: #fafafa;
    }

    #header .center .fr .user .selector li a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        padding: 0;
        border: 0;
    }

    #header .center .fr .login {
        display: flex;
        align-items: center;
        width: 98px;
        height: 40px;
    }

    #header .center .fr .login li a {
        display: flex;
        align-items: center;
        height: 12px;
        font-size: 12px;
        color: #b0b0b0;
        padding: 0 8px;
        border-right: 1px solid #b0b0b0;
    }

    #header .center .fr .login li:last-of-type a {
        border-right: none;
    }

    #header .center .fr .shopcart {
        display: flex;
        width: 120px;
        font-size: 12px;
        color: #fff;
        margin: 0 20px;
        justify-content: center;
        align-items: center;
        background-color: #1baeae;
    }


    #nav {
        width: 100%;
        height: 100px;
        flex-shrink: 0;
        position: relative;
    }

    #nav .banner_x {
        width: 1226px;
        height: 100%;
        display: flex;
    }

    #nav .banner_x > a {
        display: block;
        height: 100%;
    }

    #nav .banner_x .logo {
        width: 240px;
        text-indent: -10000px;
        background: url(../image/login-logo-2.png) no-repeat;
        background-size: 100%;
        background-position: center;
        margin-top: 10px;
    }

    #nav .banner_x .icon-search {
        width: 100px;
        text-indent: -10000px;
        background: url("../image/search.png") no-repeat;
        background-size: 50%;
        background-position: center;
    }

    #nav .banner_x .gif {
        width: 180px;
        text-indent: -10000px;
        background: url(../image/new-bee2.gif) no-repeat;
        background-size: 100%;
        background-position: center;
    }

    #nav .banner_x .list {
        display: flex;
        height: 100%;
    }

    #nav .banner_x .list a {
        color: #000000;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    #nav .banner_x .list > li {
        display: flex;
        align-items: center;
        margin: 0 10px;
        font-size: 16px;
    }

    #nav .banner_x .list > li:hover a {
        color: #1baeae;
    }

    #nav .banner_x .fr {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        flex-grow: 1;
    }

    #nav .banner_x .fr .button {
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        background-color: #fff;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }

    #nav .banner_x .fr .button:active {
        background-color: #1baeae;
        color: #fff;
    }

    #nav .banner_x .fr .search {
        position: relative;
    }

    #nav .banner_x .fr .search .text {
        box-sizing: border-box;
        width: 250px;
        height: 50px;
        border: 1px solid #ccc;
        padding: 0 10px;
    }

    #nav .banner_x .fr .search .text:focus {
        outline: none;
        border: 1px solid #1baeae;
    }

    #nav .banner_x .fr .search .text:focus ~ .keyword_list {
        display: block;
    }

    #nav .banner_x .fr .search .search_hot {
        position: absolute;
        top: 16px;
        right: 12px;
    }

    #nav .banner_x .fr .search .search_hot a {
        float: left;
        display: block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        margin-left: 5px;
        padding: 0 5px;
        background-color: #eee;
        color: #757575;
        transition: all 0.2s;
    }

    #nav .banner_x .fr .search .search_hot a:hover {
        color: #fff;
        background-color: #1baeae;
    }

    #nav .banner_x .fr .search .keyword_list {
        display: none;
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 100;
        width: 250px;
        box-sizing: border-box;
        border: 1px solid #1baeae;
    }

    #nav .banner_x .fr .search .keyword_list li {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        padding: 6px 15px;
        background-color: #fff;
    }

    #nav .banner_x .fr .search .keyword_list li:hover {
        background-color: #fafafa;
    }

    #nav .banner_x .fr .search .keyword_list li a {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
    }

    #nav .banner_x .fr .search .keyword_list li a .result {
        float: right;
        color: #b0b0b0;
    }

    .container {
        width: 1226px;
        *zoom: 1;
        margin-right: auto;
        margin-left: auto;
    }

    .container:before, .container:after {
        content: " ";
        display: table;
    }

    .site-footer { font-size: 14px; line-height: 1.8; color: #a8aaba; background: #32333b;}
    .w1100 {width: 1100px;margin: 0 auto;}
    .fl {float: left;}
    .site-footer a { color: #a8aaba;}
    .site-footer a:hover { color: #1baeae !important;}
    .site-footer .footer-article { padding: 30px 0 20px; overflow: hidden;}
    .site-footer .contact { float: left; width: 280px;}
    .site-footer .contact dt { width: 90px;}
    .site-footer .contact .iconfont { width: 66px;height: 66px; display: block;float: left;background: url(../image/tel.png) center center no-repeat;background-size: 55px;}
    .site-footer .contact .text { font-size: 14px; line-height: 30px; color: #fff;}
    .site-footer .contact .tel { padding: 3px 0 15px; font-size: 20px; color: #fff;}
    .site-footer .contact a { display: block; width: 90px; font-size: 14px; line-height: 30px; color: #9b9ea0; text-align: center; border: 1px solid #9b9ea0; border-radius: 4px;}
    .site-footer .contact a:hover { color: #fff !important;}
    .site-footer .col-article { float: left; width: 171px;}
    .site-footer .col-article dt { margin-bottom: 15px; font-size: 16px; font-weight: normal; color: #d7d8d9;}
    .site-footer .col-article dd { margin-bottom: 8px; overflow: hidden;}
    .site-footer .col-article dd a { font-size: 12px; color: #9b9ea0; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}
    .site-footer .wx { float: left; width: 135px; margin-right: 0;}
    .site-footer .wx dt { margin-bottom: 15px; font-size: 16px; font-weight: normal; color: #d7d8d9;}
    .site-footer .wx dd { margin-bottom: 15px;}
    .site-footer .wx dd img { display: block; width: 110px; height: 110px; margin: 5px 0; border-radius: 2px;}
    .site-footer .wx dd.other { margin-bottom: 0; line-height: 18px;}
    .site-footer .wx dd.other span { display: block; font-size: 12px;}
    .site-footer .wx dd.other a { display: inline-block; margin-right: 5px; font-size: 12px; line-height: 18px; vertical-align: top;}
    .footer-links { padding: 10px 0; border-top: 1px solid #41424c; border-bottom: 1px solid #41424c;}
    .footer-links p { font-size: 14px; color: #a8aaba;}
    .footer-links a { margin-right: 20px; font-size: 12px; color: #a8aaba;}
    .footer-info .info-text { padding: 20px 0; font-size: 12px; text-align: center;}
    .footer-info .info-text .nav-bottom { padding: 20px 0 5px; font-size: 14px; color: #ccc; text-align: center;}
    .footer-info .info-text .nav-bottom a { padding: 0 8px; color: #9b9ea0;}
    .footer-info .info-text .copyright { padding-top: 5px;}
    .footer-info .info-text em { padding: 0 8px;}

</style>
