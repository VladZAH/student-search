(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),c=a.n(r),i=(a(22),a(2)),o=a(3),l=a(5),u=a(4),d=a(16),h=a.n(d),m=(a(40),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).averageCalc=function(e){return e.reduce((function(e,t){return parseInt(e)+parseInt(t)}))/e.length},n.expand=function(){var e,t;n.state.expand?(e="+",t=!1):(e="-",t=!0),n.setState({expand:t,btn:e})},n.handleNewTag=function(e){n.setState({newTag:e.target.value})},n.handeTagSubmit=function(e){"Enter"!==e.key||""===n.state.newTag.trim("")||n.props.student.tags.includes(n.state.newTag)||(n.props.addTags(n.props.student.id,e.target.value),n.setState({newTag:""}))},n.state={expand:!1,btn:"+",newTag:""},n}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this.averageCalc(this.props.student.grades),t=[],a=0;a<this.props.student.grades.length;a++)t.push(s.a.createElement("p",{key:a},"Test ",a+1,": ",this.props.student.grades[a],"%"));for(var n=[],r=0;r<this.props.student.tags.length;r++)n.push(s.a.createElement("li",{className:"tag",key:r}," ",this.props.student.tags[r]," "));return s.a.createElement("div",{className:"card"},s.a.createElement("button",{className:"expand-btn",onClick:this.expand},this.state.btn),s.a.createElement("img",{src:this.props.student.pic,alt:""}),s.a.createElement("div",{className:"description"},s.a.createElement("div",{className:"Name"},s.a.createElement("h1",null,this.props.student.firstName," ",this.props.student.lastName)),s.a.createElement("div",{className:"info"},s.a.createElement("p",null,"Email: ",this.props.student.email),s.a.createElement("p",null,"Company: ",this.props.student.company),s.a.createElement("p",null,"Skill: ",this.props.student.skill),s.a.createElement("p",null,"Average: ",e,"%"),this.state.expand&&s.a.createElement("div",null,s.a.createElement("div",{className:"expanded"},t),s.a.createElement("div",{className:"expanded2"},n),s.a.createElement("input",{className:"\u200badd-tag-input",type:"text",value:this.state.newTag,onChange:this.handleNewTag,placeholder:"Add a tag",onKeyPress:this.handeTagSubmit})))))}}]),a}(s.a.Component)),p=(a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleRender=function(){var t=e.state.data;""!==e.state.searchByName&&""!==e.state.searchByTag&&(t=e.state.data.filter((function(t){return-1!==t.firstName.toLowerCase().indexOf(e.state.searchByName.toLowerCase())||-1!==t.lastName.toLowerCase().indexOf(e.state.searchByName.toLowerCase())})).filter((function(t){return e.withTag(t.tags,e.state.searchByTag)})));""!==e.state.searchByName&&""===e.state.searchByTag&&(t=e.state.data.filter((function(t){return-1!==t.firstName.toLowerCase().indexOf(e.state.searchByName.toLowerCase())||-1!==t.lastName.toLowerCase().indexOf(e.state.searchByName.toLowerCase())})));""!==e.state.searchByTag&&""===e.state.searchByName&&(t=e.state.data.filter((function(t){return e.withTag(t.tags,e.state.searchByTag)})));return t.map((function(t){return s.a.createElement("div",{key:t.id},s.a.createElement(m,{student:t,addTags:e.addTags,key:t.id}))}))},e.onNameSearch=function(t){e.setState({searchByName:t.target.value})},e.onTagSearch=function(t){e.setState({searchByTag:t.target.value})},e.addTags=function(t,a){var n=parseInt(t)-1,s=e.state.data.slice(0);s[n].tags.push(a),e.setState({data:s})},e.state={data:[],searchByName:"",searchByTag:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.hatchways.io/assessment/students").then((function(t){t.data.students.forEach((function(e){e.tags=[]})),e.setState({data:t.data.students})})).catch((function(e){return console.log(e)}))}},{key:"withTag",value:function(e,t){return e.indexOf(t)>-1}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",{type:"text",placeholder:"Search by name",id:"name-input",value:this.state.searchByName,onChange:this.onNameSearch}),s.a.createElement("input",{type:"text",placeholder:"Search by tag",id:"tag-input",value:this.state.searchByTag,onChange:this.onTagSearch})),s.a.createElement("div",{className:"list"},this.handleRender()))}}]),a}(s.a.Component));a(42);var g=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e4899f28.chunk.js.map