(this["webpackJsonpliverpool-cards"]=this["webpackJsonpliverpool-cards"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),a=n(7),r=n.n(a),s=(n(12),n(2)),c=n(3),l=n(5),m=n(4),d=(n(13),n(0)),p=function(e){var t=e.name,n=e.position,i=(e.id,e.image);return Object(d.jsxs)("div",{className:"tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"player",src:i}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},h=function(e){var t=e.players;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(p,{id:t[n].id,name:t[n].name,position:t[n].position,image:t[n].image},n)}))})},g=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--yellow  bg-light-yellow",type:"search",placeholder:"Search players",onChange:t})})},u=[{id:1,name:"Alisson Becker",username:"Alisson",position:"Goalkeeper",image:"https://e0.365dm.com/20/09/1600x900/skysports-alisson-liverpool_5108075.jpg?20200925131522"},{id:2,name:"Trent Alexander-Arnold",username:"Trent",position:"Rightback",image:"https://e0.365dm.com/17/12/768x432/skysports-trent-alexander-arnold-liverpool-premier-league_4192487.jpg?20171226190737"},{id:3,name:"Joe Gomez",username:"Gomez",position:"Centreback",image:"https://e0.365dm.com/20/11/768x432/skysports-joe-gomez-liverpool_5169741.jpg?20201112114807"},{id:4,name:"Virgil Van Dijk",username:"Virgil",position:"Centreback",image:"https://e2.365dm.com/18/05/800x600/skysports-virgil-van-dijk-liverpool_4320580.jpg?20180526075523"},{id:5,name:"Andrew Robertson",username:"Robbo",position:"Leftback",image:"https://e0.365dm.com/19/01/2048x1152/skysports-andrew-robertson_4549179.jpg"},{id:6,name:"Fabinho Tavares",username:"Fabinho",position:"Defensive Midfielder",image:"https://e0.365dm.com/20/10/768x432/skysports-fabinho-liverpool_5154234.jpg?20201029155526"},{id:7,name:"Thiago Alcantara",username:"Thiago",position:"Central Midfielder",image:"https://e0.365dm.com/20/09/1600x900/skysports-thiago-thiago-alcantara_5103119.jpg?20200920180728"},{id:8,name:"Jordan Henderson",username:"Hendo",position:"Central Midfielder",image:"https://e0.365dm.com/20/12/2048x1152/skysports-jordan-henderson_5200355.jpg"},{id:9,name:"Georginio Wijnaldum",username:"Gini",position:"Central Midfielder",image:"https://e2.365dm.com/18/04/800x600/skysports-football-georginio-wijnaldum_4278001.jpg?20180408224218"},{id:10,name:"Mohammed Salah",username:"Mo",position:"Right Forward",image:"https://e0.365dm.com/20/02/2048x1152/skysports-mohamed-salah-liverpool_4908544.jpg"},{id:11,name:"Sadio Mane",username:"Sadio",position:"Left Forward",image:"https://e0.365dm.com/20/03/2048x1152/skysports-sadio-mane-liverpool_4940787.jpg"},{id:12,name:"Roberto Firmino",username:"Bobby",position:"False Nine",image:"https://e0.365dm.com/17/12/2048x1152/skysports-premier-league-football-roberto-firmino-liverpool_4192477.jpg"}],j=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",height:"800px"},children:e.children})},b=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={hasError:!1},i}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(i.Component),f=(n(15),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={players:[],searchfield:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({players:u})}},{key:"render",value:function(){var e=this.state,t=e.players,n=e.searchfield,i=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"Liverpool Squad"}),Object(d.jsx)(g,{searchChange:this.onSearchChange}),Object(d.jsx)(j,{children:Object(d.jsx)(b,{children:Object(d.jsx)(h,{players:i})})})]})}}]),n}(o.a.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),a(e),r(e)}))};n(16);r.a.render(Object(d.jsx)(f,{}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.63d7bcde.chunk.js.map