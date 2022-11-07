<template>
    <el-col :span="12" :md="8" :xs="12" :sm="12" class="text-#42436A px-4 sm:px-0  py-2 flex flex-col justify-center">
			<h1 class="text-7 leading-10">Sign up for weekly Deals*</h1>

			<p class="leading-6 mb-5">
				Subscribe to our newsletter so we can spam you with offers and
				discounts.
			</p>
			<div class="flex">
				<el-input autosize size="large" v-model="data" placeholder="Enter your Email"
					class="drop-shadow-2xl lg:md:w-80 sm:w-100 pr-5" />
					<div  class="btn-shadow" >
				<el-button color="#1CCF3D" class="w-15 py-5 btn-shadow" />
					</div>
			</div>

		</el-col>
		<el-col :span="12" :md="12" class="back-ground relative text-center sm:hidden md:lg:block">
			<div class="w-25 h-25 shadow-style1 z-0" style=" "></div>
			<img src="../../assets/images/homePage/letters.png" relative class="z-3"/>
			<div class="w-30 h-30 shadow-style2 z-0" style=" "></div>
		</el-col>
    </template>
    <style>

    .shadow-style2{
        background-color: pink;
        border-radius: 50%;
        opacity: 70%;
        filter: blur(1.5rem);
        background-color:pink;
        position: absolute;
        right: 27%;
        top: 70%;
    }
    .shadow-style1{
        border-radius: 50%;
        opacity: 50%;
        filter: blur(1.5rem);
        background-color:#FDD500;
        position: absolute;
        left:30%;
        top: 50%;
    }
    .btn-shadow{
        box-shadow: 10px 10px 35px 6px rgba(28,207,61,0.30);
    -webkit-box-shadow: 10px 10px 35px 6px rgba(28,207,61,0.30);
    -moz-box-shadow: 10px 10px 35px 6px rgba(28,207,61,0.30);
    }
    </style>