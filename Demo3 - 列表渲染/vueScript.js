var view = new Vue({
    el:'#view',
    data:{
        parents:"parent",
        newsList:[
            { text:'列表1'},
            { text:'列表2'},
            { text:'列表3'},
            { text:'列表4'},
            { text:'列表5'}
        ],
        List:[
            { text:'foo'},
            { text:'bar'},
            { text:'baz'},
            { text:'列表4'},
            { text:'列表5'}
        ],
        object:{
            name:'naneve',
            id:'13802380123',
            age:'20'
        },
        numbers:[1,2,3,4,5,6,7],
        message:[
            {name:'naneve',password:'123'},
            {name:'kong',password:'guess'}
        ]
    },
    computed:{
        evenNumbers:function(){
            return this.numbers.filter(function(index) {
                return index % 2 === 0;
            });
        }
    },
    methods:{
        
    }
})