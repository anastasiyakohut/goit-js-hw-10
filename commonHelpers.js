import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as y}from"./assets/vendor-77e16229.js";const o=document.querySelector("[data-start]"),m=document.getElementById("datetime-picker"),e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null;o.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);const n=t[0];n<Date.now()?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040"}),o.disabled=!0):(u=n,o.disabled=!1)}};f("#datetime-picker",g);o.addEventListener("click",()=>{if(!u)return;m.disabled=!0,o.disabled=!0;const t=u.getTime();function n(){const s=t-new Date().getTime();if(s<=0){clearInterval(l),e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00",m.disabled=!1;return}const{days:a,hours:i,minutes:d,seconds:c}=S(s);e.days.textContent=r(a.toString()),e.hours.textContent=r(i.toString()),e.minutes.textContent=r(d.toString()),e.seconds.textContent=r(c.toString())}let l=setInterval(n,1e3);n()});function S(t){const a=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:d,seconds:c}}function r(t){return t.padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
