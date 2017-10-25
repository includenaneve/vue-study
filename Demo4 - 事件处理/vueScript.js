var view = new Vue({
    el:'#view',
    data:{
        counter:0,
        password:''
    },
    computed:{

    },
    methods:{
        fun1:function(){
            console.log('fun1');
        },
        say:function(msg){
            console.log(msg);
        },
        warn: function (message, event) {
        // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        },
        submitt:function(){
            alert(document.getElementById('pwd').value);
        }
    }
})