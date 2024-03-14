<script setup>
import Button from "@/components/Common/Button.vue";
import Select from "@/components/Common/Select.vue";
import { ref, watch } from "vue";
import HomeService from "../../../service/homeService";

const scrapResult = ref([]);
const loading = ref(false);

const params = {
  category: "Restaurant",
  city: "Antananarivo",
  country: "Madagascar",
};

watch(
  () => loading.value,
  (v) => {
    loading.value = v;
  },
  { immediate: true, deep: true }
);

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await HomeService.getList(params);
    scrapResult.value = response;
  } catch (error) {
    console.error("Erreur de récupération data :", error);
    scrapResult.value = [];
  }
  loading.value = false;
};

const searchPlaces = () => {
  fetchData();
};

const options = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
];
</script>

<template>
  <div class="flex flex-col gap-[80px] items-center w-[80%]">
    <div class="flex gap-[12px] items-end">
      <Select
        :options="options"
        label="Catégories"
        :placeholder="options[0].label"
      />
      <Select
        :options="options"
        label="Villes"
        :placeholder="options[0].label"
      />
      <Select :options="options" label="Pays" :placeholder="options[0].label" />
      <Button style="height: fit-content" type="icon" @click="searchPlaces">
        <img src="@/assets/icons/search.svg" alt="details" />
      </Button>
    </div>

    <div class="bg-white rounded-[24px] flex flex-col gap-[24px] p-[42px] w-[100%]">
      <div class="flex flex-col gap-[24px] items-start">
        <div class="flex justify-between items-center w-full">
          <p class="text-gray">Cross-channel / Last month overview</p>
          <img src="@/assets/icons/close.svg" alt="details" />
        </div>
        <p class="font-bold text-start">Restaurant Madagascar</p>
        <div class="flex gap-[12px]">
          <img src="@/assets/icons/filter.svg" alt="details" />
          <img src="@/assets/icons/plus.svg" alt="details" />
          <p class="text-start">Filtrer</p>
        </div>
      </div>
      <div v-if="loading">
        <img class="m-auto" src="@/assets/loading.svg" alt="loading" />
      </div>
      <div v-else-if="!loading && scrapResult.length" class="flex flex-col gap-[42px] items-center w-full">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Réseaux sociaux</th>
              <th>Lien</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in scrapResult" :key="index">
              <!--Ajout de contenu de la première colonne cliquable "nom" -->
              <td>
                <a
                  :href="
                    'https://www.google.com/maps/place/?q=place_id:' +
                    item.place_id
                  "
                  target="_blank"
                  >{{ item.nom }}</a
                >
              </td>
              <td
                :style="{
                  'background-color': index % 2 === 0 ? '#f2f2f2' : 'white',
                }"
              >
                {{ item.phone }}
              </td>
              <td>{{ item.email }}</td>
              <td>{{ item.socialMedia }}</td>
              <td>{{ item.link }}</td>
            </tr>
          </tbody>
        </table>
        <Button
          style="width: fit-content"
          type="primary"
          label="Télécharger 1800 contacts"
        />
      </div>
      <div v-else-if="!loading && !scrapResult.length">
        <img class="m-auto w-[500px]" src="@/assets/no-data.svg" alt="not found" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  // border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #654ded19; /* Ajoutez une bordure de 1 pixel solide avec une couleur grise */
  padding: 18px 44px;
  text-align: left;
}

th {
  // background-color: #f2f2f2;
}
</style>
