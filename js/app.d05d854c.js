(function(e){function n(n){for(var t,o,s=n[0],c=n[1],l=n[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);u&&u(n);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],t=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(t=!1)}t&&(i.splice(n--,1),e=o(o.s=a[0]))}return e}var t={},r={app:0},i=[];function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(a,t,function(n){return e[n]}.bind(null,t));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/marvel-lcg-randomizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"034f":function(e,n,a){"use strict";var t=a("85ec"),r=a.n(t);r.a},"2d27":function(e,n,a){"use strict";var t=a("bbc2"),r=a.n(t);r.a},3473:function(e,n,a){},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app"},[e._m(0),a("button",{staticClass:"randomize-button",on:{click:e.randomize}},[e._v("Randomize")]),a("PlayerSelector",{model:{value:e.numberOfPlayer,callback:function(n){e.numberOfPlayer=n},expression:"numberOfPlayer"}}),a("PackSelector",{attrs:{packs:e.data.packs},model:{value:e.selectedPacks,callback:function(n){e.selectedPacks=n},expression:"selectedPacks"}}),a("RandomizationOptions",{model:{value:e.randomizationOptions,callback:function(n){e.randomizationOptions=n},expression:"randomizationOptions"}}),e.randomizationOptions.scenario?a("Scenario",{attrs:{scenario:e.selectedScenario}}):e._e(),e.randomizationOptions.decks?a("DeckList",{attrs:{"available-decks":e.selectedDecks,"number-of-player":e.numberOfPlayer}}):e._e(),a("Changelog"),a("Contribute")],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[t("img",{staticClass:"logo",attrs:{src:a("b640"),alt:"Marvel Champions"}})])}],o=(a("4de4"),a("c975"),a("d81d"),[{name:"Rhino - The Break In!",img:"images/scenarios/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"images/scenarios/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"images/scenarios/MC01en_137A.jpg",pack:"Core Set"},{name:"Green Goblin - Risky Business",img:"images/scenarios/02004.jpg",pack:"Green Goblin"},{name:"Green Goblin - Mutagen Formula",img:"images/scenarios/02017.jpg",pack:"Green Goblin"},{name:"Wrecking Crew",img:"images/scenarios/MC03en_1A.jpg",pack:"Wrecking Crew",decks:[{name:"Bulldozer",minModules:0},{name:"Piledriver",minModules:0},{name:"Thunderball",minModules:0},{name:"Wrecker",minModules:0}]}]),s=[{name:"Bomb Scare",img:"images/modules/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"images/modules/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"images/modules/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"images/modules/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"images/modules/MC01en_183.jpg",pack:"Core Set"},{name:"Goblin Gimmicks",img:"images/modules/mc02en_card_goblin-glider.png",pack:"Green Goblin"},{name:"A Mess of Things",img:"images/modules/02037.jpg",pack:"Green Goblin"},{name:"Power Drain",img:"images/modules/02041.jpg",pack:"Green Goblin"},{name:"Running Interference",img:"images/modules/02046.jpg",pack:"Green Goblin"}],c=[{hero:"Spider-man",heroImg:"images/heroes/mc01en_card_spider-man.png",alterEgo:"Peter Parker",alterEgoImg:"images/heroes/mc01en_card_peter-parker.png",pack:"Core Set"},{hero:"Captain Marvel",heroImg:"images/heroes/mc01en_card_captain-marvel.png",alterEgo:"Carol Danvers",alterEgoImg:"images/heroes/mc01en_card_carol-danvers.png",pack:"Core Set"},{hero:"She-Hulk",heroImg:"images/heroes/mc01en_card_she-hulk.png",alterEgo:"Jennifer Walters",alterEgoImg:"images/heroes/mc01en_card_jennifer-walters.png",pack:"Core Set"},{hero:"Iron Man",heroImg:"images/heroes/mc01en_iron-man.png",alterEgo:"Tony Stark",alterEgoImg:"images/heroes/mc01en_card_tony-stark.png",pack:"Core Set"},{hero:"Black Panther",heroImg:"images/heroes/mc01en_card_black-panther.png",alterEgo:"T'Challa",alterEgoImg:"images/heroes/mc01en_card_tchalla.png",pack:"Core Set"},{hero:"Captain America",heroImg:"images/heroes/mc04en_card_captain-america.png",alterEgo:"Steeve Rogers",alterEgoImg:"images/heroes/mc04en_card_steve-rogers.png",pack:"Captain America"},{hero:"Ms. Marvel",heroImg:"images/heroes/mc05en_ms-marvel.png",alterEgo:"Kamala Khan",alterEgoImg:"images/heroes/mc05en_kamala-khan.png",pack:"Ms. Marvel"},{hero:"Thor",heroImg:"images/heroes/mc06en_a1_thor.png",alterEgo:"Odinson",alterEgoImg:"images/heroes/mc06en_a1_odinson.png",pack:"Thor"},{hero:"Black Widow",heroImg:"images/heroes/mc07en_black-widow.png",alterEgo:"Natasha Romanoff",alterEgoImg:"images/heroes/mc07en_natasha-romanoff.png",pack:"Black Widow"},{hero:"Doctor Strange",heroImg:"images/heroes/mc08en_doctor-strange.png",alterEgo:"Stephen Strange",alterEgoImg:"images/heroes/mc08en_stephen-strange.png",pack:"Doctor Strange"}],l=[{name:"Aggression",img:"images/aspects/MC01en_55.jpg",packs:["Core Set","Thor"]},{name:"Justice",img:"images/aspects/MC01en_62.jpg",packs:["Core Set","Black widow"]},{name:"Leadership",img:"images/aspects/MC01en_72.jpg",packs:["Core Set","Captain America"]},{name:"Protection",img:"images/aspects/MC01en_79.jpg",packs:["Core Set","Ms. Marvel","Doctor Strange"]}],u=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"player-selector panel"},[a("p",{staticClass:"panel-insert"},[e._v("Select the number of players")]),a("div",{staticClass:"player-buttons"},[a("button",{attrs:{disabled:1===e.value},on:{click:function(n){return e.$emit("input",1)}}},[e._v("Solo")]),a("button",{attrs:{disabled:2===e.value},on:{click:function(n){return e.$emit("input",2)}}},[e._v("Duo")]),a("button",{attrs:{disabled:3===e.value},on:{click:function(n){return e.$emit("input",3)}}},[e._v("3 players")]),a("button",{attrs:{disabled:4===e.value},on:{click:function(n){return e.$emit("input",4)}}},[e._v("4 players")])])])},d=[],m={name:"PlayerSelector",props:{value:{default:1}},methods:{addPlayer:function(){this.$emit("input",Math.min(this.value+1,4))},removePlayer:function(){this.$emit("input",Math.max(this.value-1,1))}}},p=m,g=(a("84e3"),a("2877")),f=Object(g["a"])(p,u,d,!1,null,"438c5f32",null),v=f.exports,h=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-insert"},[e._v(" Custom Options ")]),e.shown?a("div",[a("div",[a("button",{attrs:{disabled:e.value.additionalModules<=0},on:{click:function(n){e.additionalModulesChange((e.value.additionalModules||0)-1)}}},[e._v("-")]),e._v(" "+e._s(e.value.additionalModules||0)+" "),a("button",{on:{click:function(n){e.additionalModulesChange(parseInt(e.value.additionalModules||0)+1)}}},[e._v("+")]),e._v(" Extra Modules ")]),a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value.scenario,expression:"value.scenario"}],attrs:{type:"checkbox",name:"scenario",id:"scenario"},domProps:{checked:Array.isArray(e.value.scenario)?e._i(e.value.scenario,null)>-1:e.value.scenario},on:{change:function(n){var a=e.value.scenario,t=n.target,r=!!t.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);t.checked?o<0&&e.$set(e.value,"scenario",a.concat([i])):o>-1&&e.$set(e.value,"scenario",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.value,"scenario",r)}}}),e._v(" Generate Scenario ")])]),a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value.decks,expression:"value.decks"}],attrs:{type:"checkbox",name:"scenario",id:"decks"},domProps:{checked:Array.isArray(e.value.decks)?e._i(e.value.decks,null)>-1:e.value.decks},on:{change:function(n){var a=e.value.decks,t=n.target,r=!!t.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);t.checked?o<0&&e.$set(e.value,"decks",a.concat([i])):o>-1&&e.$set(e.value,"decks",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.value,"decks",r)}}}),e._v(" Generate Player Decks ")])]),a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Hide Options ")])]):a("div",[a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Show Options ")])])])},_=[],k=(a("a4d3"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3"));function b(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function C(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?b(Object(a),!0).forEach((function(n){Object(k["a"])(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var y={name:"RandomizationOptions",props:{value:{default:{}}},data:function(){return{shown:!1}},methods:{additionalModulesChange:function(e){var n=C({},this.value);n.additionalModules=e,this.$emit("input",n)}}},O=y,w=Object(g["a"])(O,h,_,!1,null,"26453d6c",null),S=w.exports,M=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"packs-selector panel"},[a("div",{staticClass:"panel-insert"},[e._v(" Selected packs ")]),e.shown?e._e():a("div",{staticClass:"packs-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?a("div",{staticClass:"packs"},e._l(e.packs,(function(n,t){return a("div",{key:t,staticClass:"pack-type-column"},[a("h3",[e._v(e._s(t))]),e._l(n,(function(n){return a("label",{key:n},[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(n)>=0},on:{input:function(a){return e.togglePack(n,a.target.checked)}}}),e._v(e._s(n)+" ")])}))],2)})),0):e._e(),a("div",{staticClass:"toggle"},[a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e.shown?a("span",[e._v("Finish Selection")]):a("span",[e._v("Add/Remove Packs")])])])])},P=[],j=(a("fb6a"),a("a434"),{name:"PackSelector",props:{value:{default:["Core Set"]},packs:{default:["Core Set"]}},data:function(){return{shown:!1}},methods:{togglePack:function(e,n){var a=this.value.slice(0);n?a.push(e):a.splice(a.indexOf(e),1),this.$emit("input",a)}}}),E=j,A=(a("6048"),Object(g["a"])(E,M,P,!1,null,"2c18682e",null)),x=A.exports,z=function(){var e=this,n=e.$createElement,a=e._self._c||n;return e.scenario?a("div",{staticClass:"scenario-randomizer panel"},[a("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Scenario")]),e.shown?a("div",{staticClass:"content"},[a("div",[a("div",{staticClass:"main-scenario"},[a("img",{attrs:{src:e.scenario.scenario.img,alt:e.scenario.scenario.name}}),a("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(e.scenario.scenario.name)+"("+e._s(e.scenario.scenario.pack)+") ")])]),e._l(e.scenario.modules,(function(n,t){var r=n.deck,i=n.modules;return a("div",{key:t},[i.length>0?a("div",{staticClass:"deck"},[e.scenario.modules.length>1?a("div",{staticClass:"deck-name"},[e._v("Deck "+e._s(r.name))]):e._e(),a("div",{staticClass:"modules"},e._l(i,(function(n,t){return a("div",{key:t},[a("img",{attrs:{src:n.img,alt:n.name}}),a("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(n.name)+"("+e._s(n.pack)+") ")])])})),0)]):e._e()])}))],2),a("div",{staticClass:"difficulty panel-insert-content"},[e._v(" Difficulty: "),a("span",{staticClass:"difficulty-value"},[e._v(" "+e._s(e.scenario.difficulty)+" ")])])]):e._e()]):e._e()},D=[],$={name:"Scenario.vue",props:{scenario:{required:!0}},data:function(){return{shown:!0}}},I=$,G=(a("2d27"),Object(g["a"])(I,z,D,!1,null,"19673fbd",null)),T=G.exports,H=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"hero-randomizer panel"},[a("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Players' Deck")]),e.availableDecks.length<e.numberOfPlayer?a("div",{staticClass:"warning"},[e._v(" Not enough Heroes for all the players. ")]):e._e(),e.shown?a("div",{staticClass:"decks"},e._l(e.selectedDecks,(function(n,t){var r=n.hero,i=n.aspect;return a("div",{key:t,staticClass:"hero-deck"},[a("h2",{staticClass:"panel-insert-content"},[e._v("Player "+e._s(t+1)+" "),0===t?a("span",[e._v("(First Player)")]):e._e()]),a("div",{staticClass:"cards"},[a("img",{attrs:{src:r.alterEgoImg,alt:r.alterEgo}}),a("img",{attrs:{src:r.heroImg,alt:r.hero}}),a("img",{attrs:{src:i.img,alt:i.name}})]),a("div",{staticClass:"name panel-insert-content"},[e._v(" "+e._s(r.alterEgo)+" / "+e._s(r.hero)+"("+e._s(r.pack)+") + "+e._s(i.name)+" ")])])})),0):e._e()])},N=[],R={name:"DeckList",props:{numberOfPlayer:{default:1},availableDecks:{default:[],required:!0}},data:function(){return{shown:!0}},computed:{selectedDecks:function(){return this.availableDecks.slice(0,this.numberOfPlayer)}}},B=R,W=(a("dbac"),Object(g["a"])(B,H,N,!1,null,"79cfa96e",null)),F=W.exports,J=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog panel"},[a("div",{staticClass:"panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Changelog")]),e.shown?a("div",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4)]):e._e()])},L=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On february 16th 2020")]),a("ul",[a("li",[e._v("Add Black Widow and Doctor Strange")]),a("li",[e._v("Update Green Goblin and Wrecking Crew pictures")]),a("li",[e._v("Add contribute note at the bottom of the page")]),a("li",[e._v("Add first player indicator in deck list")]),a("li",[e._v("Add custom options to generate only scenario or decks")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On january 2nd 2020")]),a("ul",[a("li",[e._v("Add offline availability")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 23rd 2019")]),a("ul",[a("li",[e._v("Refactored the randomization for a bit more of future proofing")]),a("li",[e._v("Add support for first customization option: Extra modules")])]),a("h3",[e._v("On december 15th 2019")]),a("ul",[a("li",[e._v("Add saving of the selected packs you own in your browser")]),a("li",[e._v("Add the changelog list")]),a("li",[e._v("Display pack selection by categories (Heroes, Modules, Scenarios)")]),a("li",[e._v("A bit of redesign")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 13th 2019")]),a("ul",[a("li",[e._v("Add Support for Multiple packs")]),a("li",[e._v("Add scenarios and modules from Green Goblins and Wrecking Crew")]),a("li",[e._v("Add Heroes Ms. Marvel, Captain America and Thor")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 12th 2019 (and before)")]),a("ul",[a("li",[e._v("Add Scenario randomization")]),a("li",[e._v("Add Hero randomization")]),a("li",[e._v("Add Number of player selection")])])])}],U={name:"Changelog",data:function(){return{shown:!0}}},q=U,K=(a("5b8f"),Object(g["a"])(q,J,L,!1,null,"c21627aa",null)),Q=K.exports,V=(a("a630"),a("3ca3"),a("d4ec")),X=a("bee2");function Y(e){for(var n=e.slice(0),a=n.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[n[t],n[a]];n[a]=r[0],n[t]=r[1]}return n}var Z=function(){function e(){Object(V["a"])(this,e)}return Object(X["a"])(e,[{key:"randomizeScenario",value:function(e,n,a){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{additionalModules:0},r=t.additionalModules,i=void 0===r?0:r,o=Y(e).shift(),s=o.decks||[{name:"encounter"}],c=Y(n),l=s.map((function(e){var n=(void 0!==e.minModules?e.minModules:1)+i;return{deck:e,modules:c.splice(0,n)}})),u=o.difficulties||a,d=u[Math.floor(Math.random()*u.length)];return{scenario:o,modules:l,difficulty:d}}},{key:"randomizeHeroes",value:function(e,n){var a=Y(e),t=Y(n);return Array.from({length:Math.min(4,a.length)},(function(e,n){return{hero:a[n],aspect:t[n]}}))}}]),e}(),ee=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[e._v(" Fork this project or contribute on "),a("a",{attrs:{href:"https://github.com/Naouak/marvel-lcg-randomizer",target:"_blank"}},[e._v("Github")]),e._v(". ")])}],ae={name:"Contribute"},te=ae,re=Object(g["a"])(te,ee,ne,!1,null,"1fec2e7b",null),ie=re.exports,oe=["standard","expert"],se=window.localStorage,ce={Heroes:c.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n})),Scenarios:o.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n})),Modules:s.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n}))},le=new Z,ue=null;try{ue=JSON.parse(se.getItem("selectedPacks"))||["Core Set"]}catch(ve){ue=["Core Set"],se.removeItem("selectedPacks")}var de={name:"app",data:function(){return{data:{scenarios:o,modules:s,heroes:c,aspects:l,packs:ce,difficulties:oe},selectedPacks:ue,selectedScenario:null,selectedDecks:[],numberOfPlayer:1,randomizationOptions:{scenario:1,decks:1}}},watch:{selectedPacks:function(){se.setItem("selectedPacks",JSON.stringify(this.selectedPacks)),this.randomize()},randomizationOptions:function(){this.randomize()}},created:function(){this.randomize()},computed:{availableScenarios:function(){var e=this;return this.data.scenarios.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableModules:function(){var e=this;return this.data.modules.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableHeroes:function(){var e=this;return this.data.heroes.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableDifficulties:function(){return this.data.difficulties}},methods:{randomize:function(){this.selectedScenario=le.randomizeScenario(this.availableScenarios,this.availableModules,this.availableDifficulties,this.randomizationOptions),this.selectedDecks=le.randomizeHeroes(this.availableHeroes,this.data.aspects)}},components:{Contribute:ie,Changelog:Q,PackSelector:x,PlayerSelector:v,DeckList:F,Scenario:T,RandomizationOptions:S}},me=de,pe=(a("034f"),Object(g["a"])(me,r,i,!1,null,null,null)),ge=pe.exports,fe=a("9483");Object(fe["a"])("".concat("/marvel-lcg-randomizer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(ge)}}).$mount("#app")},"5b8f":function(e,n,a){"use strict";var t=a("7d83"),r=a.n(t);r.a},6048:function(e,n,a){"use strict";var t=a("6e31"),r=a.n(t);r.a},"6e31":function(e,n,a){},"7d83":function(e,n,a){},"84e3":function(e,n,a){"use strict";var t=a("e421"),r=a.n(t);r.a},"85ec":function(e,n,a){},b640:function(e,n,a){e.exports=a.p+"img/logo.7184bee2.jpg"},bbc2:function(e,n,a){},dbac:function(e,n,a){"use strict";var t=a("3473"),r=a.n(t);r.a},e421:function(e,n,a){}});
//# sourceMappingURL=app.d05d854c.js.map