<template>
  <div>
    <section class="revealer" ref="industryPlan">
      <div class="img-mask">
        <img src="https://unsplash.it/800/450?image=766" />
      </div>
      <div class="img-mask">
        <img src="https://unsplash.it/800/450?image=1080" />
      </div>
      <div class="overlay">Image Reveal on Scroll</div>
    </section>
    <section style="background-color: navy">More content...</section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import gsap from "gsap";

// const main = ref();
let ctx: any;

const industryPlan = ref();

onMounted(() => {
  initGsap();
});

const initGsap = () => {
  let arr = gsap.utils.toArray<HTMLElement>(".img-mask");
    ctx = gsap.to(arr[1], {
    height: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".revealer",
      start: "top top",
      end: "+=200%",
      scrub: 0.1,
      pin: true,
    },
  });
};

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
body {
  background: black;
}

section {
  position: relative;
  height: 100vh;
  font-size: 50px;
  text-align: center;
  line-height: 100vh;
  color: white;
}

.img-mask {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.img-mask img {
  height: 100vh;
  min-width: 100vw;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
