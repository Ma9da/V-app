<template>
	<!-- <div class="container px-20"> -->
	<el-container fluid class="mx-auto py-4 lg:px-10 md:px-5 sm:px-2">
		<el-header>
			<el-menu
				:default-active="activeIndex"
				class="el-menu-demo relative z-3 bg-transparent justify-between content-center"
				mode="horizontal"
				background-color="#8612EA"
				text-color="#fff"
				menu-trigger="click"
			>
				<span><img src="../../../logo.png" alt="logo" /></span>
				<div class="flex">
					<el-menu-item
						index="1"
						class="lg:text-white sm:text-gray-800 md:text-gray-800 mx-2"
						>Home</el-menu-item
					>
					<el-menu-item
						index="2"
						class="lg:text-white sm:text-gray-800 md:text-gray-800"
						>Flights</el-menu-item
					>
					<el-menu-item
						index="3"
						class="lg:text-white sm:text-gray-800 md:text-gray-800"
						>Hotels</el-menu-item
					>
					<el-menu-item
						index="4"
						class="lg:text-white sm:text-gray-800 md:text-gray-800"
					>
						<el-select
							v-model="language"
							placeholder="Lang"
							size="small"
							class="pill"
							style="
								width: 80px;
								display: flex;
								align-items: center;
								margin: 0 10px;
							"
						>
							<el-option key="Eng" label="Eng" value="Eng" />
						</el-select>
					</el-menu-item>
					<el-menu-item
						index="5"
						class="lg:text-white sm:text-gray-800 md:text-gray-800"
					>
						<el-select
							v-model="currency"
							placeholder="Curr"
							size="small"
							class="pill"
							style="
								width: 80px;
								display: flex;
								align-items: center;
								margin: 0 10px;
							"
						>
							<el-option key="SAR" label="SAR" value="SAR" />
						</el-select>
					</el-menu-item>
					<el-menu-item
						index="6"
						class="lg:text-white sm:text-gray-800 md:text-gray-800"
					>
						<el-dropdown
							trigger="click"
							style="margin: 0 10px"
							cursor="pointer"
						>
							<div class="display-flex items-center">
								<img
									src="@/assets/images/profilePic.png"
									alt="logo"
									style="width: 50px; height: 50px"
									class="mx-1"
								/>
								<span class="text-color">Faisal</span>
							</div>
							<template #dropdown>
								<el-card>
									<el-dropdown-menu>
										<el-dropdown-item
											>My Account</el-dropdown-item
										>
										<el-dropdown-item
											>My Bookings</el-dropdown-item
										>
										<el-dropdown-item
											>Change Password</el-dropdown-item
										>
										<el-dropdown-item
											>Logout</el-dropdown-item
										>
									</el-dropdown-menu>
								</el-card>
							</template>
						</el-dropdown>
					</el-menu-item>
				</div>
			</el-menu>
		</el-header>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			language: null,
			currency: null,
		};
	},
};
</script>
<style scoped>
.text-color {
	color: white;
}
</style>
