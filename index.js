import { madlibs } from './resources.js';

console.log(`${madlibs.length} madlibs loaded`);

const app = new Vue({
    el:"#root",
    data:{
        output:'',
        words:[],
        num:0
    },
    methods:{
        Random_MadLib:function(){
            //console.log(Math.floor(Math.random() * Math.floor(madlibs.length)));
            this.num=Math.floor(Math.random() * Math.floor(madlibs.length));
            this.output=madlibs[this.num].content;
            this.words=madlibs[this.num].content.match(/\[([^\])]*)\]/g);
        }
    }
})
