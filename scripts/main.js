/*var element = 1;
console.log(window);*/

/*const openBtn = document.getElementById('btn-windowOpen');

openBtn.addEventListener('click', () => {
    let win = window.open('additional.html', 'add', 'popup');
    const winWidth = 500, winHeight = 400;
    win.resizeTo(winWidth, winHeight);
    win.moveTo(
        (screen.width - winWidth) / 2,
        (screen.height - winHeight) / 2
    );
    //openBtn.disabled = true; // отключение работоспособности button
})*/

/*setTimeout(() => {
    win.close();
}, 2000);*/

const blocks = document.getElementsByClassName('block');
const blockWidthStr = window.getComputedStyle(blocks[0]).width;
const blockWidth = Number(blockWidthStr.substring(0, blockWidthStr.indexOf('px')));

const modalWindow = document.getElementById('modal-window');

var currentBlock = undefined;

console.log(blockWidth);

for(let block of blocks) {
    //console.log(block);
    block.style.top = Math.round(Math.random() * (window.innerHeight * 2 / 3)) + 'px';
    block.style.left = Math.round(Math.random() * (window.innerHeight - blockWidth)) + 'px';

    block.addEventListener('mousedown', e => {
        currentBlock = e.target;
    });
}

window.addEventListener('mouseup', () => {
    currentBlock = undefined;
});


modalWindow.addEventListener('mousemove', e => {
    if(currentBlock !== undefined) {
        currentBlock.style.left = e.clientX + 'px'
        currentBlock.style.top = e.clientY + 'px'
    }
});

document.getElementById('btn-windowOpen').addEventListener('click' ,() => {
    modalWindow.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});