let zoomIn = document.getElementById('mainImage');
let menuOpen = document.getElementById('MenuOpen');
let SideBar = document.getElementById('sideBar');
let close = document.getElementById('close');

//THIS CODE WILL DISPLAY THE SIDE NAVBAR ON CLICK
menuOpen.addEventListener('click', (e) => {
    sideBar.style.display = 'flex';
})
close.addEventListener('click', (e) => {
    sideBar.style.display = 'none';
})

//This code will zoom into the img when hover
zoomIn.addEventListener('mousemove', (event) =>{z
    zoomIn.style.setProperty('--display', 'block');
    let pointer = {
        x: (event.offsetX * 100) / zoomIn.offsetWidth,
        y: (event.offsetY * 100) / zoomIn.offsetHeight 
    }
    zoomIn.style.setProperty('--zoom-x', pointer.x + '%');
    zoomIn.style.setProperty('--zoom-y', pointer.y + '%');
    
})
zoomIn.addEventListener('mouseleave', () =>{
    zoomIn.style.setProperty('--display', 'none');
})

//===== +++++ ==== +++++
function img(anything){
    document.querySelector('.slide').src= anything;
}
function change(change){
    const line = document.querySelector('.home');
    line.style.background = change()
    
}