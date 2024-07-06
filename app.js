let items = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.items');
let list=document.querySelectorAll('.list')


// config param
let countItem = items.length;
let itemActive = 0;


   
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

next.onclick=function(){
    itemActive+=1;
    if(itemActive>=countItem){
        itemActive=0
    }
    showSlider()
    console.log(itemActive)

}
   

// auto run slider
let refreshInterval = setInterval(() => {
    next.click()
}, 3000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.item.active');
    let thumbnailActiveOld = document.querySelector('.items.actives');
    
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('actives');
   

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('actives');


    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      
       
        
        
       
        
        itemActive = index;
        showSlider();
    })
})

list.forEach((content,index)=>{
    content.addEventListener('click',()=>{
        let activelist =document.querySelector('.list.active')
        activelist.classList.remove('active')
        let count=index
        list[count].classList.add('active')
        
       

    })

})
