Vue.component('banner-section', {
	template: `
		<section class="banner bg-orange" id="overview">
			<div class="container">
				<div class="text-center text-white mb-3">
					<div class="headline mb-1">
						Save Your Energy With BTI
					</div>
					<span>
						Hemat energy dari sekarang demi masa depan yang terang. 
					</span>
				</div>
				<div class="row">
					<div class="col w-40 col-sm-12 mb-sm-2">
						<div class="card">
							<div class="card-header">
								<div class="title">
									SOLAR SAVING CALCULATOR
								</div>
							</div>
							<div class="card-body">
								<form>
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
													src="./img/icon/chevron-right.svg"
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
												{{ item }}
											</li>
										</ul>
									</div>
									<div class="form-control-message text-error mb-1">
										* Wajib di isi
									</div>
									<label>Mounthly Bill</label>
									<div class="form-control">
										<div class="mr-1">
											Rp
										</div>
										<input 
											type="text" 
											name="bill"
											placeholder="Input your mounthly bill"
											required
										/>
									</div>
									<div class="form-control-message text-error mb-1">
										* Wajib di isi
									</div>
									<label>Email</label>
									<div class="form-control">
										<input 
											type="email" 
											name="email"
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
											type="text" 
											name="telp"
											placeholder="+628*********"
											required
										/>
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
													src="./img/icon/chevron-right.svg"
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
								</form>
							</div>
							<div class="card-footer">
								<button class="btn">CALCULATE NOW</button>
							</div>
						</div>
					</div>
					<div class="col w-60 col-sm-12">
						<img 
							src="./img/ilustrasi.png"
							alt="ilustrasi"
							style="width: 90%;"
							align="right"
							class="col-sm-12"
						/>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		isVisible: false,
		isVisiblePower: false,
		coverage: [10, 20, 50],
		power: ['Electric','Solar','Premium'],
		dataSolar: {
			coverage: '',
			power: ''
		}
	}),
	methods: {
		selectedCoverage(val) {
			this.dataSolar.coverage = val
			this.isVisible = false
		},
		selectedPower(val) {
			this.dataSolar.power = val
			this.isVisiblePower = false
		}
	}
})