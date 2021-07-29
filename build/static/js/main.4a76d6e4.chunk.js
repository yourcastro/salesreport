(this["webpackJsonphr-management-portal"]=this["webpackJsonphr-management-portal"]||[]).push([[0],{37:function(e,t){},52:function(e,t,a){},57:function(e,t,a){},80:function(e,t){},81:function(e,t){},86:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(38),s=a.n(r),c=(a(52),a(46)),i=a(3),o=a(39),d=a(45),u=(a(57),a(23)),h=a.n(u),p=a(40),j=a(16),m=a(17),b=a(19),f=a(18),O=a(14),y=a.n(O),v=a(24),x=a(1),g=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(j.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedFile:null,allEmployee:[]},e.onFileChange=function(t){var a=t.target.files[0].type,l=t.target.files[0].size,n=Math.round(l/1024);"application/vnd.ms-excel"===a?n<=2048?e.setState({selectedFile:t.target.files[0]}):(e.setState({selectedFile:null}),alert("File too big, please select a file lesser than 2mb")):(e.setState({selectedFile:null}),alert("File format not supported, please select only CSV file"))},e.onFileValidationNUpdate=function(){var t=0,a=e.state.selectedFile,l=new FileReader;l.onload=function(a){var l=a.target.result,n=v.read(l,{type:"binary"}),r=n.SheetNames[0],s=n.Sheets[r],c=v.utils.sheet_to_csv(s,{header:1}),i=e.convertToJson(c),o=JSON.parse(i),d=function(a){var l=o[a];l&&""!==l.id?"#"!==l.id&&(e.state.allEmployee.find((function(e){return e.id===l.id&&e.username===l.username}))?e.updateEmpRecord(l):e.createEmpRecord(l)):t++};for(var u in o)d(u)},l.readAsBinaryString(a),t<=1&&e.onFileUpload()},e.createEmpRecord=function(e){try{y.a.post("https://nphc-hr.free.beeceptor.com/employees",e);alert("New Employee created")}catch(t){alert("New Employee Service failed "+t)}},e.updateEmpRecord=function(e){try{y.a.put("https://nphc-hr.free.beeceptor.com/employees/"+e.id,{emp:e});alert("Employee details updated")}catch(t){alert("Employee Update Service failed "+t)}},e.onFileUpload=function(){var t=new FormData;t.append("myFile",e.state.selectedFile,e.state.selectedFile.name),console.log(e.state.selectedFile),function(){var e=Object(p.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("https://nphc-hr.free.beeceptor.com/employees/upload",t);case 3:a=e.sent,alert("File upload sucessfully "+a.status),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("File upload failed "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()},e.fileData=function(){return e.state.selectedFile?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"File Details:"}),Object(x.jsxs)("p",{children:["File Name: ",e.state.selectedFile.name]}),Object(x.jsxs)("p",{children:["File Type: ",e.state.selectedFile.type]}),Object(x.jsxs)("p",{children:["Last Modified:"," ",e.state.selectedFile.lastModifiedDate.toDateString()]})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Please select file before pressing the upload button"})]})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://nphc-hr.free.beeceptor.com/employees").then((function(t){var a=t.data;e.setState({allEmployee:a})}))}},{key:"convertToJson",value:function(e){for(var t=e.split("\n"),a=[],l=t[0].split(","),n=1;n<t.length;n++){for(var r={},s=t[n].split(","),c=0;c<l.length;c++)r[l[c]]=s[c];a.push(r)}return JSON.stringify(a)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"fileUploadContainer",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"file",onChange:this.onFileChange}),Object(x.jsx)("button",{onClick:this.onFileValidationNUpdate,children:"Upload"})]}),this.fileData()]})}}]),a}(l.Component),F=a(47),N=[{id:"e0001",username:"hpotter",fullName:"Harry Potter",salary:"1234.00"},{id:"e0002",username:"rwesley",fullName:"Ron Weasley",salary:"19234.5"},{id:"e0003",username:"ssnape",fullName:"Severus Snape",salary:"4000"},{id:"e0004",username:"rhagrid",fullName:"Rubeus Hagrid",salary:"3999.999"},{id:"e0005",username:"voldemort",fullName:"Lord Voldemort",salary:"523.4"},{id:"e0006",username:"rwesley123",fullName:"Ron Weasley",salary:"19234.5"},{id:"e0007",username:"voldeley",fullName:"Ron volde",salary:"1234.5"},{id:"e0008",username:"vdeley",fullName:"volde Ron",salary:"12500.50"}],R=a(41),S=a.n(R),E=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(j.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={data:Object(F.a)(N),columns:[{name:"ID",selector:"id",sortable:!0},{name:"User Name",selector:"username",sortable:!0},{name:"Full Name",selector:"fullName",sortable:!0},{name:"Salary",selector:"salary",sortable:!0},{name:"Action",selector:"action",sortable:!0}]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"employeeDashboardConatiner",children:Object(x.jsx)(S.a,{title:"Employees",columns:this.state.columns,data:this.state.data,pagination:!0,paginationRowsPerPageOptions:[10,15,20,25,30],theme:"default"})})}}]),a}(n.a.Component);function D(){return Object(x.jsx)("h2",{children:"Employee CURD"})}function U(){return Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"bannerImg"})})}var k=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("ul",{className:"headerMenuContainer desktop-container",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"active",href:"/",children:"HR Management Portal"})}),Object(x.jsx)("li",{className:"floatRight",children:Object(x.jsx)("a",{href:"/upload",children:"Upload Users"})}),Object(x.jsx)("li",{className:"floatRight",children:Object(x.jsx)("a",{href:"/dashboard",children:"Employee Dashboard"})}),Object(x.jsx)("li",{className:"floatRight",children:Object(x.jsx)("a",{href:"/crud",children:"CRUD Feature"})})]}),Object(x.jsx)("div",{class:"mobile-container",children:Object(x.jsxs)("div",{class:"topnav",children:[Object(x.jsx)("a",{href:"/",class:"active",children:"HR Management Portal"}),Object(x.jsxs)("div",{id:"myLinks",children:[Object(x.jsx)("a",{href:"/upload",children:"Upload Users"}),Object(x.jsx)("a",{href:"/dashboard",children:"Employee Dashboard"}),Object(x.jsx)("a",{href:"/crud",children:"CRUD Feature"})]}),Object(x.jsx)("a",{href:"javascript:void(0);",class:"icon",onclick:"myFunction()",children:Object(x.jsx)(o.a,{icon:d.a})})]})}),Object(x.jsx)(c.a,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/upload",children:Object(x.jsx)(g,{})}),Object(x.jsx)(i.a,{path:"/dashboard",children:Object(x.jsx)(E,{})}),Object(x.jsx)(i.a,{path:"/crud",children:Object(x.jsx)(D,{})}),Object(x.jsx)(i.a,{path:"/",children:Object(x.jsx)(U,{})})]})})]})};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.4a76d6e4.chunk.js.map