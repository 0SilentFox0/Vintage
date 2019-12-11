<template>
	<header id="header">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<div class="header__contacts">
						Contacts
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="header__subtitle d-flex">
						<p class="header__subtitle-green-text">GMS</p> Headquarters
					</div>
					<div class="row">
						<div class="col-6">
							<div class="header__text">
								Global Message Services Ukraine LLC
								Bundesstrasse 5 | 3rd Floor
								6300 Zug
								Switzerland
							</div>
							<a class="header__telephone" href="tel:+41 41 544 62 00">+41 41 544 62 00</a>
						</div>
						<div class="col-6">
							<div class="header__text-right">
								<p class="text-right__default">Email</p>
								<p class="text-right__green">info@gms-worldwide.com</p>
								<p class="text-right__default">Send message</p>
								<p class="text-right__green">Viber us</p>
								<p class="text-right__default">Send form</p>
								<p class="text-right__green">Contact us</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="header__subtitle d-flex">
						Technical support<p class="header__subtitle-green-text">24/7</p>
					</div>
					<div class="row">
						<div class="col">
							<div class="header__text">
								GMS understands that it can be hard to follow all new technologies. We regularly provide
								for all our clients educational trainings to make your operator`s business earn more and
								better though our best practices.
							</div>
							<a class="header__telephone" href="tel:+41 41 544 62 00">+41 41 544 62 00</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header__contacts {
		color: #333333;
		font-family: "Suisse Intl";
		font-size: 50px;
		font-weight: 300;
		line-height: 48px;
		margin: 60px 62px 50px;
	}

	.header__subtitle {
		color: #2e2e2e;
		font-family: "Suisse Intl";
		font-size: 34px;
		font-weight: 300;
		line-height: 48px;
	}

	.header__subtitle-green-text {
		color: #3db565;
	}

	.header__telephone {
		font-family: "Suisse Intl";
		font-size: 26px;
		font-weight: 300;
		line-height: 36px;
		color: #3db565;
		text-decoration: none;
	}

	.text-right__default {
		color: #333333;
		font-family: "Suisse Intl";
		font-size: 15px;
		font-weight: 300;
		line-height: 28px;
	}

	.text-right__green {
		color: #3db565;
		font-family: "Suisse Intl - Semi Bold";
		font-size: 14px;
		font-weight: 400;
		line-height: 54.87px;
		text-transform: uppercase;
		letter-spacing: 0.85px;
	}
</style>
