Vue.component('carousel-testimoni', {
	template: `
		<div class="d-sm-none">
			<div class="carousel-testimoni mb-5">				
				<div class="carousel-container align-center">
					<div 
						class="carousel-nav testimoni-nav left"
						@click="changeSlide('left')">
						<img 
							src="./img/icon/chevron-left.svg" 
							alt="chevron-left"
						/>
					</div>
					<template v-for="item in slides">
						<div 
							:key="item"
							class="slide-testimoni"
							:class="{'active': item === slideActive?true:false}">						
							<div 
								class="card bg-dark-grey text-white text-center">
								<div class="card-footer">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
									<div class="d-flex align-center justify-center">
										<div class="icon-testimoni">
											<img 
												src="./img/icon/facebook-white.svg" 
												alt="facebook icon"
											/>
										</div>
										<div class="img-testimoni">
											<img 
												src="./img/team.png" 
												alt="image testimoni"
											/>
										</div>
										<div class="icon-testimoni">
											<img 
												src="./img/icon/twitter-white.svg" 
												alt="twitter icon"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>		
					<div 
						class="carousel-nav testimoni-nav right"
						@click="changeSlide('right')">
						<img 
							src="./img/icon/chevron-right.svg" 
							alt="chevron-right"
						/>
					</div>		
				</div>				
			</div>
			<br>
			<div>
				<div class="d-flex justify-center">
					<span 
						v-for="item in 3" :key="item"
						class="dot"
						:class="{'active': slideActive === item?true:false}"
						@click="selectSlide(item)"
					></span>
				</div>
			</div>
		</div>
	`,
	data: () => ({
		slides: [1,2,3],
		slideActive: 2 //nama gambar 2.png
	}),
	methods: {	
		selectSlide(val) {
			this.slideActive = 0
			let selectedSlide = val
			let indexSlide = 0
			let changedValue = this.slides[1]
			this.slides.map((slide, i) => {
				if (slide === selectedSlide) indexSlide = i
			})
			this.slides[indexSlide] = changedValue
			this.slides[1] = selectedSlide
			setTimeout(() => {
				this.slideActive = this.slides[1]					
			}, 300)
		},	
		changeSlide(val) {
			this.slideActive = 0
			if (val === 'left') {
				let newArray = []
					let first = this.slides[0]				
					for (let i = 0;i < 3;i++){
						if (i < 2) {
							newArray[i] = this.slides[i+1]
						} else {
							newArray[i] = first
						}
					}
					this.slides = newArray
				setTimeout(() => {
					this.slideActive = this.slides[1]					
				}, 300)
			} else {
				let newArray = []
				let last = this.slides[2]				
				for (let i = 0;i < 3;i++){
					if (i > 0) {
						newArray[i] = this.slides[i-1]
					} else {
						newArray[i] = last
					}
				}
				this.slides = newArray
				setTimeout(() => {
					this.slideActive = this.slides[1]
				}, 300)		
			}
		}
	}
})

Vue.component('carousel-testimoni-mobile', {
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
						v-for="item in testimoni" :key="item"
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
								<div 
									class="card bg-dark-grey text-white text-center">
									<div class="card-footer">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<div class="d-flex align-center justify-center">
											<div class="icon-testimoni">
												<img 
													src="./img/icon/facebook-white.svg" 
													alt="facebook icon"
												/>
											</div>
											<div class="img-testimoni">
												<img 
													src="./img/team.png" 
													alt="image testimoni"
												/>
											</div>
											<div class="icon-testimoni">
												<img 
													src="./img/icon/twitter-white.svg" 
													alt="twitter icon"
												/>
											</div>
										</div>
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
					v-for="item in testimoni" :key="item"
					class="dot"
					:class="{'active': slideActive === item?true:false}"
					@click="selectSlide(item)"
				></span>
			</div>
		</div>
	`,
	data: () => ({
		testimoni: [1,2,3],
		slideActive: 2
	}),	
	methods: {
		changeSlide(val) {
			if (val === 'left') {
				if (this.slideActive === 1) {
					this.slideActive = 3
				} else {
					this.slideActive--
				}
			} else {
				if (this.slideActive === 3) {
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

Vue.component('testimoni-section', {
	template: `
		<section class="testimoni bg-silver py-6" id="testimonial">
			<div class="text-center headline mb-5">
				<span class="line black"></span>
				Testimonial
				<span class="line black"></span>
			</div>
			<br>
			<carousel-testimoni></carousel-testimoni>
			<carousel-testimoni-mobile></carousel-testimoni-mobile>
		</section>
	`
})