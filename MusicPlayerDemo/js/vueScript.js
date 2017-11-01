Vue.component('music-header',{
    template:
    `<div class="header">
        <div class="left">
            <a href=""><i class="iconfont icon-menu"></i></a>
        </div>
        <div class="middle">
            <a href=""><i class="iconfont icon-note"></i></a>
            <a href=""><i class="iconfont icon-logo"></i></a>
            <a href=""><i class="iconfont icon-users"></i></a>
        </div>
        <div class="right">
            <a href=""><i class="iconfont icon-search"></i></a>
        </div>
    </div>
    `
})

Vue.component('music-footer',{
    template:
    `<div class="footer">
        <div class="pic">
            <img src="" alt="" />
        </div>
        <div class="name">{{name}}</div>
        <div class="lrc">{{lyric}}</div>
        <div class="icon">
            <button v-on:click="alert('123')"><i class="iconfont icon-play"></i></button>
            <button><i class="iconfont icon-list"></i></button>
        </div>
    </div>
    `,
    data:function(){
        return {name:'naneve',lrc:'歌词'}
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