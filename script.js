const style = `
<style>
	.pdp-message-area{
        display: flex;
		align-items: center;
		justify-content: center;
        gap:4px;
    }
</style>
`;

const pdp_html = `
<span class="pdp-message-area">
	<span><img src="https://cdn.shopify.com/s/files/1/2594/4244/files/glasses.png" alt=""></span>
	<span>
        2 people are viewing this product!
    </span>
</span>
`;

const message_int = setInterval(() => {
	const head = document.querySelector('head');
	const cart_btn = document.querySelector(
		'.input-row.quantity-submit-row.wishlist-productpage-icon.available'
	);

	if (cart_btn && !document.querySelector('.pdp-message-area')) {
		head.insertAdjacentHTML('beforeend', style);
		cart_btn.insertAdjacentHTML('afterend', pdp_html);
		clearInterval(message_int);
	}
}, 10);
