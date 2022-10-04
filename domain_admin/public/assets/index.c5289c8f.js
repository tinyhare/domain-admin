import{_ as k,r as o,o as d,c as _,b as a,d as l,e as v,t as w,g as y,F as S,f,a as R,w as V}from"./index.61333b14.js";const E={name:"",components:{},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(e){e.is_edit_mode=!0},handleCancelRow(e){e.is_edit_mode=!1},async handleDeleteClick(e){let n={id:e.id};const t=await this.$Http.function(n);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(e){let n={id:e.id};const t=await this.$Http.function(n);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleSaveRow(e){let n={key:e.key,value:e.value};const t=await this.$http.updateSystemConfig(n);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),e.is_edit_mode=!1):this.$msg.error(t.msg)},handleUpdateSuccess(){this.$emit("on-success")}},created(){}},x={key:1};function z(e,n,t,C,i,c){const r=o("el-table-column"),p=o("el-input"),h=o("Select"),m=o("el-icon"),g=o("el-link"),b=o("CloseBold"),D=o("Edit"),$=o("el-table");return d(),_("div",null,[a($,{data:t.list,stripe:"",border:""},{default:l(()=>[a(r,{label:"\u914D\u7F6E\u9879","header-align":"center",align:"right",width:"200",prop:"label"},{default:l(s=>[v("span",null,w(s.row.label||"-"),1)]),_:1}),a(r,{label:"\u503C","header-align":"center",align:"left",prop:"value"},{default:l(s=>[s.row.is_edit_mode?(d(),y(p,{key:0,modelValue:s.row.value,"onUpdate:modelValue":u=>s.row.value=u,placeholder:s.row.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):(d(),_("span",x,w(s.row.value||"-"),1))]),_:1}),a(r,{label:"\u7F16\u8F91",width:"120","header-align":"center",align:"center"},{default:l(s=>[s.row.is_edit_mode?(d(),_(S,{key:0},[a(g,{underline:!1,type:"success",onClick:u=>c.handleSaveRow(s.row)},{default:l(()=>[a(m,null,{default:l(()=>[a(h)]),_:1}),f("\u4FDD\u5B58")]),_:2},1032,["onClick"]),a(g,{class:"ml-sm",underline:!1,type:"warning",onClick:u=>c.handleCancelRow(s.row)},{default:l(()=>[a(m,null,{default:l(()=>[a(b)]),_:1}),f("\u53D6\u6D88")]),_:2},1032,["onClick"])],64)):(d(),y(g,{key:1,underline:!1,type:"primary",onClick:u=>c.handleEditRow(s.row)},{default:l(()=>[a(m,null,{default:l(()=>[a(D)]),_:1}),f("\u7F16\u8F91")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])}const B=k(E,[["render",z]]),A={name:"system-list",props:{},components:{DataTable:B},data(){return{list:[],total:0,page:1,size:20,keywords:"",loading:!0,dialogVisible:!1}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let e={ticket:this.ticket,page:this.page,num:this.size,keywords:this.keywords};const n=await this.$http.getAllSystemConfig(e);n.code==0&&(this.list=n.data.list.map(t=>(t.is_edit_mode=!1,t)),this.total=parseInt(n.data.count)),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()}},created(){this.getData()}},O={class:"app-container"},T={class:"pagination"};function N(e,n,t,C,i,c){const r=o("DataTable"),p=o("mo-pagination"),h=R("loading");return d(),_("div",O,[V(a(r,{list:i.list,onOnSuccess:c.resetData,onOnEditRow:e.handleEditRow},null,8,["list","onOnSuccess","onOnEditRow"]),[[h,i.loading]]),v("div",T,[a(p,{total:i.total,"page-size":i.size,"current-page":i.page,onChange:c.getData,layout:"total, sizes, prev, pager, next, jumper"},null,8,["total","page-size","current-page","onChange"])])])}const F=k(A,[["render",N]]);export{F as default};
