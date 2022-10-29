<template>
  <el-row>
    <el-col :span="6">
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
          <el-row class="border-b-1 border-#e4e7ed pb-2">
            <el-col :span="12" class="display-flex">
              <el-button
                size="large"
                type="primary"
                class="flex-grow-1 rounded-3"
                >Flight
              </el-button>
            </el-col>
            <el-col :span="12" class="display-flex">
              <el-button size="large" class="flex-grow-1 rounded-3"
                >Hotel
              </el-button>
            </el-col>
          </el-row>

          <el-row>
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

      <el-col :span="24">
        <el-row class="justify-between mb-4">
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">From</span>
            <el-input v-model="cityFrom" placeholder="London" />
          </el-col>
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">To</span>
            <el-input v-model="cityTo" placeholder="Amastardam" />
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
            />
          </el-col>
          <el-col :span="10" class="display-flex flex-col">
            <span class="mb-2">Checkout</span>
            <el-date-picker
              v-model="dateCheckout"
              type="date"
              placeholder="Wed 28 Dec"
              size="default"
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
            />
          </el-col>
          <el-col :span="10" class="display-flex items-end">
            <el-input
              v-model="childrenNumber"
              placeholder="Children"
              type="number"
            />
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="display-flex">
            <el-button size="large" type="success" class="flex-grow-1"
              >Flight
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null,
      cityFrom: null,
      cityTo: null,
      dateCheckin: null,
      dateCheckout: null,
      adultsNumber: null,
      childrenNumber: null,
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
