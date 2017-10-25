Vue.component('app-layout',{
    template:
    `<div><header><slot name="header"></slot></header><main><slot>微风发内容</slot></main><footer><slot name="footer"></slot></footer></div>`
})

Vue.component('demo1-child',{
    template:
    `<div class="child">
        <slot text="Hello my lady"></slot>
    </div>`
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