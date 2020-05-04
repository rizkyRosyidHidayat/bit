Vue.component('app-section', {
	template: `
		<section class="app">
			<div class="container">
				<div class="text-center mb-6">
					<div class="headline text-orange mb-1">
						<span class="line"></span>
						Application Technology
						<span class="line"></span>
					</div>
					<div class="caption">
						The renewable energy technology that we oﬀer can be applied to the following sectors
					</div>
				</div>
				<div class="row">
					<div 
						v-for="item in feature" :key="item.title"
						class="col col-4">
						<center>
							<img 
								:src="'./img/'+item.img"
								:alt="item.img"
								class="mb-3" 
							/>
						</center>
						<div class="text-center">
							<div class="card-header">
								<b class="mb-3">{{ item.title }}</b>
							</div>
							<div class="card-body">																
								{{ item.text }}
							</div>
							<div class="card-footer">
								<div class="text-orange">
									<a :href="item.link" class="nav-link">
										<button class="btn btn-outlined text-uppercase">
											Learn More
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		feature: [
			{
				img: 'home.png',
				title: 'HOME',
				text: 'We offer on grid, of grid or hybrid installaton systems',
				link: ''
			},
			{
				img: 'industrial.png',
				title: 'INDUSTRIAL',
				text: 'We offer on grid, of grid or hybrid installaton systems',
				link: ''
			},
			{
				img: 'commercial.png',
				title: 'COMMERCIAL',
				text: 'We offer on grid, of grid or hybrid installaton systems',
				link: ''
			}
		]
	})
})