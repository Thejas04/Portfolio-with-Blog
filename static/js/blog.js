	// Sticky Navbar
    
     
    // Dark Mode
    //let darkmode = document.querySelector('#darkmode');
     
    //darkmode.onclick = () => {
      //  if(darkmode.classList.contains('bx-moon')){
        //    darkmode.classList.replace('bx-moon','bx-sun');
          //  document.body.classList.add('active');
       // }else{
         //   darkmode.classList.replace('bx-sun','bx-moon');
           // document.body.classList.remove('active');
       // }
   // }


   //mouse 

   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let spots = [];
   let hue = 0;

   const mouse = {
    x: undefined,
    y: undefined
   }
   canvas.addEventListener('mousemove',function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 3; i++){
      spots.push(new particle());
    }

   });
   class particle{
    constructor(){
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random()* 2 + 0.1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
      this.x += this.speedX;
      this.y +=  this.speedY;
      if(this.size > 0.1) this.size = 3;
    }
    draw(){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
   }
   function handleParticle(){
    for (let i = 0; i < spots.length; i++){
      spots[i].update();
      spots[i].draw();
      for (let j = i; j < spots.length; j++){
        const dx = spots[i].x - spots[j].x;
        const dy = spots[i].y - spots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if(distance < 90){
          ctx.strokeStyle = spots[i].color;
          ctx.lineWidth = spots[i].size / 10;
          ctx.moveTo(spots[i].x, spots[i].y)
          ctx.lineTo(spots[i].x, spots[i].y);
          ctx.stroke();
        }
      }
      if (spots[i].size <= 0.3){
        spots.splice(i, 1); i--;
      }
    }
   }
   

   function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);

   }
   window.addEventListener("resize",function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
   })
   window.addEventListener('mouseout',function(){
    mouse.x = undefined;
    mouse.y = undefined;
   })
   animate();

   //menu bar

   let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }


//slidesshow
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    //subscribe
    