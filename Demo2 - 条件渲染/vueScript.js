var mainView = new Vue({
    el:"#main",
    data:{
        ok:true,
        ok2:false,
        type:'A',
        login:'username'
    },
    methods:{
        switchMessage:function(){
            return this.login = this.login === 'username' ? 'email' : 'username';
        }
    }
})