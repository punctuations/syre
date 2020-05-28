<template>
  <div class="bg h-screen">
    <div
      v-show="chosen === null"
      class="text-white uppercase flex flex-col my-auto justify-center items-center h-screen"
    >
      <div class="font-extrabold text-4xl">Choose</div>
      <div class="flex font-bold">
        <button class="border-2 px-2 mx-2" @click="chosen = 0">A</button>
        <button class="border-2 px-2 mx-2" @click="chosen = 1">B</button>
        <button class="border-2 px-2 mx-2" @click="chosen = 2">C</button>
      </div>
    </div>
    <div
      v-show="chosen !== null"
      class="h-screen flex items-center justify-center"
    >
      <div class="w-4/6">
        <div class="m-auto rounded-lg">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
          >
            <iframe
              v-show="chosen === 0"
              height="500"
              class="w-full m-auto rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/Fof9lHaApXc?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
            />
          </transition>
        </div>

        <div class="container m-auto rounded-lg">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
          >
            <iframe
              v-show="chosen === 1"
              height="500"
              class="w-full m-auto rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/huRFB-urWAc?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
            />
          </transition>
        </div>
        <div class="container m-auto rounded-lg">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
          >
            <iframe
              v-show="chosen === 2"
              height="500"
              class="w-full m-auto rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/5mm163wWKL8?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosen: null,
    };
  },
  metaInfo() {
    return {
      title: `SYRE`,
      meta: [
        {
          vmid: "og:description",
          name: "og:description",
          content:
            "SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE",
        },
        {
          vmid: "og:title",
          property: "og:title",
          content: `SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE SYRE`,
        },
        {
          vmid: "og:image",
          property: "og:image",
          content:
            "https://upload.wikimedia.org/wikipedia/en/f/f8/SyreJadenSmith.jpg",
        },
        {
          vmid: "twitter:image",
          property: "twitter:image",
          content:
            "https://upload.wikimedia.org/wikipedia/en/f/f8/SyreJadenSmith.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("https://images.unsplash.com/photo-1524076893754-bf3bc11d133e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80");
  background-size: cover;
}
</style>
