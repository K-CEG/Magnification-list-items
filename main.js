const btn = document.querySelector('button');

const LiItems = document.querySelectorAll('li');
let fontSize = 1


// Pętla
// btn.addEventListener('click', () => {
//     console.log('działa');
//     for (let i = 0; i < LiItems.length; i++){
//      if (LiItems[i].style.display === '')   
//     LiItems[i].style.display = 'block';
//     LiItems[i].style.fontSize = fontSize + `${fontSize++}px`;
// }
// })

// FOREACH

btn.addEventListener('click', () => {

    
    LiItems.forEach((LiItem)=>{
    LiItem.style.display = 'block';
    LiItem.style.fontSize = fontSize +'px';

    })
    fontSize++
})
