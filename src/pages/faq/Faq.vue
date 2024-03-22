<script setup>
import { ref } from "vue";
import Title from "@/components/Common/Title.vue";

const faqs = ref([
  {
    question: "What is bookmark?",
    answer: [
      "A bookmark is a feature that allows users to save the URL of a webpage for quick access later. It acts as a shortcut to the webpage, allowing you to navigate back to it without having to remember or search for the URL. Bookmarks are handy for keeping track of your favorite websites, important articles, or resources that you frequently visit. They help you organize your online content and improve your browsing experience.",
    ],
  },
  {
    question: "How can I request a new browser?",
    answer: [
      "To request a new browser, you can visit our official website and navigate to the 'Feedback' or 'Contact Us' section. There, you can submit your request for a new browser version or feature. Additionally, you can participate in our community forums or reach out to our support team with your suggestions. We value user feedback and use it to enhance our products, so your input is essential in shaping the future of our browser.",
    ],
  },
  {
    question: "Is there a mobile app available?",
    answer: [
      "Yes, we offer a mobile app for both Android and iOS platforms. You can download our mobile app from the respective app stores (Google Play Store for Android and the App Store for iOS). The mobile app allows you to sync your bookmarks, browsing history, and other settings across all your devices. You can access your bookmarks on the go, and it provides a seamless browsing experience across your mobile and desktop devices.",
    ],
  },
  {
    question: "What about other Chromium browsers?",
    answer: [
      "Our bookmarking feature is compatible with various Chromium-based browsers, including popular ones like Google Chrome, Microsoft Edge, Brave, Vivaldi, and others. As long as you are using a version of these browsers that is 62 or higher, you can enjoy the benefits of our bookmarking tool. The integration is seamless and allows you to manage your bookmarks efficiently, regardless of the Chromium browser you prefer.",
    ],
  },
]);

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div class="pricing">
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
    <section class="page-hero py-16">
      <div class="container">
        <div class="text-center">
          <ul
            class="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"
          >
            <li class="leading-none text-dark">
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
            <li class="leading-none text-dark">
              <span class="text-sm leading-none">/ Faq</span>
            </li>
          </ul>
        </div>
        <div class="page-hero-content mx-auto max-w-[768px] text-center flex flex-col gap-[24px]">
          <!-- <h1 class="mb-5 mt-8">FAQ</h1> -->
          <Title type="h1" label="FAQ"></Title>
          <p>
            Voici quelques-unes de nos FAQ. Si vous avez d'autres questions
            auxquelles vous aimeriez répondre, n'hésitez pas à nous envoyer un
            e-mail.
          </p>
        </div>
      </div>
    </section>
    <section class="faqs section" style="margin-bottom: 80px">
      <div class="container max-w-[1230px]">
        <div
          class="row"
          style="
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          "
        >
          <div class="text-center lg:col-4 lg:text-start">
            <h2 style="font-size: 2.5rem; font-weight: bold; width: 99%">
              Frequently asked questions
            </h2>
            <p class="mt-6 lg:max-w-[404px]">
              Vestibulum ante ipsum primis chez faucibus orci luctus ultrices
              Posuere Cubilia Curae Donec
            </p>
          </div>
          <div class="mt-8 lg:col-8 lg:mt-0">
            <div
              class="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8"
            >
              <div v-for="(faq, index) in faqs" :key="index" class="accordion">
                <div
                  class="accordion-header relative pl-6 text-lg font-bold text-dark"
                  style="
                    text-align: justify;
                    padding: 15px 35px;
                    cursor: pointer;
                  "
                  @click="toggleAccordion(index)"
                  data-accordion
                >
                  {{ faq.question }}
                  <svg
                    :class="{ 'transform rotate-180': activeIndex === index }"
                    class="absolute left-0 top-[22px]"
                    style="width: 15px"
                    viewBox="0 0 512 512"
                    xmlspace="preserve"
                  >
                    <path
                      fill="currentColor"
                      d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    ></path>
                  </svg>
                </div>
                <div
                  v-if="activeIndex === index"
                  class="accordion-content pl-6"
                  style="text-align: justify; padding: 25px 0"
                >
                  <p v-for="(paragraph, pIndex) in faq.answer" :key="pIndex">
                    {{ paragraph }}
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
.pricing {
  display: flex;
  position: relative;
  margin: none;
  flex-direction: column;
  align-items: center;
  // gap: 122px;
  align-self: stretch;
}
.accordion-content {
  width: 400px;
}
@media only screen and (max-width: 464px) {
  .accordion-content {
    width: auto;
  }
  .container {
    padding: 20px;
  }
}
</style>
