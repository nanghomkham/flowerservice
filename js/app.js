// UI 
// Start Header 
// Start Navbar 
document.querySelector('.navbuttons').addEventListener('click',()=>document.querySelector('.navbuttons').classList.toggle('changes'));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});

// End Navbar 
// End Header 



// Start Bouquets Section 
const flowerimg1 = document.getElementById('flowerimg1');
const flowerimg2 = document.getElementById('flowerimg2');
const flowerimg3 = document.getElementById('flowerimg3');
const flowerimg4 = document.getElementById('flowerimg4');

// flowerimg1
flowerimg1.addEventListener('mouseenter',()=>{
    flowerimg1.src = './img/natural2.jpg';
});

flowerimg1.addEventListener('mouseleave',()=>{
    flowerimg1.src = './img/natural1.jpg';
});

// flowerimg2
flowerimg2.addEventListener('mouseenter',()=>{
    flowerimg2.src = './img/snackbouquet2.jpg';
});

flowerimg2.addEventListener('mouseleave',()=>{
    flowerimg2.src = './img/snackbouquet1.jpg';
});

// flowerimg3
flowerimg3.addEventListener('mouseenter',()=>{
    flowerimg3.src = './img/mini2.jpg';
});

flowerimg3.addEventListener('mouseleave',()=>{
    flowerimg3.src = './img/mini1.jpg';
});

// flowerimg4
flowerimg4.addEventListener('mouseenter',()=>{
    flowerimg4.src = './img/flowerbox2.jpg';
});

flowerimg4.addEventListener('mouseleave',()=>{
    flowerimg4.src = './img/flowerbox1.jpg';
});


// End Bouquets Section



// Start Blog Section
const blogtexts = document.querySelectorAll('.blogtexts');
blogtexts.forEach((blogtext)=>{
    // console.log(blogtext.innerText);
    let text = blogtext.innerText;
    // console.log(text);
    // console.log(text.substring(0,5) + "...");
    blogtext.innerText = text.substring(0,80) + "...";
});
// End Blog Section 