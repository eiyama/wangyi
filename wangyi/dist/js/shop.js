"use strict";var shopList={init:function(t){this.$ele=document.querySelector(t),this.getShopListData(),this.event()},event:function(){var a=this;this.$ele.addEventListener("click",function(t){var n=(t=t||window.event).target||t.srcElement;if("BUTTON"===n.nodeName&&"btn shop-btn-car"===n.className){console.log("我是购物车按钮");var s=n.getAttribute("attr-id"),e=n.parentNode.querySelector(".shop-count").value;a.addCar(s,e)}},!1)},getShopListData:function(){var n=this;sendAjax("json/shop.json",{success:function(t){t=JSON.parse(t),n.insertShopList(t.data)}})},insertShopList:function(t){for(var n=[],s=0;s<t.length;s++)n.push('<div class=\'shop_detalis\'>\n                          <div class="_shop"> 价格: <span class="shop-price">'.concat(t[s].price,'</span><br />\n                          商品名称:<span class="shop-name">').concat(t[s].name,'</span><br />\n                            数量: <input class="shop-count" type="number"  value="1" /><br />\n                            <button class="btn shop-btn-car" attr-id=').concat(t[s].id,">加入购物车</button></div>\n                        </div>"));this.$ele.innerHTML=n.join("")},addCar:function(t,n){var s=localStorage.shopList||"[]";s=JSON.parse(s);for(var e=0;e<s.length;e++)if(s[e].id===t){s[e].count=Number(s[e].count)+Number(n);break}e===s.length&&s.push({id:t,count:n}),localStorage.shopList=JSON.stringify(s)}};