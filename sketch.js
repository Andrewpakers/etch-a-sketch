function init(sideSize) {
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < sideSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        for (j = 0; j < sideSize; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseenter', () => {
                boxChange(box);
            });
            row.appendChild(box);
        }

        canvas.appendChild(row);
    }
    
}

function setSize() {
    let tempSize = prompt("Please enter the size of one side of the canvas.");
    if (tempSize > 150) {
        tempSize = 150;
        alert("Error. Canvas can be no larger than 150 x 150.");
    } else if (tempSize <= 0) {
        alert("Error. Canvas size must be larger than 0 x 0.");
        return;
    }

    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });

    init(tempSize);
}

function clearCanvas() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });
    
    const rowArray = Array.from(rows);
    init(rowArray.length);
}

function boxChange(box) {
    if (!box.classList.contains('hovered')){
        box.style.backgroundColor = 'lightgray';
        box.classList.add('hovered');   
        box.dataset.darkness = 90;
    } else {
        let darkFactor = (box.dataset.darkness - 20);
        box.style.cssText = "filter: brightness(" + darkFactor + "%);"
        box.dataset.darkness = darkFactor;
    }

}