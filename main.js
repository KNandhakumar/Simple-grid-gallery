// var fullImgBox = document.getElementById("fullImgBox");
//     var fullImg = document.getElementById("fullImg");

//     function openFullImg(pic){
//         fullImgBox.style.display = "flex";
//         fullImg.src = pic; 
//     }
//     function closeFullImg(){
//         fullImgBox.style.display = "none";
//     }
function openFullImg(src) {
    const fullImgBox = document.getElementById('fullImgBox');
    const fullImg = document.getElementById('fullImg');
    
    fullImg.src = src;
    fullImgBox.style.display = 'flex';
    fullImg.style.transform = 'scale(0.5)';
    fullImg.style.opacity = '0';
    fullImg.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    
    // Adding a small delay before applying the transformation
    setTimeout(() => {
        fullImg.style.transform = 'scale(1)';
        fullImg.style.opacity = '1';
    }, 50);
}

function closeFullImg() {
    const fullImgBox = document.getElementById('fullImgBox');
    const fullImg = document.getElementById('fullImg');
    
    fullImg.style.transform = 'scale(0.5)';
    fullImg.style.opacity = '0';
    
    setTimeout(() => {
        fullImgBox.style.display = 'none';
    }, 500); // Delaying the hiding of the full-size image container to match the transition duration
}
