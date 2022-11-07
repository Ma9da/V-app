<template class="relative z-0">
	<el-row class="mb-10 d-flex  lg:px-20 md:px-15 sm:px-5">
		<!-- <el-col :span="12" :gutter=12>
			<>
		</el-col> -->
		<form-component></form-component>
	</el-row>
	<div class="overflow-hidden block sm:hidden lg:block">
		<div class="-z-1 bg-#8612EA w-165 h-165 absolute bottom-0 right--6% top--40% radius rotate-40 overflow-hidden">
			<div class="bg-no-repeat w-full h-full rounded-3xl relative top-21% rotate--40 overflow-hidden" style="
					background-image: url('../../src/assets/images/homePage/houseImage.png');
					opacity: 20%;
				"></div>
			<div class="relative bottom-32% left-50% ">
				<img src="../../src/assets/images/homePage/whitePlane.png" class=" w-60% rotate--40 " />
			</div>
		</div>

	</div>
	<el-row class="mb-10 items-center justify-center  px-20">
		<card-component></card-component>
	</el-row>

	<el-row class="mb-10 design-column lg:px-20 md:px-20 ">
		<el-col :span="24" :md="13" :sm="15" :xs="15"
			class="display-flex justify-space-around flex-col m-auto items-start h-15 sm:mx-auto line-height">
			<h2 class="text-#FF1E74 font-thin w-55 lg:text-center">
				Login to see
				<hr class="horizontal-line" />
			</h2>
			<h2 class="text-#FF1E74 font-thin w-55 lg:md:text-center mt-0 ">
				your free nights
				<hr class="horizontal-line">
			</h2>
		</el-col>

		<el-col :span="24" :md="12" class="px-4 py-2 display-flex justify- items-center">
			<el-card class="display-flex flex-col justify-center items-center rounded-3 w-fit mt-0 sm:mt-10 sm:mx-auto">
				<template #header>
					<h4 class="text-#5808D8 text-center">
						Happy Trip Loyalty Program
					</h4>
				</template>

				<el-row class="mb-5">
					<el-col :span="18">
						<el-row class="mb-4" :gutter="50">
							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: #5808d8"
									class="font-bold">
									logo
								</el-avatar>
							</el-col>

							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>

							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>

							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>

							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>
						</el-row>

						<el-row :gutter="50">
							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>

							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>
							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>
							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>
							<el-col :span="4">
								<el-avatar :size="40" shape="square" style="background-color: white"
									class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted">
									logo
								</el-avatar>
							</el-col>
						</el-row>
					</el-col>

					<el-col :span="6" class="display-flex items-center">
						<el-row class="items-center">
							<el-col :span="12">
								<span class="text-#5808d8 text-center font-bold text-2xl">
									=</span>
							</el-col>

							<el-col :span="12">
								<div
									class="bg-#1CCF3D w-11 h-6 rounded-3 text-center text-white text-[10px] font-bold mb-3 display-flex items-center justify-center">
									FREE
								</div>
								<el-avatar :size="40" shape="square" style="background-color: #5808d8"
									class="font-bold">
									logo Test
								</el-avatar>
							</el-col>
						</el-row>
					</el-col>
				</el-row>

				<el-row class="text-#5808D8 font-bold">
					<el-col :span="12"> Collect 10 nights </el-col>
					<el-col :span="8" class="text-right">
						Get 1 night free
					</el-col>
					<el-col :span="3" class="text-center"> > </el-col>
				</el-row>
			</el-card>

			<img src="@/assets/images/program.png" class="w-30 pb-80 hidden lg:block" />
		</el-col>

		<el-col :span="24" :md="12" :sm="24" class="text-#42436A px-4 py-2 sm:mx-15 lg:md:mx-0">
			<h1 class="w-60 pb-4 text-7 leading-10">
				Happy Trip Loyality Program
				<hr class="heder-line">
			</h1>

			<p class="leading-6 mb-15 sm:w-100 lg:md:w-full">
				As the world's largest student and youth travel company, we've
				been booking affordable adventures for awesome humans since
				1979. Experts in Round the World flights, tours, accommodation
				and good vibes - whatever your adventure, it starts right here.
				As the world's largest student and youth travel company, we've
				been booking affordable adventures for awesome humans since
				1979. Experts in Round the World flights, tours, accommodation
				and good vibes - whatever your adventure, it starts right here.
				As the world's largest student and youth travel company, we've
				been booking affordable adventures for awesome good vibes -
				whatever your adventure, it starts right here.
			</p>

			<el-button size="large" class="bg-#1CCF3D text-white font-bold shadow-xl">
				Explore More</el-button>
		</el-col>
	</el-row>
	<el-row class="mb-20 text-white px-20 sm:pt-20 lg:pt-40 bg-gradient-to-r from-#8612EA to-#4406D1">
		<el-col :span="12" :md="12">
			<div class="">
				<h2>Get the Happy Trip App !</h2>
				<p class="w-full lg:w-80 leading-6">
					Looking to manage your flight and hotel needs efficiently?
					BlazeBe does exactly that for you in a few simple taps with
					artistic user interface and secure payment channels.
				</p>
				<el-button class="bg-transparent text-white">Get the app
				</el-button>
			</div>
		</el-col>

		<el-col :span="12" :md="12" class="relative flex">
			<div class="flex justify-end relative ">
				<img src="@/assets/images/getAppDevice1.png" alt=""
					class="absolute top-20% right-70% sm:hidden md:lg:block" />
				<img src="@/assets/images/getAppDevice2.png" alt="" class="sm:w-50 lg:md:w-full" />
			</div>

		</el-col>

		<img src="@/assets/images/getApp.png" alt="" class="w-40 absolute bottom-0 left-0 sm:hidden md:lg:block" />
	</el-row>
	<el-row class="mb-10 px-20">
		<el-col :span="24" :md="12">
			<el-row>
				<el-col :span="24" class="mb-10">
					<el-card
						class="rounded-l-0 rounded-r-3 border-l-3 border-l-#FDD500 relative overflow-visible w-full lg:w-96"
						:body-style="{
							padding: '10px 10px 10px 20px',
						}">
						<div class="rounded-full p-3 border-1 border-#FDD500 w-fit absolute -top-1/4 right-1/10">
							<el-avatar :size="40" style="background-color: #fdd500" class="font-bold">
								star
							</el-avatar>
						</div>

						<h4 class="text-[14px] text-#FDD500">
							Superior Booking Experience
						</h4>

						<p class="text-[14px]">
							Ease of booking, fantastic products and competitive
							pricing makes the booking experience amazing
						</p>
					</el-card>
				</el-col>

				<el-col :span="24" class="mb-10 lg:ml-30 sm:ml-0">
					<el-card
						class="rounded-l-0 rounded-r-3 border-l-3 border-l-#00D8FD relative overflow-visible w-full lg:w-96"
						:body-style="{
							padding: '10px 10px 10px 20px',
						}">
						<div class="rounded-full p-3 border-1 border-#00D8FD w-fit absolute -top-1/4 right-1/10">
							<el-avatar :size="40" style="background-color: #00d8fd" class="font-bold">
								phone
							</el-avatar>
						</div>

						<h4 class="text-[14px] text-#00D8FD">
							Superior Booking Experience
						</h4>

						<p class="text-[14px]">
							Ease of booking, fantastic products and competitive
							pricing makes the booking experience amazing
						</p>
					</el-card>
				</el-col>

				<el-col :span="24" class="mb-10">
					<el-card
						class="rounded-l-0 rounded-r-3 border-l-3 border-l-#FF1E74 relative overflow-visible w-full lg:w-96"
						:body-style="{
							padding: '10px 10px 10px 20px',
						}">
						<div class="rounded-full p-3 border-1 border-#FF1E74 w-fit absolute -top-1/4 right-1/10">
							<el-avatar :size="40" style="background-color: #ff1e74" class="font-bold">
								smile
							</el-avatar>
						</div>

						<h4 class="text-[14px] text-#FF1E74">
							Superior Booking Experience
						</h4>

						<p class="text-[14px]">
							Ease of booking, fantastic products and competitive
							pricing makes the booking experience amazing
						</p>
					</el-card>
				</el-col>
			</el-row>
		</el-col>

		<el-col :span="24" :md="12" class="text-#42436A px-4 py-2 flex flex-col justify-center">
			<h1 class="text-7 leading-10">Why work with us?</h1>

			<p class="leading-6 mb-15">
				You are unique, and so is your trip. When you book with Liberty
				Travel, we match you with an expert best suited to design a
				vacation just for you.
			</p>
		</el-col>
	</el-row>

	<el-row class="mb-10 pl-20">
		<signup-component></signup-component>
	</el-row>
</template>
<script>
// import form-component from "../components/homePage/form-component.vue";

export default {
	// components:[form-component],
	data() {
		return {
			url: "../assets/images/homePage/whitePlane.png",
		};
	},
};
</script>

<style scoped>
/* .font-adj {
	font-size: 30px !important;
} */
.back-ground {
	background-image: url(../assets/images/homePage/secondBubble.png);
}

.radius {
	border-radius: 120px;
}

.design-column {
	background-image: url(../assets/images/homePage/bubblesGround.png);
	background-size: 80% 100%;
	/* background-size: contain; */
	background-repeat: no-repeat;
}

.horizontal-line {
	width: 34%;
	border: none;
	color: pink;
	background-color: #ffbac6;
	border-color: pink;
	height: 52%;
	margin-top: 3px;
	opacity: 35%;
}

.line-height {
	line-height: 1px;
}
</style>
