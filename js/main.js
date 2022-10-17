const nav=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__toggle"),mapImage=document.querySelector(".map__image"),selectSingle=document.querySelector(".catalog__sorting-control"),selectSingle_title=selectSingle.querySelector(".catalog__sorting-control-title"),selectSingle_labels=selectSingle.querySelectorAll(".catalog__sorting-control-label");nav.classList.remove("navigation-no-js"),nav.classList.add("navigation__nav--closed"),navToggle.addEventListener("click",(()=>{nav.classList.contains("navigation__nav--closed")?(nav.classList.remove("navigation__nav--closed"),nav.classList.add("navigation__nav--opened")):(nav.classList.add("navigation__nav--closed"),nav.classList.remove("navigation__nav--opened"))}));const swiper=new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),map=L.map("map").setView({lat:59.968137,lng:30.316272},10);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);const pinIcon=L.icon({iconUrl:"../images/map-marker.svg",iconSize:[38,50],iconAnchor:[19,50]}),pinMarker=L.marker({lat:59.968137,lng:30.316272},{icon:pinIcon});pinMarker.addTo(map),selectSingle_title.addEventListener("click",(()=>{"active"===selectSingle.getAttribute("data-state")?selectSingle.setAttribute("data-state",""):selectSingle.setAttribute("data-state","active")}));for(let e=0;e<selectSingle_labels.length;e++)selectSingle_labels[e].addEventListener("click",(e=>{selectSingle_title.textContent=e.target.textContent,selectSingle.setAttribute("data-state","")}));