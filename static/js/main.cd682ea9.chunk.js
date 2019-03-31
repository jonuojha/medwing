(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(14),i=a.n(s),o=(a(53),a(46)),c=a(6),l=a(7),d=a(10),u=a(9),m=a(11),h=(a(54),a(55),a(41)),f=a.n(h),p={GEO_API_KEY:"AIzaSyC60fyHb2IlmWqNEvC7FC43f71gfV5TgI0"},k=function(e){function t(e){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"map"},r.a.createElement(f.a,{bootstrapURLKeys:{key:p.GEO_API_KEY},defaultCenter:{lat:51.4,lng:10.45},defaultZoom:5},this.props.markers.map(function(e,t){return r.a.createElement("div",{lat:e.lat,lng:e.lng,className:"marker",key:t},"")})))}}]),t}(n.Component),g=(a(77),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header pl-5 pr-5"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{className:"logo",alt:"Medwing",src:"https://assets.medwing.com/assets/logotype-black-f323fb2c273e4cae19803ee65557ef1032da660c938afeb9a4a116ddb1dc23d0.svg"})))}}]),t}(n.Component)),v=(a(78),a(20)),b=a(17),E=a(13),y=a(18),O=(a(79),a(42)),j=a(44),N=a(45),w=a(16),S=a(15),M=a.n(S),C=new(function(){function e(){Object(c.a)(this,e),this.baseUrl="/api"}return Object(l.a)(e,[{key:"getData",value:function(e){return M.a.get("".concat(e))}},{key:"updateData",value:function(e,t){return M.a.put("".concat(e),t)}},{key:"deleteData",value:function(e){return M.a.delete("".concat(e))}},{key:"postData",value:function(e,t){return M.a.post("".concat(this.baseUrl).concat(e),t)}}]),e}()),L=new(function(){function e(){Object(c.a)(this,e),this.isLocal=!0,this.basePath="/api/markers"}return Object(l.a)(e,[{key:"getMarkers",value:function(){var e=this;return this.isLocal?new Promise(function(t,a){setTimeout(function(){t(e.getFromLocal())},2e3)}):C.getData(this.basePath)}},{key:"saveMarker",value:function(e){if(this.isLocal){var t=this.getFromLocal();return t.push(e),this.setInLocal(t),new Promise(function(t,a){setTimeout(function(){t(e)},1500)})}return C.postData(this.basePath,e)}},{key:"editMarker",value:function(){}},{key:"deleteMarker",value:function(e){if(this.isLocal){var t=this.getFromLocal();return this.setInLocal(t.filter(function(t){return t.address!==e.address})),new Promise(function(t,a){setTimeout(function(){t(e)},200)})}return C.postData(this.basePath,e)}},{key:"getFromLocal",value:function(){return localStorage.getItem("markers")?JSON.parse(localStorage.getItem("markers")):[]}},{key:"setInLocal",value:function(e){localStorage.setItem("markers",JSON.stringify(e))}}]),e}()),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={isEdit:!1,loading:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addressChange",value:function(){}},{key:"save",value:function(){this.setState({isEdit:!1})}},{key:"enableEdit",value:function(){this.setState({isEdit:!0})}},{key:"deleteMarker",value:function(){var e=this;this.setState({loading:!0}),L.deleteMarker(this.props.marker).then(function(t){e.props.deleteMarker(e.props.marker),e.setState({loading:!1})},function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 col-sm-6 mb-4"},r.a.createElement(O.a,{className:"position-relative"},this.state.loading?r.a.createElement("div",{className:"overlay-spinner"},r.a.createElement(w.a,null)):"",r.a.createElement(j.a,null,this.state.isEdit?r.a.createElement(b.a,null,r.a.createElement(y.a,{onChange:this.addressChange.bind(this)}),r.a.createElement(v.a,{addonType:"append"},r.a.createElement(E.a,{onClick:this.save.bind(this)},"Save"))):this.props.marker.address),r.a.createElement(N.a,{className:"cord-body"},r.a.createElement("label",null,"Latitude: ")," ",r.a.createElement("label",null,this.props.marker.lat),r.a.createElement("br",null),r.a.createElement("label",null,"Longitude: ")," ",r.a.createElement("label",null,this.props.marker.lng),r.a.createElement("div",{className:"mt-4"},r.a.createElement(E.a,{disabled:this.state.isEdit,className:"",onClick:this.enableEdit.bind(this),outline:!0,color:"secondary",size:"sm"},"EDIT"),r.a.createElement(E.a,{disabled:this.state.isEdit,onClick:this.deleteMarker.bind(this),className:"ml-3",outline:!0,color:"secondary",size:"sm"},"DELETE")))))}}]),t}(n.Component),A=new(function(){function e(){Object(c.a)(this,e),this.geoApi="https://maps.googleapis.com/maps/api/geocode/json?key=".concat(p.GEO_API_KEY)}return Object(l.a)(e,[{key:"getGeocode",value:function(e){var t="".concat(this.geoApi,"&address=").concat(e);return C.getData(t).then(function(e){return e.data.results.map(function(e){return{lat:e.geometry.location.lat,lng:e.geometry.location.lng,address:e.formatted_address,partialMatch:e.partial_match||!1}})}).catch(function(e){throw e})}}]),e}()),D=a(47),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={address:"",searching:!1,results:[],error:"",dropdownOpen:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"findAddress",value:function(e){var t=this;e.preventDefault(),this.setState({searching:!0,error:""}),A.getGeocode(this.state.address).then(function(e){switch(console.log(e),e.length){case 0:t.setState({error:"No results found",searching:!1});break;case 1:t.addToMarkerList(e[0]);break;default:t.setState({results:e,searching:!1})}},function(e){t.setState({error:"Something went wrong.",searching:!1})})}},{key:"addressChange",value:function(e){this.setState({address:e.target.value,error:""})}},{key:"selectAddress",value:function(e){this.addToMarkerList(e)}},{key:"addToMarkerList",value:function(e){var t=this;this.setState({error:""}),this.props.markers.find(function(t){return e.address===t.address})?this.setState({error:"This address already exists.",searching:!1}):L.saveMarker(e).then(function(a){t.props.addNewMarker(e),t.setState({results:[],address:"",searching:!1})},function(e){t.setState({error:"Failed to save address, please try again."})})}},{key:"toggle",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"marker-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("form",{onSubmit:this.findAddress.bind(this)},r.a.createElement(b.a,null,r.a.createElement(y.a,{onChange:this.addressChange.bind(this),placeholder:"Enter address",value:this.state.address,onClick:this.toggle,"data-toggle":"dropdown"}),r.a.createElement(v.a,{addonType:"append"},r.a.createElement(E.a,{disabled:this.state.searching||!this.state.address,color:"primary"},this.state.searching?"Searching...":"Add Address")))),this.state.results.length>1?r.a.createElement("div",{className:"address-options p-2"},r.a.createElement("span",{className:"mt-2"},"Multiple addresses found, choose your option"),r.a.createElement("ul",null,this.state.results.map(function(t){return r.a.createElement("li",{className:"p-2",onClick:e.selectAddress.bind(e,t)},t.address)}))):"",r.a.createElement(D.a,{in:!!this.state.error,tag:"label",className:"m-1"},this.state.error)),r.a.createElement("h2",{className:"pt-4"},"YOUR MARKERS"),r.a.createElement("hr",null),r.a.createElement("div",{className:"spinner"},this.props.loading?r.a.createElement(w.a,{className:"mt-5"}):""),r.a.createElement("div",{className:"pt-2 markers row"},this.props.markers.map(function(t,a){return r.a.createElement(I,Object.assign({},e.props,{key:a,marker:t}))})))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={markers:[],loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.getMarkers().then(function(t){console.log("promise data",t),e.setState({markers:t,loading:!1})},function(t){e.setState({loading:!1})})}},{key:"addNewMarker",value:function(e){console.log(e),this.setState({markers:[].concat(Object(o.a)(this.state.markers),[e])})}},{key:"deleteMarker",value:function(e){console.log(e),this.setState({markers:this.state.markers.filter(function(t){return t.address!==e.address})})}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(g,null),r.a.createElement("div",{className:"content row p-5"},r.a.createElement("div",{className:"col-12 col-md-6 mb-4"},r.a.createElement(k,{markers:this.state.markers})),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(T,{loading:this.state.loading,addNewMarker:this.addNewMarker.bind(this),deleteMarker:this.deleteMarker.bind(this),markers:this.state.markers}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a(107)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.cd682ea9.chunk.js.map