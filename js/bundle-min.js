window.onload=(()=>{heightHeader()}),window.onresize=(()=>{heightHeader()});const heightHeader=()=>{const e=document.querySelector("nav.nav").offsetHeight,t=document.querySelector("header.header"),o=document.body.clientHeight;t.style.minHeight=o-e+"px"};