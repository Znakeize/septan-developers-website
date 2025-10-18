document.addEventListener('DOMContentLoaded',()=>{
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.2});
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});