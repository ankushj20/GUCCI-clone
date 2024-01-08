var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scoller:"body",
        start:"top 0%",
        end:"top -12%",
        markers:true,
        scrub:3,


    }
})


tl.to("#nav svg",{
    scale:0.12,
    marginTop:"-5px",
    
})

