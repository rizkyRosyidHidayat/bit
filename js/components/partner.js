Vue.component('partner-section', {
	template: `
		<section class="partner bg-silver py-6">
			<div class="container">
				<div class="text-center headline mb-5">
					<span class="line black"></span>
					Our Partnership
					<span class="line black"></span>
				</div>
				<div class="d-flex flex-wrap justify-center">
					<div 
						v-for="item in logo" :key="item"
						class="mb-3">
						<img :src="'./img/partner/'+item" :alt="item" />
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		logo: ['s.png', 'len.png', 'ase.png', 'ka.png', 'turbulent.png', 'les.png']
	})
})