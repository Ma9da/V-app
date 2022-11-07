<template>
    	<el-col :span="12" :md="6" :sm="18" :lg="6" :xs="18" class="sm:m-auto lg:md:m-0">
			<el-col :span="24">
				<h1 class="text-#42436A font-adj">Looking For Flights?</h1>
			</el-col>

			<el-col :span="24" class="mb-3">
				<el-card shadow="never" :body-style="{
					padding: '10px',
				}" class="rounded-3">
					<el-row :class="
						isFlights ? 'border-b-1 border-#e4e7ed pb-2' : ''
					">
						<el-col :span="12" class="display-flex">
							<el-button size="large" :type="isFlights ? 'primary' : 'default'"
								class="flex-grow-1 rounded-3 border-none mx-1" @click="isFlights = true">Flight
							</el-button>
						</el-col>
						<el-col :span="12" class="display-flex">
							<el-button size="large" :type="isFlights ? 'default' : 'primary'"
								class="flex-grow-1 rounded-3 border-none mx-1" @click="isFlights = false">Hotel
							</el-button>
						</el-col>
					</el-row>

					<el-row :class="isFlights ? 'block' : 'hidden'">
						<el-col :span="24">
							<el-tabs v-model="activeTab" :stretch="true">
								<el-tab-pane label="One Way" name="first">One Way</el-tab-pane>
								<el-tab-pane label="Round Trip" name="second">Round Trip
								</el-tab-pane>
								<el-tab-pane label="Multicity" name="third">Multicity
								</el-tab-pane>
							</el-tabs>
						</el-col>
					</el-row>
				</el-card>
			</el-col>

			<el-col :span="24" :class="isFlights ? 'block' : 'hidden'">
				<el-row class="justify-between mb-4">
					<el-col :span="10" class="display-flex flex-col">
						<span class="mb-2">From</span>
						<el-input v-model="cityFrom" placeholder="London" class="borderBotOnly" />
					</el-col>
					<el-col :span="10" class="display-flex flex-col">
						<span class="mb-2">To</span>
						<el-input v-model="cityTo" placeholder="Amastardam" class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row class="justify-between mb-4">
					<el-col :span="10" class="display-flex flex-col">
						<span class="mb-2">Checkin</span>
						<el-date-picker v-model="dateCheckin" type="date" placeholder="Wed 28 Nov" size="default"
							class="borderBotOnly" />
					</el-col>
					<el-col :span="10" class="display-flex flex-col">
						<span class="mb-2">Checkout</span>
						<el-date-picker v-model="dateCheckout" type="date" placeholder="Wed 28 Dec" size="default"
							class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row class="justify-between mb-4">
					<el-col :span="10" class="display-flex flex-col">
						<span class="mb-2">Passenger</span>
						<el-input v-model="adultsNumber" placeholder="Adults" type="number" class="borderBotOnly" />
					</el-col>
					<el-col :span="10" class="display-flex items-end">
						<el-input v-model="childrenNumber" placeholder="Children" type="number" class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="24" class="display-flex">
						<el-button size="large" class="flex-grow-1 text-white font-bold bg-#1CCF3D">{{
								isFlights
									? "Search Flights"
									: "Check Availibility"
						}}
						</el-button>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="24" :class="isFlights ? 'hidden' : 'block'">
				<el-row class="justify-between mb-4">
					<el-col :span="24">
						<el-input v-model="destination" placeholder="Select Destination" class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row class="justify-between mb-4">
					<el-col :span="10">
						<el-date-picker v-model="dateCheckin" type="date" placeholder="Wed 28 Nov" size="default"
							class="borderBotOnly" />
					</el-col>
					<el-col :span="10">
						<el-date-picker v-model="dateCheckout" type="date" placeholder="Wed 28 Dec" size="default"
							class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row class="justify-between mb-4">
					<el-col :span="24">
						<el-input v-model="guestsNumAndRoomNum" placeholder="2 Guests, 1 Room" class="borderBotOnly" />
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="24" class="display-flex">
						<el-button size="large" class="flex-grow-1 text-white font-bold bg-#1CCF3D">{{
								isFlights
									? "Search Flights"
									: "Check Availibility"
						}}
						</el-button>
					</el-col>
				</el-row>
			</el-col>
		</el-col>
</template>

<script>
export default {
	data() {
		return {
			url: "../assets/images/homePage/whitePlane.png",
			isFlights: true,
			// flights
			data: "",
			activeTab: null,
			cityFrom: null,
			cityTo: null,
			dateCheckin: null,
			dateCheckout: null,
			adultsNumber: null,
			childrenNumber: null,
			//hotels
			destination: null,
			guestsNumAndRoomNum: null,
		};
	},
};
</script>