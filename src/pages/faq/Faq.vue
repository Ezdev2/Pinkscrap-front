<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'How can I integrate Avocode to my current tool stack?',
    answer: [
      'The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.',
      'If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and',
    ]
  },
  {
    question: 'How can I use Avocode with cloud documents?',
    answer: [
      'The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.',
      'If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and',
    ]
  },
  {
    question: 'If I cancel, can I archive my designs to keep them safe come back?',
    answer: [
      'The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.',
      'If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and',
    ]
  },
  {
    question: 'How can I adjust user permissions & admin privileges?',
    answer: [
      'The Service is provided for free during this pilot project, and is provided "as is" with is not committed to any level of service or availability of the Service.',
      'If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and',
    ]
  }
]);

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = (activeIndex.value === index) ? null : index;
};
</script>
<template>
  <div class="pricing">
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
              <span class="text-sm leading-none">/ Pricing</span>
            </li>
          </ul>
        </div>
        <div class="page-hero-content mx-auto max-w-[768px] text-center">
          <h1 class="mb-5 mt-8">Pinwheel Pricing</h1>
          <p>
            Donec sollicitudin molestie malesda. Donec sollitudin molestie
            malesuada. Mauris <br />
            pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna
          </p>
        </div>
      </div>
    </section>
    <section class="faqs section" style="margin-bottom:20px">
      <div class="container max-w-[1230px]">
        <div class="row" style="display:flex; gap: 20px;">
          <div class="text-center lg:col-4 lg:text-start">
            <h2 style="font-size: 2.5rem; font-weight: bold">
              Frequently Asked Questions
            </h2>
            <p class="mt-6 lg:max-w-[404px]">
              Vestibulum ante ipsum primis in faucibus orci luctus ultrices
              posuere cubilia Curae Donec
            </p>
          </div>
          <div class="mt-8 lg:col-8 lg:mt-0">
            <div
              class="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8"
            >
              <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="accordion border-b border-border"
              >
                <div
                  class="accordion-header relative pl-6 text-lg font-semibold text-dark"
                  style="text-align: justify; padding: 10px 35px"
                  @click="toggleAccordion(index)"
                  data-accordion
                >
                  {{ faq.question }}
                  <svg
                    :class="{ 'transform rotate-180': activeIndex === index }"
                    class="absolute left-0 top-[18px]"
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
                  style="width: 600px; text-align: justify; padding: 25px 0"
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
</style>
