<script setup>
import { features, downloads, faqs } from "./data/data.js";
import { ref } from "vue";
import LinkButton from "../../components/Common/LinkButton.vue";
import Button from "@/components/Common/Button.vue";

let isOpen = ref(1);
let isOpenFaq = ref(1);
</script>

<template>
  <div>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden">
      <section
        class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center"
      >
        <div class="lg:w-5/6 order-2 lg:order-none">
          <h1
            class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left"
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
    </div>
    <!-- Hero Section End -->

    <!-- Features Section Start -->
    <div id="help" class="container mx-auto px-5">
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
    <div id="download-section" class="container mx-auto px-5 md:w-4/5">
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
    <div id="faq" class="container mx-auto px-5 md:w-4/5">
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
          <ul class="shadow-lg">
            <template v-for="(faq, index) in faqs" :key="faq.id">
              <li
                @click="isOpenFaq = faq.id"
                :class="isOpenFaq === faq.id ? 'text-theme-secondary' : ''"
                class="font-theme-content font-medium text-xl cursor-pointer hover:text-theme-secondary py-5 flex justify-between items-center transition duration-200 bg-slate-100 px-6"
              >
                <a href="#">{{ faq.title }}</a>
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
                class="bg-slate-50 px-6 font-theme-content text-md lg:text-lg py-5 text-gray-500 text-justify"
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

<style lang="scss" scoped></style>