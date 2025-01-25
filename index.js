import{a as m,i as y,S as f}from"./assets/vendor-DEenWwFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g=t=>`
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
    </li>`;document.querySelector(".load-more-btn");const L=async(t,a,n,s)=>{document.querySelector("main").insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader"),o=await m.get(`https://pixabay.com/api/?q=${t}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`);if(r.remove(),a.innerHTML="",n.value="",o.data.total===0){y.error({title:"Error",titleSize:"25",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"15",position:"bottomRight"});return}let p=[];return o.data.hits.map(b=>{p.push(g(b))}),a.insertAdjacentHTML("beforeend",p.join(" ")),new f(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),o},S=async(t,a,n,s)=>{document.querySelector("main").insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader"),o=await m.get(`https://pixabay.com/api/?q=${t}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`);return r.remove(),o},q=document.querySelector(".user-query-form"),d=document.querySelector(".user-query-input");document.querySelector(".user-query-btn");const u=document.querySelector(".gallery-list"),i=document.querySelector(".load-more-btn");let l,c=1;const v=async t=>{if(t.preventDefault(),l=d.value.trim(),l===""){y.error({title:"Error",titleSize:"25",message:"Please fill the gap!",messageSize:"20",position:"bottomRight"});return}i.classList.add("is-hidden"),c=1;const{data:a}=await L(l,u,d,c);console.log(a),a.totalHits>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",h))},h=async t=>{c++;const{data:a}=await S(l,u,d,c),n=a.hits.map(s=>g(s)).join("");u.insertAdjacentHTML("beforeend",n),new f(".gallery-list a",{captionSelector:"img",captionsData:"alt",captionDelay:250}),a.hits.length===0&&(i.classList.add("is-hidden"),i.removeEventListener("click",h))};q.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
