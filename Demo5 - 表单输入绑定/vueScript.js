var view = new Vue({
    el:'#view',
    data:{
        message:'',
        checked:true,
        checkArray:[],
        radioArray:'',
        selected:'哈喽',
        options:[
            {text:'A',value:'哈喽'},
            {text:'B',value:'nihao'},
            {text:'C',value:'收买低卡'}
        ]
    },
    computed:{

    },
    methods:{
        sex:function(){
            return this.checked ? "你是男孩":"你是女孩";
        }
    }
})