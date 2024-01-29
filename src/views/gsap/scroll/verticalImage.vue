<template>
  <div class="container">
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
import { onMounted, ref, onUnmounted, watch } from "vue";
import gsap from "gsap";

import { useTransitionComposable } from "@/composables/transition-composable";

const { transitionState } = useTransitionComposable();
// const main = ref();
let ctx: any;

const industryPlan = ref();
const umxBlue = ref();


onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

watch(
  [() => transitionState.transitionComplete, industryPlan],
  (newValue) => {
    if (newValue && industryPlan.value) {
      ctx = gsap.context((self: any) => {
        console.log(self);
        const masks = self.selector(".img-mask");
        console.log(masks[1]);

        gsap.to(masks[1], {
          height: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: ".revealer",
            start: "top top",
            pin: true,
            end: "+=100%",
            scrub: 0.5,
          },
        });
        // boxes.forEach((box: any) => {
        //   gsap.from(box, {
        //     scrollTrigger: {
        //       trigger: box,
        //       start: "bottom bottom",
        //       end: "top 50%",
        //       // scrub: true,
        //     },
        //     // opacity:0.2,
        //     // scale: 0.8,
        //     duration: 2,
        //     delay: 1,
        //     opacity: 0,
        //     y: 100,
        //   });
        // });
      }, industryPlan.value); // <- Scope!
    }
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
body {
  background: black;
  color: white;
}

section {
  position: relative;
  height: 100vh;
  font-size: 50px;
  text-align: center;
  line-height: 100vh;
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
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
