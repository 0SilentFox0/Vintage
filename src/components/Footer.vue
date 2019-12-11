<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-6">
					<h1 class="footer__title">
						Contact us
					</h1>
					<form>
						<div class="form-group row">
							<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Name</label>
							<div class="col-sm-10">
								<input type="text" class="form-control form-control-lg" id="colFormLabelLg">
							</div>
							<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
							<div class="col-sm-10">
								<input type="tel" class="form-control form-control-lg" id="colFormLabelLg" >
							</div>
							<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
							<div class="col-sm-10">
								<input type="email" class="form-control form-control-lg" id="colFormLabelLg">
							</div>
							<div class="col-auto my-1">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="autoSizingCheck2">
									<label class="form-check-label" for="autoSizingCheck2">
										I agree the processing of personal data
									</label>
								</div>
							</div>
							<button type="submit" class="form__button">Get in touch</button>
						</div>
					</form>
				</div>

				<div class="col-6">
					<div class="footer__text">
						Please tell us more about your request and give us info about your company and country
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>
	.footer {
		background: url("../assets/pattern.png");
	}

	.footer__title {
		color: #ffffff;
		font-family: "Suisse Intl";
		font-size: 34px;
		font-weight: 300;
		line-height: 48px;
	}

	.footer__text {
		color: #000000;
		font-family: "Suisse Intl";
		font-size: 18px;
		font-weight: 300;
		line-height: 34px;
	}

	.form__button {
		color: #ffffff;
		font-family: "Suisse Intl - Semi Bold";
		font-size: 11px;
		font-weight: 400;
		line-height: 72.34px;
		text-transform: uppercase;
		letter-spacing: 1.54px;
		background: black;
		width: 279px;
		height: 83px;
	}
</style>