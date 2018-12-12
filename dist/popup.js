!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t){let n,o,r,i,a,d,s,c,l,u,f=0,v=[],m=!1;const p="https://youtu.be/",S=chrome.extension.connect({name:"YTNotes"});function g(){f=0,(v=Object.values(n)).sort(function(e,t){const n=new Date(e.lastSaved);return new Date(t.lastSaved)-n})}function b(){for(g();u.firstChild;)u.removeChild(u.firstChild);v.forEach((e,t)=>{const n=document.createElement("li");n.classList.add("notes-sidebar__note"),n.innerHTML=`${e.videoTitle}`,n.dataset.noteId=`${t}`,u.appendChild(n)}),L(),_()}function _(){const e=u.querySelector(`[data-note-id="${f}"]`);if(!e)return;const t=u.querySelector(".notes-sidebar__note--active");t&&t.classList.remove("notes-sidebar__note--active"),e.classList.add("notes-sidebar__note--active")}function L(){document.querySelectorAll(".notes-sidebar__note").forEach(e=>{e.addEventListener("click",e=>{f=e.target.dataset.noteId,h(),_()})})}function y(e){console.log("debounced input event"),function(){const e=o.innerHTML;if(console.log("saving current note",f),v[f].note=e,v[f].lastSaved=(new Date).toISOString(),n[v[f].videoID]=v[f],S.postMessage({write:n}),"0"==f)return;b()}(),D("Saving")}function h(){v[f].YTVideo?(i.innerText=v[f].videoTitle,r.innerHTML=""):(r.innerText=v[f].videoTitle,i.innerHTML=""),v[f].videoShareUrl&&(i.href=v[f].videoShareUrl),o.innerHTML=v[f].note;const e=o.querySelectorAll(".note_area__timestamp-wrapper");console.log("COLLECTING LINKS",e),e.forEach((e,t,n)=>{console.log("Handline link",{current:e,index:t,link:n}),E(e)}),D({date:v[f].lastSaved})}function D(e){let t;console.log("state",e);const n=new Date,o=document.querySelector(".save-indicator");e.note?o.innerHTML=e.note:(t=e.date?new Date(e.date):new Date(v[f].lastSaved),n.toDateString()==t.toDateString()?o.innerHTML=`Last Saved: ${t.toLocaleTimeString()}`:o.innerHTML=`Last Saved: ${t.toDateString()}`)}function T(e){delete n[v[f].videoID],S.postMessage({write:n}),b(),f=0,_(),h()}function M(){m&&chrome.tabs.sendMessage(l,{method:"currentTime"},e=>{const t=e.data,n=document.createElement("div");n.classList.add("note_area__timestamp-wrapper"),n.style.display="inline-block";const r=document.createElement("a");r.innerHTML=`${t.timestamp}`,r.href=`${p}${t.videoID}?t=${Math.round(t.seconds)}`,r.classList.add("notes_area__timestamp"),r.addEventListener("blur",e=>{e.preventDefault(),console.log("Link CLicked event target",e.target),chrome.tabs.create({url:e.target.href,selected:!1})}),n.addEventListener("click",E),n.appendChild(r),o.appendChild(n)})}function E(e){const t=e.firstChild;console.log("LINK HANDLER",t),t&&e.addEventListener("click",e=>{console.log("Link true; making tab!",t.href),e.preventDefault(),chrome.tabs.create({url:t.href,selected:!1})})}function w(){(function(){const e={videoID:"sss".replace(/s/g,k),videoTitle:"New Note",lastSaved:(new Date).toISOString(),note:"",YTVideo:!1};return new Promise(t=>{m||t(e),m&&chrome.tabs.sendMessage(l,{method:"getYTData"},function(n){console.log("Get DATA response",n),e.videoTitle=n.data.videoTitle,e.videoID=n.data.videoID,e.videoShareUrl=`${p}${e.videoID}`,e.YTVideo=!0,t(e)})})})().then(e=>{let t;if(n[e.videoID])return g(),v.find((n,o)=>{n.videoID!=e.videoID||(t=o)}),f=t,h(),_(),void D({note:"Note for video already exists. Switched to it!"});n[e.videoID]=e,S.postMessage({write:n}),v=n,g(),b(),L(),f=0,_(),h()})}function k(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}document.addEventListener("DOMContentLoaded",()=>{console.log("loaded..."),chrome.tabs.query({active:!0,currentWindow:!0},e=>{const t=e[0].url;l=e[0].id,(m=t.includes("youtube.com/watch"))&&(document.querySelector(".on-yt-indicator").style.display="block")}),o=document.querySelector(".note-area"),r=document.querySelector(".note-title__plain-text"),i=document.querySelector(".note-title__link"),c=document.querySelector(".new-note-button"),a=document.querySelector(".add-marker__button"),d=document.querySelector(".delete-note__buton"),u=document.querySelector(".notes-sidebar__notes"),s=document.querySelector(".editor-toolbar__more-button"),notesMenuMore=document.querySelector(".editor-toolbar__more"),S.postMessage("YTNotes-loaded")}),S.onMessage.addListener(function(e){var t;if(e.notesData&&(console.log("NOTES DATA RECEIVED"),t=e.notesData.notes,n=t,console.log("Notes Sorted",v),b(),h(),_(),L(),o.addEventListener("input",function(e,t,n){let o;return function(...r){console.log("DEBOUCE ARGS",...r);const i=this,a=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(i,...r)},t),a&&e.apply(i,r)}}(y,700,!1)),r.addEventListener("click",e=>{e.preventDefault(),chrome.tabs.create({url:e.target.href,selected:!1})},!1),c.addEventListener("click",w),m&&(a.addEventListener("click",M),a.classList.remove("add-marker__button--disabled")),d.addEventListener("click",T),s.addEventListener("click",e=>{notesMenuMore.classList.toggle("editor-toolbar__more--open")})),"saved"==e){D(`Last Saved: ${(new Date).toDateString()}`)}})}});