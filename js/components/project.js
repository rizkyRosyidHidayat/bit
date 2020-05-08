Vue.component('project-section', {
	template: `
		<section class="project" id="project">
			<div class="container">
				<div class="text-center mb-5">
					<div class="headline text-orange mb-1">
						<span class="line"></span>
						Our Incredible Project
						<span class="line"></span>
					</div>
					<div class="caption">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</div>
				</div>
				<div class="carousel-project mb-3">
					<div class="carousel-nav left d-sm-none">
						<img 
							src="./img/icon/chevron-left.svg" 
							alt="chevron-left"
							@click="changeSlide('left')"
						/>
					</div>
					<div 
						v-for="item in slides" :key="item"
						class="slide-project fade row align-center"
						:class="{'active': item === slideActive?true:false}">
						<div class="col col-6 col-sm-12 mb-sm-2">
							<div class="headline font-weight-normal mb-3 text-sm-center">
								Installaton 2.200 Wat
							</div>
							<p class="text-justify">
								Our sofware is made so you can access and manage your sistem and expenses  online  at  any  tme  from  any  device.  It  provides  detailed monitoring system and value reports with graphs so you can easilly see your  system nd budget at a  dashboard . Read below to fnd out more.
							</p>
							<a href="">
								<button class="btn btn-outline rounded text-uppercase mr-1 mb-sm-2">
									Learn more
								</button>
							</a>
							<a href="">
								<button class="btn btn-outline rounded text-uppercase">
									view more project
								</button>
							</a>
						</div>
						<div class="col col-6 col-sm-12">
							<div class="d-flex align-center">
								<div class="carousel-nav left-nav-mobile d-lg-none">
									<img 
										src="./img/icon/chevron-left.svg" 
										alt="chevron-left"
										@click="changeSlide('left')"
									/>
								</div>
								<img 
									class="img-project"
									:src="'./img/project/'+item+'.png'" 
									alt="image project" 
								/>
								<div class="carousel-nav right-nav-mobile d-lg-none">
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
						v-for="item in slides" :key="item"
						class="dot"
						:class="{'active': slideActive === item?true:false}"
						@click="selectSlide(item)"
					></span>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		slides: [1,2,3],
		slideActive: 1 //nama gambar 2.png
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