!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);var n="https://data.irozhlas.cz";"localhost"===window.location.hostname&&(n="http://localhost");var o=6,i={width:81*o,height:51*o,title:30,grid:{width:o,height:o},diff:1,colors:["#FFFFFF","#A8CB4A","#009BD5","#FFDA05","#F29400","#272660","#CB2D42","#A0A0A0"]};function a(t){if(!t)return{x:5,y:i.title+5};var e=t%(i.width/i.grid.width),r=Math.floor(t/(i.height/i.grid.height/(i.height/i.width)));return{x:i.grid.width*e+5,y:i.grid.height*r+i.title+5}}function l(t,e,r,n,l,s){var c=d3.select(n).append("svg").attr({width:i.width+5,height:i.height+i.title+5});c.selectAll("rect").data(t).enter().append("rect").attr({width:i.grid.width-1,height:i.grid.height-1,x:function(t,e){return a(e).x},y:function(t,e){return a(e).y},fill:function(t){return i.colors[t]}});var d=c.selectAll("row").data(e).enter().append("rect").attr({width:81*o+2,height:10,x:3,y:function(t,e){return i.grid.height*e+i.title+3},fill:"#fff"}).style("fill-opacity",0).style("opacity",0).style("stroke","black").style("stroke-width",1);if(document.getElementById("koberec1").offsetWidth>=1e3){var h=d3.select(n).append("div").attr("class","tooltip").style("opacity",0);d.on("mouseover",(function(t){var e,r;h.transition().duration(200).style("opacity",.9).style("z-index",300),e="Přijato"==t.vysledek?'<div class="ttcajk">Schváleno</div>':"Zamítnuto"==t.vysledek?'<div class="ttnecajk">Zamítnuto</div>':'<div class="ttborcus">Zmatečné</div>',r=t.nazev.length<150?'<div class="ttheader">'+t.nazev+"</div>":'<div class="ttheader">'+t.nazev.substring(0,150).split(" ").slice(0,-1).join(" ")+"…</div>",h.html(r+e+'<div class="ttvotes">'+t.kvorum+' hlasů ke schválení</div><div class="ttvotes">'+t.pro+" pro — "+t.proti+" proti — "+t.zdrzeli+" se zdrželo — "+t.absence+" nepřítomných</div>"),h.style("left",Math.abs(d3.mouse(this)[0])-l+20+"px").style("top",Math.abs(d3.mouse(this)[1])-s+30+"px"),d3.select(this).style("fill-opacity",.5).style("opacity",1).transition().duration(200)})),d.on("mouseout",(function(t){h.transition().duration(500).style("opacity",0),d3.select(this).style("opacity",0)}))}c.append("text").attr("x",i.width/3).attr("y",20).attr("text-anchor","middle").attr("class","title").text(r)}fetch(n+"/senat-kdoskym/grafy/vyb_koalice.csv").then((function(t){return t.text()})).then((function(t){fetch(n+"/senat-kdoskym/grafy/vyb_opozice.csv").then((function(t){return t.text()})).then((function(e){fetch(n+"/senat-kdoskym/grafy/vyb_tooltipy.csv").then((function(t){return t.text()})).then((function(r){for(var n=JSON.parse("["+t+"]"),o=JSON.parse("["+e+"]"),i=[],a=(r=r.split("\n"))[0].split("|"),s=1;s<r.length;s++){for(var c=r[s].split("|"),d={},h=0;h<c.length;h++)d[a[h].trim()]=c[h].trim();i.push(d)}i.pop(),l(n,i,"VÍTĚZOVÉ HLASOVÁNÍ","#koberec1",0,0),l(o,i,"PORAŽENÍ","#koberec1",-230,0)}))}))}))},function(t,e){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var r=document.createElement("div");r.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',r.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(r)}}]);