/*! For license information please see shortcut.js.LICENSE */
!function(t){var e={};function a(c){if(e[c])return e[c].exports;var n=e[c]={i:c,l:!1,exports:{}};return t[c].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,c){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(c,n,function(e){return t[e]}.bind(null,n));return c},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=6)}({6:function(t,e){$(document).ready(function(){var t=$("[data-container-express-checkout]").data("paypal-source-page");switch(t){case"product":var e=a();c(t,e.qty,e.id_product,e.id_product_attribute),prestashop.on("updatedProduct",function(e,n,o){var r=a();c(t,r.qty,r.id_product,e.id_product_attribute)});break;case"cart":prestashop.on("updateCart",function(){return c(t)})}"undefined"!=typeof ec_sc_in_context&&ec_sc_in_context&&(window.paypalCheckoutReady=function(){paypal.checkout.setup(merchant_id,{environment:ec_sc_environment})})});var a=function(){var t=new Object;return t.qty=$('input[name="qty"]').val(),t.id_product=$("[data-paypal-id-product]").val(),t.id_product_attribute=$("[data-paypal-id-product-attribute]").val(),t};$("[data-paypal-shortcut-btn]").on("click",function(){var t=$("[data-container-express-checkout]").data("paypal-source-page");switch($("[data-paypal-url-page]").val(document.location.href),t){case"product":var e=a(),c=[],o=/group\[([0-9]+)\]/;$("[data-paypal-qty]").val(e.qty),$.each($("#add-to-cart-or-refresh").serializeArray(),function(t,e){(res=e.name.match(o))&&c.push("".concat(res[1]," : ").concat(e.value))}),$("[data-paypal-combination]").val(c.join("|")),"undefined"!=typeof ec_sc_in_context&&ec_sc_in_context?n(t,c,e.qty,e.id_product):$("[data-paypal-payment-form-cart]").submit();break;case"cart":"undefined"!=typeof ec_sc_in_context&&ec_sc_in_context?n():$("[data-paypal-payment-form-cart]").submit()}});var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];$.ajax({url:sc_init_url,type:"POST",data:"checkAvailability=1&source_page=".concat(t).concat(a?"&id_product=".concat(a):"").concat(e?"&quantity=".concat(e):"").concat(c?"&product_attribute=".concat(c):""),success:function(t){t.success?$("[data-container-express-checkout]").show():$("[data-container-express-checkout]").hide()}})},n=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];paypal.checkout.initXO(),$.support.cors=!0,$.ajax({url:ec_sc_action_url,type:"GET",data:"getToken=1&source_page=".concat(t).concat(c?"&id_product=".concat(c):"").concat(a?"&quantity=".concat(a):"").concat(e?"&combination=".concat(e.join("|")):""),success:function(t){if(t.success){var e=paypal.checkout.urlPrefix+t.token;paypal.checkout.startFlow(e)}else paypal.checkout.closeFlow(),window.location.replace(t.redirect_link)},error:function(t){alert("Error in ajax post ".concat(t.statusText)),paypal.checkout.closeFlow()}})}}});
//# sourceMappingURL=shortcut.js.map