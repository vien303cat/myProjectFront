import{R as y,ad as V,G as h,c as g,Y as n,$ as v,X as s,L as o,aw as d,ai as l,W as u,_ as b,O as w,am as x}from"./index-CazOE4wl.js";import{b as p}from"./route-block-B_A1xBdJ.js";import{V as m,a as A}from"./VRow-DYi6lY_M.js";import{V as D}from"./VDivider-DgMmXQ-N.js";import{V as B}from"./VDataTable-CMwd-TUi.js";import{V as C}from"./VContainer-DhHz2rcs.js";import"./VPagination-DEjA1QzI.js";import"./VList-D9y1FfSI.js";import"./VMenu-orQhoMX0.js";const L={class:"text-center"},O={__name:"orders",setup(S){const{apiAuth:f}=x(),{t:r}=y(),_=V(),i=h([]),k=g(()=>[{title:"ID",key:"_id"},{title:r("order.user"),key:"user.account"},{title:r("order.createdAt"),key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:r("order.cart"),key:"cart",sortable:!1},{title:r("order.price"),key:"price",value:t=>t.cart.reduce((a,e)=>a+e.product.price*e.quantity,0)}]);return(async()=>{var t,a;try{const{data:e}=await f.get("/order/all");i.value=e.result}catch(e){console.log(e),_({text:r("api."+(((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"unknownError")),snackbarProps:{color:"red"}})}})(),(t,a)=>(n(),v(C,null,{default:s(()=>[o(A,null,{default:s(()=>[o(m,{cols:"12"},{default:s(()=>[d("h1",L,l(t.$t("nav.orders")),1)]),_:1}),o(D),o(m,{cols:"12"},{default:s(()=>[o(B,{items:i.value,headers:k.value},{"item.cart":s(e=>[d("ul",null,[(n(!0),u(w,null,b(e.item.cart,c=>(n(),u("li",{key:c._id},l(c.product.name)+" x "+l(c.quantity),1))),128))])]),_:2},1032,["items","headers"])]),_:1})]),_:1})]),_:1}))}};typeof p=="function"&&p(O);export{O as default};