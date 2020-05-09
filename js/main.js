import './components/header.js'
import './components/banner.js'
import './components/plan.js'
import './components/features.js'
import './components/energy.js'
import './components/application.js'
import './components/project.js'
import './components/konsultasi.js'
import './components/team.js'
import './components/partner.js'
import './components/send.js'
import './components/footer.js'
import './components/sidemenu.js'
import './components/testimoni.js'

const app = new Vue({
	el: '#app',
	data: {
		sidemenu: false
	},
	methods: {
		activatedSidemenu(val) {
			this.sidemenu = val
		}
	}
})

// const navbarNav = document.querySelector('.navbar')

// function scrollFunction() {
// 	if (document.body.scrollTop > 66 || document.documentElement.scrollTop > 20) {    
//     navbarNav.setAttribute('class', 'navbar active') 
//   } else {
//     navbarNav.setAttribute('class', 'navbar') 
//   }
// }

// window.onscroll = function() {scrollFunction()};