(function(t){function e(e){for(var r,c,i=e[0],u=e[1],d=e[2],s=0,l=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},a={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-024692e9":"17acccd2","chunk-245da8a8":"c4b2563d","chunk-aa80082c":"7dfa22e5"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-024692e9":1,"chunk-245da8a8":1,"chunk-aa80082c":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-024692e9":"33c5291e","chunk-245da8a8":"1ab72313","chunk-aa80082c":"6cc249b2"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===r||s===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[t],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){c[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var l=new Error;d=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}a[t]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vuejsBackery/",u.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0708":function(t,e,n){},"17e4":function(t,e,n){"use strict";n("f8df")},"1a0d":function(t,e,n){t.exports=n.p+"img/bread.6a1e1ba4.png"},"1aea":function(t,e,n){t.exports=n.p+"img/chocolateTwist.5b6f4afb.png"},"2ad1":function(t,e,n){t.exports=n.p+"img/appleTurnover.fd5663e9.png"},"41b9":function(t,e,n){t.exports=n.p+"img/cart.daa41a84.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("41b9"),a=n.n(c),o=Object(r["h"])("div",{class:"spacer"}," ",-1),i=Object(r["h"])("h1",null,"Vue js bakery",-1),u={class:"cartDisplay"},d={class:"cartDisplay__itemCount"},s=Object(r["h"])("img",{class:"cartDisplay__icon",src:a.a},null,-1);function l(t,e,n,c,a,l){var p=Object(r["y"])("router-link"),f=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("header",null,[o,Object(r["h"])(p,{to:"/",class:"mainTitle"},{default:Object(r["E"])((function(){return[i]})),_:1}),Object(r["h"])("nav",u,[Object(r["h"])("p",d,Object(r["A"])(t.$store.getters.totalItems),1),Object(r["h"])(p,{to:"/cart"},{default:Object(r["E"])((function(){return[s]})),_:1})])]),Object(r["h"])(f)],64)}var p={name:"App"};n("e993");p.render=l;var f=p,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=(n("b0c0"),{class:"produitContener"});function h(t,e,n,c,a,o){var i=Object(r["y"])("Produit"),u=Object(r["y"])("ProduitInCart"),d=Object(r["y"])("Modal");return Object(r["q"])(),Object(r["e"])("section",m,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(t.$store.state.produits,(function(t,e){return Object(r["q"])(),Object(r["e"])(i,{key:e,product:t,onAddToCart:o.addToCart},null,8,["product","onAddToCart"])})),128)),Object(r["h"])(d,{title:"Add to cart",ref:"productDialog",right:"Checkout",onValidated:e[2]||(e[2]=function(e){return t.$store.dispatch("addItem",{name:a.selectedProduct.name,quantity:a.selectedProductQuantity})})},{default:Object(r["E"])((function(){return[Object(r["h"])(u,{product:a.selectedProduct,inputId:0,quantity:a.selectedProductQuantity,"onUpdate:quantity":e[1]||(e[1]=function(t){return a.selectedProductQuantity=t}),removable:!1},null,8,["product","quantity"])]})),_:1},512)])}var A={class:"produit__header"},O={class:"produit__header__name"},j={class:"produit__header__price"},y={class:"produit__action"},g=Object(r["h"])("button",{class:"produit__action__see"},"See product",-1);function v(t,e,n,c,a,o){var i=this,u=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])(u,{class:"produit",to:"/"+n.product.name},{default:Object(r["E"])((function(){return[Object(r["h"])("div",A,[Object(r["h"])("h2",O,Object(r["A"])(n.product.name),1),Object(r["h"])("p",j,Object(r["A"])(n.product.price)+" €",1)]),Object(r["h"])("img",{class:"produit__image",src:n.product.img,alt:"icon of "+n.product.name},null,8,["src","alt"]),Object(r["h"])("nav",y,[Object(r["h"])("button",{class:"produit__action__buy",onClick:e[1]||(e[1]=Object(r["H"])((function(t){return i.$emit("addToCart",{product:n.product})}),["prevent"]))},"Add to cart"),g])]})),_:1},8,["to"])}var _={name:"boulangerie-produit",props:{product:{type:Object,required:!0}}};n("d26b");_.render=v;var q=_,I=n("e837"),E=n("aff5"),w={name:"App",components:{Produit:q,ProduitInCart:I["a"],Modal:E["a"]},data:function(){return{selectedProduct:{},selectedProductQuantity:1}},methods:{addToCart:function(t){this.selectedProduct=t.product,this.selectedProductQuantity=1,this.$refs.productDialog.show()}}};n("cf8a");w.render=h;var k=w,C=(n("4de4"),n("159b"),n("7db0"),n("5502")),B=n("9e3a"),T=n.n(B),P=Object(C["a"])({state:{tva:.2,produits:[{name:"bread",img:n("1a0d"),price:3,description:"A nice eatable peace of bread.\nIt contain water, floor, salt and yeast.",quantity:0},{name:"croissant",img:n("e508"),description:"A tipical French thing with bread of cource ;)",price:1.5,quantity:0},{name:"brioche",img:n("5dee"),description:"A bread with butter.",price:5,quantity:0},{name:"chocolatine",img:n("aae7"),description:'Some people say "pain au chocolat" but that\'s fucking crap.\nFolow the holy way of chocolatine or burn in hell.',price:2,quantity:0},{name:"Raisin bread",img:n("6ab2"),description:"A chocolatine with grape.",price:2,quantity:0},{name:"Chocolate Twist",img:n("1aea"),description:"A great viennoiserie with chocolate and cream thaw will twist your day.",price:2.5,quantity:0},{name:"Apple Turnover",img:n("2ad1"),description:"Puff pastry with an apple heart, what else?",price:2.5,quantity:0}]},getters:{totalItems:function(t){return t.produits.filter((function(t){return t.quantity>0})).length},totalPrice:function(t){var e=0;return t.produits.forEach((function(t){e+=t.quantity*t.price})),e},itemFromName:function(t){return function(e){return t.produits.find((function(t){return t.name==e}))}},itemsInCart:function(t){return t.produits.filter((function(t){return t.quantity>0}))},priceWithTVA:function(t,e){return Math.floor(e.totalPrice*(1+t.tva))}},mutations:{ADD_ITEM:function(t,e){var n,r=e.name,c=null!==(n=e.quantity)&&void 0!==n?n:1;t.produits.find((function(t){return t.name==r})).quantity+=c},REMOVE_ITEM:function(t,e){t.produits.find((function(t){return t.name==e})).quantity=0},CLEAR_CART:function(t){t.produits.forEach((function(t){t.quantity=0}))}},actions:{addItem:function(t,e){var n,r,c=null!==(n=e.name)&&void 0!==n?n:e,a=null!==(r=e.quantity)&&void 0!==r?r:1;t.state.produits.find((function(t){return t.name==c}))?t.commit("ADD_ITEM",{name:c,quantity:parseInt(a)}):alert("Item doesn't exist")},removeItem:function(t,e){var n=t.state.produits.find((function(t){return t.name==e}));n&&n.quantity>0?t.commit("REMOVE_ITEM",e):alert("Item doesn't exist")},updateQuantity:function(t,e){e.forEach((function(e){t.state.produits.find((function(t){return t.name==e.name}))&&t.commit("ADD_ITEM",{name:e.name,quantity:e.quantity})}))}},plugins:[T.a]}),x=[{path:"/",name:"Index",component:k},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-245da8a8").then(n.bind(null,"da83"))}},{path:"/404",name:"404",component:function(){return n.e("chunk-aa80082c").then(n.bind(null,"8cdb"))}},{path:"/:productName",name:"Details",component:function(){return n.e("chunk-024692e9").then(n.bind(null,"58cc"))},beforeEnter:function(t,e,n){var r=P.getters.itemFromName(t.params.productName);r?(t.params.item=r,n()):n("/404")}}],M=Object(b["a"])({history:Object(b["b"])("/vuejsBackery/"),routes:x}),D=M;n("7e6a");Object(r["d"])(f).use(P).use(D).mount("#app")},"5dee":function(t,e,n){t.exports=n.p+"img/brioche.a7056e9c.png"},"630a":function(t,e,n){},"6ab2":function(t,e,n){t.exports=n.p+"img/RaisinBread.101a9f53.png"},"744a":function(t,e,n){},"7e6a":function(t,e,n){},"9e3a":function(t,e,n){n("159b"),n("b0c0"),t.exports=function(t){t.state.produits.forEach((function(e){var n=parseInt(localStorage[e.name]);n&&n>0&&t.commit("ADD_ITEM",{name:e.name,quantity:n})})),t.watch((function(t){return t.produits}),(function(t){t.forEach((function(t){localStorage[t.name]=t.quantity}))}),{deep:!0})}},aae7:function(t,e,n){t.exports=n.p+"img/chocolatine.8710f3b6.png"},aff5:function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["I"])("data-v-25a8fbaf");Object(r["t"])("data-v-25a8fbaf");var a={class:"modalContent"},o={class:"modalContent__header"},i={class:"modalContent__content"},u={class:"modalContent__actions"};Object(r["r"])();var d=c((function(t,e,n,d,s,l){return Object(r["q"])(),Object(r["e"])(r["b"],{name:"fade",onAfterEnter:l.focusBackground},{default:c((function(){return[s.visible?(Object(r["q"])(),Object(r["e"])("div",{key:0,class:"modalBackground",onKeydown:[e[4]||(e[4]=Object(r["G"])(Object(r["H"])((function(){return l.cancel&&l.cancel.apply(l,arguments)}),["prevent"]),["esc"])),e[5]||(e[5]=Object(r["G"])(Object(r["H"])((function(){return l.validate&&l.validate.apply(l,arguments)}),["prevent"]),["enter"]))],onClick:e[6]||(e[6]=Object(r["H"])((function(){return l.cancel&&l.cancel.apply(l,arguments)}),["self"])),tabindex:"0",ref:"background"},[Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("h2",null,Object(r["A"])(n.title),1),Object(r["h"])("button",{onClick:e[1]||(e[1]=function(){return l.cancel&&l.cancel.apply(l,arguments)})},"X")]),Object(r["h"])("div",i,[Object(r["x"])(t.$slots,"default",{},void 0,!0)]),Object(r["h"])("nav",u,[Object(r["h"])("button",{class:"cancelButton",onClick:e[2]||(e[2]=function(){return l.cancel&&l.cancel.apply(l,arguments)})},Object(r["A"])(n.leftButton),1),Object(r["h"])("button",{onClick:e[3]||(e[3]=function(){return l.validate&&l.validate.apply(l,arguments)})},Object(r["A"])(n.rightButton),1)])])],544)):Object(r["f"])("",!0)]})),_:3},8,["onAfterEnter"])})),s={name:"Modal",props:{title:{type:String,required:!0},leftButton:{type:String,default:"Back"},rightButton:{type:String,default:"Process"}},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},cancel:function(){this.visible=!1,this.$emit("canceled")},validate:function(){this.visible=!1,this.$emit("validated")},focusBackground:function(){this.$refs.background.focus()}}};n("c650");s.render=d,s.__scopeId="data-v-25a8fbaf";e["a"]=s},b0c8:function(t,e,n){},c650:function(t,e,n){"use strict";n("0708")},cf8a:function(t,e,n){"use strict";n("b0c8")},d26b:function(t,e,n){"use strict";n("744a")},e508:function(t,e,n){t.exports=n.p+"img/croissant.f44b5d30.png"},e837:function(t,e,n){"use strict";n("b0c0");var r=n("7a23"),c=n("ed3a"),a=n.n(c),o={class:"cartItem"},i={class:"cartItem__description"},u={class:"cartItem__description__header"},d={class:"cartItem__description__header__price"},s={class:"cartItem__description__action"},l={class:"cartItem__description__action__quantity"},p=Object(r["h"])("img",{src:a.a},null,-1);function f(t,e,n,c,a,f){var b=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("img",{src:n.product.img,class:"cartItem__icon"},null,8,["src"]),Object(r["h"])("div",i,[Object(r["h"])("div",u,[Object(r["h"])(b,{to:"/"+n.product.name,class:"cartItem__description__header__title"},{default:Object(r["E"])((function(){return[Object(r["h"])("h3",null,Object(r["A"])(n.product.name),1)]})),_:1},8,["to"]),Object(r["h"])("p",d,Object(r["A"])(n.product.price)+"€",1)]),Object(r["h"])("div",s,[Object(r["h"])("div",l,[Object(r["h"])("label",{for:f.computedInputId},"Quantity : ",8,["for"]),Object(r["F"])(Object(r["h"])("input",{type:"number",min:"0","onUpdate:modelValue":e[1]||(e[1]=function(t){return f.quantityModel=t}),id:f.computedInputId},null,8,["id"]),[[r["C"],f.quantityModel]]),Object(r["h"])("label",{for:f.computedInputId},"Total : "+Object(r["A"])(n.product.price*n.quantity)+" €",9,["for"])]),n.removable?(Object(r["q"])(),Object(r["e"])("button",{key:0,class:"cartItem__description__action__delete",onClick:e[2]||(e[2]=function(e){return t.$store.dispatch("removeItem",n.product.name)})},[p])):Object(r["f"])("",!0)])])])}n("a9e3"),n("99af");var b={name:"produitInCart",props:{product:{type:Object,require:!0},quantity:{type:Number,required:!0},inputId:{type:Number,required:!0},removable:{type:Boolean,default:!0}},computed:{quantityModel:{get:function(){return this.quantity},set:function(t){""!=t&&this.$emit("update:quantity",parseInt(t))}},computedInputId:function(){return"".concat(this.name,".quantity.").concat(this.inputId)}}};n("17e4");b.render=f;e["a"]=b},e993:function(t,e,n){"use strict";n("630a")},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBwEQOCS3e2C+AAABu0lEQVR42u3aMVLDMBAFUBW5C9RQODezO6dkMDlOLkK4BowgHSk+DWMwXknLxJLW8LdkmPAfluxvTZzjcDgcDmexwQ6puVt3fMsEZXyrhF/EL0tA5SGAAAIIIKAuIATJ/bxxa/sDBBBAAAEEEEAAAWsHoEOT/JwGnVEAdgA8ttFPucWLfKhSHTCeC0UIn/HFc6HKgMmxVoDwLb5AqAqYncoJhB/xZ4SKAHTCm6Cfbmc08MJvdTYAN3gWCdvIf3+GrLuEogRN/PqbOEjQxbdwG5VXuQ/8tLH4IJOvgiq+lSqhIXi5bhgpc0mCD7UlM200SvDhsmeoTgcJPtZVLQHkG2eiqdpZQqH4qaZqZBPH4kcJNm6jqfixsm3gQaaJHySwSlxY5oKVLV22LdTpaOPUEWq+0CQLs4bAV8qLllCr2KTzq9Bb2sStojBPCb2122iraJxfhN7ig6xNNc6R0PNwl8frBBBAAAEEEEAAAQQQQMB/ArwV/c736/KAp6KAx+UB+6KA++UB1zgXi/+OK+fWfA0Gl2OwwaFI/AM2zuUi7DMvpDOGbPHHvfCAI06LRz/hiCHL2udwOBzOH54PYyBrlw4whdgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMDFUMTY6NTY6MjIrMDA6MDBr++wSAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTAxVDE2OjU2OjIyKzAwOjAwGqZUrgAAAABJRU5ErkJggg=="},f8df:function(t,e,n){}});
//# sourceMappingURL=app.3d816a00.js.map