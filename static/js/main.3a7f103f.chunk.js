(this["webpackJsonpstat-europe-football"]=this["webpackJsonpstat-europe-football"]||[]).push([[0],{116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(17),i=c.n(s),r=(c(89),c(90),c.p+"static/media/logo.6848e264.png"),o=(c(91),c(12)),l=c(1),j=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"header__content",children:[Object(l.jsx)("div",{className:"header-title",children:Object(l.jsxs)(o.b,{to:"/",className:"header-title",children:[Object(l.jsx)("img",{className:"header-logo",src:r,alt:"logo"}),Object(l.jsx)("div",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0435\u0432\u0440\u043e\u043b\u0438\u0433\u0438"})]})}),Object(l.jsxs)("div",{className:"header-links",children:[Object(l.jsx)(o.b,{className:"header-link",to:"/competitions",children:"\u041b\u0438\u0433\u0438"}),Object(l.jsx)(o.b,{className:"header-link",to:"/teams",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"})]})]})})},d=(c(97),c(9)),m=c(25),b=function(){return{type:"MATCHES_CLEAR"}},u=c(72),O=c(73),h=c(74),f=c.n(h),E=new(function(){function e(){Object(u.a)(this,e),this.api=f.a.create({baseURL:"https://api.football-data.org/v2/",headers:{"X-Auth-Token":"8c7238921ae4420db5002ac6a4bbca4f"}})}return Object(O.a)(e,[{key:"getCompetitions",value:function(){return this.api.get("competitions?areas=2077")}},{key:"getTeams",value:function(){return this.api.get("teams?areas=2077")}},{key:"getTeamMatches",value:function(e){return this.api.get("teams/".concat(e,"/matches"))}},{key:"getCompetitionMatches",value:function(e){return this.api.get("competitions/".concat(e,"/matches"))}}]),e}()),x=c(8),p=(c(116),function(e){var t,c=e.competitionItem,a=Object(x.f)(),n=c.name,s=c.area.name,i=c.plan,r=c.area.ensignUrl,o=c.id;switch(i){case"TIER_ONE":t="\u0412\u044b\u0441\u0448\u0438\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d";break;case"TIER_TWO":t="\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d";break;case"TIER_THREE":t="\u0412\u0442\u043e\u0440\u043e\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d";break;case"TIER_FOUR":t="\u0422\u0440\u0435\u0442\u0438\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043e\u043d";break;default:t=i}return Object(l.jsxs)("tr",{className:"content",onClick:function(){return a.push("/competitions/".concat(o),{from:"CompetitionItem"})},children:[Object(l.jsx)("td",{className:"content-td competition_name",children:n}),Object(l.jsx)("td",{className:"content-td",children:Object(l.jsxs)("div",{className:"competition_area",children:[Object(l.jsx)("img",{className:"area-icon",src:r,alt:"N/A"}),Object(l.jsx)("div",{className:"area-name",children:s})]})}),Object(l.jsx)("td",{className:"content-td",children:t})]})});c(117),c(118);var g=function(e){var t=e.label,c=e.onSearch,n=e.initialValue,s=Object(x.f)(),i=Object(x.g)(),r=Object(a.useState)(n),o=Object(d.a)(r,2),j=o[0],m=o[1],b=Object(a.useState)(n),u=Object(d.a)(b,2),O=u[0],h=u[1],f=function(e,t){var c=Object(a.useState)(e),n=Object(d.a)(c,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){i(e)}),t);return function(){clearTimeout(c)}}),[e]),s}(j,500);return Object(a.useEffect)((function(){c(f),f.length?s.replace("".concat(i.pathname,"?q=").concat(f),{from:"SearchPanel"}):s.replace("".concat(i.pathname),{from:"SearchPanel"})}),[f]),Object(l.jsx)("input",{className:"search",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a ".concat(t),onChange:function(e){m(e.target.value.toLowerCase()),h(e.target.value)},value:O})},A=(c(119),function(){return Object(l.jsx)("div",{className:"loadingio-spinner-double-ring-an7a3x2tfx",children:Object(l.jsxs)("div",{className:"ldio-igpe3e2o25",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})})]})})}),v={competitionLoaded:function(e){return{type:"COMPETITION_LOADED",payload:e}},competitionRequested:function(){return{type:"COMPETITION_REQUESTED"}}},T=Object(m.b)((function(e){return{competitions:e.competitions,loading:e.loading}}),v)((function(e){var t=e.competitionRequested,c=e.competitionLoaded,n=e.competitions,s=e.loading,i=Object(a.useState)(n),r=Object(d.a)(i,2),o=r[0],j=r[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),u=b[0],O=b[1],h=Object(x.g)(),f=Object(a.useState)(""),v=Object(d.a)(f,2),T=v[0],M=v[1];Object(a.useEffect)((function(){t(),E.getCompetitions().then((function(e){return c(e.data)}));var e=h.search.replace("?q=","");e.length&&M(e)}),[]),Object(a.useEffect)((function(){j(n),T.length&&(N(T),M(""))}),[n]);var N=function(e){if(0!==n.length)if(e.length){var t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));t.length?(j(t),O(!1)):O(!0)}else j(n),O(!1);else M(e)};return Object(l.jsxs)("div",{className:"content_competitions-list",children:[Object(l.jsx)(g,{label:"\u043b\u0438\u0433",onSearch:N,initialValue:h.search.replace("?q=","")}),s?Object(l.jsx)(A,{}):Object(l.jsx)("table",{className:"competitions-list",children:Object(l.jsx)("tbody",{children:u?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})}):o.map((function(e){return Object(l.jsx)(p,{competitionItem:e},e.id)}))})})]})})),M=(c(120),function(e){var t=e.teamItem,c=Object(x.f)(),a=t.name,n=t.area.name,s=t.founded,i=t.venue,r=t.crestUrl,o=t.id;return Object(l.jsxs)("div",{className:"team-card",onClick:function(){return c.push("/teams/".concat(o),{from:"TeamItem"})},children:[Object(l.jsx)("div",{className:"team_name",children:a}),Object(l.jsxs)("div",{className:"team-content",children:[Object(l.jsx)("img",{className:"crest-icon",src:r||"data:image/png;base64,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",alt:"n/a"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"team_item",children:[Object(l.jsx)("span",{children:"\u0421\u0442\u0440\u0430\u043d\u0430:"})," ",n]}),Object(l.jsxs)("div",{className:"team_item",children:[Object(l.jsx)("span",{children:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d:"})," ",i]}),Object(l.jsxs)("div",{className:"team_item",children:["\u041e\u0441\u043d\u043e\u0432\u0430\u043d \u0432 ",s," \u0433\u043e\u0434\u0443"]})]})]})]})}),N=(c(121),{teamLoaded:function(e){return{type:"TEAM_LOADED",payload:e}},teamRequested:function(){return{type:"TEAM_REQUESTED"}}}),C=Object(m.b)((function(e){return{teams:e.teams,loading:e.loading}}),N)((function(e){var t=e.teamRequested,c=e.teamLoaded,n=e.teams,s=e.loading,i=Object(a.useState)(n),r=Object(d.a)(i,2),o=r[0],j=r[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),u=b[0],O=b[1],h=Object(a.useState)(""),f=Object(d.a)(h,2),x=f[0],p=f[1];Object(a.useEffect)((function(){t(),E.getTeams().then((function(e){return c(e.data)}))}),[]),Object(a.useEffect)((function(){j(n),x.length&&(v(x),p(""))}),[n]);var v=function(e){if(0!==n.length)if(e.length){var t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));t.length?(j(t),O(!1)):O(!0)}else j(n),O(!1);else p(e)};return Object(l.jsxs)("div",{className:"content_teams-list",children:[Object(l.jsx)(g,{label:"\u043a\u043e\u043c\u0430\u043d\u0434",onSearch:v,initialValue:window.location.search.replace("?q=","")}),s?Object(l.jsx)(A,{}):Object(l.jsx)("div",{className:"teams-list",children:u?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})}):o.map((function(e){return Object(l.jsx)(M,{teamItem:e},e.id)}))})]})})),I=(c(122),c.p+"static/media/arrow-back.9d34d7cc.svg"),y=c(200),k=function(e){var t=e.calendarItem,c=e.competition?"":t.competition.name,a=t.status,n=t.homeTeam.name,s=t.awayTeam.name,i=t.score,r=i.winner,o=i.fullTime,j=o.homeTeam,d=o.awayTeam,m=t.utcDate,b="FINISHED"===a?Object(y.a)(new Date(m),"dd.MM.yyyy"):Object(y.a)(new Date(m),"HH:mm dd.MM.yyyy"),u="FINISHED"===a?"\u041e\u041a\u041e\u041d\u0427\u0415\u041d":"",O=Object(l.jsx)("img",{className:"arrowBack",src:I,alt:"<"}),h="HOME_TEAM"===r?O:null,f="AWAY_TEAM"===r?O:null;return Object(l.jsxs)("div",{className:"calendarItem",children:[Object(l.jsx)("div",{className:"calendarItem-name",children:c}),Object(l.jsxs)("div",{className:"calendarItem-total",children:[Object(l.jsxs)("div",{className:"calendarItem-info",children:[Object(l.jsxs)("div",{className:"team-container",children:[Object(l.jsx)("div",{className:"HOME_TEAM"===r?"winner":"",children:n}),Object(l.jsxs)("div",{className:"calendarItem-score",children:[j,Object(l.jsx)("div",{className:"arrowContainer",children:h})]})]}),Object(l.jsx)("div",{className:"separatorTeam"}),Object(l.jsxs)("div",{className:"team-container",children:[Object(l.jsx)("div",{className:"AWAY_TEAM"===r?"winner":"",children:s}),Object(l.jsxs)("div",{className:"calendarItem-score",children:[d,Object(l.jsx)("div",{className:"arrowContainer",children:f})]})]})]}),Object(l.jsxs)("div",{className:"calendarItem-data",children:[Object(l.jsx)("div",{children:u}),Object(l.jsx)("div",{children:b})]})]})]})},R=c.p+"static/media/referee-yellow.7d7edb0b.svg",S=(c(123),c(199)),D=(c(124),S.a.RangePicker),L=function(e){var t=e.onCalendarFilter,c=e.initialFilterValue,a=Object(x.f)(),n=Object(x.g)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"range-label",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0434\u0430\u0442\u0435:"}),Object(l.jsx)(D,{className:"filterMatches",dropdownClassName:"dropdownFilterMatches",style:{borderColor:"#1b5e20",boxShadow:"0 0 0 2px #1b5e2040"},onCalendarChange:function(e,c){t(e),e?a.replace("".concat(n.pathname,"?filter=range").concat(c[0],"to").concat(c[1]),{from:"FilterMatches"}):a.replace("".concat(n.pathname),{from:"FilterMatches"})},format:"DD.MM.YYYY",placeholder:["\u0424\u0438\u043b\u044c\u0442\u0440 \u0441","\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e"],defaultValue:c})]})},w=c(21),F=c.n(w),Q=function(e){var t=e.search.replace("?filter=range","");if(t.length){var c=t.split("to");return[F()(c[0],"DD.MM.YYYY"),F()(c[1],"DD.MM.YYYY")]}},z={teamMatchesLoaded:function(e){return{type:"TEAM_MATCHES_LOADED",payload:e}},teamMatchesRequested:function(){return{type:"TEAM_MATCHES_REQUESTED"}},clearMatches:b},Z=Object(m.b)((function(e){return{matches:e.matches,loading:e.loading}}),z)((function(e){var t,c=e.teamMatchesLoaded,n=e.teamMatchesRequested,s=e.clearMatches,i=e.loading,r=e.matches,j=Object(x.g)(),m=Object(a.useState)([]),b=Object(d.a)(m,2),u=b[0],O=b[1],h=Object(a.useState)([]),f=Object(d.a)(h,2),p=f[0],g=f[1],v=Object(a.useState)(!1),T=Object(d.a)(v,2),M=T[0],N=T[1],C=Object(x.h)().id;Object(a.useEffect)((function(){n(),E.getTeamMatches(C).then((function(e){return c(e.data)}));var e=Q(j);return e&&g(e),function(){s()}}),[]),r.length&&r[0].awayTeam.id==C?t=r[0].awayTeam.name:r.length&&(t=r[0].homeTeam.name),Object(a.useEffect)((function(){i||(O(r),N(!0)),p.length&&y(p)}),[r]);var I,y=function(e){if(e){if(e[0]&&e[1]){var t=e[0],c=e[1];O(r.filter((function(e){var a=new Date(e.utcDate).getTime();return a<=c&&a>=t})))}}else O(r)};return I=r.length?u.length?u.map((function(e){return Object(l.jsx)(k,{calendarItem:e},e.id)})):Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"calendarList-errorImg",src:R,alt:""}),Object(l.jsx)("div",{className:"calendarList-error",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0447\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"calendarList-errorImg",src:R,alt:""}),Object(l.jsx)("div",{className:"calendarList-error",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0447\u0430"}),Object(l.jsx)(o.b,{to:"/teams",className:"calendarList-errorBack",children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043c\u0430\u043d\u0434"})]}),Object(l.jsxs)("div",{children:[t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"calendarList-title",children:["\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043c\u0430\u0442\u0447\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",t]}),Object(l.jsx)(L,{onCalendarFilter:y,initialFilterValue:p})]}),Object(l.jsx)("div",{className:"calendarList",children:i||!M?Object(l.jsx)(A,{}):I})]})})),J=c.p+"static/media/referee-red.8cb4b12d.svg",U=(c(193),{competitionMatchesLoaded:function(e){return{type:"COMPETITION_MATCHES_LOADED",payload:e}},competitionMatchesRequested:function(){return{type:"COMPETITION_MATCHES_REQUESTED"}},competitionMatchesError403:function(){return{type:"COMPETITION_MATCHES_ERROR_403"}},clearMatches:b}),V=Object(m.b)((function(e){return{matches:e.matches,competition:e.competition,loading:e.loading,matchesAccessError:e.matchesAccessError}}),U)((function(e){var t=e.competitionMatchesLoaded,c=e.competitionMatchesRequested,n=e.competitionMatchesError403,s=e.matchesAccessError,i=e.clearMatches,r=e.matches,j=e.competition,m=e.loading,b=Object(x.g)(),u=Object(a.useState)([]),O=Object(d.a)(u,2),h=O[0],f=O[1],p=Object(a.useState)([]),g=Object(d.a)(p,2),v=g[0],T=g[1],M=Object(a.useState)(!1),N=Object(d.a)(M,2),C=N[0],I=N[1],y=Object(x.h)().id;Object(a.useEffect)((function(){c(),E.getCompetitionMatches(y).then((function(e){t(e.data)})).catch((function(e){403===e.response.status&&n()}));var e=Q(b);return e&&T(e),function(){i()}}),[]),Object(a.useEffect)((function(){m||(f(r),I(!0)),v.length&&D(v)}),[r]);var S,D=function(e){if(e){if(e[0]&&e[1]){var t=e[0],c=e[1];f(r.filter((function(e){var a=new Date(e.utcDate).getTime();return a<=c&&a>=t})))}}else f(r)};return S=s?Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"calendarList-errorImg",src:J,alt:""}),Object(l.jsx)("div",{className:"calendarList-error",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043c\u0430\u0442\u0447\u0430\u0445 \u044d\u0442\u043e\u0439 \u043b\u0438\u0433\u0438"}),Object(l.jsx)(o.b,{to:"/competitions",className:"calendarList-errorBack",children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u043b\u0438\u0433"})]}):h.length?h.map((function(e){return Object(l.jsx)(k,{calendarItem:e,competition:j},e.id)})):Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"calendarList-errorImg",src:R,alt:""}),Object(l.jsx)("div",{className:"calendarList-error",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0447\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"})]}),Object(l.jsxs)("div",{children:[j.name&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"calendarList-title",children:["\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043c\u0430\u0442\u0447\u0435\u0439 \u043b\u0438\u0433\u0438 ",j.name]}),Object(l.jsx)(L,{onCalendarFilter:D,initialFilterValue:v})]}),Object(l.jsx)("div",{className:"calendarList",children:m||!C?Object(l.jsx)(A,{}):S})]})})),H=c.p+"static/media/mainPage-cup.cde9eb66.png",P=(c(194),function(){return Object(l.jsxs)("div",{className:"mainPage",children:[Object(l.jsx)("h1",{children:"UEFA"}),Object(l.jsx)("img",{className:"mainPage-cup",src:H,alt:"cup"}),Object(l.jsxs)("div",{className:"mainPage-links",children:[Object(l.jsx)(o.b,{className:"mainPage-link",to:"/competitions",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u043b\u0438\u0433\u0438"}),Object(l.jsx)(o.b,{className:"mainPage-link",to:"/teams",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})]}),Object(l.jsx)("div",{className:"mainPage-text",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"\u0421\u043e\u044e\u0301\u0437 \u0435\u0432\u0440\u043e\u043f\u0435\u0301\u0439\u0441\u043a\u0438\u0445 \u0444\u0443\u0442\u0431\u043e\u0301\u043b\u044c\u043d\u044b\u0445 \u0430\u0441\u0441\u043e\u0446\u0438\xe1\u0446\u0438\u0439"})," (\u0430\u043d\u0433\u043b. ",Object(l.jsx)("span",{children:"Union of European Football Associations"}),", \u0441\u043e\u043a\u0440\u0430\u0449\u0451\u043d\u043d\u043e ",Object(l.jsx)("span",{children:"UEFA"}),", \u0432 \u0440\u0443\u0441\u0441\u043a\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 ",Object(l.jsx)("span",{children:"\u0423\u0415\u0424\u0410"}),") \u2014 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0430\u044f \u0444\u0443\u0442\u0431\u043e\u043b\u043e\u043c \u0432 \u0415\u0432\u0440\u043e\u043f\u0435 \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 \u0410\u0437\u0438\u0438. \u041e\u043d\u0430 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u044b\u0435 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0438 \u0435\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0435\u0442 \u0432\u0441\u0435 \u0435\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u0443\u0431\u043e\u0432 \u0438 \u0441\u0431\u043e\u0440\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0434\u043e\u0445\u043e\u0434\u044b \u043e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438 \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0443\u0431\u0430\u043c\u0438 \u0438 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u044f\u043c\u0438, \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u043c\u0438 \u0432 \u0435\u0451 \u0441\u043e\u0441\u0442\u0430\u0432."]})})]})});var W=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"app_content",children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/",exact:!0,children:Object(l.jsx)(P,{})}),Object(l.jsx)(x.a,{path:"/competitions",exact:!0,children:Object(l.jsx)(T,{})}),Object(l.jsx)(x.a,{path:"/teams",exact:!0,children:Object(l.jsx)(C,{})}),Object(l.jsx)(x.a,{path:"/teams/:id",children:Object(l.jsx)(Z,{})}),Object(l.jsx)(x.a,{path:"/competitions/:id",children:Object(l.jsx)(V,{})})]})})]})})},X=c(83),q=c(10),B={competitions:[],competitionsCount:0,teams:[],teamsCount:0,matches:[],competition:{},matchesCount:0,loading:!0,matchesAccessError:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPETITION_LOADED":return Object(q.a)(Object(q.a)({},e),{},{competitions:t.payload.competitions,competitionsCount:t.payload.count,loading:!1});case"COMPETITION_REQUESTED":return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case"TEAM_LOADED":return Object(q.a)(Object(q.a)({},e),{},{teams:t.payload.teams,teamsCount:t.payload.count,loading:!1});case"TEAM_REQUESTED":return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case"TEAM_MATCHES_LOADED":return Object(q.a)(Object(q.a)({},e),{},{matches:t.payload.matches,matchesCount:t.payload.count,matchesAccessError:!1,loading:!1});case"TEAM_MATCHES_REQUESTED":return Object(q.a)(Object(q.a)({},e),{},{matchesAccessError:!1,loading:!0});case"COMPETITION_MATCHES_LOADED":return Object(q.a)(Object(q.a)({},e),{},{matches:t.payload.matches,competition:t.payload.competition,matchesAccessError:!1,loading:!1});case"COMPETITION_MATCHES_REQUESTED":return Object(q.a)(Object(q.a)({},e),{},{matchesAccessError:!1,loading:!0});case"COMPETITION_MATCHES_ERROR_403":return Object(q.a)(Object(q.a)({},e),{},{matchesAccessError:!0,loading:!1});case"MATCHES_CLEAR":return Object(q.a)(Object(q.a)({},e),{},{matches:[],competition:{}});default:return e}},Y=Object(X.a)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m.a,{store:Y,children:Object(l.jsx)(W,{})})}),document.getElementById("root"))},89:function(e,t,c){},91:function(e,t,c){},97:function(e,t,c){}},[[195,1,2]]]);
//# sourceMappingURL=main.3a7f103f.chunk.js.map