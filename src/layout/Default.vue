<template>
  <el-container class="container">
    <el-header >
      <the-header />
    </el-header>
    <el-main class="mx-auto px-20">
      <slot></slot>
    </el-main>
    <el-footer>
      <the-footer />
    </el-footer>
  </el-container>
</template>
