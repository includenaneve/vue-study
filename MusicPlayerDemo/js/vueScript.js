Vue.component('music-header',{
    template:
    `<div class="header">
        <div class="left">
            <a href=""><i class="iconfont icon-menu"></i></a>
        </div>
        <div class="middle">
            <a href=""><i class="iconfont icon-music"></i></a>
            <a href=""><i class="iconfont icon-logo"></i></a>
            <a href=""><i class="iconfont icon-users"></i></a>
        </div>
        <div class="right">
            <a href=""><i class="iconfont icon-search"></i></a>
        </div>
    </div>
    `
})
Vue.component('music-content',{
    template:
    `
    <div class="content">
        <div class="type">
            <ul>
                <li>
                    <i class="iconfont list-icon icon-music"></i>
                    <div>
                        <p>本地音乐</p>
                        <p>(0)</p>
                    </div>
                </li>
                <li>
                    <i class="iconfont list-icon icon-usual"></i>
                    <div>
                        <p>最近播放</p>
                        <p>(100)</p>
                    </div>
                </li>
                <li>
                    <i class="iconfont list-icon icon-download"></i>
                    <div>
                        <p>下载管理</p>
                        <p>(0)</p>
                    </div>
                </li>
                <li>
                    <i class="iconfont list-icon icon-radio"></i>
                    <div>
                        <p>我的电台</p>
                        <p>(3)</p>
                    </div>
                </li>
                <li>
                    <i class="iconfont list-icon icon-favor"></i>
                    <div>
                        <p>我的收藏</p>
                        <p>(22)</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="song-list">
        </div>
    </div>
    
    `
})
Vue.component('music-footer',{
    template:
    `<div class="footer">
        <div class="pic">
            <img src="img/eason.jpg" alt="" />
        </div>
        <div class="info">
            <div class="name">{{info.name}}</div>
            <div class="lrc">{{info.lrc}}</div>
        </div>
        <div class="icon">
            <i id="play" @click="play" class="iconfont icon-play"></i>
            <i class="iconfont icon-list"></i>
        </div>
    </div>
    `,
    data:function(){
        return {
            info:{
                name:'落花流水',
                lrc:'流水很清楚惜花这个责任'
            },
            classObj:{
                playActive:true
            }
        }
    },
    methods:{
        play:function(){
            // 播放按钮按下时，按钮样式变化
            this.classObj.playActive = !this.classObj.playActive;
            document.getElementById('play').className = this.classObj.playActive?"iconfont icon-play":"iconfont icon-stop";

            // 播放按钮按下时，开始播放音乐
        }
    }
})

var view = new Vue({
    el:'#view',
    data:{
    },
    computed:{
        
    },
    methods:{

    }
})