class WhatsAppBtn{constructor({phone:t,phones:e,text:s,backgroundColor:a,callTo:i,iconColor:l,position:o,positionText:n,style:c,width:p,ga:h,fb:r,pi:d}){this.phone=t,this.phones=e||"",this.text=s||"",this.backgroundColor=a||"#4DC247",this.callTo=i,this.iconColor=l||"#fff",this.positionText=n||"tl",this.position=o||"rb",this.style=c||"",this.width=p||"60",this.ga=h,this.fb=r,this.pi=d}renderButton(){let t=this.backgroundColor,e=this.iconColor,s=this.width,a=document.createElement("div");a.className="jam_whatsapp",a.classList.add(this.position),a.classList.add(this.positionText),null!=this.style&&a.setAttribute("style",this.style),document.body.appendChild(a);let i=document.createElement("link");i.setAttribute("href","https://cdn.jsdelivr.net/gh/javimata/whatsapp-widget@1.0.6/assets/css/whatsapp.min.css"),i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("style",`background:${this.backgroundColor}`),document.body.appendChild(i);let l=this.phones,o="",n="";if(""==l||l.length<1)o=`https://wa.me/${this.phone}?text=${this.text}`,n="link_whatsapp";else{o="#",n="link_whatsapp_toggle";let t=document.createElement("div");t.setAttribute("class","jam_whatsapp_chatBox");let e=`<div class='jam_whatsapp_chatBox_header'><div class="header_title">${this.callTo}</div><div class="header_close"><a href="#" class="link_whatsapp_close"><span></span></a></div></div>`;for(var c of(e+='<div class="jam_whatsapp_chatBox_items">',l)){let t=c.split(":"),s=t[0],a=t[1];e+=`<div class="jam_whatsapp_chatBox_item"><a href="https://wa.me/${a}?text=${this.text}" class="link_whatsapp" target="_blank"><span class="item_name">${s}</span><span class="item_number">${a}</span></a></div>`}e+="</div>",t.innerHTML=e,a.appendChild(t)}if(void 0!==this.callTo&&""!=this.callTo){let t=document.createElement("div");t.setAttribute("class","jam_whatsapp_text"),t.innerText=this.callTo,a.appendChild(t)}let p=document.createElement("a");p.setAttribute("href",o),p.setAttribute("class",n),p.setAttribute("style","text-decoration: none"),p.setAttribute("target","_blank"),a.appendChild(p);let h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("id","jam_whatsapp_widget"),h.setAttribute("viewBox","0 0 32 32"),h.setAttribute("width",s),h.setAttribute("height",s),p.appendChild(h);var r=document.querySelector("#jam_whatsapp_widget"),d=document.createElementNS("http://www.w3.org/2000/svg","circle");d.setAttribute("id","whatsapp_icon_path"),d.setAttribute("cx","15.8"),d.setAttribute("cy","15.8"),d.setAttribute("r","15.2"),d.setAttribute("fill",t),r.appendChild(d);var u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M18.9,17c-0.3,0-1,1.3-1.4,1.3c-0.1,0-0.2,0-0.3-0.1c-0.8-0.4-1.4-0.8-2-1.4 c-0.5-0.5-1.1-1.2-1.4-1.8c0-0.1-0.1-0.1-0.1-0.2c0-0.3,0.9-0.9,0.9-1.4c0-0.1-0.7-2-0.8-2.2c-0.1-0.3-0.2-0.5-0.6-0.5 c-0.2,0-0.3,0-0.5,0c-0.3,0-0.5,0.1-0.7,0.3c-0.6,0.6-1,1.2-1,2.1v0.1c0,0.9,0.4,1.9,1,2.6c1.2,1.7,2.4,3.2,4.3,4.1 c0.6,0.3,1.9,0.8,2.6,0.8c0.8,0,2-0.5,2.3-1.2c0.1-0.3,0.2-0.7,0.2-1c0-0.1,0-0.1,0-0.2C21.3,18.2,19.1,17,18.9,17z M16.2,24.2 c-1.6,0-3.3-0.5-4.6-1.4l-3.3,1l1.1-3.1c-1-1.4-1.6-3.2-1.6-5c0-4.7,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4 C24.6,20.4,20.8,24.2,16.2,24.2z M16.2,5.6C10.6,5.6,6,10.1,6,15.7c0,1.8,0.5,3.7,1.5,5.2l-1.8,5.4l5.6-1.8 c4.9,2.7,11.1,0.9,13.8-4c0.8-1.5,1.3-3.2,1.3-4.9C26.3,10.1,21.8,5.6,16.2,5.6L16.2,5.6z"),u.setAttribute("id","whatsapp_icon_path"),u.setAttribute("fill",e),r.appendChild(u);let m=this.ga,_=this.fb,w=this.pi,g=document.querySelector(".jam_whatsapp a.link_whatsapp_toggle"),b=document.querySelector(".jam_whatsapp a.link_whatsapp_close");g.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".jam_whatsapp_chatBox").classList.toggle("show")})),b.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".jam_whatsapp_chatBox").classList.remove("show")})),document.querySelector(".jam_whatsapp a.link_whatsapp").addEventListener("click",(function(){null!=m[0]&&("function"==typeof gtag?(gtag("event",m[1],{event_category:m[0],event_label:m[2]}),console.log("push GTAG event "+m[2])):"function"==typeof m?(m("send","event",m[0],m[1],m[2]),console.log("push GA event "+m[2])):console.log("No GA install or detected")),null!=_[0]&&("function"==typeof fbq?(fbq("track",_[0],{content_name:_[1]}),console.log("push FB event "+_[1])):console.log("No Pixel install or detected")),null!=w[0]&&("function"==typeof pintrk?(pintrk("track",w[0],{lead_type:w[1]}),console.log("push Pinteres event "+w[1])):console.log("No Pinterest Pixel detected"))}))}}