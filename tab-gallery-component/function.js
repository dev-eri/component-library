function myFunctions(imgs) {

    // get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // get the image text
    var imgTxt = document.getElementById("imgText");
    //use the same src in the expanded image as the
    //image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the 
    //clickable image as text inside the expanded image
    imgTxt.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block"
}

