import{S as y,a as h,i as u}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=r=>`
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
    </li>`,v=async(r,s,o,i)=>{const e=document.querySelector(".loader");e.classList.remove("is-hidden");const t=await h.get(`https://pixabay.com/api/?q=${r}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${i}`);if(e.classList.add("is-hidden"),s.innerHTML="",o.value="",t.data.total===0){u.error({title:"Error",titleSize:"25",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"15",position:"bottomRight"});return}let l=[];return t.data.hits.map(S=>{l.push(f(S))}),w.refresh(),s.insertAdjacentHTML("beforeend",l.join("")),t},q=async(r,s)=>{const o=document.querySelector(".loader");o.classList.remove("is-hidden");const i=await h.get(`https://pixabay.com/api/?q=${r}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`);return o.classList.add("is-hidden"),i},w=new y(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),$=document.querySelector(".user-query-form"),g=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const L=document.querySelector(".gallery-list"),a=document.querySelector(".load-more-btn"),m=document.querySelector(".loader");let d,n=1,c;const b=new y(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),z=async r=>{if(r.preventDefault(),d=g.value.trim(),d===""){u.error({title:"Error",titleSize:"25",message:"Please fill the gap!",messageSize:"20",position:"bottomRight"});return}a.classList.add("is-hidden"),m.classList.remove("is-hidden"),n=1;const{data:s}=await v(d,L,g,n);if(m.classList.add("is-hidden"),b.refresh(),c=Math.floor(s.totalHits/15),!(c<=1)&&n<=c){if(n===c){a.classList.add("is-hidden");return}a.classList.remove("is-hidden"),a.removeEventListener("click",p),a.addEventListener("click",p)}},p=async r=>{try{n++,m.classList.remove("is-hidden");const{data:s}=await q(d,n);m.classList.add("is-hidden"),n>c&&(u.info({title:"",titleSize:"25",message:"We're sorry, but you've reached the end of search results.",messageSize:"20",position:"bottomRight"}),a.classList.add("is-hidden"),a.removeEventListener("click",p));const o=s.hits.map(t=>f(t)).join("");L.insertAdjacentHTML("beforeend",o),b.refresh();const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}catch(s){u.error({title:"Error",titleSize:"25",message:"Something went wrong",messageSize:"20",position:"bottomRight"}),console.log(s)}};$.addEventListener("submit",z);
//# sourceMappingURL=index.js.map
