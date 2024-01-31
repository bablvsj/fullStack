<template>
  <div class="scroller">
    <div class="demo-box">
      <!-- 第一區塊 -->
      <div class="first-block">
        <!-- 上跑馬燈 -->
        <ul class="newsTicker">
          <li>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
          </li>
        </ul>
        <!-- 下跑馬燈 -->
        <ul class="absolute bottom-0 newsTicker2">
          <li>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
            <span class="inline-block">
              GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING
            </span>
          </li>
        </ul>

        <!-- 左文右圖 -->
        <div class="center">
          <div class="col-span-1">
            <h2
              class="font-bold splitText overflow-hidden first-text-art splitText"
            >
              AR T
            </h2>
            <p class="first-text splitText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              numquam assumenda sed eligendi odio eveniet culpa voluptas dolorem
              doloremque. Ratione.

              <!-- <span ></span> -->
            </p>
          </div>
          <div class="col-span-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              class="max-w-300px firstImg opacity-0 scale-0"
            />
          </div>
        </div>
      </div>
      <!-- 第二區塊 -->
      <div class="w-full relative scaleContainer">
        <div class="scaleCircle">
          <div class="scaleCircle2"></div>
          <p class="scaleText">Go</p>
        </div>
      </div>

      <!-- 第三區塊 -->
      <div class="w-full relative fadeContainer">
        <div class="fadeText fadeText1">
          <p>GSAP</p>
        </div>
        <div class="fadeText fadeText2">
          <p>IS</p>
        </div>
        <div class="fadeText fadeText3">
          <p>AWESOME</p>
        </div>
      </div>

      <!-- 第四區塊 -->
      <div
        class="min-h-screen bg-black mt-300px px-[5%] overflow-x-hidden mx-auto pt-300px"
      >
        <div class="fade-img-box">
          <img
            src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
          <img
            src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="w-full mt-50px fadeImg opacity-0"
          />
        </div>
      </div>

      <!-- 第五區塊 -->
      <div class="horizonContainer">
        <div
          class="w-full h-full flex items-center justify-center flex-none horizon__item"
        >
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
            alt=""
            class="w-300px object-contain"
          />
        </div>
        <div
          class="w-full h-full flex items-center justify-center flex-none horizon__item"
        >
          <img
            src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
            alt=""
            class="w-300px object-contain"
          />
        </div>
        <div
          class="w-full h-full flex items-center justify-center flex-none horizon__item"
        >
          <img
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            class="w-300px object-contain"
          />
        </div>
        <div
          class="w-full h-full flex items-center justify-center flex-none horizon__item"
        >
          <img
            src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            alt=""
            class="w-300px object-contain"
          />
        </div>
        <div
          class="w-full h-full flex items-center justify-center flex-none horizon__item"
        >
          <img
            src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            class="w-300px object-contain"
          />
        </div>
      </div>

      <!-- 第六區塊 -->
      <div
        class="w-full h-screen fadeVideoContainer bg-black"
        style="margin-top: 100px"
      >
        <video
          loop="true"
          playsinline="true"
          webkit-playsinline="true"
          class="w-full h-full object-cover op0"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-profile-of-a-distressed-young-woman-8736-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <!-- 第七區塊 -->
      <div class="w-full h-100px flex justify-center items-center bg-black">
        <p @click="backTop()" class="text-white cursor-pointer">Back</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SplitType from "split-type";
import { onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const backTop = () => {
  gsap.to(window, { duration: 3, scrollTo: 0, ease: "power3.out" });
};

const newsTicker = () => {
  gsap.to(".newsTicker", {
    xPercent: "-50",
    position: "absolute",
    ease: "none",
    duration: 25,
    repeat: -1,
  });
  gsap.to(".newsTicker2", {
    xPercent: "50",
    position: "absolute",
    ease: "none",
    duration: 25,
    repeat: -1,
  });
  const text = new SplitType(".splitText", { types: "words, chars" });

  gsap.from(text.chars, {
    opacity: 0,
    // y: 10,
    ease: "power4.out",
    duration: 1,
    delay: 0,
    stagger: { amount: 0.7 },
  });
  gsap.to(".firstImg", {
    opacity: 0.5,
    scale: "1",
    duration: 1,
    ease: "power4.out",
    delay: 0.7,
  });
};

const scaleAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scaleContainer",
      start: "top center",
      end: "+=3000px",
      pin: true,
      scrub: true,
      // markers:true
    },
  });

  tl.to(".scaleCircle", {
    scale: "50",
    duration: 1,
  })
    .to(
      ".scaleText",
      {
        opacity: "0",
        duration: 1,
      },
      "<"
    )
    .to(".scaleCircle2", {
      opacity: 1,
      scale: 5,
      duration: 1,
    })
    .to(
      ".scaleCircle",
      {
        display: "none",
      },
      "<"
    );
};

const fadeAnimation = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".fadeContainer",
      start: "top center",
      end: "+=5000px",
      pin: true,
      scrub: true,
    },
  });
  tl2
    .to(".fadeText1", {
      opacity: "1",
      duration: 1,
    })
    .to(".fadeText1", {
      y: "-100px",
      opacity: 0,
      duration: 1,
    })
    .to(".fadeText2 ", {
      opacity: 1,
      duration: 1,
    })
    .to(".fadeText2", {
      y: "-100px",
      opacity: 0,
      duration: 1,
    })
    .to(".fadeText3 ", {
      opacity: 1,
      duration: 1,
    });
};

const fadeImgAnimation = () => {
  gsap.utils.toArray(".fadeImg").forEach((item: any) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
    tl.to(item, {
      ease: "expo",
      y: "-100px",
      opacity: "1",
      duration: 1.5,
    });
  });
};

const horizonScroll = () => {
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizonContainer",
      start: "top top",
      end: "+=3000px",
      pin: true,
      scrub: true,
    },
  });
  tl3.to(".horizon__item", {
    xPercent: "-400",
    duration: 1,
  });
};
const fadeVideo = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fadeVideoContainer",
      start: "top center",
    },
  });
  tl.fromTo(
    ".fadeVideoContainer video",
    {
      currentTime: 0,
    },
    {
      opacity: "1",
      currentTime: 1,
    }
  );
};

onMounted(() => {
  newsTicker();
  scaleAnimation();
  fadeAnimation();
  setTimeout(() => {
    fadeImgAnimation();
    horizonScroll();
    fadeVideo();
  }, 500);
});

onBeforeUnmount(() => {
  backTop();
});
</script>

<style lang="scss" scoped>
.demo-box {
  //   height: calc(100vh - 40px);
  //   overflow-x: hidden;
  //   overflow-y: auto;
  overflow: hidden;
  background-color: #000;
  color: rgb(204, 203, 203);
}

.first-block {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .inline-block {
    display: inline-block;
  }
  ul li {
    display: flex;
    white-space: nowrap;
    font-size: 80px;
    -webkit-text-stroke-width: 1px;
  }

  .center {
    display: flex;
    overflow: hidden;
    position: absolute;
    padding: 0 5%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;

    img {
      width: 38vh;
    }
  }
}

.col-span-1 {
  width: 50%;
}

.absolute {
  position: absolute;
}

.bottom-0 {
  bottom: 0;
}

.first-text-art {
  font-size: 40px;
}
.first-text {
  font-size: 30px;
  line-height: 40px;
  //   display: flex;
  //   flex-wrap: wrap;
  // text-30px lh-40px splitText overflow-hidden
}

.relative {
  position: relative;
}

.scaleContainer {
  position: relative;
}

.newsTicker2 {
  right: -50%;
}

.w-full {
  width: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.scaleCircle {
  width: 60px;
  height: 60px;
  background-image: linear-gradient(
    to left,
    rgba(195, 5, 0, 1),
    rgba(1, 122, 182, 1)
  );
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  left: 50%;
  position: absolute;
  z-index: 9;
  top: 0;
  transform: translateX(50%);
}

.scaleCircle2 {
  translate: none;
  rotate: none;
  scale: none;
  transform: translate(-50%, -50%) scale(0, 0);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  left: 50%;
  position: absolute;
  z-index: 8;
  opacity: 1;
  // transform: scale(0);
  top: 50%;
  // transform: translate(-50%, -50%) translate(0, 0px);
  background-color: #000;
}

.fadeText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate(0.5px, 0px);
  opacity: 0;

  p {
    font-size: 100px;
    color: #fff;
  }
}

.fade-img-box {
  margin-top: 300px;
  padding: 0 5%;
  display: grid;
  grid-column-gap: 50px;
  // grid-template-columns:5;
  grid-template-columns: repeat(5, auto);
  justify-content: align-content;
  // flex-wrap: wrap;
  // justify-content: space-evenly;
}

.fadeImg {
  // width: 20%;
  margin-top: 20px;
}

.horizonContainer {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  // w-full h-screen flex whitespace-nowrap overflow-hidden bg-black
}

.horizon__item {
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.object-contain {
  width: 300px;
  margin-right: 50px;
}

// -right-50%
</style>
