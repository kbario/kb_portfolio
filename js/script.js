// function that toggles class to cause menu animation

function menu() {
    const ns  = [1,2,3,4]
    for (i in ns){
        document.getElementById(`burg${ns[i]}`).classList.toggle('twist')
    }
    document.querySelector("nav").classList.toggle('twist')
}