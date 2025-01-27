import{a as b,S,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h=async(t,r)=>await b.get(`https://pixabay.com/api/?q=${t}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`),f=t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        </a>
        
        <div class='description-image'>
        <p>
        Likes <br>
        ${t.likes}
        </p>
        <p>
        Views <br>
        ${t.views}
        </p>
        <p>
        Likes <br>
        ${t.likes}
        </p>
        <p>Downloads <br>
        ${t.comments}</p>

        </div>
    </li>`,v=document.querySelector(".user-query-form"),p=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const g=document.querySelector(".gallery-list"),o=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let d,a=1,l;const L=new S(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),q=async t=>{try{if(t.preventDefault(),d=p.value.trim(),d===""){c.error({title:"Error",titleSize:"25",message:"Please fill the gap!",messageSize:"20",position:"bottomRight"});return}o.classList.add("is-hidden"),u.classList.remove("is-hidden"),a=1;const{data:r}=await h(d,a);if(g.innerHTML="",p.value="",u.classList.add("is-hidden"),r.total===0){c.error({title:"Error",titleSize:"25",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"15",position:"bottomRight"});return}let i=[];if(r.hits.forEach(n=>{i.push(f(n))}),g.insertAdjacentHTML("beforeend",i.join("")),L.refresh(),l=Math.ceil(r.totalHits/15),l<=1)return;if(a<=l){if(a===l){o.classList.add("is-hidden");return}o.classList.remove("is-hidden"),o.removeEventListener("click",y),o.addEventListener("click",y)}}catch{c.error({title:"Error",titleSize:"25",message:"Something went wrong",messageSize:"20",position:"bottomRight"})}},y=async t=>{try{a++,u.classList.remove("is-hidden");const{data:r}=await h(d,a);u.classList.add("is-hidden"),a>=l&&(c.info({title:"",titleSize:"25",message:"We're sorry, but you've reached the end of search results.",messageSize:"20",position:"bottomRight"}),o.classList.add("is-hidden"),o.removeEventListener("click",y));const i=r.hits.map(s=>f(s)).join("");g.insertAdjacentHTML("beforeend",i),L.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}catch{c.error({title:"Error",titleSize:"25",message:"Something went wrong",messageSize:"20",position:"bottomRight"})}};v.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
