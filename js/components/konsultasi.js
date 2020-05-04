Vue.component('konsultasi-section', {
	template: `
		<section class="konsultasi">
			<div class="container w-100">
				<div class="row">
					<div class="col col-6 bg-red text-white py-6">
						<div class="container">
							<div class="text-uppercase">
								<span class="line normal"></span>
								we work for you
							</div>
							<p class="headline">
								<span class="font-weight-normal">Free</span>
								Consultation
							</p>
							<div class="mb-3">
								We’re so confdent we can fnd the right soluton for you solar needs we’ll come to your home , industrial , commercial and walk you through all the opton at no cost.
							</div>
							<form>
								<div class="row">
									<div class="col col-6">
										<div class="form-control white large">
											<input 
												type="text" 
												name="first"
												placeholder="First Name"
												class="text-white" 
											/>
										</div>
									</div>
									<div class="col col-6">
										<div class="form-control white large">
											<input 
												type="text" 
												name="last"
												placeholder="Last Name"
												class="text-white" 
											/>
										</div>
									</div>
								</div>
								<br>
								<div class="form-control white large">
									<input 
										type="text" 
										name="last"
										placeholder="Phone Number"
										class="text-white" 
									/>
								</div>
								<br>
								<div class="form-control white large">
									<input 
										type="text" 
										name="last"
										placeholder="Message"
										class="text-white" 
									/>
								</div>
								<br>
								<button class="btn btn-outline btn-white bg-white text-red btn-large">SEND MESSAGE</button>
							</form>
						</div>
					</div>
					<div class="col col-6 bg-img">
						<div class="consultation-call d-flex align-center justify-center">
							<div class="text-center">
								<div class="mb-3">
									IF YOU WOULD LIKE TO SPEAK WITH SOMEONE DIRECTlY
								</div>
								<div class="title mb-1">
									Call US TOOL FREE
								</div>
								<center>
									<div style="width: 100px;" class="mb-1">
										<img src="./img/logo_single.png" alt="logo_single" />
									</div>
								</center>
								<div class="title font-weight-normal">
									+628-xxxxxxxx
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	`
})