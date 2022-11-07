<template>
  <el-row >
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col :span="24" style="font-weight: bold; color: black"
          class="mb-3">CONTACT</el-col
        >
        <el-col :span="24">
          <img src="../../../logo.png" alt="logo" />
        </el-col>
        <el-col :span="24" class="my-0 bb-0"><p class="text-gray-600 font-extrabold mb-0 mt-5">1234 567 890</p></el-col>
        <el-col :span="24"><p class="text-gray-600 font-extrabold">happytrip@sales.com</p> </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          class="text-gray-900 font-bold mb-5"
          >USEFUL LINKS</el-col
        >
        <el-col :span="24" class="text-gray-500 mb-4">Home</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Flights</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Hotels</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Deals</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Discounts</el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          class="text-gray-900 font-bold mb-5"
          >SOCIAL</el-col
        >
        <el-col :span="24" class="text-gray-500 mb-4">Facebook</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Twitter</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Instagram</el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          class="text-gray-900 font-bold mb-5"
          >OTHER INFO</el-col
        >
        <el-col :span="24" class="text-gray-500 mb-4">About</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Contact</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Help</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Sitemap</el-col>
        <el-col :span="24" class="text-gray-500 mb-4">Mediakit</el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="15" style="color: black" class="mt-20 mb-5">
      &copy; 2019 Happytrip. Designed by ramony
    </el-col>
    <el-col :span="5" style="color: black">
      <el-select
        v-model="language"
        placeholder="Language"
        size="small"
        style="width: 100px"
      >
        <el-option key="English UK" label="English UK" value="English UK" />
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-avatar :size="50" style="background-color: #ff1e74"> ?</el-avatar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      language: null,
    };
  },
};
</script>

<style scoped>
.el-col {
  /* margin-bottom: 10px; */
  /* color: #b0b1c0; */
  font-size: 13px;
}
</style>
