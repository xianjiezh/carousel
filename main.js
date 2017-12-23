

$('li').on('click',function(event){
    let target = event.target || window.target
    let n = $(target).index()
    let s = n * (-192) + 'px'
    $('.pics').css({"margin-left":s,"transition":"all .7s"})
})

let n = 0
let timer = setInterval(function(){
    let len = $('li').length
    console.log('len:'+len)
    let num = n % 4
    console.log('num:'+num)
    $('li').eq(num).trigger('click')
    n += 1
},2000)