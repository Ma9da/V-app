<template>
  <el-row>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col :span="24" style="font-weight: bold; color: black"
          >CONTACT</el-col
        >
        <el-col :span="24">
          <img src="../../../logo.png" alt="logo" />
        </el-col>
        <el-col :span="24">1234 567 890</el-col>
        <el-col :span="24">happytrip@sales.com</el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          style="font-weight: bold; color: black; margin-bottom: 25px"
          >USEFUL LINKS</el-col
        >
        <el-col :span="24">Home</el-col>
        <el-col :span="24">Flights</el-col>
        <el-col :span="24">Hotels</el-col>
        <el-col :span="24">Deals</el-col>
        <el-col :span="24">Discounts</el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          style="font-weight: bold; color: black; margin-bottom: 25px"
          >SOCIAL</el-col
        >
        <el-col :span="24">Facebook</el-col>
        <el-col :span="24">Twitter</el-col>
        <el-col :span="24">Instagram</el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :sm="12" :md="6">
      <el-row>
        <el-col
          :span="24"
          style="font-weight: bold; color: black; margin-bottom: 25px"
          >OTHER INFO</el-col
        >
        <el-col :span="24">About</el-col>
        <el-col :span="24">Contact</el-col>
        <el-col :span="24">Help</el-col>
        <el-col :span="24">Sitemap</el-col>
        <el-col :span="24">Mediakit</el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="15" style="color: black">
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
  margin-bottom: 10px;
  color: #b0b1c0;
  font-size: 13px;
}
</style>
