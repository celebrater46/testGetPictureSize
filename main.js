"use strict";

const img = "0.jpg";

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        img.src = src;
    });
};

loadImage(img)
    .then(res => {
        console.log(res.width, res.height);
    })
    .catch(e => {
        console.log('onload error', e);
    });

async () => {
    try {
        const res = await loadImage(img);
        console.log(res.width, res.height);
    } catch (e) {
        console.log('onload error', e);
    }
}