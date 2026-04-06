/* =========================
   SMOOTH FADE WITHOUT FLASH
========================= */

document.addEventListener("DOMContentLoaded",()=>{

document.body.style.opacity = "0";
document.body.style.filter = "blur(6px)";

requestAnimationFrame(()=>{
document.body.style.transition = "all 0.5s ease";
document.body.style.opacity = "1";
document.body.style.filter = "blur(0px)";
});

});

/* =========================
   PAGE TRANSITION OUT
========================= */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

if(link.href && !link.target){

e.preventDefault();

document.body.style.transition = "all 0.4s ease";
document.body.style.opacity = "0";
document.body.style.filter = "blur(6px)";

setTimeout(()=>{
window.location = link.href;
},350);

}

});

});

/* =========================
   PARTICLES + FULL HEIGHT
========================= */

const canvas = document.getElementById("bg");

if(canvas){

const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;
}

resize();
window.addEventListener("resize", resize);
window.addEventListener("load", resize);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove",(e)=>{
mouseX = e.clientX;
mouseY = e.clientY;
});

let particles = [];

for(let i=0;i<180;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
s:Math.random()*1+0.3,
depth:Math.random()*2
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.y -= p.s;

if(p.y < 0){
p.y = document.body.scrollHeight;
p.x = Math.random()*canvas.width;
}

let dx = (mouseX - canvas.width/2) * 0.0005 * p.depth;
let dy = (mouseY - canvas.height/2) * 0.0005 * p.depth;

ctx.beginPath();
ctx.arc(p.x + dx, p.y + dy, p.r, 0, Math.PI*2);
ctx.fillStyle = "rgba(255,255,255,0.35)";
ctx.fill();

});

requestAnimationFrame(animate);
}

animate();

}

/* =========================
   3D TILT
========================= */

document.querySelectorAll(".category-btn").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2) / 12;
const rotateY = (x - rect.width/2) / 12;

card.style.transform = `
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;

});

card.addEventListener("mouseleave",()=>{
card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});

});
