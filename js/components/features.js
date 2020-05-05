Vue.component('features-section', {
	template: `
		<section class="features mb-6" id="features">
			<div class="container">
				<div class="text-center mb-6">
					<div class="headline text-orange mb-1">
						<span class="line"></span>
						Features
						<span class="line"></span>
					</div>
					<div class="caption">WHAT WE OFFER</div>
				</div>
				<div class="row">
					<div 
						v-for="item in feature" :key="item.title"
						class="col col-4 col-sm-12 mb-sm-2">
						<center>
							<img 
								:src="'./img/'+item.img"
								:alt="item.img"
								class="mb-3" 
							/>
						</center>
						<div class="card text-center">
							<div class="card-header">
								<b class="mb-3">{{ item.title }}</b>
							</div>
							<div class="card-body">																
								{{ item.text }}
							</div>
							<div class="card-footer">
								<div class="text-orange">
									<a :href="item.link" class="nav-link">
										Read More
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
				img: 'solar_cell_system.png',
				title: 'Solar Cell System',
				text: 'We support all popular currencies and is fully customizable to add',
				link: ''
			},
			{
				img: 'easy_monitoring.png',
				title: 'Easy for Monitoring System',
				text: 'We support all popular currencies and is fully customizable to add',
				link: ''
			},
			{
				img: 'easy_maintenance.png',
				title: 'Easy for Maintenance',
				text: 'We support all popular currencies and is fully customizable to add',
				link: ''
			}
		]
	})
})