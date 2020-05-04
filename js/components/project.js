Vue.component('project-section', {
	template: `
		<section class="project">
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
				<div class="row align-center">
					<div class="col col-6">
						<div class="headline font-weight-normal mb-3">
							Installaton 2.200 Wat
						</div>
						<p class="text-justify">
							Our sofware is made so you can access and manage your sistem and expenses  online  at  any  tme  from  any  device.  It  provides  detailed monitoring system and value reports with graphs so you can easilly see your  system nd budget at a  dashboard . Read below to fnd out more.
						</p>
						<a href="">
							<button class="btn btn-outline text-uppercase mr-1">
								Learn more
							</button>
						</a>
						<a href="">
							<button class="btn btn-outline text-uppercase">
								view more project
							</button>
						</a>
					</div>
					<div class="col col-6">
						<div class="carousel-project">
							<div class="carousel-nav">
								<img 
									src="./img/icon/chevron-left.svg" 
									alt="chevron-left"
									@click="changeSlide('left')"
								/>
							</div>
							<div class="carousel-container">
								<div 
									v-for="(item, i) in slides" :key="i"
									class="slide"
									:class="{'active': slideActive === item?true:false}">
									<img 
										:src="'./img/project/'+item+'.png'" 
										alt="slide project"
									/>
								</div>
							</div>
							<div class="carousel-nav">
								<img 
									src="./img/icon/chevron-right.svg" 
									alt="chevron-right"
									@click="changeSlide('right')"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		slides: [1,2,3],
		slideActive: 2 //nama gambar 2.png
	}),
	methods: {
		changeSlide(val) {
			if (val === 'left') {
				this.slideActive = this.slides[2]
				setTimeout(() => {
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
				}, 300)
			} else {
				this.slideActive = this.slides[0]
				setTimeout(() => {
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
				}, 300)		
			}
		}
	}
})