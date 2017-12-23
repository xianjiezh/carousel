

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
    console.log('len:' + len)
    let num = n % 4
    console.log('num:' + num)
    $('li').eq(num).trigger('click')
    n += 1
}
let timer = setInterval(setTimer, 3000)

let picWrapper = document.getElementsByClassName('picsWrapper')[0]
picWrapper.onmouseenter = function () {
    console.log('鼠标进入')
    clearInterval(timer)
}
picWrapper.onmouseleave = function () {
    console.log('鼠标离开')
    timer = setInterval(setTimer, 3000)
}