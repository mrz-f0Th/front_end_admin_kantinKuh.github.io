<template>
  <div class="home bg-primary min-h-screen">
    <Navbar />
    <div class="ml-36 pt-14 mr-12">
      <div class="flex overflow-hidden items-center">
        <img
          class="inline-block h-11 w-11 rounded-full ring-2 ring-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <h1 class="text-3xl ml-4 font-light">Welcome rakunTua!</h1>
      </div>
      <div class="grid grid-cols-2 gap-8 my-10">
        <h1 class="col-span-2 text-2xl">Stats & Analytics</h1>
        <div id="card" class="flex justify-between col-span-1">
          <div class="w-36 h-60 bg-white rounded-xl shadow-xl pt-7 px-5">
            <div
              class="
                h-10
                w-10
                bg-indigo-500
                rounded-xl
                mb-10
                flex
                justify-center
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <p class="text-sm my-2">Lorem ipsum</p>
            <h1 class="text-2xl flex items-center">
              3.42K
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-green-500 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            </h1>
            <p class="text-sm my-2">-4.25%</p>
          </div>
          <div class="w-36 h-60 bg-white rounded-xl shadow-xl pt-7 px-5">
            <div
              class="
                h-10
                w-10
                bg-pink-500
                rounded-xl
                mb-10
                flex
                justify-center
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <p class="text-sm my-2">Lorem ipsum</p>
            <h1 class="text-2xl flex items-center">
              1.5K
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-red-500 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </h1>
            <p class="text-sm my-2">-7.5%</p>
          </div>
          <div class="w-36 h-60 bg-white rounded-xl shadow-xl pt-7 px-5">
            <div
              class="
                h-10
                w-10
                bg-green-500
                rounded-xl
                mb-10
                flex
                justify-center
                items-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            </div>
            <p class="text-sm my-2">Lorem ipsum</p>
            <h1 class="text-2xl flex items-center">
              2.23K
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-red-500 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </h1>
            <p class="text-sm my-2">+6.5%</p>
          </div>
        </div>
        <div class="small col-span-1 ml-10">
          <h1 class="text-xl">Lorem Ipsum dolor</h1>
          <line-chart :width="220" :height="220"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import LineChart from "@/components/Chart.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    LineChart,
  },
};
</script>
