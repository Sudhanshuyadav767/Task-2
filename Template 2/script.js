// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const cartCountEl = document.getElementById('cartCount');

let cartQuantity = 0;

if(menuBtn){
	menuBtn.addEventListener('click', ()=>{
		if(navLinks) {
			const isOpen = navLinks.classList.toggle('show');
			document.body.classList.toggle('menu-open', isOpen);
		}
	});
}

function addToCart(name = 'Item'){
	cartQuantity += 1;
	if(cartCountEl) cartCountEl.textContent = cartQuantity;
	// small friendly toast using alert for simplicity
	alert(`${name} added to cart. Items in cart: ${cartQuantity}`);
}

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
if(newsletterForm){
	newsletterForm.addEventListener('submit', (e)=>{
		e.preventDefault();
		if(newsletterEmail && newsletterEmail.value.trim()){
			alert(`Thanks! We'll send offers to ${newsletterEmail.value.trim()}`);
			newsletterEmail.value = '';
		}
	});
}

// Close menu when clicking outside (for mobile)
document.addEventListener('click', (e)=>{
	const target = e.target;
	if(navLinks && navLinks.classList.contains('show')){
		const insideNav = navLinks.contains(target) || menuBtn.contains(target);
		if(!insideNav){
			navLinks.classList.remove('show');
			document.body.classList.remove('menu-open');
		}
	}
});

// Close mobile menu when a nav link is clicked
if(navLinks){
	navLinks.querySelectorAll('a').forEach(a=>{
		a.addEventListener('click', ()=>{
			if(navLinks.classList.contains('show')){
				navLinks.classList.remove('show');
				document.body.classList.remove('menu-open');
			}
		});
	});
}

