Vue.component('sidemenu-section', {
	props: ['sideMenu'],
	template: `
		<section 
			class="sidemenu"
			:class="{'active': sideMenu}">
			<div 
				class="sidemenu-screen"
				@click="$emit('active', false)"
			></div>
			<div class="sidemenu-nav">
				<div class="sidemenu-header">
					<img 
						src="./img/logo.png" 
						class="logo"
						alt="logo bit energy" 
					/>
					<div class="d-flex justify-between">
						<a 
							v-for="item in headerNav" :key="item.text"
							href="" 
							class="nav-link px-sm-0">
							<div class="d-flex align-center">
								<img 
									:src="'./img/icon/'+item.icon" 
									height="20" 
									alt="icon marker" 
								/>
								<div>{{ item.text }}</div>
							</div>
						</a>
					</div>
					<ul class="sidemenu-list">
						<li v-for="item in navbarNav" :key="item.text">
							<a 
								:href="item.value" 
								@click="jumping = item;$emit('active', false)"
								:class="{'active': item === jumping}">
								{{ item.text }}
							</a>
						</li>
						<li>
							<a href="">
								<button class="btn">LOGIN</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		headerNav: [
			{ text: 'INDONESIA', icon: 'marker.svg' },
			{ text: '+628-xxxxxxx', icon: 'phone.svg' }
		],
		navbarNav: [
			{ text: 'overview', value: '#overview' }, 
			{ text: 'features', value: '#features' }, 
			{ text: 'why?', value: '#why?' }, 
			{ text: 'aplication', value: '#aplication' }, 
			{ text: 'project', value: '#project' }, 
			{ text: 'consultation', value: '#consultation' }, 
			{ text: 'our team', value: '#our_team' }, 
			{ text: 'testimonial', value: '#testimonial' }, 			
			{ text: 'our partners', value: '#our_partners' }
		],
		jumping: 'overview'
	})
})