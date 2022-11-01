<template>
  <el-row class="mb-10">
    <el-col :span="24" :md="9">
      <el-col :span="24">
        <h1 class="text-#42436A">Looking For Flights?</h1>
      </el-col>

      <el-col :span="24" class="mb-3">
        <el-card
          shadow="never"
          :body-style="{
            padding: '10px',
          }"
          class="rounded-3"
        >
          <el-row :class="isFlights ? 'border-b-1 border-#e4e7ed pb-2' : ''">
            <el-col :span="12" class="display-flex">
              <el-button
                size="large"
                :type="isFlights ? 'primary' : 'default'"
                class="flex-grow-1 rounded-3 border-none mx-1"
                @click="isFlights = true"
                >Flight
              </el-button>
            </el-col>
            <el-col :span="12" class="display-flex">
              <el-button
                size="large"
                :type="isFlights ? 'default' : 'primary'"
                class="flex-grow-1 rounded-3 border-none mx-1"
                @click="isFlights = false"
                >Hotel
              </el-button>
            </el-col>
          </el-row>

          <el-row :class="isFlights ? 'block' : 'hidden'">
            <el-col :span="24">
              <el-tabs v-model="activeTab" :stretch="true">
                <el-tab-pane label="One Way" name="first">One Way</el-tab-pane>
                <el-tab-pane label="Round Trip" name="second"
                  >Round Trip
                </el-tab-pane>
                <el-tab-pane label="Multicity" name="third"
                  >Multicity
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
            <el-input
              v-model="cityFrom"
              placeholder="London"
              class="borderBotOnly"
            />
          </el-col>
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">To</span>
            <el-input
              v-model="cityTo"
              placeholder="Amastardam"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row class="justify-between mb-4">
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">Checkin</span>
            <el-date-picker
              v-model="dateCheckin"
              type="date"
              placeholder="Wed 28 Nov"
              size="default"
              class="borderBotOnly"
            />
          </el-col>
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">Checkout</span>
            <el-date-picker
              v-model="dateCheckout"
              type="date"
              placeholder="Wed 28 Dec"
              size="default"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row class="justify-between mb-4">
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">Passenger</span>
            <el-input
              v-model="adultsNumber"
              placeholder="Adults"
              type="number"
              class="borderBotOnly"
            />
          </el-col>
          <el-col :span="10" class="display-flex items-end">
            <el-input
              v-model="childrenNumber"
              placeholder="Children"
              type="number"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="display-flex">
            <el-button
              size="large"
              class="flex-grow-1 text-white font-bold bg-#1CCF3D"
              >{{ isFlights ? "Search Flights" : "Check Availibility" }}
            </el-button>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="24" :class="isFlights ? 'hidden' : 'block'">
        <el-row class="justify-between mb-4">
          <el-col :span="24">
            <el-input
              v-model="destination"
              placeholder="Select Destination"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row class="justify-between mb-4">
          <el-col :span="10">
            <el-date-picker
              v-model="dateCheckin"
              type="date"
              placeholder="Wed 28 Nov"
              size="default"
              class="borderBotOnly"
            />
          </el-col>
          <el-col :span="10">
            <el-date-picker
              v-model="dateCheckout"
              type="date"
              placeholder="Wed 28 Dec"
              size="default"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row class="justify-between mb-4">
          <el-col :span="24">
            <el-input
              v-model="guestsNumAndRoomNum"
              placeholder="2 Guests, 1 Room"
              class="borderBotOnly"
            />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="display-flex">
            <el-button
              size="large"
              class="flex-grow-1 text-white font-bold bg-#1CCF3D"
              >{{ isFlights ? "Search Flights" : "Check Availibility" }}
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-col>

    <el-col
      :span="24"
      :md="15"
      class="display-flex justify-end items-end hidden-sm-and-down"
    >
      <img src="@/assets/images/landing.png" alt="landing" class="w-96" />
    </el-col>
  </el-row>

  <el-row class="mb-10 items-center justify-center">
    <el-col
      :span="24"
      :sm="12"
      :md="6"
      class="display-flex justify-center items-center py-4"
    >
      <el-card
        class="rounded-3 display-flex justify-center items-center w-fit"
        :body-style="{
          padding: '0',
        }"
      >
        <img src="@/assets/images/deals1.png" alt="deal" class="basis-full" />
        <div class="text-[12px] p-3">
          <span>Winter beach escapes 30% off</span>
          <div
            class="text-#5808D8 mt-2 display-flex items-center justify-between"
          >
            <span>EXPLORE OUR DEALS</span>
            <el-avatar
              :size="20"
              style="background-color: #5808d8"
              class="font-bold"
            >
              ></el-avatar
            >
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col
      :span="24"
      :sm="12"
      :md="6"
      class="display-flex justify-center items-center py-4"
    >
      <el-card
        class="rounded-3 display-flex justify-center items-center w-fit"
        :body-style="{
          padding: '0',
        }"
      >
        <img src="@/assets/images/deals1.png" alt="deal" class="basis-full" />
        <div class="text-[12px] p-3">
          <span>Winter beach escapes 30% off</span>
          <div
            class="text-#5808D8 mt-2 display-flex items-center justify-between"
          >
            <span>EXPLORE OUR DEALS</span>
            <el-avatar
              :size="20"
              style="background-color: #5808d8"
              class="font-bold"
            >
              ></el-avatar
            >
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col
      :span="24"
      :sm="12"
      :md="6"
      class="display-flex justify-center items-center py-4"
    >
      <el-card
        class="rounded-3 display-flex justify-center items-center w-fit"
        :body-style="{
          padding: '0',
        }"
      >
        <img src="@/assets/images/deals1.png" alt="deal" class="basis-full" />
        <div class="text-[12px] p-3">
          <span>Winter beach escapes 30% off</span>
          <div
            class="text-#5808D8 mt-2 display-flex items-center justify-between"
          >
            <span>EXPLORE OUR DEALS</span>
            <el-avatar
              :size="20"
              style="background-color: #5808d8"
              class="font-bold"
            >
              ></el-avatar
            >
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col
      :span="24"
      :sm="12"
      :md="6"
      class="display-flex justify-center items-center py-4"
    >
      <el-card
        class="rounded-3 display-flex justify-center items-center w-fit"
        :body-style="{
          padding: '0',
        }"
      >
        <img src="@/assets/images/deals1.png" alt="deal" class="basis-full" />
        <div class="text-[12px] p-3">
          <span>Winter beach escapes 30% off</span>
          <div
            class="text-#5808D8 mt-2 display-flex items-center justify-between"
          >
            <span>EXPLORE OUR DEALS</span>
            <el-avatar
              :size="20"
              style="background-color: #5808d8"
              class="font-bold"
            >
              ></el-avatar
            >
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row class="mb-10">
    <el-col
      :span="24"
      :md="13"
      class="display-flex justify-center items-end flex-col pr-15"
    >
      <h2 class="text-#FF1E74 w-55 text-center">
        Login to see your free nights
      </h2>
    </el-col>

    <el-col
      :span="24"
      :md="12"
      class="px-4 py-2 display-flex justify- items-center"
    >
      <el-card
        class="display-flex flex-col justify-center items-center rounded-3 w-fit"
        :body-style="{
          padding: '20px',
        }"
      >
        <template #header>
          <h4 class="text-#5808D8 text-center">Happy Trip Loyalty Program</h4>
        </template>

        <el-row class="mb-5">
          <el-col :span="18">
            <el-row class="mb-4" :gutter="50">
              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: #5808d8"
                  class="font-bold"
                >
                  logo
                </el-avatar>
              </el-col>

              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>

              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>

              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>

              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>
            </el-row>

            <el-row :gutter="50">
              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>

              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>
              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>
              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>
              <el-col :span="4">
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: white"
                  class="font-bold text-#B0B1C0 border-2 border-#B0B1C0 border-dotted"
                >
                  logo
                </el-avatar>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="6" class="display-flex items-center">
            <el-row class="items-center">
              <el-col :span="12">
                <span class="text-#5808d8 text-center font-bold text-2xl">
                  =</span
                >
              </el-col>

              <el-col :span="12">
                <div
                  class="bg-#1CCF3D w-11 h-6 rounded-3 text-center text-white text-[10px] font-bold mb-3 display-flex items-center justify-center"
                >
                  FREE
                </div>
                <el-avatar
                  :size="40"
                  shape="square"
                  style="background-color: #5808d8"
                  class="font-bold"
                >
                  logo
                </el-avatar>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row class="text-#5808D8 font-bold">
          <el-col :span="12"> Collect 10 nights </el-col>
          <el-col :span="8" class="text-right"> Get 1 night free </el-col>
          <el-col :span="3" class="text-center"> > </el-col>
        </el-row>
      </el-card>

      <img src="@/assets/images/program.png" class="w-30 pb-80" />
    </el-col>

    <el-col :span="24" :md="12" class="text-#42436A px-4 py-2">
      <h1 class="w-60 border-b-3 border-#5808D8 pb-4 text-7 leading-10">
        Happy Trip Loyality Program
      </h1>

      <p class="leading-6 mb-15">
        As the world's largest student and youth travel company, we've been
        booking affordable adventures for awesome humans since 1979. Experts in
        Round the World flights, tours, accommodation and good vibes - whatever
        your adventure, it starts right here. As the world's largest student and
        youth travel company, we've been booking affordable adventures for
        awesome humans since 1979. Experts in Round the World flights, tours,
        accommodation and good vibes - whatever your adventure, it starts right
        here. As the world's largest student and youth travel company, we've
        been booking affordable adventures for awesome good vibes - whatever
        your adventure, it starts right here.
      </p>

      <el-button size="large" class="bg-#1CCF3D text-white font-bold shadow-xl">
        Explore More</el-button
      >
    </el-col>
  </el-row>

  <el-row
    class="mb-20 text-white py-60 bg-gradient-to-r from-#8612EA to-#4406D1"
  >
    <el-col :span="24" :md="12">
      <h2>Get the Happy Trip App !</h2>
      <p class="w-80 leading-6">
        Looking to manage your flight and hotel needs efficiently? BlazeBe does
        exactly that for you in a few simple taps with artistic user interface
        and secure payment channels.
      </p>
      <el-button class="bg-transparent text-white">Get the app </el-button>
    </el-col>

    <el-col :span="24" :md="12" class="relative">
      <img
        src="@/assets/images/getAppDevice1.png"
        alt=""
        class="absolute -top-1/4 right-2/4"
      />
      <img
        src="@/assets/images/getAppDevice2.png"
        alt=""
        class="absolute absolute -top-4/4 left-1/4"
      />
    </el-col>

    <img
      src="@/assets/images/getApp.png"
      alt=""
      class="w-40 absolute bottom-0 left-0"
    />
  </el-row>

  <el-row class="mb-10">
    <el-col :span="24" :md="12">
      <el-row>
        <el-col :span="24" class="mb-10">
          <el-card
            class="rounded-l-0 rounded-r-3 border-l-3 border-l-#FDD500 relative overflow-visible w-96"
            :body-style="{
              padding: '10px 10px 10px 20px',
            }"
          >
            <div
              class="rounded-full p-3 border-1 border-#FDD500 w-fit absolute -top-1/4 right-1/10"
            >
              <el-avatar
                :size="40"
                style="background-color: #fdd500"
                class="font-bold"
              >
                star
              </el-avatar>
            </div>

            <h4 class="text-[14px] text-#FDD500">
              Superior Booking Experience
            </h4>

            <p class="text-[14px]">
              Ease of booking, fantastic products and competitive pricing makes
              the booking experience amazing
            </p>
          </el-card>
        </el-col>

        <el-col :span="24" class="mb-10 ml-30">
          <el-card
            class="rounded-l-0 rounded-r-3 border-l-3 border-l-#00D8FD relative overflow-visible w-96"
            :body-style="{
              padding: '10px 10px 10px 20px',
            }"
          >
            <div
              class="rounded-full p-3 border-1 border-#00D8FD w-fit absolute -top-1/4 right-1/10"
            >
              <el-avatar
                :size="40"
                style="background-color: #00d8fd"
                class="font-bold"
              >
                phone
              </el-avatar>
            </div>

            <h4 class="text-[14px] text-#00D8FD">
              Superior Booking Experience
            </h4>

            <p class="text-[14px]">
              Ease of booking, fantastic products and competitive pricing makes
              the booking experience amazing
            </p>
          </el-card>
        </el-col>

        <el-col :span="24" class="mb-10">
          <el-card
            class="rounded-l-0 rounded-r-3 border-l-3 border-l-#FF1E74 relative overflow-visible w-96"
            :body-style="{
              padding: '10px 10px 10px 20px',
            }"
          >
            <div
              class="rounded-full p-3 border-1 border-#FF1E74 w-fit absolute -top-1/4 right-1/10"
            >
              <el-avatar
                :size="40"
                style="background-color: #ff1e74"
                class="font-bold"
              >
                smile
              </el-avatar>
            </div>

            <h4 class="text-[14px] text-#FF1E74">
              Superior Booking Experience
            </h4>

            <p class="text-[14px]">
              Ease of booking, fantastic products and competitive pricing makes
              the booking experience amazing
            </p>
          </el-card>
        </el-col>
      </el-row>
    </el-col>

    <el-col
      :span="24"
      :md="12"
      class="text-#42436A px-4 py-2 flex flex-col justify-center"
    >
      <h1 class="text-7 leading-10">Why work with us?</h1>

      <p class="leading-6 mb-15">
        You are unique, and so is your trip. When you book with Liberty Travel,
        we match you with an expert best suited to design a vacation just for
        you.
      </p>
    </el-col>
  </el-row>

  <el-row class="mb-10">
    <el-col
      :span="24"
      :md="12"
      class="text-#42436A px-4 py-2 flex flex-col justify-center"
    >
      <h1 class="text-7 leading-10">Sign up for weekly deals*</h1>

      <p class="leading-6 mb-15">
        Subscribe to our newsletter so we can spam you with offers and
        discounts.
      </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      isFlights: true,

      // flights
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

<style scoped>
/* .background {
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(@/assets/images/background.png);
  background-size: cover;
  background-color: #1f2021;
  min-height: 100vh;
  z-index: 100;
} */
</style>
