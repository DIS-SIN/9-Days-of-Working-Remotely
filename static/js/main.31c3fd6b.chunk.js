(this["webpackJsonp12-days-of-data"]=this["webpackJsonp12-days-of-data"]||[]).push([[0],[,,function(e,t,n){},,,function(e){e.exports=JSON.parse('{"day_1":{"unlocks_at":"December 5, 2019","error_message":{"title":"No Peeking!","text":"Come back on December 5th to view this content"},"title":"","text":"","link":""},"day_2":{"unlocks_at":"December 6, 2019","error_message":{"title":"Nice try","text":"A good way of saying \u201cCome back on December 6th to view this content.\u201d"},"title":"","text":"","link":""},"day_3":{"unlocks_at":"December 9, 2019","error_message":{"title":"Now just wait a minute\u2026","text":"You thought you could take a peek? Get back to work and come back on December 9th to see this content!"},"title":"","text":"","link":""},"day_4":{"unlocks_at":"December 10, 2019","error_message":{"title":"Patience is a virtue","text":"\u201cPatience is not the ability to wait, but the ability to keep a good attitude while waiting\u201d - An author with more patience than you\\n\\nCome back on December 10th to view this content."},"title":"","text":"","link":""},"day_5":{"unlocks_at":"December 11, 2019","error_message":{"title":"This is a test","text":"We tested your patience\u2026 Looks like you failed!\\n\\nCome back on December 11th to view this content."},"title":"","text":"","link":""},"day_6":{"unlocks_at":"December 12, 2019","error_message":{"title":"Absolutely no peeking!","text":"Come back on December 12th and you might have more luck!"},"title":"","text":"","link":""},"day_7":{"unlocks_at":"December 13, 2019","error_message":{"title":"Admit it\u2026","text":"You thought you could look at the content before others? Looks like you were wrong! Come back on December 13th to see what we have waiting for you."},"title":"","text":"","link":""},"day_8":{"unlocks_at":"December 16, 2019","error_message":{"title":"Don\u2019t give up!","text":"Never give up on something you really want. It\u2019s difficult to wait but come back on December 16th to see the content."},"title":"","text":"","link":""},"day_9":{"unlocks_at":"December 17, 2019","error_message":{"title":"Patience:","text":"What you don\u2019t have!\\n\\nCome back on December 17thto see this content."},"title":"","text":"","link":""},"day_10":{"unlocks_at":"December 18, 2019","error_message":{"title":"They say\u2026","text":"The longer you wait, the better the content. Come back on December 18th to see if it\u2019s true!"},"title":"","text":"","link":""},"day_11":{"unlocks_at":"December 19, 2019","error_message":{"title":"Looks like you\u2019re having trouble waiting\u2026 here\u2019s a data joke to hold you off!","text":"Question: What\u2019s the difference between an introverted data analyst & an extroverted one?\\n\\nAnswer: the extrovert stares at YOUR shoes.\\n\\nCome back on December 19th to see this content."},"title":"","text":"","link":""},"day_12":{"unlocks_at":"December 20, 2019","error_message":{"title":"It\u2019s worth the wait!","text":"Stay strong\u2026 it\u2019s coming soon!"},"title":"","text":"","link":""}}')},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),c=(n(11),n(1));n(2);function s(e){var t=Object(o.useState)("noPeekingWindow hide"),n=Object(c.a)(t,2),r=n[0],i=n[1];function s(){i("noPeekingWindow hide"),setTimeout((function(){e.setError({exists:!1})}),500)}return Object(o.useEffect)((function(){i("noPeekingWindow")}),[]),a.a.createElement("div",{className:"noPeeking",onClick:s},a.a.createElement("div",{className:r},a.a.createElement("div",null,a.a.createElement("h4",null,e.error.message.title),a.a.createElement("i",{className:"material-icons close",tabIndex:"0",onClick:s},"close")),a.a.createElement("p",null,e.error.message.text)))}var l=n(5);var m=function(e){var t=l["day_".concat(e.day)];function n(){return Date.now()>=new Date(t.unlockDate)}return a.a.createElement("div",{className:"flap","data-day":e.day,onClick:function(o){n()?(console.log("Opening Day ",o.target.getAttribute("data-day")),e.openContent(!0)):e.setError({exists:!0,message:t.error_message})},tabIndex:"1"},a.a.createElement("p",null,e.day),a.a.createElement("i",{className:"material-icons lock"},n()?"lock_open":"lock"))};function u(e){return a.a.createElement("div",{className:e.contentIsOpen?"content open":"content"},a.a.createElement("button",{className:"closeButton material-icons close",onClick:function(){return e.openContent(!1)},tabIndex:"0"},"close"))}var k=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({exists:!1}),l=Object(c.a)(i,2),k=l[0],d=l[1],h=Array.from({length:12},(function(e,t){return t+1}));return a.a.createElement(a.a.Fragment,null,k.exists?a.a.createElement(s,{error:k,setError:d}):null,a.a.createElement("div",{className:"calendar"},h.map((function(e){return a.a.createElement(m,{key:e,day:e,openContent:r,setError:d})})),a.a.createElement(u,{contentIsOpen:n,openContent:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.31c3fd6b.chunk.js.map