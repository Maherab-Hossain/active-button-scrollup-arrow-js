$(function () {
    

    // JQUERY CODE


// fixed menu start

    $(window).scroll(function () {
        

        let scrollup = $(window).scrollTop()
        
       

        if (scrollup > 600) {

            $(`#menu`).addClass(`menufixed`)
            $(`.upbutton`).fadeIn()
        
        } else {
            $(`#menu`).removeClass(`menufixed`)
            $(`.upbutton`).fadeOut()
        }

    })


// fixed menu end


// up arrow start

 $(`.upbutton`).click (function () {
    
    $(`html,body`).animate({
        scrollTop:0
    },1000)

 })

// up arrow end



})