/*-------------------------------------
         function for calculating total
--------------------------------------- */
function calculateTotal() {
  const finalMemoryFee = document.getElementById("memory-cost").innerText;
  const finalStorageFee = document.getElementById("storage-cost").innerText;
  const finalDeliveryFee = document.getElementById("delivery-charge").innerText;
  let totalPrice = 1299;
  totalPrice =
    1299 +
    parseInt(finalMemoryFee) +
    parseInt(finalStorageFee) +
    parseInt(finalDeliveryFee);
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("grand-total").innerText = totalPrice;
}

/*-------------------------------------
         function for grand total
--------------------------------------- */
function grandTotal(promoCode) {
  let totalWithPromo = parseInt(
    document.getElementById("grand-total").innerText
  );
  const button = document.getElementById("promo-submit");
  if (promoCode == "stevekaku") {
    let twentyPercent =
      parseInt(document.getElementById("grand-total").innerText) * 0.2;
    totalWithPromo =
      parseInt(document.getElementById("grand-total").innerText) -
      twentyPercent;
    button.disabled = true;
    document.getElementById("popup-green").style.visibility = "visible";
    document.getElementById("popup-red").style.visibility = "hidden";
    document.getElementById("promo-code").value = "";
    let buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
      button.disabled = true;
    }
  } else {
    document.getElementById("popup-red").style.visibility = "visible";
    document.getElementById("promo-code").value = "";
  }
  document.getElementById("grand-total").innerText = totalWithPromo;
}

/*----------
handle total for initial state without choosing any option
-----------*/
calculateTotal();

/*-------------------------------------
         function for memory cost
--------------------------------------- */
function setMemoryCost(isClicked) {
  let currentMemoryCost;
  if (isClicked == true) {
    currentMemoryCost = 180;
  } else {
    currentMemoryCost = 0;
  }
  document.getElementById("memory-cost").innerText = currentMemoryCost;
  calculateTotal();
}

/*-------------------------------------
         function for storage cost
--------------------------------------- */
function setStorageCost(storage) {
  let currentStorageCost;
  if (storage == 256) {
    currentStorageCost = 0;
  } else if (storage == 512) {
    currentStorageCost = 100;
  } else {
    currentStorageCost = 180;
  }
  document.getElementById("storage-cost").innerText = currentStorageCost;
  calculateTotal();
}

/*-------------------------------------
         function for delivery charge
--------------------------------------- */
function setDeliveryCost(freeIsClicked) {
  let currentDeliveryCost;
  if (freeIsClicked == true) {
    currentDeliveryCost = 0;
  } else {
    currentDeliveryCost = 20;
  }
  document.getElementById("delivery-charge").innerText = currentDeliveryCost;
  calculateTotal();
}

/*-------------------------------------
         handle memory cost
--------------------------------------- */
document.getElementById("memory-8gb").addEventListener("click", function () {
  setMemoryCost(false);
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  setMemoryCost(true);
});

/*-------------------------------------
         hadle storage cost
--------------------------------------- */
document
  .getElementById("storage-256-GB")
  .addEventListener("click", function () {
    setStorageCost(256);
  });
document
  .getElementById("storage-512-GB")
  .addEventListener("click", function () {
    setStorageCost(512);
  });
document
  .getElementById("storage-1000-GB")
  .addEventListener("click", function () {
    setStorageCost(1000);
  });

/*-------------------------------------
         handle delivery charge
--------------------------------------- */
document.getElementById("delivery-Free").addEventListener("click", function () {
  setDeliveryCost(true);
});
document
  .getElementById("delivery-notFree")
  .addEventListener("click", function () {
    setDeliveryCost(false);
  });

/*-------------------------------------
         handle promo code apply
--------------------------------------- */
document.getElementById("promo-submit").addEventListener("click", function () {
  let promo = document.getElementById("promo-code").value;
  grandTotal(promo);
});
