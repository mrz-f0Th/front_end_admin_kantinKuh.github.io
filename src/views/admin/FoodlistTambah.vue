<template>
  <div>
    <Navbar />
    <div class="pl-48 pt-10 pr-24 bg-primary min-h-screen">
      <div class="mt-5 md:mt-10 md:col-span-2">
        <form
          action="#"
          method="POST"
          v-on:submit.prevent
          enctype="multipart/form-data"
        >
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nama</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="
                      py-2
                      px-3
                      mt-1
                      focus:ring-2
                      focus:ring-green-500
                      focus:border-green-500
                      focus:outline-none
                      focus:ring-opacity-40
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300 border
                      rounded-md
                    "
                    v-model="produk.nama"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Harga</label
                  >
                  <input
                    v-model="produk.harga"
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="
                      py-2
                      px-3
                      mt-1
                      focus:ring-2
                      focus:ring-green-500
                      focus:border-green-500
                      focus:outline-none
                      focus:ring-opacity-40
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300 border
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Kode</label
                  >
                  <input
                    v-model="produk.kode"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="
                      py-2
                      px-3
                      mt-1
                      inline-block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300 border
                      rounded-md
                      focus:ring-2
                      focus:ring-green-500
                      focus:border-green-500
                      focus:outline-none
                      focus:ring-opacity-40
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Status</label
                  >
                  <select
                    v-model="produk.status"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:ring-2
                      focus:ring-green-500
                      focus:border-green-500
                      focus:outline-none
                      focus:ring-opacity-40
                      sm:text-sm
                    "
                  >
                    <option value="ada">Ada</option>
                    <option value="habis">Habis</option>
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-1">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Kategori</label
                  >
                  <select
                    v-model="produk.kategori"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:ring-2
                      focus:ring-green-500
                      focus:border-green-500
                      focus:outline-none
                      focus:ring-opacity-40
                      sm:text-sm
                    "
                  >
                    <option value="snack">Snacks</option>
                    <option value="food">Foods</option>
                    <option value="drink">Drinks</option>
                  </select>
                </div>
              </div>
              <label class="block text-sm font-medium text-gray-700 mt-10"
                >Gambar</label
              >
              <div
                class="
                  mt-1
                  flex
                  justify-center
                  px-6
                  pt-5
                  pb-6
                  border-2 border-gray-300 border-dashed
                  rounded-md
                "
              >
                <div v-if="!image" class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="
                        relative
                        cursor-pointer
                        bg-white
                        rounded-md
                        font-medium
                        text-green-600
                        hover:text-green-500
                        focus-within:outline-none
                        focus-within:ring-2
                        focus-within:ring-offset-2
                        focus-within:ring-green-500
                      "
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        ref="file"
                        v-on:change="getImage()"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                <img
                  v-else
                  :src="preview"
                  alt="imagePreview"
                  class=""
                  width="400"
                />
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                @click.prevent="tambahData()"
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-green-600
                  hover:bg-green-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-green-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import repository from "../../api/repository";

export default {
  name: "FoodlistTambah",
  data() {
    return {
      image: "",
      preview: "",
      produk: {},
      error: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    getImage() {
      this.image = event.target.files[0];
      this.preview = URL.createObjectURL(event.target.files[0]);
    },
    async tambahData() {
      const formData = new FormData();
      formData.append("kode", this.produk.kode);
      formData.append("nama", this.produk.nama);
      formData.append("harga", this.produk.harga);
      formData.append("status", this.produk.status);
      formData.append("kategori", this.produk.kategori);
      formData.append("gambar", this.image);

      try {
        await repository.postProduk(formData);
        // this.$toast.success("Login sukses!", {
        //   position: "top-right",
        // });
        // console.log(data);
        await this.$router.push({ name: "Foodlist" });
      } catch (error) {
        console.log("masuk catch");
        this.error = error;
      }
      // axios
      //   .post("http://localhost:8000/api/produk", formData, {
      //     headers: {
      //       "Content-Type":
      //         "multipart/form-data; charset=utf-8; boundary=" +
      //         Math.random().toString().substr(2),
      //     },
      //   })
      //   .then((ress) => {
      //     console.log(ress);
      //     this.image = ress.data.data;
      //     this.preview = null;
      //     this.$refs.file.value = null;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     console.log(formData);
      //     console.log(this.image);
      //   });
    },
  },
};
</script>

<style>
</style>