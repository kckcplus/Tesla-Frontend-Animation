new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
        var loading = new TimelineMax();
    loading.fromTo(".upper",0.6 ,{
        autoAlpha: 0,
        y: 20
    },{
        autoAlpha: 1,
        y: 0
    }, "+=0.5")
    .fromTo(".lower",0.6 ,{
        autoAlpha: 0,
        y: 20
    },{
        autoAlpha: 1,
        y: 0
    }, "-=0.5")
    },
});

document.addEventListener("DOMContentLoaded",function(){
    
    var arrows = document.getElementsByClassName('downarrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }

    var loading = new TimelineMax();
    loading.fromTo("h2",0.6 ,{
        autoAlpha: 0,
        y: 20
    },{
        autoAlpha: 1,
        y: 0
    })
    .fromTo(".upper p",0.6 ,{
        autoAlpha: 0,
        y: 20
    },{
        autoAlpha: 1,
        y: 0
    })
    .fromTo(".btn1",0.6 ,{
        autoAlpha: 0,
        x: -20
    },{
        autoAlpha: 1,
        x: 0
    },"-=0.6")
    .fromTo(".btn2",0.6 ,{
        autoAlpha: 0,
        x: 20
    },{
        autoAlpha: 1,
        x: 0
    },"-=0.6")
    .fromTo(".downarrow",0.6 ,{
        autoAlpha: 0,
        y: 20
    },{
        autoAlpha: 1,
        y: 0
    })
});

