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
            <h2 class="font-bold splitText overflow-hidden first-text-art">
              AR T
            </h2>
            <p class="first-text">
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
        <div
          class="scaleCircle w-60px h-60px rounded-full bg-gradient-to-l from-#C30500 to-#017AB6 absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center text-white"
        >
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10px h-10px rounded-full scale-0 bg-#000 scaleCircle2 z-10"
          ></div>
          <p class="scaleText">Go</p>
        </div>
      </div>

      <!-- 第三區塊 -->
      <div class="w-full relative fadeContainer">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText1 op0"
        >
          <p
            class="text-50px md:text-100px font-bold text-white tracking-20px text-center"
          >
            GSAP
          </p>
        </div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText2 opacity-0"
        >
          <p
            class="text-50px md:text-100px font-bold text-white tracking-20px text-center"
          >
            IS
          </p>
        </div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText3 opacity-0"
        >
          <p
            class="text-50px md:text-100px font-bold text-white tracking-20px text-center"
          >
            AWESOME
          </p>
        </div>
      </div>

      <!-- 第四區塊 -->
      <div
        class="min-h-screen bg-black mt-300px px-[5%] overflow-x-hidden mx-auto pt-300px"
      >
        <div class="columns-5 gap-50px">
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
      <div
        class="w-full h-screen flex whitespace-nowrap overflow-hidden bg-black horizonContainer"
      >
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
      <div class="w-full h-screen fadeVideoContainer bg-black">
        <!-- autoplay="autoplay"
            muted="muted" -->
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
import { onMounted } from "vue";
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
  const text = new SplitType(".first-text", { types: "words, chars" });

  gsap.from(text.chars, {
    opacity: 0,
    // y: 10,
    ease: "power4.out",
    duration: 1.5,
    delay: 1,
    stagger: { amount: 3 },
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
      markers:true
    },
  });
  console.log(tl)

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
      scale: "5",
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
      end: "+=2000px",
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
</script>

<style lang="scss" scoped>
.demo-box {
//   height: calc(100vh - 40px);
//   overflow-x: hidden;
//   overflow-y: auto;
  overflow: hidden;
  background: #000;
  color: rgb(204, 203, 203);
}

.first-block {
  height: calc(100vh - 40px);
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
}
// -right-50%
</style>
