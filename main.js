
$('li').on('click', function (event) {
    let target = event.target || window.target
    let n = $(target).index()
    let s = n * (-192) + 'px'
    $('.pics').css({ "margin-left": s, "transition": "all .8s" })
    $('li').removeClass('active')
    $('li').eq(n).addClass('active')
})

let n = 1
function setTimer() {
    let len = $('li').length
    let num = n % 4
    $('li').eq(num).on('click',function(){
        n = num
    })
    $('li').eq(num).trigger('click')
    n += 1
}

let timer = setInterval(setTimer, 1500)
let picWrapper = document.getElementsByClassName('picsWrapper')[0]
picWrapper.onmouseenter = function () {
    clearInterval(timer)
}
picWrapper.onmouseleave = function () {
    timer = setInterval(setTimer, 1500)
}