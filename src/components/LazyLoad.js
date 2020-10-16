
export default function(){
    document.querySelectorAll('[data-setbg]').forEach(function(e){
        e.style.backgroundImage = `url(${e.getAttribute('data-setbg')})`

    })
}
