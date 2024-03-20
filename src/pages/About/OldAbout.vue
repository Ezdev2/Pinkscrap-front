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
              <a class="inline-flex items-center text-primary" href="#">
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
            malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
            ligula sed magna dictum porta. Lorem
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
        <div class="counter mt-16">
          <div
            class="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10"
          >
            <div
              class="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0"
            >
              <h2>
                <span class="count">25M</span>
                <span class="text-[#A3A1FB]">+</span>
              </h2>
              <p>Customers</p>
            </div>
            <div
              class="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0"
            >
              <h2>
                <span class="count">440M</span>
                <span class="text-[#5EE2A0]">+</span>
              </h2>
              <p>Products sold</p>
            </div>
            <div
              class="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0"
            >
              <h2>
                <span class="count">50K</span>
                <span class="text-primary">+</span>
              </h2>
              <p>Online stores</p>
            </div>
            <div class="px-10 py-10 text-center sm:col-6 lg:col-3 lg:py-0">
              <h2>
                <span class="count">20K</span>
                <span class="text-[#FEC163]">+</span>
              </h2>
              <p>Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Common hero -->

    <!-- Works -->
    <section class="section">
      <div class="container">
        <div class="row items-center justify-between">
          <div class="md:col-5">
            <h2 class="text-center md:text-left">
              The six core work <br />
              drive everything do
            </h2>
          </div>
          <div class="mt-6 text-center md:col-3 md:mt-0 md:text-right">
            <a class="btn btn-primary" href="#">Download The Theme</a>
          </div>
        </div>
        <div class="row mt-14">
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >01</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Accessibility</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >02</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Empowerement</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >03</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Innovation</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >04</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Excellence</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >05</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Team work</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
          <div class="mb-8 sm:col-6 lg:col-4">
            <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
              <div class="gradient-number relative inline-block">
                <span
                  class="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >06</span
                >
                <img src="" alt="" />
              </div>
              <h4 class="my-6">Responsibility</h4>
              <p>
                Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec
                velit neque, autor sit amet aliuam vel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./end Works -->

    <!-- Members -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="mx-auto text-center lg:col-6">
            <h2>This is who we are</h2>
            <p class="mt-4">
              Donec sollicitudin molestie malesda. Donec sollitudin mol estie
              ultricies ligula sed magna dictum
            </p>
          </div>
        </div>
        <div class="row mt-12 justify-center">
          <div class="lg:col-10">
            <div class="row">
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Eleanor Pena</h5>
                  <p class="mt-1.5">Co-founder & COO</p>
                </div>
              </div>
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Savannah Nguyen</h5>
                  <p class="mt-1.5">Head of Infrastructure</p>
                </div>
              </div>
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Courtney Henry</h5>
                  <p class="mt-1.5">Head of Brand Marketing</p>
                </div>
              </div>
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Floyd Miles</h5>
                  <p class="mt-1.5">Head of Infrastructure</p>
                </div>
              </div>
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Robert Fox</h5>
                  <p class="mt-1.5">Head of Product Design</p>
                </div>
              </div>
              <div
                class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
              >
                <div class="member-avatar inline-flex justify-center">
                  <img
                    class="rouded-full h-28 w-28"
                    src="https://themewagon.github.io/pinwheel/images/users/user-1.png"
                    alt=""
                  />
                </div>
                <div
                  class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg"
                >
                  <h5 class="font-primary">Darrell Steward</h5>
                  <p class="mt-1.5">Head of People & HR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- pricing -->
    <section class="section mt-12 pt-0">
      <div class="container">
        <div class="row lg:px-10">
          <div class="mt-8 md:col-6 lg:col-4 lg:mt-0">
            <div class="rounded-xl bg-white px-8 py-10 shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="h3">Basic</h2>
                  <p class="mt-3 text-2xl text-dark">$ 29.00 USD</p>
                </div>
                <span
                  class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-theme-light"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/price-card-icon-1.svg" alt="" />
                </span>
              </div>
              <p class="mt-6">
                Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                ipsum.
              </p>
              <div class="my-6 border-y border-border py-6">
                <h4 class="h6">What's included?</h4>
                <ul class="mt-6">
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Everything in Basic plan Into This
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Tellus eget condi To the mentum
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to $100.000 monthly sales
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Unlimited integrations For This Item
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to 1.000.000 monthly visits
                  </li>
                </ul>
              </div>
              <div class="text-center">
                <a
                  class="btn btn-outline-white block h-[48px] w-full rounded-[50px] leading-[30px]"
                  href="#"
                  >Buy now</a
                >
                <a class="mt-6 inline-flex items-center text-dark" href="#">
                  Start Free trial
                  <svg
                    class="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 md:col-6 lg:col-4 lg:mt-0">
            <div
              class="rounded-xl border border-primary bg-white px-8 py-10 shadow-lg lg:-mt-16"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="h3">Enterprise</h2>
                  <p class="mt-3 text-2xl text-dark">$ 59.00 USD</p>
                </div>
                <span
                  class="bg-gradient inline-flex h-16 w-16 items-center justify-center rounded-full"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/price-card-icon-2.svg" alt="" />
                </span>
              </div>
              <p class="mt-6">
                Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                ipsum.
              </p>
              <div class="my-6 border-y border-border py-6">
                <h4 class="h6">What's included?</h4>
                <ul class="mt-6">
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5 text-primary"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Everything in Basic plan Into This
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5 text-primary"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Tellus eget condi To the mentum
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5 text-primary"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to $100.000 monthly sales
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5 text-primary"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Unlimited integrations For This Item
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      class="mr-2.5 text-primary"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to 1.000.000 monthly visits
                  </li>
                </ul>
              </div>
              <div class="text-center">
                <a
                  class="btn btn-primary h-[48px] w-full rounded-[50px] leading-[30px]"
                  href="#"
                  >Buy now</a
                >
                <a class="mt-6 inline-flex items-center text-dark" href="#">
                  Start Free trial
                  <svg
                    class="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 md:col-6 lg:col-4 lg:mt-0">
            <div class="rounded-xl bg-white px-8 py-10 shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="h3">Basic</h2>
                  <p class="mt-3 text-2xl text-dark">$ 29.00 USD</p>
                </div>
                <span
                  class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-theme-light"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/price-card-icon-3.svg" alt="" />
                </span>
              </div>
              <p class="mt-6">
                Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                ipsum.
              </p>
              <div class="my-6 border-y border-border py-6">
                <h4 class="h6">What's included?</h4>
                <ul class="mt-6">
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Everything in Basic plan Into This
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Tellus eget condi To the mentum
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to $100.000 monthly sales
                  </li>
                  <li class="mb-3 flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Unlimited integrations For This Item
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      class="mr-2.5"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.42857L6.36364 10L14 2"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    Up to 1.000.000 monthly visits
                  </li>
                </ul>
              </div>
              <div class="text-center">
                <a
                  class="btn btn-outline-white block h-[48px] w-full rounded-[50px] leading-[30px]"
                  href="#"
                  >Buy now</a
                >
                <a class="mt-6 inline-flex items-center text-dark" href="#">
                  Start Free trial
                  <svg
                    class="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./end pricing -->

    <!-- Faq -->
    <section class="faqs section">
      <div class="container max-w-[1230px]">
        <div class="row">
          <div class="text-center lg:col-4 lg:text-start">
            <h2>Frequently Asked Questions</h2>
            <p class="mt-6 lg:max-w-[404px]">
              Vestibulum ante ipsum primis in faucibus orci luctus ultrices
              posuere cubilia Curae Donec
            </p>
          </div>
          <div class="mt-8 lg:col-8 lg:mt-0">
            <div
              class="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8"
            >
              <div class="accordion active border-b border-border">
                <div
                  class="accordion-header relative pl-6 text-lg font-semibold text-dark"
                  data-accordion
                >
                  How can I integrate Avocode to my current tool stack?
                  <svg
                    class="accordion-icon absolute left-0 top-[22px]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlspace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                  </svg>
                </div>
                <div class="accordion-content pl-6">
                  <p>
                    The Service is provided for free during this pilot project,
                    and is provided "as is" with is not committed to any level
                    of service or availability of the Service.
                  </p>
                  <p>
                    If you enter into this agreement on behalf of a company, you
                    hereby agree that the company is responsible under this
                    Agreement for all actions and
                  </p>
                </div>
              </div>
              <div class="accordion border-b border-border">
                <div
                  class="accordion-header relative pl-6 text-lg font-semibold text-dark"
                  data-accordion
                >
                  How can I use Avocode with cloud documents?
                  <svg
                    class="accordion-icon absolute left-0 top-[22px]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlspace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                  </svg>
                </div>
                <div class="accordion-content pl-6">
                  <p>
                    The Service is provided for free during this pilot project,
                    and is provided "as is" with is not committed to any level
                    of service or availability of the Service.
                  </p>
                  <p>
                    If you enter into this agreement on behalf of a company, you
                    hereby agree that the company is responsible under this
                    Agreement for all actions and
                  </p>
                </div>
              </div>
              <div class="accordion border-b border-border">
                <div
                  class="accordion-header relative pl-6 text-lg font-semibold text-dark"
                  data-accordion
                >
                  If I cancel, can I archive my designs to keep them safe come
                  back?
                  <svg
                    class="accordion-icon absolute left-0 top-[22px]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlspace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                  </svg>
                </div>
                <div class="accordion-content pl-6">
                  <p>
                    The Service is provided for free during this pilot project,
                    and is provided "as is" with is not committed to any level
                    of service or availability of the Service.
                  </p>
                  <p>
                    If you enter into this agreement on behalf of a company, you
                    hereby agree that the company is responsible under this
                    Agreement for all actions and
                  </p>
                </div>
              </div>
              <div class="accordion">
                <div
                  class="accordion-header relative pl-6 text-lg font-semibold text-dark"
                  data-accordion
                >
                  How can I adjust user permissions & admin provileges?
                  <svg
                    class="accordion-icon absolute left-0 top-[22px]"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlspace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                  </svg>
                </div>
                <div class="accordion-content pl-6">
                  <p>
                    The Service is provided for free during this pilot project,
                    and is provided "as is" with is not committed to any level
                    of service or availability of the Service.
                  </p>
                  <p>
                    If you enter into this agreement on behalf of a company, you
                    hereby agree that the company is responsible under this
                    Agreement for all actions and
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @apply inline-block h-[52px] border px-8 py-2 text-sm font-medium leading-[36px] transition-all duration-200;
}

.btn-primary {
  @apply cursor-pointer rounded-[50px] border-0 bg-gradient-to-tl text-center font-medium text-white hover:shadow-[0px_5px_30px_rgba(252,167,111,0.5)];
}

.btn-outline-primary {
  @apply relative rounded-[50px] border-primary bg-transparent text-center capitalize text-bgBlack hover:bg-primary hover:text-white hover:shadow-[0px_5px_30px_rgba(252,167,111,0.5)] hover:before:opacity-100 py-[7px];
  &::before {
    @apply absolute left-0 top-0 bottom-0 right-0 -z-[1] rounded-[inherit] bg-gradient-to-tl opacity-0 transition-[inherit] content-[""];
  }
}

.btn-outline-white {
  @apply rounded-[50px] bg-transparent text-center capitalize text-bgBlack;
}

.btn-white {
  @apply min-w-[150px] rounded-[50px] border-white bg-white text-center capitalize text-bgBlack shadow-lg hover:shadow;
}

.btn-sm {
  @apply h-[42px] leading-[24px];
}
</style>
