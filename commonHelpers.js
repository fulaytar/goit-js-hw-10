import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as r}from"./assets/vendor-77e16229.js";const m="/goit-js-hw-10/assets/error-d944d4ee.svg",h="/goit-js-hw-10/assets/done-c21035ce.svg",p=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),f=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");o.setAttribute("disabled","");let a="";const F={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const s=Date.now();e[0]-s<0?(o.setAttribute("disabled",""),r.show({backgroundColor:"#EF4040",message:"Please choose a date in the future",messageColor:"#FFFFFF",position:"topRight",close:!1,iconUrl:m})):(o.removeAttribute("disabled"),a=e[0])}},S=l("#datetime-picker",F);o.addEventListener("click",w);function w(){o.setAttribute("disabled",""),p.setAttribute("disabled",""),S.destroy();const e=setInterval(()=>{const s=new Date(a)-new Date,t=C(s);f.textContent=n(t.days),y.textContent=n(t.hours),b.textContent=n(t.minutes),g.textContent=n(t.seconds),t.seconds<1&&(r.show({backgroundColor:"green",message:"Time's up",messageColor:"#FFFFFF",position:"topRight",close:!1,iconUrl:h}),clearInterval(e))},1e3)}function C(e){const c=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:d,seconds:u}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
