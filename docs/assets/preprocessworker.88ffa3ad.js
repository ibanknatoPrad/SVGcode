(function(){"use strict";const f="discrete";let a,t;const u=(e,s,n,c,r)=>(t.clearRect(0,0,c,r),t.filter=n,t.drawImage(e,0,0,e.width,e.height,0,0,c,r),t.filter=s,t.drawImage(a,0,0,a.width,a.height,0,0,c,r),t.getImageData(0,0,c,r));self.addEventListener("message",e=>{if(e.data.offscreen){a=e.data.offscreen,t=a.getContext("2d");return}const{inputImageBitmap:s,posterize:n,rgba:c,cssFilters:r,width:l,height:o,dpr:i}=e.data;t.scale(i,i),a.width=l,a.height=o;const p=u(s,d(n,c,r),r,l,o);e.ports[0].postMessage({result:p})});const d=(e,s)=>{const n=[];return e&&n.push({filter:"componentTransfer",funcR:{type:f,tableValues:s.r},funcG:{type:f,tableValues:s.g},funcB:{type:f,tableValues:s.b},funcA:{type:f,tableValues:s.a}}),new CanvasFilter(n)}})();