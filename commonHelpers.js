import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as d,i as l}from"./assets/vendor-77e16229.js";document.querySelector("#datetime-picker");const o=document.querySelector("button[data-start]"),m=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),f=document.querySelector("span[data-seconds]");o.setAttribute("disabled","");let r="";const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=Date.now();e[0]-n<0?(o.setAttribute("disabled",""),l.show({backgroundColor:"#EF4040",message:"Please choose a date in the future",messageColor:"#FFFFFF",position:"topRight",close:!1,iconUrl:"../img/icon.svg"})):(o.removeAttribute("disabled"),r=e[0])}},b=d("#datetime-picker",p);o.addEventListener("click",S);function S(){o.setAttribute("disabled",""),b.destroy();const e=setInterval(()=>{const n=new Date(r)-new Date,t=g(n);m.textContent=s(t.days),h.textContent=s(t.hours),y.textContent=s(t.minutes),f.textContent=s(t.seconds),t.seconds<1&&clearInterval(e)},1e3)}function g(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:i,seconds:u}}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
