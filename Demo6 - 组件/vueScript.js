Vue.component('my-component',{
    template:'<div>第一个组件哦</div>'
})

Vue.component('child',{
    props:[`myMessage`],
    template:
    `<div>{{myMessage}}</div>`
})

Vue.component('incButton',{
    template:'<button v-on:click="btnInc">{{btnValue}}</button>',
    data:function(){
        return {
            btnValue:0
        }
    },
    methods:{
        btnInc:function(){
            this.btnValue += 1;
            this.$emit('inc-event');
        }
    }
})

Vue.component('v-input',{
    template:
    `<span>$<input ref="input" :value="value" @input="updateValue($event.target.value)"></span>`,
    props:['value'],
    methods:{
        updateValue:function(value){
            var formatValue = value.trim().slice(0, value.indexOf('.') === -1 ? value.length:value.indexOf('.') + 3);
            console.log(formatValue);
            this.$refs.input.value = formatValue;
            this.$emit('input',Number(formatValue));
        }
    }
})
Vue.component('child-com',{
    template:`<div><h2>我是子组件的标题</h2><slot>只有在没有要分发的内容时才会显示。</slot></div>`
})
var view = new Vue({
    el:'#view',
    data:{
        text:'第一个组件哦',
        parentMsg:'',
        price:''
    },
    computed:{

    },
    methods:{
        
    }
})

var example = new Vue({
    el:'#example',
    data:{
        total:0
    },
    methods:{
        totalInc:function(){
            this.total += 1;
        }
    }
})