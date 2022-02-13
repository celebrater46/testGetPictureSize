"use strict";

// const fs = require('fs');
//
// const path = "img/x/0.jpg";
//
// if( fs.existsSync( path ) ){
//     console.log( "存在します。");
// }else{
//     console.log( "存在しません。");
// }

const img = "img/x/0.jpg";
// const el = document.getElementById("test");
// el.src = img;
//
// console.log(el.element.naturalWidth);



// promise化したfunction
const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        img.src = src;
    });
};

// promise then/catch
loadImage(img)
    .then(res => {
        console.log(res.width, res.height);
    })
    .catch(e => {
        console.log('onload error', e);
    });

// async/await
async () => {
    try {
        const res = await loadImage(img);
        console.log(res.width, res.height);
    } catch (e) {
        console.log('onload error', e);
    }
}



// const fsize = img.fileSize; // ファイルサイズを取得

// if(img.fileSize === -1) {
//     console.log("Not Found");
// } else {
//     console.log(img + " exists");
//     console.log(img.fileSize);
// }