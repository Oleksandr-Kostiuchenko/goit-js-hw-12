import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m=r=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
        </a>
        
        <div class='description-image'>
        <p>
        Likes <br>
        ${r.likes}
        </p>
        <p>
        Views <br>
        ${r.views}
        </p>
        <p>
        Likes <br>
        ${r.likes}
        </p>
        <p>Downloads <br>
        ${r.comments}</p>

        </div>
    </li>`,d=(r,o,s)=>{document.querySelector("main").insertAdjacentHTML("beforeend",'<span class="loader"></span>');const t=document.querySelector(".loader");fetch(`https://pixabay.com/api/?q=${r}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return t.remove(),o.innerHTML="",s.value="",e.json()}).then(e=>{e.total===0&&l.error({title:"Error",titleSize:"25",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"15",position:"bottomRight"});let i=[];e.hits.map(c=>{i.push(m(c))}),o.insertAdjacentHTML("beforeend",i.join(" ")),new u(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250})})},p=document.querySelector(".user-query-form"),a=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const f=document.querySelector(".gallery-list"),y=r=>{r.preventDefault();const o=a.value.trim();if(o===""){l.error({title:"Error",titleSize:"25",message:"Please fill the gap!",messageSize:"20",position:"bottomRight"});return}d(o,f,a)};p.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
