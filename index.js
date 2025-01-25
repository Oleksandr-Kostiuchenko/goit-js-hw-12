import{a as y,i as m,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=r=>`
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
    </li>`,S=async(r,s,o,i)=>{const e=document.querySelector(".loader");e.classList.remove("is-hidden");const t=await y.get(`https://pixabay.com/api/?q=${r}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${i}`);if(e.classList.add("is-hidden"),s.innerHTML="",o.value="",t.data.total===0){m.error({title:"Error",titleSize:"25",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"15",position:"bottomRight"});return}let a=[];return t.data.hits.map(b=>{a.push(f(b))}),s.insertAdjacentHTML("beforeend",a.join(" ")),new g(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),t},v=async(r,s)=>{const o=document.querySelector(".loader");o.classList.remove("is-hidden");const i=await y.get(`https://pixabay.com/api/?q=${r}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`);return o.classList.add("is-hidden"),i},q=document.querySelector(".user-query-form"),p=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const h=document.querySelector(".gallery-list"),l=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let d,n=1,c;const w=async r=>{if(r.preventDefault(),d=p.value.trim(),d===""){m.error({title:"Error",titleSize:"25",message:"Please fill the gap!",messageSize:"20",position:"bottomRight"});return}l.classList.add("is-hidden"),u.classList.remove("is-hidden"),n=1;const{data:s}=await S(d,h,p,n);if(u.classList.add("is-hidden"),c=Math.floor(s.totalHits/15),!(c<=1)&&n<=c){if(n===c){l.classList.add("is-hidden");return}l.classList.remove("is-hidden"),l.addEventListener("click",L)}},L=async r=>{try{n++,u.classList.remove("is-hidden");const{data:s}=await v(d,n);u.classList.add("is-hidden"),n===c&&(m.info({title:"",titleSize:"25",message:"We're sorry, but you've reached the end of search results.",messageSize:"20",position:"bottomRight"}),l.classList.add("is-hidden"),l.removeEventListener("click",L));const o=s.hits.map(a=>f(a)).join("");h.insertAdjacentHTML("beforeend",o);const i=new g(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,left:0,behavior:"smooth"})}catch(s){console.log(s)}};q.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
