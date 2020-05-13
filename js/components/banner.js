Vue.component('banner-section', {
	template: `
		<section class="banner" id="overview">
			<div class="container">
				<div class="row">
					<div class="col w-60 col-sm-12 d-lg-none">						
						<div class="text-white text-center mb-3">
							<div class="headline mb-1">
								Save Your Energy <br>
								With BTIEnergy
							</div>
							<span>
								Hemat energy dari sekarang demi masa depan yang terang. 
							</span>
						</div>
					</div>
					<div class="col w-40 col-sm-12 mb-sm-2">
						<div class="card">
							<div class="card-header" style="box-shadow: 0 4px 4px silver;">
								<div class="title d-flex align-center">
									<img 
										src="./img/calculator.png" 
										height="30"
										style="width: auto;margin-right: 1rem;" 
										alt="icon marker" 
									/>
									SOLAR SAVING CALCULATOR
								</div>
							</div>
							<form @submit.prevent="hitungHasil">
								<div class="card-body" style="padding-top: 16px;">
									<label>Select Electrical Power</label>
									<div class="select">
										<div class="form-control">
											<input 
												type="text" 
												name="power"
												v-model="dataSolar.power" 
												readonly 
												required
												placeholder="Input your electrical power"
												@focus="isVisiblePower = true;isVisible = false"
											/>
											<div class="form-control-icon right">
												<img 
													src="./img/icon/chevron-down.svg"
													alt="icon magnify"
													class="rotate90" 
												/>
											</div>
										</div>
										<ul 
											class="option top"
											:class="{'d-block': isVisiblePower}">
											<li 
												v-for="item in power" :key="item"
												@click="selectedPower(item)">
												TR {{ item }}VA
											</li>
										</ul>
									</div>
									<div class="form-control-message text-error mb-1">
										* Wajib di isi
									</div>
									<label>Monthly Bill</label>
									<div class="form-control">
										<div class="mr-1">
											Rp
										</div>
										<input 
											type="number" 
											name="bill"
											v-model="dataSolar.bill"
											placeholder="Input your mounthly bill"
											required
										/>
									</div>
									<div class="form-control-message text-error mb-1">
										* Wajib di isi
									</div>
									<label>Coverage (%)</label>
									<div class="select">
										<div class="form-control">
											<input 
												type="text" 
												name="coverage"
												placeholder="0-100%"
												v-model="dataSolar.coverage"
												readonly 
												required
												@focus="isVisible = true;isVisiblePower = false"
											/>
											<div class="form-control-icon right">
												<img 
													src="./img/icon/chevron-down.svg"
													alt="icon magnify"
													class="rotate90" 
												/>
											</div>
										</div>
										<ul 
											class="option bottom"
											:class="{'d-block': isVisible}">
											<li 
												v-for="item in coverage" :key="item"
												@click="selectedCoverage(item)">
												{{ item }}%
											</li>
										</ul>
									</div>
									<div class="form-control-message text-error">
										* Wajib di isi
									</div>
									<label>Email</label>
									<div class="form-control">
										<input 
											type="email" 
											name="email"
											v-model="dataSolar.email"
											placeholder="Input your email"
											required
										/>
									</div>
									<div class="form-control-message text-error mb-1">
										* Wajib di isi
									</div>
									<label>No. Telp (optional)</label>
									<div class="form-control mb-1">
										<input 
											type="number" 
											name="telp"
											placeholder="+628*********"
											v-model="dataSolar.nohp"
										/>
									</div>
								</div>
								<div class="card-footer d-flex justify-between">
									<button type="submit" class="btn">CALCULATE NOW</button>
									<div 
										v-if="isSubmit"
										@click="refresh" 
										class="btn">
										REFRESH
									</div>
								</div>
							</form>
							<div 
								v-if="isSubmit"
								class="card-footer">
								<div class="title font-weight-normal mb-1">
									Total : {{ Intl.NumberFormat('id-ID', { maximumSignificantDigits: 4, style: 'currency', currency: 'IDR' }).format(total) }}
								</div>
								<div class="title font-weight-normal mb-1">
									Average Mounthly Saving : 
								</div>
								<div class="title font-weight-normal mb-1">
									Balik Modal : 
								</div>
								<div class="title font-weight-normal mb-1">
									Reduce CO2 : {{reduceCO2}} kg CO2
								</div>
								<div class="title font-weight-normal mb-1">
									Minyak Dunia : {{minyak}} ktoe/year
								</div>
							</div>
						</div>
					</div>
					<div class="col w-60 col-sm-12 d-sm-none">						
						<div class="text-white mb-3">
							<div class="headline mb-1">
								Save Your Energy <br>
								With BTIEnergy
							</div>
							<span>
								Hemat energy dari sekarang demi masa depan yang terang. 
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		isVisible: false,
		isVisiblePower: false,
		coverage: [25, 50, 75, 90, 100],
		power: [450, 900, 1300, 2200, 3500],
		dataSolar: {
			coverage: '',
			power: '',
			bill: '',
			nohp: '',
			email: ''
		},
		total: '',
		reduceCO2: '',
		minyak: '',
		isSubmit: false
	}),
	methods: {
		selectedCoverage(val) {
			this.dataSolar.coverage = val
			this.isVisible = false
		},
		selectedPower(val) {
			this.dataSolar.power = val
			this.isVisiblePower = false
		},
		hitungHasil() {
			this.isSubmit = true
			if (this.isSubmit) {
				let totalWatt = this.dataSolar.power * 8760 * 0.5
				let idr = 0
				if (this.dataSolar.power > 1300) 
					{idr = 1467.28}
				else 
					{idr = 1352}
				this.total = totalWatt * idr / 1000

				this.reduceCO2 = totalWatt * 0.283 / 1000

				this.minyak = totalWatt * 8.59 * 0.00000000001
			}
		},
		refresh() {
			this.isSubmit = false
			this.dataSolar = {
				coverage: '',
				power: '',
				bill: '',
				nohp: '',
				email: ''
			}
		}
	}
})