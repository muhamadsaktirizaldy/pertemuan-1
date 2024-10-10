function hitungLuasSegitiga() {
    let alas = 8;
    let tinggi = 5;
    let luas = (alas * tinggi) / 2;
    let bubble = document.getElementById('bubbleLuasSegitiga');
    bubble.innerHTML = 'Luas: ' + luas + ' cm²';
    showBubble(bubble);
}

function hitungVolumeBola() {
    let diameter = 15;
    let radius = diameter / 2;
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    let bubble = document.getElementById('bubbleVolumeBola');
    bubble.innerHTML = 'Volume: ' + volume.toFixed(2) + ' cm³';
    showBubble(bubble);
}

function hitungSisiMiring() {
    let alas = 4;
    let tinggi = 5;
    let sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
    let bubble = document.getElementById('bubbleSisiMiring');
    bubble.innerHTML = 'Sisi Miring: ' + sisiMiring.toFixed(2) + ' cm';
    showBubble(bubble);
}

function showBubble(bubbleElement) {
    bubbleElement.style.display = 'block';
    setTimeout(function() {
        bubbleElement.style.display = 'none';
    }, 4000);
}
