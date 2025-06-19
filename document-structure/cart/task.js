document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart__products');
  
    products.forEach(product => {
      const decBtn = product.querySelector('.product__quantity-control_dec');
      const incBtn = product.querySelector('.product__quantity-control_inc');
      const quantityDisplay = product.querySelector('.product__quantity-value');
      const addBtn = product.querySelector('.product__add');
  
      decBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity > 1) {
          quantityDisplay.textContent = quantity - 1;
        }
      });
  
      incBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityDisplay.textContent);
        quantityDisplay.textContent = quantity + 1;
      });
  
      addBtn.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const quantityToAdd = parseInt(quantityDisplay.textContent);
  
        const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);
  
        if (existingProduct) {
          const countElem = existingProduct.querySelector('.cart__product-count');
          countElem.textContent = parseInt(countElem.textContent) + quantityToAdd;
        } else {
          const cartProduct = document.createElement('div');
          cartProduct.classList.add('cart__product');
          cartProduct.setAttribute('data-id', productId);
  
          cartProduct.innerHTML = `
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${quantityToAdd}</div>
          `;
  
          cart.appendChild(cartProduct);
        }
      });
    });
  });