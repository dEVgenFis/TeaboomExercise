"use strict"

const weightItemsArrow = document.querySelector(".actions__arrow"),
    weightItemsFrame = document.querySelector(".actions__input-weight-items"),
    productSkuValue = document.querySelector(".product-card__sku-value"),
    productWeightValue = document.querySelector(".product-card__weight-value"),
    productCurrentCostValue = document.querySelector(".product-card__current-cost-value"),
    productOldCostValue = document.querySelector(".product-card__old-cost-value"),
    weightRadios = document.querySelectorAll('input[name="weight"]');

weightItemsArrow.addEventListener("click", function() {
    weightItemsArrow.classList.toggle("active");
    weightItemsFrame.toggleAttribute("hidden");
});

weightRadios.forEach(radio => {
    radio.addEventListener("change", function(e) {
        // определяем выбранную кнопку
        const currentRadio = e.target;
        productWeightValue.textContent = currentRadio.value;
        productSkuValue.textContent = currentRadio.dataset.sku;
        productCurrentCostValue.textContent = currentRadio.dataset.currentCostValue;
        productOldCostValue.textContent = currentRadio.dataset.oldCostValue;
    });
});