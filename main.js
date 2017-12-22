

$('li').on('click',function(event){
    let target = event.target || window.target
    let n = $(target).index()
    let s = n * (-192) + 'px'
    console.log('s:'+ s)
    $('.pics').css({"margin-left":s,"transition":"all .4s"})
})