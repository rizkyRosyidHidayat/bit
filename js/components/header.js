Vue.component('navbar-section', {
	template: `
		<div class="navbar">
			<div class="container">					
				<div class="navbar-nav">
					<a href="">
						<img 
							src="./img/logo.png" 
							class="logo"
							alt="logo bit energy" 
						/>
					</a>
					<div class="d-lg-none">
						<img 
							src="./img/icon/menu.svg"
							alt="icon menu" 
							height="30"
							@click="$emit('active', true)"
						/>
					</div>
					<div class="d-sm-none d-flex">
						<a 
							v-for="item in navbarNav" :key="item"
							@click="jumping = item" 
							:href="'#'+item" 
							class="nav-link pa-2 text-uppercase"
							:class="{'active': item === jumping?true:false}">
							{{ item }}
						</a>
						<div class="dropdown pa-2 text-uppercase">
							<div class="d-flex">
								<div class="mr-1">other</div>
								<img 
									src="./img/icon/chevron-down.svg"
									alt="icon chevron-down" 
									class="rotate90"
								/>
							</div>
							<ul class="dropdown-menu">
								<li 
									v-for="item in otherNav" :key="item.text"
									@click="jumping = item">
									<a 
										class="nav-link text-uppercase"
										:href="item.value">
										{{ item.text }}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	data: () => ({
		navbarNav: [
			'overview', 
			'features', 
			'why?', 
			'application', 
			'project'
		],
		otherNav: [
			{ text: 'consultation', value: '#consultation' }, 
			{ text: 'our team', value: '#our_team' }, 
			{ text: 'testimonial', value: '#testimonial' }, 			
			{ text: 'our partners', value: '#our_partners' }
		],
		jumping: 'overview'
	})
})

Vue.component('header-section', {
	template: `
		<header>
			<div class="container">
				<div class="header mb-1 d-sm-none">
					<div class="d-flex align-center">
						Our Contribution :
						<div 
							style="margin: 0 16px;"
							class="d-flex align-center">
							<img 
								src="./img/icon/lighting.svg" 
								height="30" 
								alt="icon marker" 
							/>
							80.23Mhw
						</div>
						CO2 Avoided : 70,4 Kg
					</div>
					<div class="d-flex">
						<a 
							v-for="item in headerNav" :key="item.text"
							href="" 
							class="nav-link px-sm-0"
							:class="{'d-sm-none': item.text === 'INDONESIA'?true:false}">
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
					<a href="">
						<img 
							src="./img/logo.png" 
							class="logo"
							alt="logo bit energy" 
						/>
					</a>
					<div class="d-lg-none">
						<img 
							src="./img/icon/menu.svg"
							alt="icon menu" 
							height="30"
							@click="$emit('active', true)"
						/>
					</div>
					<div class="d-sm-none d-flex">
						<a 
							v-for="item in navbarNav" :key="item"
							@click="jumping = item" 
							:href="'#'+item" 
							class="nav-link pa-2 text-uppercase"
							:class="{'active': item === jumping?true:false}">
							{{ item }}
						</a>
						<div class="dropdown pa-2 text-uppercase">
							<div class="d-flex">
								<div class="mr-1">other</div>
								<img 
									src="./img/icon/chevron-down.svg"
									alt="icon chevron-down" 
									class="rotate90"
								/>
							</div>
							<ul class="dropdown-menu">
								<li 
									v-for="item in otherNav" :key="item.text"
									@click="jumping = item">
									<a 
										class="nav-link text-uppercase"
										:href="item.value">
										{{ item.text }}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>	
			<navbar-section></navbar-section>
		</header>
	`,
	data: () => ({
		headerNav: [
			{ text: 'SIGN IN', icon: 'account.svg' },
			{ text: 'INDONESIA', icon: 'marker.svg' },
			{ text: '+628-xxxxxxx', icon: 'phone.svg' }
		],
		navbarNav: [
			'overview', 
			'features', 
			'why?', 
			'application', 
			'project'
		],
		otherNav: [
			{ text: 'consultation', value: '#consultation' }, 
			{ text: 'our team', value: '#our_team' }, 
			{ text: 'testimonial', value: '#testimonial' }, 			
			{ text: 'our partners', value: '#our_partners' }
		],
		jumping: 'overview'
	})
})
