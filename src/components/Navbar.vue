<template>
  <div
    class="
      fixed
      navbar
      flex flex-col
      w-20
      h-screen
      bg-white
      items-center
      justify-between
      py-6
    "
  >
    <img src="../assets/img/kantinKuh.png" alt="kantinKuh" class="w-9" />

    <!-- anchor -->
    <div class="w-full h-1/3 flex flex-col justify-between -mt-40 py-3">
      <router-link
        to="/home-admin"
        class="w-full flex justify-center py-1.5"
        exact
      >
        <svg
          width="24"
          height="24"
          class="mr-1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="8" height="8" rx="3" fill="#10B981" />
          <rect x="3" y="13" width="8" height="8" rx="3" fill="#10B981" />
          <rect x="13" y="3" width="8" height="8" rx="3" fill="#BCBCBC" />
          <rect x="13" y="13" width="8" height="8" rx="3" fill="#10B981" />
        </svg>
      </router-link>
      <router-link
        to="/foodlist-tambah"
        class="w-full flex justify-center py-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </router-link>
      <router-link to="/foodlist" class="w-full flex justify-center py-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </router-link>
    </div>

    <!-- logout icons -->
    <svg
      @click="logout"
      v-if="!loading"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-opacity-50 text-black cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
    <button
      v-else
      type="button"
      class="
        w-full
        inline-flex
        items-center
        justify-center
        border border-transparent
        text-base
        leading-6
        font-medium
        transition
        ease-in-out
        duration-150
        cursor-not-allowed
      "
      disabled=""
    >
      <svg
        class="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async logout() {
      this.loading = true;

      try {
        await this.$store.dispatch("logout");
        // notification
        this.$toast.success("Logout sukses!", {
          position: "top-right",
        });
        // redirect
        await this.$router.push({ name: "Login" });
      } catch (error) {
        this.error = error;
        console.log(error);
        // notification
        this.$toast.error("Logout gagal!", {
          position: "top-right",
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>

