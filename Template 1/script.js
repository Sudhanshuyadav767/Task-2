// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const cartCount = document.getElementById("cartCount");
let cartQuantity = 0;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Add To Cart

function addToCart(productName = "Product") {
  cartQuantity += 1;
  if (cartCount) {
    cartCount.textContent = cartQuantity;
  }
  alert(`${productName} added to cart successfully! Total items: ${cartQuantity}`);
}

// Newsletter Submission

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (newsletterEmail.value.trim()) {
      alert(`Thanks for subscribing, ${newsletterEmail.value.trim()}!`);
      newsletterEmail.value = "";
    }
  });
}
