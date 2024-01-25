<!-- <template>
  <div class="box">
    <div class="phone-bg" ref="main">
      <div
        class="phone-box"
        v-for="(item, index) in phoneData"
        :key="index"
        :class="index == 0 ? 'active' : ''"
      >
        <div class="phone-text">
          <div class="phone-label">{{ item.label }}</div>
          <div class="phone-label">{{ item.desc }}</div>
        </div>
        <div class="image-box">
          <div class="phone-img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ScrollChangePhoneColor">
import { ref, onMounted } from "vue";
import gsap from "gsap";

import { useTransitionComposable } from "@/composables/transition-composable";
let phoneData = [
  {
    label: "橙",
    desc: "大胆和前卫的姿态",
  },
  {
    label: "蓝",
    desc: "挑战和突破的精神",
  },
  {
    label: "黑",
    desc: "简洁跳动的语言",
  },
];

// const getImgUrl = (index: number) => {
//   return new URL(
//     `.@/assets/.@/assets/.@/assets/assets/images/gsap/iqooneo7-color${index + 1}.png`,
//     import.meta.url
//   ).href;
// };

const main = ref();

const { transitionState } = useTransitionComposable();
onMounted(() => {
  gsap.to(".box", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".box",
      start: "top top",
      end: "240%", // 向下滚动 240% 距离时结束
      scrub: true, // 表示动画可以重复执行改成false表示只执行一次
  
      pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
    },
  });
});

watch(
  [() => transitionState.transitionComplete, main],
  (newValue) => {
    if (newValue && main.value) {
      gsap.context((self: any) => {
        const boxes = self.selector(".phone-box");
        console.log(boxes);
        boxes.forEach((box: any) => {
          gsap.to(box, {
            height: "100%",
            ease: "expo-out",
          
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,
            },
          });
        });
      }, main.value);
    }
  },
  { immediate: true }
);

</script>

<style scope lang="scss">
.box {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100vh;
}

.phone-bg {
  width: 461px;
  margin: 0;
  height: 100vh;
  min-height: 750px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.phone-box {
  top: 100px;
  position: absolute;
  width: 100%;
  height: 0;
  bottom: 0;
  display: block;
  overflow: hidden;

  .image-box {
    position: absolute;
    bottom: 0;
    height: 100vh;
    min-height: 750px;
    display: flex;
    align-items: center;
  }

  &:first-child {
    height: 100%;
  }
}

.phone-bg .phone-box:nth-child(1) .phone-img {
  background-image: url(@/assets/images/gsap/iqooneo7-color2.png);
}

.phone-bg  .phone-box:nth-child(2) .phone-bg {
  background-image: url(@/assets/images/gsap/iqooneo7-color3.png);
}

.phone-bg  .phone-box:nth-child(3) .phone-bg {
  background-image: url(@/assets/images/gsap/iqooneo7-color1.png);
}
.phone-img {
  margin: 0; 
  background-size: 461px 605px;
  background-position: center;
  background-repeat: no-repeat;
  width: 461px;
  height: 605px;
}
</style> -->

<template>
  <div class="containerX" ref="containerX">
    <!-- 3张手机图片叠加 -->
    <div class="umx-figure">
      <div class="f-mask umx-orange" style="overflow: hidden; height: 100%">
        <div class="f-box">
          <figure
            class="umx-img umx-f1"
            style="transform: translate(0px, 0px)"
          ></figure>
        </div>
      </div>
      <div
        class="f-mask umx-blue"
        ref="umxBlue"
        style=""
      >
        <div class="f-box">
          <figure class="umx-img umx-f2"></figure>
        </div>
      </div>
      <div
        class="f-mask umx-black"
        style="display: block; overflow: hidden; height: 0%"
      >
        <div class="f-box">
          <figure class="umx-img umx-f3"></figure>
        </div>
      </div>
    </div>
    <!-- 三个背景叠加 -->
    <div class="mask-box">
      <div class="color-bg orange-bg active" style="height: 100%">
        <div class="color-txt" style="transform: translate(-50%, 0%)">
          <strong>橙</strong>
          <p>大胆和前卫<br />的姿态</p>
        </div>
      </div>

      <div class="color-bg blue-bg" style="height: 0%">
        <div class="color-txt" style="transform: translate(-50%, 0%)">
          <strong>蓝</strong>
          <p>挑战和突破<br />的精神</p>
        </div>
      </div>
      <div class="color-bg black-bg" style="height: 0px">
        <div class="color-txt" style="transform: translate(-50%, 0%)">
          <strong>黑</strong>
          <p>简洁跳动<br />的语言</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

const containerX = ref();
const umxBlue = ref();

onMounted(() => {
  // gsapSet();
  gsap
    .to(".containerX", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".containerX",
        start: "top top",
        end: "280%", // 向下滚动 240% 距离时结束
        scrub: true, // 表示动画可以重复执行改成false表示只执行一次
        markers: true, //  绘制开始位置和结束位置的线条
        pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
      },
      onStart: () => {
        console.log("动画开始0");
      },
    })
    .then(() => {
      console.log("111");
    });
});

// 第一次动画，橙/蓝颜色切换
// 蓝色手机覆盖橙色手机，触发实际，.umx-blue  进入 viewport
gsap.to(umxBlue.value, {
  height:"100%",
  ease: "expo-out",
  scrollTrigger: {
    trigger: umxBlue.value,
    scrub: true,
    markers: true,
  },
  onStart: () => {
    console.log("动画开始blue_text");
  },
});
gsap.to(".blue-bg", {
  height: "100%",
  ease: "expo-out",
  scrollTrigger: {
    trigger: ".blue-bg",
    scrub: true,
    // start: "top top",
    // end: "+600",
    //   markers: true,
  },
  onStart: () => {
    console.log("动画开始blue_bg");
  },
  onUpdate:()=>{
    console.log("blue更新中")
  }
});

// 第二次动画，黑/蓝手机切换
// 等 blue 蓝色手机动画结束后，其 top 到达 viewport 视窗顶部时，触发下次动画
gsap.to(".umx-black", {
  height: "100%",
  scrollTrigger: {
    trigger: ".blue-bg",
    start: "top top",
    end: "+1200",
    scrub: true,
    //   markers: true,
  },
  onStart: () => {
    console.log("动画开始 black_text");
  },
});
gsap.to(".black-bg", {
  height: "100%",
  scrollTrigger: {
    trigger: ".blue-bg",
    start: "top top",
    end: "+1200",
    scrub: true,
    //   markers: true,
  },
  onStart: () => {
    console.log("动画开始 black_bgF");
  },
});
</script>

<style scoped>
.containerX {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100vh;
}

/* transform: translate(695px, 575px) scale(2.5, 2.5); */
/* 层级3： 图片 */
.umx-img {
  margin: 0; /* 去除默认 margin */
  background-size: 461px 605px;
  background-position: center;
  background-repeat: no-repeat;
  width: 461px;
  height: 605px;
}
/* 层级2：包裹高度 100vh */
.f-box {
  position: absolute;
  bottom: 0;
  height: 100vh;
  min-height: 750px;
  display: flex;
  align-items: center;
}
/* 层级1：滚动时，改变高度百分比实现颜色切换 */
.f-mask {
  position: absolute;
  width: 100%;
  height: 0;
  bottom: 0;
}

.umx-blue{
  display: block; overflow: hidden; height: 0%
}
/* 层级0:  固定图片在中间 */
.umx-figure {
  width: 461px;
  margin: 0;
  height: 100vh;
  min-height: 750px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.umx-img.umx-f1 {
  background-image: url(@/assets/images/gsap/iqooneo7-color1.png);
}
.umx-img.umx-f2 {
  background-image: url(@/assets/images/gsap/iqooneo7-color2.png);
}
.umx-img.umx-f3 {
  background-image: url(@/assets/images/gsap/iqooneo7-color3.png);
}

.color-bg {
  position: absolute;
  width: 100%;
  height: 0;
  bottom: 0;
  overflow: hidden;
}
.color-bg.orange-bg {
  background-color: #ffeee8;
}
.color-bg.blue-bg {
  background-color: #effbfc;
}
.color-bg.black-bg {
  background-color: #dae1e7;
}
.mask-box {
  position: absolute;
  width: 50%;
  height: 100vh;
  min-height: 750px;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.color-txt {
  width: 230px;
  height: 100vh;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}
.color-txt strong {
  font-size: 84px;
}
.color-txt p {
  font-size: 34px;
}
.orange-bg strong {
  color: #f6683a;
}
.orange-bg p {
  color: #fdbfab;
}
.blue-bg strong {
  color: #38bec1;
}
.blue-bg p {
  color: #a5e2e4;
}
.black-bg strong {
  color: #182130;
}
.black-bg p {
  color: #94aab8;
}
</style>
