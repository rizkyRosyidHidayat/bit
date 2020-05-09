Vue.component('footer-section', {
	template: `
		<footer>
			<div class="container">
				<img src="./img/logo.png" alt="logo" />
				<div class="mb-3 font-weight-bold">PT BTI Energy Indonesia</div>
				<div class="row">
					<div class="col col-3 col-sm-12 mb-sm-2">
						<b>Address</b>
						<p>
							Jakarta Office: Jl. Kamal Raya, Jaya 8 No.6, 
							RT.7/RW.9, Cengkareng <br>
							Bandung Office : Jalan Kebun Bibit Barat 
							No.29, Bandung Wetan, Kota Bandung<br>
							Bali Office : Jalan Gatot Subroto No. 204, 
							Tonja, Kota Denpasar
						</p>
					</div>
					<div class="col col-3 col-sm-12 mb-sm-2">
						<b>Sercives</b>
						<p>
							<a 
								v-for="item in services" :key="item.text"
								:href="item.link"
								class="d-block mb-1">
								{{ item.text }}
							</a>
						</p>
					</div>
					<div class="col col-3 col-sm-12 mb-sm-2">
						<b>Get in Touch</b>
						<p> www.BTIEnergy.com </p>
						<p>
							+628-xxxxxxx
						</p>
						<div class="d-flex">
							<a 
								v-for="item in sosmed" :key="item.icon"
								:href="item.link">
								<img 
									class="footer-sosmed"
									:src="'./img/icon/'+item.icon" 
									:alt="item.icon" 
								/>
							</a>
						</div>
					</div>
					<div class="col col-3 col-sm-12 mb-sm-2">
						<b>We Support</b>
						<p>
							<img
								src="./img/bank.png" 
								alt="bank" 
							/>
						</p>
					</div>
				</div>
			</div>
			<p class="text-center footer">
				Copyright 2020 PT. BTIEnergy Indonesia
			</p>
		</footer>
	`,
	data: () => ({
		sosmed: [
			{ icon: 'facebook.svg', link: '' },
			{ icon: 'linkedin.svg', link: '' },
			{ icon: 'twitter.svg', link: '' },
			{ icon: 'whatsapp.svg', link: '' }
		],
		services: [
			{ text: 'Overview', link: '' },
			{ text: 'Features', link: '' },
			{ text: 'Technology', link: '' },
			{ text: 'Term & Conditions', link: '' },
			{ text: 'Privacy', link: '' }
		],
	})
})