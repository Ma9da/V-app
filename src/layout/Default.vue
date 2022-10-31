<template>
  <el-container class="container mx-auto px-20">
    <el-header>
      <the-header />
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
    <el-footer>
      <the-footer />
    </el-footer>
  </el-container>
</template>
