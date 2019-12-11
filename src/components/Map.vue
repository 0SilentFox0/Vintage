<template>
	<section id="map">
		<div class="container">
			<div class="row">
				<div class="col-6">
					<div class="row">
						<div class="col">
							<h1 class="map__title">
								Our Offices
							</h1>
						</div>
					</div>
					<div class="row">
						<div class="row">
							<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
								<li class="nav-item">
									<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Kiev</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">New York</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Guangzhou
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Barcelona
									</a>
								</li>
							</ul>

							</div>
					</div>
					<div class="row">
						<div class="col-12">
							<h1 class="global">Global Message Services Ukraine LLC</h1>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<p class="subtitle">
								Kuiv, Stepan Bandera, 33
								02066
								Ukraine
							</p>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="map">
						<img src="../assets/sample.png" alt="kiev">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Map"
	}
</script>

<style scoped>
	#map {
		background: black;
		color: white;
	}

	.map__title {
		font-family: "Suisse Intl";
		font-size: 34px;
		font-weight: 300;
		line-height: 48px;
	}

	.global {
		font-family: "Suisse Intl";
		font-size: 26px;
		font-weight: 300;
		line-height: 20px;
		letter-spacing: 1.18px;
	}

	.subtitle {
		font-family: "Myriad Pro";
		font-size: 11px;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: 0.5px;
	}
</style>