Vue.component('carousel-team', {
	template: `
		<div class="d-sm-none">
			<div class="carousel-team mb-5">
				<div class="carousel-team-nav left d-sm-none">
					<div 
						style="width: 70px;"
						class="carousel-nav">
						<img 
							src="./img/icon/chevron-left.svg" 
							alt="chevron-left"
							@click="changeSlide('left')"
						/>
					</div>
				</div>
				<div class="carousel-team-nav right d-sm-none">
					<div 
						style="width: 70px;"
						class="carousel-nav">
						<img 
							src="./img/icon/chevron-right.svg" 
							alt="chevron-right"
							@click="changeSlide('right')"
						/>
					</div>
				</div>
				<div 
					class="carousel-container"
					:style="{
						'transform': 'translateX('+geser+'%)',
						'transition': 'transform 0.3s ease'
					}">
					
					<div 
						v-for="item in teams" :key="item"
						class="slide-team fade"
						:class="{'active': slideActive === item?true:false}">
						<div class="card text-center">
							<div class="team-image">
								<img src="./img/team.png" alt="team" />
								<div class="team-desc">
									<div>
										<p>Lorem ipsum dolor ssit amet</p>
										<p>Lorem ipsum dolor ssit amet</p>
									</div>
								</div>
							</div>
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
					:class="{'active': slideActive === item?true:false}"
					@click="selectSlide(item)"
				></span>
			</div>
		</div>
	`,
	data: () => ({
		sosmed: [
			{ icon: 'facebook.svg', link: '' },
			{ icon: 'linkedin.svg', link: '' },
			{ icon: 'twitter.svg', link: '' },
			{ icon: 'whatsapp.svg', link: '' }
		],
		teams: [1,2,3,4,5],
		slideActive: 3,
		geser: 0 //-166
	}),
	methods: {
		selectSlide(val) {
			this.slideActive = 0
			if (val >= 3) {
				this.geser = -20 * (val-3)
			} else {
				this.geser = (20 * (3-val))
			}
			setTimeout(() => this.slideActive = val, 300)
		},
		selectSlide1(val) {
			this.slideActive = val
		},
		changeSlide(val){
			let active = this.slideActive
			this.slideActive = 0
			console.log(val)
			if (val === 'left') {
				if (active < 5) {
					this.geser = this.geser - 20
					active++
				}
			} else {
				if (active > 1) {
					this.geser = this.geser + 20
					active--
				}
			}
			setTimeout(() => this.slideActive = active, 300)
		}
	}
})

Vue.component('carousel-team-mobile', {
	template: `
		<div class="d-lg-none">
			<div 
				class="carousel-project mb-3">
					<div class="carousel-nav left d-sm-none">
						<img 
							src="./img/icon/chevron-left.svg" 
							alt="chevron-left"
							@click="changeSlide('left')"
						/>
					</div>
					<div 
						v-for="item in teams" :key="item"
						class="slide-project fade col-sm-12 align-center"
						:class="{'active': item === slideActive?true:false}">
						
						<div class="col-sm-12">
							<div class="d-flex align-center">
								<div 
									style="width: 70px;z-index: 3;"
									class="carousel-nav left-nav-mobile d-lg-none">
									<img 
										src="./img/icon/chevron-left.svg" 
										alt="chevron-left"
										@click="changeSlide('left')"
									/>
								</div>
								<div class="card text-center">
									<div class="team-image">
										<img src="./img/team.png" alt="team" />
										<div class="team-desc">
											<div>
												<p>Lorem ipsum dolor ssit amet</p>
												<p>Lorem ipsum dolor ssit amet</p>
											</div>
										</div>
									</div>
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
								<div 
									style="width: 70px;"
									class="carousel-nav right-nav-mobile d-lg-none">
									<img 
										src="./img/icon/chevron-right.svg" 
										alt="chevron-right"
										@click="changeSlide('right')"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-nav right d-sm-none">
						<img 
							src="./img/icon/chevron-right.svg" 
							alt="chevron-right"
							@click="changeSlide('right')"
						/>
					</div>
				</div>				
			<div class="d-flex justify-center">
				<span 
					v-for="item in teams" :key="item"
					class="dot"
					:class="{'active': slideActive === item?true:false}"
					@click="selectSlide(item)"
				></span>
			</div>
		</div>
	`,
	data: () => ({
		sosmed: [
			{ icon: 'facebook.svg', link: '' },
			{ icon: 'linkedin.svg', link: '' },
			{ icon: 'twitter.svg', link: '' },
			{ icon: 'whatsapp.svg', link: '' }
		],
		teams: [1,2,3,4,5],
		slideActive: 3
	}),	
	methods: {
		changeSlide(val) {
			if (val === 'left') {
				if (this.slideActive === 1) {
					this.slideActive = 5
				} else {
					this.slideActive--
				}
			} else {
				if (this.slideActive === 5) {
					this.slideActive = 1
				} else {
					this.slideActive++	
				}				
			}
		},
		selectSlide(val) {
			this.slideActive = val
		}
	}
})

Vue.component('team-section', {
	template: `
		<section class="team bg-silver py-6 py-sm-3" id="our_team">
			<div class="text-center headline">
				<span class="line black"></span>
				Our Team
				<span class="line black"></span>
			</div>
			<div class="container mb-3">
				<p class="w-60 col-sm-12 text-justify">
					Meet the people who make BTI happend Our team thrives on innovation and creation, and is always working on improving and expanding our products to further benefit our users.
				</p>
			</div>

			<carousel-team></carousel-team>
			<carousel-team-mobile></carousel-team-mobile>
		</section>
	`
})