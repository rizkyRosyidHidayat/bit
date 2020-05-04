Vue.component('header-section', {
	template: `
		<header>
			<div class="container">
				<div class="header">
					<a href="">
						<img 
							src="./img/logo.png" 
							height="50" 
							alt="logo bit energy" 
						/>
					</a>
					<div class="d-flex">
						<a 
							v-for="item in headerNav" :key="item.text"
							href="" 
							class="nav-link">
							<div class="d-flex align-center">
								<img 
									:src="'./img/icon/'+item.icon" 
									height="30" 
									alt="icon marker" 
								/>
								<div>{{ item.text }}</div>
							</div>
						</a>
					</div>
				</div>
				<div class="navbar-nav">
					<div>
						<a 
							v-for="item in navbarNav" :key="item"
							href="" 
							class="nav-link pa-2 text-uppercase"
							:class="{'active': item === 'overview'?true:false}">
							{{ item }}
						</a>
					</div>
					<div class="form-control rounded search">
						<div class="form-control-icon left">
							<img 
								src="./img/icon/magnify.svg"
								alt="icon magnify" 
							/>
						</div>
						<input 
							type="text" 
							name="search" 
							placeholder="Find Something"
						/>
					</div>
				</div>
			</div>
		</header>
	`,
	data: () => ({
		headerNav: [
			{ text: 'INDONESIA', icon: 'marker.svg' },
			{ text: '+628-xxxxxxx', icon: 'phone.svg' }
		],
		navbarNav: [
			'overview', 
			'features', 
			'why?', 
			'aplication', 
			'project', 
			'consultation'
		]
	})
})