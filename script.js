/* ---- Owner-editable content ---- */
// Contact: add values and the links appear automatically. Empty values stay hidden.
const CONTACT={
  whatsapp:"8801831564866",
  email:"",
  linkedin:"",
  facebook:"https://www.facebook.com/profile.php?id=61584015838037",
  other:[]
};

const groups=[
["Research & Strategy","Understand the business, market and audience before building anything.","M11 4a7 7 0 105 12l4 4M11 8v6M8 11h6",["Business & market research","Competitor research","Brand research","Digital opportunity research"]],
["Growth","Get found in search, earn attention and turn it into enquiries.","M4 18l6-6 4 4 6-8M16 8h4v4",["*SEO|Technical SEO, Local SEO & AI Search","Digital marketing","Paid advertising|Facebook Ads, Google Ads, Social Media Ads","Lead generation","Content & brand growth"]],
["Technology","Build the tools, websites and workflows that support the brand. Automation reduces repetitive work, improves workflows, connects digital processes and supports research and business operations.","M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14",["*Python","Automation","Website development","Software development"]],
["Creative & Operations","Keep the brand consistent and the day-to-day work accurate.","M4 5h16v14H4zM4 10h16M10 5v14",["Graphics design","Data entry"]]];

// DEV: temporary cards describing TYPES of work, not completed case studies. Replace each with a real project.
// Fields: name, category, description, image, alt, problem, approach, result, url.
// alt: describe the real image. problem/approach/result show only when filled in.
// With a url, the card shows "View project"; without one it shows "Case study coming soon".
const projects=[
{name:"Search visibility growth",category:"SEO / Organic Growth",description:"Technical fixes, Local SEO and content-led work to improve search visibility, including in AI-driven search.",alt:"",image:"assets/images/project-1.svg",problem:"",approach:"",result:"",url:""},
{name:"Website build & improvement",category:"Website Development",description:"Clean, fast websites built around what the business needs visitors to do.",alt:"",image:"assets/images/project-2.svg",problem:"",approach:"",result:"",url:""},
{name:"Brand presence development",category:"Brand Growth",description:"Positioning and digital presence shaped by research into the audience and market.",alt:"",image:"assets/images/project-3.svg",problem:"",approach:"",result:"",url:""},
{name:"Market & competitor research",category:"Research",description:"Evidence on audiences, competitors and opportunities to guide strategy.",alt:"",image:"assets/images/project-4.svg",problem:"",approach:"",result:"",url:""},
{name:"Paid advertising campaigns",category:"Paid Advertising",description:"Facebook, Google and social media ads planned around clear goals.",alt:"",image:"assets/images/project-5.svg",problem:"",approach:"",result:"",url:""},
{name:"Workflow automation",category:"Automation",description:"Reducing repetitive work and connecting digital processes.",alt:"",image:"assets/images/project-6.svg",problem:"",approach:"",result:"",url:""}];

/* ---- Rendering ---- */
const ic=d=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const item=i=>{if(i[0]==="*"){const[a,b]=i.slice(1).split("|");return `<li class="core-item"><span>${a}${b?`<span class="sub-i">${b}</span>`:""}</span><small>Core skill</small></li>`}const[a,b]=i.split("|");return b?`<li>${a}<span class="sub-i">${b}</span></li>`:`<li>${a}</li>`};
document.getElementById("svc").innerHTML=groups.map(g=>`<article class="card svc"><span class="icon">${ic(g[2])}</span><h3>${g[0]}</h3><p>${g[1]}</p><ul class="items">${g[3].map(item).join("")}</ul></article>`).join("");
document.getElementById("proj").innerHTML=projects.map(p=>{const d=p.problem||p.approach||p.result;return `<article class="card proj"><img src="${p.image}" width="640" height="400" loading="lazy" alt="${p.alt||""}"><div class="pbody"><span class="tag">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p>${d?`<details><summary>Problem, approach, result</summary><dl><dt>Problem</dt><dd>${p.problem}</dd><dt>Approach</dt><dd>${p.approach}</dd><dt>Result</dt><dd>${p.result}</dd></dl></details>`:""}${p.url?`<a class="more" href="${p.url}" target="_blank" rel="noopener">View project <span aria-hidden="true">›</span></a>`:`<span class="soon">Case study coming soon</span>`}</div></article>`}).join("");

const C=CONTACT,ext=(u,t,c="")=>`<a ${c?`class="${c}" `:""}href="${u}" target="_blank" rel="noopener">${t}</a>`;
const wa=C.whatsapp&&`https://wa.me/${C.whatsapp.replace(/\D/g,"")}`;
const links=[[wa,"WhatsApp"],[C.linkedin,"LinkedIn"],[C.facebook,"Facebook"],...C.other.map(o=>[o.url,o.label])].filter(l=>l[0]);
document.getElementById("cta-actions").innerHTML=[wa&&ext(wa,"WhatsApp","btn btn-light"),C.email&&`<a class="btn btn-line" href="mailto:${C.email}">Email</a>`].filter(Boolean).join("");
const soc=links.map(l=>`<li>${ext(l[0],l[1])}</li>`).join("");
document.getElementById("cta-social").innerHTML=links.filter(l=>l[0]!==wa).map(l=>`<li>${ext(l[0],l[1])}</li>`).join("");
document.getElementById("foot-social").innerHTML=soc+(C.email?`<li><a href="mailto:${C.email}">Email</a></li>`:"");
document.getElementById("yr").textContent=new Date().getFullYear();

/* ---- Mobile menu ---- */
const b=document.querySelector(".burger"),m=document.getElementById("menu");
const set=o=>{m.classList.toggle("open",o);b.setAttribute("aria-expanded",o)};
b.addEventListener("click",()=>set(!m.classList.contains("open")));
m.addEventListener("click",e=>{if(e.target.tagName==="A")set(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
