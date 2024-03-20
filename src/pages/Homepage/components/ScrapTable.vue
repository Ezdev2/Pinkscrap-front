<script setup>
import Button from "@/components/Common/Button.vue";
import Select from "@/components/Common/Select.vue";
import { ref, watch, onMounted } from "vue";
import HomeService from "../../../service/homeService";

const scrapResult = ref([]);
const loading = ref(false);
const categoryOptions = ref([]);
const cityOptions = ref([]);
const countryOptions = ref([]);

const countryMap = {};
let categoryValue = ref("");
let cityValue = ref("");
let countryValue = "";
let countryCode = ref("");

watch(
  () => loading.value,
  (v) => {
    loading.value = v;
  },
  { immediate: true, deep: true }
);
watch(
  () => countryCode.value,
  (v) => {
    console.log("country", v);
  },
  { immediate: true, deep: true }
);
watch(
  () => cityValue.value,
  (v) => {
    console.log("city", v);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  loadCountryOptions();
});

const getSocialname = (part) => {
  return part.split(": ")[1];
};

// Télécharger CSV
const downloadCSV = () => {
  const csvContent = convertToCSV(scrapResult.value);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "contacts.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const convertToCSV = (scrapResult) => {
  const headers = Array.from(document.querySelectorAll("th")).map((th) =>
    th.textContent.trim()
  );

  const rows = Array.from(document.querySelectorAll("tbody tr")).map((tr) => {
    return Array.from(tr.querySelectorAll("td"))
      .map((td) => {
        return td.textContent.trim().replace(/\s+/g, " ");
      })
      .join(",");
  });

  const csvContent = [headers.join(",")].concat(rows);

  return csvContent.join("\n");
};

// Liste des pays
const fetchCountryList = async () => {
  try {
    const response = await HomeService.getCountries();
    const dataRes = response.map((country) => ({
      value: country.name.common,
      label: country.name.common,
      code: country.cca2,
    }));
    console.log("data country === ", dataRes);
    return dataRes;
  } catch (error) {
    console.error("Erreur de récupération de la liste des pays :", error);
    return [];
  }
};

const loadCountryOptions = async () => {
  countryOptions.value = await fetchCountryList();
  countryOptions.value.forEach((country) => {
    countryMap[country.label] = country.code;
  });
};

// Suggestions d'autocomplétion "Catégories"
const fetchCategoriesAutocompleteSuggestions = async (searchTerm) => {
  try {
    const response = await HomeService.getMapTypes({
      locale: "fr",
      search_term: searchTerm,
    });
    return response;
  } catch (error) {
    console.error(
      "Erreur de récupération des suggestions d'autocomplétion :",
      error
    );
    return [];
  }
};

// Saisie dans le champ de recherche du Select "Catégories"
const handleCategorySearch = async (searchTerm) => {
  if (searchTerm) {
    const suggestions = await fetchCategoriesAutocompleteSuggestions(
      searchTerm
    );
    categoryOptions.value = suggestions.map((suggestion) => ({
      value: suggestion.text,
      label: suggestion.text,
    }));
  } else {
    categoryOptions.value = [];
  }
};

const handleCategoryValueChange = (updatedCategoryValue) => {
  categoryValue.value = updatedCategoryValue;
};

// Suggestions d'autocomplétion "Ville"
const fetchCityAutocompleteSuggestions = async () => {
  try {
    const response = await HomeService.getMapLocations({
      country_code: countryCode.value,
      type: "city",
    });
    return response;
  } catch (error) {
    console.error(
      "Erreur de récupération des suggestions d'autocomplétion :",
      error
    );
    return [];
  }
};

// Saisie dans le champ de recherche du Select "Ville"
const handleCitySearch = async () => {
  const suggestions = await fetchCityAutocompleteSuggestions();
  cityOptions.value = suggestions.map((suggestion) => ({
    value: suggestion.text,
    label: suggestion.text,
  }));
};

const handleCityValueChange = (updatedCityValue) => {
  cityValue.value = updatedCityValue;
};

const handleCountryValueChange = (updatedCountryValue) => {
  countryValue = updatedCountryValue;
  countryCode.value = countryMap[countryValue];
  console.log("Nom du pays :", countryValue);
  console.log("Code pays :", countryCode.value); // A utiliser si besoin pour l'affichage des drapeaux des pays
};

// Lancer la recherche
const searchPlaces = () => {
  fetchData();
};

// Resultat Tableau
const fetchData = async () => {
  loading.value = true;
  try {
    const response = await HomeService.getList({
      category: categoryValue.value,
      city: cityValue.value,
      country: countryValue,
    });
    scrapResult.value = response;
  } catch (error) {
    console.error("Erreur de récupération data :", error);
    scrapResult.value = [];
  }
  loading.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-[80px] items-center w-[80%]">
    <div class="flex gap-[12px] items-end">
      <Select
        :options="categoryOptions"
        label="Catégories"
        :placeholder="'Sélectionnez une catégorie'"
        @input="handleCategorySearch($event.target.value)"
        @on-change="handleCategoryValueChange"
      />
      <Select
        :options="countryOptions"
        label="Pays"
        :placeholder="countryOptions[0]?.label"
        @on-change="handleCountryValueChange"
      />
      <Select
        :disabled="countryCode !== '' ? false : true"
        :options="cityOptions"
        label="Villes"
        :placeholder="'Sélectionnez une ville'"
        @input="handleCitySearch"
        @on-change="handleCityValueChange"
      />
      <Button
        v-if="countryCode !== ''"
        style="height: fit-content"
        type="icon"
        @click="searchPlaces"
      >
        <img src="@/assets/icons/search.svg" alt="details" />
      </Button>
    </div>

    <div
      class="bg-white rounded-[24px] flex flex-col gap-[24px] p-[42px] w-[100%]"
    >
      <div
        v-if="categoryValue !== ''"
        class="flex flex-col gap-[24px] items-start"
      >
        <p class="font-bold text-start">
          {{ categoryValue + " / " + countryValue + " / " + cityValue }}
        </p>
        <!-- <div class="flex gap-[12px]">
          <img src="@/assets/icons/filter.svg" alt="details" />
          <img src="@/assets/icons/plus.svg" alt="details" />
          <p class="text-start">Filtrer</p>
        </div> -->
      </div>
      <div v-if="loading">
        <img class="m-auto" src="@/assets/loading.svg" alt="loading" />
      </div>
      <div
        v-else-if="!loading && scrapResult.length"
        class="flex flex-col gap-[42px] items-center w-full"
      >
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
              <td class="td-email">
                <a
                  v-if="item.email !== 'non disponible'"
                  :href="'mailto:' + item.email"
                  >{{ item.email }}</a
                >
                <span v-else class="text-gray">{{ item.email }}</span>
              </td>
              <td>
                <div class="flex gap-[12px]">
                  <div
                    v-for="part in item.socialMedia.split(' | ')"
                    :key="part"
                  >
                    <a
                      v-if="part.includes('fb')"
                      :href="'https://www.facebook.com/' + getSocialname(part)"
                      target="_blank"
                    >
                      <img src="@/assets/fb-logo.svg" alt="Facebook" />
                    </a>
                    <a
                      v-else-if="part.includes('insta')"
                      :href="'https://www.instagram.com/' + getSocialname(part)"
                      target="_blank"
                    >
                      <img src="@/assets/insta-logo.svg" alt="Instagram" />
                    </a>
                    <a
                      v-else-if="part.includes('twit')"
                      :href="'https://www.twitter.com/' + getSocialname(part)"
                      target="_blank"
                    >
                      <img src="@/assets/twit-logo.svg" alt="Twitter" />
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <a v-if="item.link !== 'non disponible'" :href="item.link"
                  ><img src="@/assets/link.svg" alt="link"
                /></a>
                <img v-else src="@/assets/no-link.svg" alt="no-link" />
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          style="width: fit-content"
          type="primary"
          :label="'Télécharger' + ' ' + scrapResult.length + ' ' + 'contacts'"
          @click="downloadCSV"
        />
      </div>
      <div v-else-if="!loading && !scrapResult.length">
        <img
          class="m-auto w-[500px]"
          src="@/assets/no-data.svg"
          alt="not found"
        />
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
  border-bottom: 1px solid #654ded19;
  padding: 18px 44px;
  text-align: left;
}
.td-email {
  max-width: 260px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

th {
  // background-color: #f2f2f2;
}
</style>
