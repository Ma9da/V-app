<template>
	<el-col
		:span="24"
		:lg="12"
		:md="12"
		class="text-#42436A py-2 flex flex-col justify-center content-center"
	>
		<h1 class="px-10 text-7 leading-10">Sign up for weekly Deals*</h1>

		<p class="px-10 leading-6 mb-5">
			Subscribe to our newsletter so we can spam you with offers and
			discounts.
		</p>
		<div class="flex justify-center content-center">
			<el-input
				autosize
				size="large"
				v-model="data"
				placeholder="Enter your Email"
				class="pl-10 drop-shadow-2xl lg:md:w-80 sm:w-full"
			/>
			<div class="btn-shadow">
				<el-button color="#1CCF3D" class="w-15 py-5 btn-shadow" />
			</div>
		</div>
	</el-col>
	<el-col
		:span="24"
		:lg="12"
		:md="12"
		class="back-ground relative text-center hidden lg:md:block"
	>
		<div class="w-25 h-25 shadow-style1 z-0" style=""></div>
		<img
			src="../../assets/images/homePage/letters.png"
			relative
			class="z-3"
		/>
		<div class="w-30 h-30 shadow-style2 z-0" style=""></div>
	</el-col>
</template>
<style>
.shadow-style2 {
	background-color: pink;
	border-radius: 50%;
	opacity: 70%;
	filter: blur(1.5rem);
	background-color: pink;
	position: absolute;
	right: 27%;
	top: 70%;
}
.shadow-style1 {
	border-radius: 50%;
	opacity: 50%;
	filter: blur(1.5rem);
	background-color: #fdd500;
	position: absolute;
	left: 30%;
	top: 50%;
}
.btn-shadow {
	box-shadow: 10px 10px 35px 6px rgba(28, 207, 61, 0.3);
	-webkit-box-shadow: 10px 10px 35px 6px rgba(28, 207, 61, 0.3);
	-moz-box-shadow: 10px 10px 35px 6px rgba(28, 207, 61, 0.3);
}
.back-ground {
	background-image: url(../../assets/images/homePage/secondBubble.png);
	background-repeat: no-repeat;
}
</style>
