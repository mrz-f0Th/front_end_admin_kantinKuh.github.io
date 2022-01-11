<template>
  <div class="foodlist">
    <Navbar />
    <div class="main pl-48 pr-20 pt-24 bg-primary min-height-screen">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl">Food List</h1>
        <router-link to="/foodlist/tambah"
          ><span class="rounded-full bg-green-500 p-1 px-2.5 text-white"
            >Tambah+</span
          ></router-link
        >
      </div>
      <div class="flex flex-col mt-5">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Kategori
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Harga
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="prod in produk" :key="prod.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img :src="prod.gambar" alt="gambar" />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ prod.nama }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ prod.kode }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ prod.kategori }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                      >
                        {{ prod.status }}
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ prod.harga }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                        flex
                      "
                    >
                      <router-link
                        :to="'/food/edit/' + prod.id"
                        exact
                        class="
                          text-indigo-600
                          hover:text-indigo-900
                          bg-white
                          mr-5
                        "
                        >Edit</router-link
                      >
                      <div class="cursor-pointer" @click="destroy(prod.id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import repository from "../../api/repository";

export default {
  name: "Foodlist",
  data() {
    return {
      produk: {},
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async destroy(id) {
      try {
        await repository.deleteProduk(id);
        this.$toast.success("Produk terhapus", {
          position: "top-right",
        });
        let { data } = await repository.getProduk();
        this.produk = data.data;
      } catch (err) {
        console.log(err)
        this.$toast.error("Gagal menghapus!", {
          position: "top-right",
        });
      }
    },
  },
  async mounted() {
    try {
      let { data } = await repository.getProduk();
      this.produk = data.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>