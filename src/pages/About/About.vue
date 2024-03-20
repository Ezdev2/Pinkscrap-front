<script setup>
import { features, downloads, faqs } from "./data/data.js";
import { ref } from "vue";
import LinkButton from "../../components/Common/LinkButton.vue";
import Button from "@/components/Common/Button.vue";

let isOpen = ref(1);
let isOpenFaq = ref(1);
</script>

<template>
  <div class="w-full overflow-x-hidden">
    <div>
      <!-- floating assets -->
      <img
        class="floating-bubble-1 absolute right-0 top-0 -z-[1]"
        src="https://themewagon.github.io/pinwheel/images/floating-bubble-1.svg"
        alt=""
      />
      <img
        class="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
        src="https://themewagon.github.io/pinwheel/images/floating-bubble-2.svg"
        alt=""
      />
      <img
        class="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
        src="https://themewagon.github.io/pinwheel/images/floating-bubble-3.svg"
        alt=""
      />
      <!-- ./end floating assets -->

      <!-- Common hero -->
      <section class="page-hero py-16">
        <div class="container">
          <div class="text-center">
            <ul
              class="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"
            >
              <li class="leading-none text-bgBlack">
                <a class="inline-flex items-center text-primary" href="/">
                  <svg
                    class="mr-1.5"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm leading-none">Home</span>
                </a>
              </li>
              <li class="leading-none text-bgBlack">
                <span class="text-sm leading-none">/ About Us</span>
              </li>
            </ul>
          </div>
          <div class="page-hero-content mx-auto max-w-[768px] text-center">
            <h1 class="mb-5 mt-8">About our company</h1>
            <p>
              Donec sollicitudin molestie malesda. Donec sollitudin molestie
              malesuada. Mauris pellentesque nec, egestas non nisi. Cras
              ultricies ligula sed magna dictum porta. Lorem
            </p>
            <div class="mt-11 justify-center sm:flex">
              <!-- <a class="btn btn-primary m-3 block sm:inline-block" href="#"
          >Download The Theme</a
        > -->
              <Button
                style="width: fit-content"
                type="primary"
                label="Download The Theme"
              />
              <a
                class="btn btn-outline-primary m-3 block min-w-[160px] sm:inline-block"
                href="#"
                >Learn more</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Hero Section Start -->
    <!-- <div class="container mx-auto px-8">
      <section
        class="grid grid-cols-none lg:grid-cols-2 items-center"
      >
        <div class="lg:w-5/6 order-2 lg:order-none">
          <h1
            class="text-4xl xl:text-5xl font-bold text-center lg:text-left"
          >
            A Simple Bookmark Manager
          </h1>
          <p
            class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div class="flex justify-center lg:justify-start mt-10">
            <Button
              style="width: fit-content"
              type="primary"
              label="Get it on Chrome"
            />
          </div>
        </div>
        <div
          class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10"
        >
          <img class="z-10 w-full" src="@/assets/illustration-hero.svg" />
          <div
            class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"
          ></div>
        </div>
      </section>
    </div> -->
    <!-- Hero Section End -->

    <!-- Features Section Start -->
    <div id="help" class="container mx-auto px-8">
      <section class="py-16">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-semibold font-theme-heading text-center"
          >
            Features
          </h2>
          <p
            class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
          >
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div class="mt-10">
          <ul
            class="flex flex-col items-center md:flex-row justify-center font-theme-heading"
          >
            <li
              v-for="feature in features"
              :key="feature.id"
              :class="
                isOpen === feature.id
                  ? 'md:border-b-4 md:border-theme-secondary'
                  : ''
              "
              class="w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center"
            >
              <a
                @click.prevent="isOpen = feature.id"
                href="#"
                :class="isOpen === feature.id ? ' border-theme-secondary' : ''"
                class="py-5 md:border-b-0 border-b-4"
                >{{ feature.name }}</a
              >
            </li>
          </ul>
        </div>

        <div class="mt-16">
          <!-- Tab Content -->
          <template v-for="feature in features" :key="feature.id">
            <div
              v-show="isOpen === feature.id"
              class="grid gap-32 lg:grid-cols-2 items-center"
            >
              <div class="relative">
                <img class="z-10 w-full" :src="feature.details.imageUrl" />
                <div
                  class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"
                ></div>
              </div>
              <div>
                <h3
                  class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left"
                >
                  {{ feature.details.title }}
                </h3>
                <p
                  class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left"
                >
                  {{ feature.details.description }}
                </p>
                <div class="flex justify-center lg:justify-start mt-7">
                  <Button
                    style="width: fit-content"
                    type="secondary"
                    label="More info"
                  />
                </div>
              </div>
            </div>
          </template>
          <!-- Tab Content -->
        </div>
      </section>
    </div>
    <!-- Features Section End -->

    <!-- Download Section Start -->
    <div id="download-section" class="container mx-auto px-8 md:w-4/5">
      <section class="py-16 pt-18">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
          >
            Download the extension
          </h2>
          <p
            class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"
          >
            We've got more browsers in pipeline. Please do let us know if you've
            got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div
            v-for="(download, index) in downloads"
            :key="download.id"
            :class="[
              index === 0 ? 'lg:mb-10' : '',
              index === 1 ? 'lg:mt-10' : '',
              index === 2 ? 'lg:mt-20 lg:-mb-10' : '',
            ]"
            class="shadow-lg rounded-lg"
          >
            <div class="flex justify-center mt-12">
              <img :src="download.icon" alt="Browser Logo" />
            </div>
            <h3
              class="text-2xl font-theme-heading font-medium text-center mt-6"
            >
              {{ download.title }}
            </h3>
            <p
              class="text-md font-theme-content text-theme-grayish-blue text-center mt-3"
            >
              {{ download.subTitle }}
            </p>
            <div class="my-7">
              <img
                class="w-full"
                src="@/assets/bg-dots.svg"
                alt="Dot Backaground"
              />
            </div>
            <div class="flex justify-center mb-8">
              <Button
                style="width: fit-content"
                type="primary"
                label="More info"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Download Section End -->

    <!-- Questions Section Start -->
    <div id="faq" class="container mx-auto px-8 md:w-4/5">
      <section class="py-16 pt-18">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
          >
            Frequently Asked Questions
          </h2>
          <p
            class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
          >
            Here are some of out FAQs. If you have any other quesitons you'd
            like answered please feel free to email us.
          </p>
        </div>

        <div class="mt-10 w-full lg:w-3/5 mx-auto">
          <ul class="faq-section">
            <template v-for="(faq, index) in faqs" :key="faq.id">
              <li
                @click="isOpenFaq = faq.id"
                :class="isOpenFaq === faq.id ? 'text-theme-secondary' : ''"
                class="font-theme-content font-medium text-xl cursor-pointer hover:text-theme-secondary py-5 flex justify-between items-center transition duration-200  px-6"
              >
                <a class="faq-title" href="#">{{ faq.title }}</a>
                <svg
                  :class="
                    isOpenFaq === faq.id
                      ? 'rotate-180 text-theme-secondary'
                      : 'rotate-0 text-theme-primary'
                  "
                  class="transform"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </li>
              <p
                v-show="isOpenFaq === faq.id"
                class="px-6 font-theme-content text-md lg:text-lg py-5 text-gray-500 text-justify rounded-md"
              >
                {{ faq.description }}
              </p>
            </template>
          </ul>
        </div>
      </section>
    </div>
    <!-- Questions Section End -->
  </div>
</template>

<style lang="scss" scoped>
.faq-section {
  background: #fff !important;
  padding: 16px;
  border-radius: 12px;
}
.faq-title{
  font-size: medium;
  color: #333;
  font-weight: 800;
}
</style>
