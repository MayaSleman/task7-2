let gold = document.querySelector(".gold");
let green = document.querySelector(".green");
let black = document.querySelector(".black");
let white = document.querySelector(".white");
let red = document.querySelector(".red");
let heroImage =document.querySelector(".heroImage");
let section1 = document.querySelector(".section1");
gold.addEventListener('click' ,() =>{
    section1.style.background ="#c72724"
    heroImage.src ="./assets/images/golden.png"
})
green.addEventListener('click' ,() =>{
    section1.style.background ="#78909c"
    heroImage.src ="./assets/images/green.png"
})
black.addEventListener('click' ,() =>{
    section1.style.background ="#a5d6a7"
    heroImage.src ="./assets/images/black.png"
})
white.addEventListener('click' ,() =>{
    section1.style.background ="#9575cd"
    heroImage.src ="./assets/images/white.png"
})
red.addEventListener('click' ,() =>{
    section1.style.background ="black"
    heroImage.src ="./assets/images/red.png"
})

let moonBtn = document.querySelector(".moonbtn");
let sunBtn = document.querySelector(".sunbtn");
let dark = document.getElementById("dark");
moonBtn.addEventListener('click' , () =>{
    dark.style.background ="black"
    dark.style.color ="white";
    sunBtn.style.display = "block";
    moonBtn.style.display ="none"
})
sunBtn.addEventListener('click' , () =>{
    dark.style.background ="white"
    dark.style.color ="black";
    sunBtn.style.display = "none";
    moonBtn.style.display ="block"
})

let head = document.querySelectorAll(".head");
head.forEach((head) =>{
head.addEventListener('click',() =>{
    if(head.classList.contains("is-open")) {
        head.classList.remove("is-open");
    } else {
        const headOpen = document.querySelectorAll(".is-open");
        headOpen.forEach((headOpen) =>{
            headOpen.classList.remove("is-open");
        })
        head.classList.add("is-open")
    }
})
})

let stars=document.querySelectorAll('.star');
let description=document.querySelector('.description');
let count=document.querySelector('.count');
stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{
    let current_star=index+1;
    count.innerText=`${current_star} of 5`;
    stars.forEach((star,i)=>{
        if(current_star>=i+1){
         star.classList.add("active")
         if(i ==0){
            description.innerText=`I hate it 😔`;
         }
         else if(i ==1){
            description.innerText=`I don't like it ☹️`;
         }
         else if(i ==2){
            description.innerText=`It is awesome 😐`;
         }
         else if(i ==3){
            description.innerText=`I like it 🤩`;
         }
         else if(i ==4){
            description.innerText=`I love it 😍`;
         }
        else{
            description.innerText=`No rating 🙂`;
        }
        }else{
            star.classList.remove("active")
        }
    });

  });
});