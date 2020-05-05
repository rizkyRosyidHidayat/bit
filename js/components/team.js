Vue.component('team-section', {
	template: `
		<section class="team bg-silver py-6 d-sm-none">
			<div class="text-center headline">
				<span class="line black"></span>
				Our Team
				<span class="line black"></span>
			</div>
			<div class="container mb-3">
				<p class="w-60">
					Meet the people who make BTI happend Our team thrives on innovation and creation, and is always working on improving and expanding our products to further benefit our users.
				</p>
			</div>
			<div class="carousel-team mb-5">
				<div 
					class="carousel-container"
					:style="{
						'transform': 'translateX('+geser+'px)',
						'transition': 'transform 0.3s ease'
					}">
					<div 
						v-for="item in teams" :key="item"
						class="slide-team"
						:class="{'active': slideActice === item?true:false}">
						<div class="card text-center">
							<img src="./img/team.png" alt="team" />
							<div class="card-body bg-orange">
								<br>
								<div class="headline">Jacob</div>
								<div>Founder</div>
							</div>
							<div class="card-footer bg-orange d-flex justify-center">
								<a 
									v-for="item in sosmed" :key="item.icon"
									:href="item.link">
									<img 
										class="team-sosmed"
										:src="'./img/icon/'+item.icon" 
										:alt="item.icon" 
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex justify-center">
				<span 
					v-for="item in teams" :key="item"
					class="dot"
					:class="{'active': slideActice === item?true:false}"
					@click="changeSlide(item)"
				></span>
			</div>
		</section>
	`,
	data: () => ({
		sosmed: [
			{ icon: 'facebook.svg', link: '' },
			{ icon: 'linkedin.svg', link: '' },
			{ icon: 'twitter.svg', link: '' },
			{ icon: 'whatsapp.svg', link: '' }
		],
		teams: [1,2,3,4,5],
		slideActice: 3,
		geser: -166
	}),
	methods: {
		changeSlide(val) {
			this.slideActice = 0
			if (val >= 3) {
				let hasil = ((val-3)*-2*166)+(-166)
				this.geser = hasil
			} else if (val === 2) {
				this.geser = 166
			} else {
				this.geser = 498
			}
			setTimeout(() => this.slideActice = val, 300)
		}
	}
})