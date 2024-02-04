let count = 0;
let total = 0;
function handlerClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-item');
    const itemName = target.childNodes[5].innerText;
    count++;
    const li = document.createElement('li');
    li.innerText = `${count}. ${itemName}`;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[7].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalFinal = total.toFixed(2);
    const firstTotal = document.getElementById('total').innerText = totalFinal;
    const firstTotalNumber = parseFloat(firstTotal);
    if (firstTotalNumber > 0) {
        document.querySelector('.purchaseBtn').disabled = false;
    }
    else {
        document.querySelector('purchaseBtn').disabled = true;
    }
    if (firstTotalNumber >= 200) {
        document.getElementById('applyId').disabled = false;
    }
    else {
        document.getElementById('applyId').disabled = true;
    }
    // Discount
    let discount = 0;
    if (total >= 200) {
        const couponInput = document.getElementById("couponInput");
        const applyCouponBtn = document.getElementById("applyId");
        applyCouponBtn.addEventListener("click", () => {
            const couponCode = couponInput.value;
            if (couponCode === 'SELL200') {
                const discountUpdate = document.getElementById('discountId');
                const discountFinal = discount.toFixed(2);
                discountUpdate.innerText = discountFinal;
                discount = total / 100 * 20;
                const totalPri = firstTotal - discount;
                const totalFiled = document.getElementById('final-price');
                const totalPriceFinal = totalPri.toFixed(2);
                totalFiled.innerText = totalPriceFinal;
            }
        });
    }
    // Total
    const totalPri = firstTotal - discount;
    const totalFiled = document.getElementById('final-price');
    const totalPriceFinal = totalPri.toFixed(2);
    totalFiled.innerText = totalPriceFinal;
} 