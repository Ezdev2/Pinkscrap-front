<script setup>
import { features, downloads, faqs } from "./data/data.js";
import { ref } from "vue";
import LinkButton from "../../components/Common/LinkButton.vue";
import Button from "@/components/Common/Button.vue";
import { useRouter } from "vue-router";
import Title from "@/components/Common/Title.vue";

const router = useRouter();
let isOpen = ref(1);
let isOpenFaq = ref(1);

const gotoHomePage = () => {
  router.push("/");
};
</script>

<template>
  <div class="w-full overflow-x-hidden flex flex-col items-center gap-[80px]">
    <div class="flex flex-col items-center">
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
      <div class="container md:h-[70vh] flex flex-col items-center justify-center px-[24px]">
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
              <span class="text-sm leading-none">/ A propos</span>
            </li>
          </ul>
        </div>
        <div class="mx-auto md:max-w-[768px] text-center flex flex-col gap-[24px]">
          <Title type="h1" label="Qui sommes-nous ?"></Title>
          <p class="text-blackScale">
            Nous sommes une équipe dévouée spécialisée dans la fourniture de
            solutions de génération de leads B2B innovantes. Notre service
            phare, la téléchargement de leads B2B de la base GMap, offre aux
            entreprises une précieuse opportunité d'accéder à un vaste réservoir
            de prospects qualifiés directement depuis la base de données de
            Google Maps.
          </p>
          <div class="justify-center flex flex-col md:flex-row items-center">
            <Button
              style="width: fit-content"
              type="primary"
              label="Commencer"
              @click="gotoHomePage"
            />
            <a
              class="btn btn-outline-primary m-3 block md:min-w-[160px] sm:inline-block"
              href="#help"
              >En savoir plus</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section Start -->
    <div id="help" class="container mx-auto px-[24px]">
      <section class="">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-semibold font-theme-heading text-center"
          >
            Comment ça marche ?
          </h2>
          <p
            class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
          >
            Suivez ces simples étapes pour obtenir votre liste en quelques
            secondes seulement :
          </p>
        </div>

        <div class="mt-10">
          <ul
            class="tab-ul flex items-center md:flex-row gap-2 justify-center font-theme-heading w-full overflow-x-scroll"
          >
            <li
              v-for="feature in features"
              :key="feature.id"
              :class="
                isOpen === feature.id
                  ? 'md:border-b-4 md:border-theme-secondary'
                  : ''
              "
              class=" md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center"
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
              class="grid md:gap-32 gap-4  lg:grid-cols-2 items-center"
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
                    label="Essayer maintenant"
                    @click="gotoHomePage"
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
    <div id="value-section" class="container mx-auto px-8 md:w-4/5">
      <section class="pt-18">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
          >
            Nos valeurs
          </h2>
          <p
            class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"
          >
            Nos valeurs d'efficacité, d'excellence, d'innovation, de
            collaboration et d'engagement envers le client sont le fondement de
            notre entreprise, guidant chacune de nos actions vers l'atteinte de
            notre mission et de notre vision.
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
                label="Commencer"
                @click="gotoHomePage"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Download Section End -->

    <!-- Questions Section Start -->
    <div id="faq" class="container mx-auto px-8 md:w-4/5">
      <section class="pb-[80px] md:pt-[80px] pt-18">
        <div class="w-4/5 md:w-3/5 mx-auto">
          <h2
            class="text-3xl md:text-4xl font-theme-heading font-medium text-center"
          >
            FAQ
          </h2>
          <p
            class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
          >
            Voici quelques-unes de nos FAQ. Si vous avez d'autres questions
            auxquelles vous aimeriez répondre, n'hésitez pas à nous envoyer un
            e-mail.
          </p>
        </div>

        <div class="mt-10 w-full mx-auto">
          <ul class="faq-section">
            <template v-for="(faq, index) in faqs" :key="faq.id">
              <li
                @click="isOpenFaq = faq.id"
                :class="isOpenFaq === faq.id ? 'text-theme-secondary' : ''"
                class="font-theme-content font-medium text-xl cursor-pointer hover:text-theme-secondary py-5 flex gap-2 justify-between items-center transition duration-200 px-6"
              >
                <p class="faq-title">{{ faq.title }}</p>
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
.faq-title {
  font-size: medium;
  color: #333;
  font-weight: 800;
  text-align: start;
}
.tab-ul {
  scrollbar-width: none;
}
</style>
