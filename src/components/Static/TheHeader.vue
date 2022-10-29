<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    background-color="#FFFFFF00"
  >
    <span><img src="../../../public/logo.png" alt="logo" /></span>
    <div class="flex-grow" />
    <el-menu-item index="1"> Home</el-menu-item>
    <el-menu-item index="2">Flights</el-menu-item>
    <el-menu-item index="3">Hotels</el-menu-item>

    <el-select
      v-model="language"
      placeholder="Lang"
      size="small"
      style="width: 80px; display: flex; align-items: center; margin: 0 10px"
    >
      <el-option key="Eng" label="Eng" value="Eng" />
    </el-select>

    <el-select
      v-model="currency"
      placeholder="Curr"
      size="small"
      style="width: 80px; display: flex; align-items: center; margin: 0 10px"
    >
      <el-option key="SAR" label="SAR" value="SAR" />
    </el-select>

    <el-dropdown trigger="click" style="margin: 0 10px" cursor="pointer">
      <span
        ><img
          src="../../../public/logo.png"
          alt="logo"
          style="
            width: 40px;
            height: 40px;
            border: 3px solid #5808d8;
            border-radius: 50%;
          "
      /></span>
      <template #dropdown>
        <el-card>
          <el-dropdown-menu>
            <el-dropdown-item>My Account</el-dropdown-item>
            <el-dropdown-item>My Bookings</el-dropdown-item>
            <el-dropdown-item>Change Password</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-card>
      </template>
    </el-dropdown>
  </el-menu>
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
.flex-grow {
  flex-grow: 1;
}
</style>
