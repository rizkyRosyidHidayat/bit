import teams from './team_data.js'

Vue.component('carousel-team', {
	template: `
		<div class="d-sm-none">
			<div class="carousel-team mb-5">
				<div
					class="carousel-team-nav left d-sm-none">
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
				<div
					class="carousel-team-nav right d-sm-none">
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
					<template v-for="(item, i) in teams">
						<div 
							v-if="i < visibleSlide"
							:key="i"
							class="slide-team mb-3"
							:class="{'active': slideActive === i?true:false}">
							<div class="card text-center">
								<div 
									class="team-image"
									:style="'background-image: url(img/team/'+item.img+'.png)'">
									<div 
										class="team-desc"
										:style="{'visibility': slideActive === i?'hidden':'visible'}">
										<div 
											v-html="item.desc"
											class="team-text-desc"></div>
									</div>
								</div>
								<div class="card-body bg-orange">
									<br>
									<div class="title">{{ item.name }}</div>
									<!-- <div>Founder</div> -->
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
					</template>
				</div>
			</div>

			<div class="d-flex justify-center">
				<span 
					v-for="(item, i) in teams" :key="i"
					class="dot"
					:class="{'active': selectedIndex === i?true:false}"
					@click="selectSlide(i)"
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
		teams: teams,		
		slideActive: 2,
		geser: 0,
		visibleSlide: 5,
		selectedIndex: 2
	}),
	methods: {
		selectSlide(val) {
			let active = this.selectedIndex
			this.slideActive = 0
			
			let hasil = active - val
			if (hasil < 0) {
				let endIndex = hasil * -1
				let slicing = this.teams.slice(0, endIndex)
				this.teams.splice(0, endIndex)
				this.teams = this.teams.concat(slicing)
			}else{
				let startIndex = 9 - hasil
				let slicing = this.teams.slice(startIndex, 9)
				this.teams.splice(startIndex, hasil)
				this.teams = slicing.concat(this.teams)
			}			
			
			this.selectedIndex = val
			setTimeout(() => {
				// if (val >= 3) {
				// 	this.geser = -20 * (val-3)
				// } else {
				// 	this.geser = (20 * (3-val))
				// }
				this.slideActive = 2
			}, 300)
		},
		changeSlide(val){
			let active = this.slideActive
			this.slideActive = 0
			if (val === 'left') {
				if (active < 5) {
					// this.geser = this.geser - 20
					if (this.selectedIndex === 8) this.selectedIndex = -1
					this.selectedIndex++

					this.teams.push(this.teams[0])
					this.teams.shift()
				}
			} else {
				if (active > 1) {
					// this.geser = this.geser + 20
					if (this.selectedIndex === 0) this.selectedIndex = 9
					this.selectedIndex--
					
					this.teams.unshift(this.teams[8])
					this.teams.pop()
				}
			}
			setTimeout(() => this.slideActive = 2, 500)
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
						v-for="item in teams" :key="item.img"
						class="slide-project fade col-sm-12 align-center"
						:class="{'active': item.img === slideActive?true:false}">
						
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
									<div 
										class="team-image"
										:style="'background-image: url(img/team/'+item.img+'.png)'">
										<div 
											class="team-desc"
											:style="{'visibility': slideActive === item.img?'hidden':'visible'}">
											<div 
												v-html="item.desc"
												class="team-text-desc"></div>
										</div>
									</div>
									<div class="card-body bg-orange">
										<br>
										<div class="title">{{ item.name }}</div>
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
					v-for="item in teams" :key="item.img"
					class="dot"
					:class="{'active': slideActive === item.img?true:false}"
					@click="selectSlide(item.img)"
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
		teams: teams,
		slideActive: 1
	}),	
	methods: {
		changeSlide(val) {
			if (val === 'left') {
				if (this.slideActive === 1) {
					this.slideActive = 9
				} else {
					this.slideActive--
				}
			} else {
				if (this.slideActive === 9) {
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