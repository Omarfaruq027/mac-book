function calculation() {
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById('extra-memo-cost').innerText;
    const storageCost = document.getElementById('extra-storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    document.getElementById('total-price').innerText = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCharge);
    document.getElementById('final-price').innerText = document.getElementById('total-price').innerText;
}

document.getElementById('memory-button1').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memo-cost');
    const costbtn1 = memoryCost.innerText = 0;
    calculation();
})
document.getElementById('memory-button2').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memo-cost');
    const costbtn2 = memoryCost.innerText = 180;
    calculation();
})


document.getElementById('storage-button1').addEventListener('click', function () {
    const memoryCost = document.getElementById("extra-storage-cost");
    const costbtn3 = memoryCost.innerText = 0;
    calculation();

})
document.getElementById('storage-button2').addEventListener('click', function () {
    const memoryCost = document.getElementById("extra-storage-cost");
    const costbtn4 = memoryCost.innerText = 100;
    calculation();
})
document.getElementById('storage-button3').addEventListener('click', function () {
    const memoryCost = document.getElementById("extra-storage-cost");
    const costbtn5 = memoryCost.innerText = 180;
    calculation();
})

document.getElementById('free-delivery').addEventListener('click', function () {
    const memoryCost = document.getElementById("delivery-charge");
    const costbtn6 = memoryCost.innerText = 0;
    calculation();
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    const memoryCost = document.getElementById("delivery-charge");
    const costbtn7 = memoryCost.innerText = 20;
    calculation();
})

document.getElementById("Apply-btn").addEventListener('click', function () {
    let promoText = document.getElementById("Apply-input").value;
    if (promoText == 'stevekaku') {
        const finalAmount = parseFloat(document.getElementById('final-price').innerText);
        document.getElementById('final-price').innerText = finalAmount - (finalAmount * (20 / 100));
        document.getElementById("Apply-input").value = '';
    }
    else {
        document.getElementById("Apply-input").value = '';
    }
})