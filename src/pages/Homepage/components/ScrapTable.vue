<script setup>
import Button from "@/components/Common/Button.vue";
import Select from "@/components/Common/Select.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Login from '@/pages/Authentication/Login.vue';
  
import { ref, watch, onMounted } from "vue";
import HomeService from "../../../service/homeService";

let initialScrapResult = localStorage.getItem("scrapResult");
let initialCategoryValue = localStorage.getItem("categoryValue");
let initialCityValue = localStorage.getItem("cityValue");
let initialCountryValue = localStorage.getItem("countryValue");
let initialCountryCode = localStorage.getItem("countryCode");

const scrapResult = ref(
  initialScrapResult ? JSON.parse(initialScrapResult) : []
);
// const scrapResult = ref([]);
const loading = ref(false);
const categoryOptions = ref([]);
const cityOptions = ref([]);
const countryOptions = ref([]);

const countryMap = {};
let token = null;
let categoryValue = ref(
  initialCategoryValue ? JSON.parse(initialCategoryValue) : ""
);
let cityValue = ref(initialCityValue ? JSON.parse(initialCityValue) : "");
let countryValue = ref(
  initialCountryValue ? JSON.parse(initialCountryValue) : ""
);
let countryCode = ref(initialCountryCode ? JSON.parse(initialCountryCode) : "");

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
    cityValue.value = v;
    console.log("city", v);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
 
  token = getCookie('token');
  loadCountryOptions();
  listenSeeEvents();

});

//Affichage des messages de traitement venant du serveur
const displayMessage = (message) => {
  const consoleContainer = document.getElementById('console');
  consoleContainer.innerHTML = '';
    
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.style.padding = '10px';
  messageElement.style.background = '#ffffff';
  messageElement.style.marginBottom = '5px';

  consoleContainer.appendChild(messageElement);
}

//Ecoute des évènements de traitement du serveur
const listenSeeEvents = () =>{
  const sseEndpoint = HomeService.getSeeEvents(); 
  const sseSource = new EventSource(sseEndpoint);

  sseSource.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    if (eventData.message !== null) {
      displayMessage(`${eventData.message}`);
    }
  };

  sseSource.onerror = function(error) {
    console.error('Erreur SSE :', error);
    sseSource.close(); // Fermeture de la connexion SSE en cas d'erreur
  };
}

const getSocialname = (part) => {
  return part.split(": ")[1];
};

const router = useRouter({
  routes: [
    { path: '/login', component: Login } 
  ]
});

const Login = () => {
  route.push("/login");
};

// Récupère le cookie correspondant à l'ID spécifié
function getCookie(id) {
   let value = document.cookie.match('(^|;)?' + id + '=([^;]*)(;|$)');
   return value ? unescape(value[2]) : null;
}

// Télécharger CSV (Ajout d'authentification par accessToken)
const downloadCSV = async() => {
  const accessToken = token;
  const { status } = await HomeService.postTokenCheck(accessToken);
  if (status === 200) {
    console.log('Authentification réussie.');
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
  } else {
    Login();
  }
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

/*
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
*/

const fetchCategoriesAutocompleteSuggestions = async (searchTerm) => {
  try {
    // Données de la requête
    const requestData = {
      url: HomeService.getMapTypes(),
      data: {
        locale: "fr",
        search_term: searchTerm,
      }
    };

    // Envoyer la requête au serveur proxy
    const response = await axios.post(HomeService.getProxyURL(), requestData);

    return response.data;
  } catch (error) {
    // Gérer les erreurs
    console.error("Erreur de récupération des suggestions d'autocomplétion :", error);
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

/*
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
*/

const fetchCityAutocompleteSuggestions = async () => {
  try {
    // Données de la requête
    const requestData = {
      url: HomeService.getMapLocations(),
      data: {
        country_code: countryCode.value,
        type: "city",
      }
    };

    // Envoyer la requête au serveur proxy
    const response = await axios.post(HomeService.getProxyURL(), requestData);

    return response.data;
  } catch (error) {
    // Gérer les erreurs
    console.error("Erreur de récupération des suggestions d'autocomplétion :", error);
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
  countryValue.value = updatedCountryValue;
  countryCode.value = countryMap[countryValue.value];
  cityValue.value = "";

  console.log("Nom du pays :", countryValue.value);
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
      country: countryValue.value,
    });
    scrapResult.value = response;
    // Sauvegarder dans le local storage
    localStorage.setItem("scrapResult", JSON.stringify(scrapResult.value));
    if (scrapResult.value.length) {
      localStorage.setItem(
        "categoryValue",
        JSON.stringify(categoryValue.value)
      );
      localStorage.setItem("cityValue", JSON.stringify(cityValue.value));
      localStorage.setItem("countryValue", JSON.stringify(countryValue.value));
      localStorage.setItem("countryCode", JSON.stringify(countryCode.value));
    }
  } catch (error) {
    console.error("Erreur de récupération data :", error);
    scrapResult.value = [];
  }
  loading.value = false;
};
</script>

<template>
  <div
    class="flex flex-col gap-[80px] items-center md:w-[80%] px-[24px] w-full"
  >
    <div
      class="flex flex-col md:flex-row gap-[24px] md:gap-[12px] md:items-end justify-center w-full"
    >
      <Select
        :options="categoryOptions"
        :placeholder="'Sélectionnez une catégorie'"
        :value="categoryValue !== '' ? categoryValue : 'Ex: Restaurant...'"
        label="Catégories"
        @input="handleCategorySearch($event.target.value)"
        @on-change="handleCategoryValueChange"
      />
      <Select
        :options="countryOptions"
        :value="countryValue"
        label="Pays"
        :placeholder="countryOptions[0]?.label"
        @on-change="handleCountryValueChange"
      />
      <Select
        :disabled="countryCode !== '' ? false : true"
        :options="cityOptions"
        label="Villes"
        :value="cityValue !== '' ? cityValue : 'Tapez le nom d\'une ville'"
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
        <div class="flex items-center gap-2">
          <img src="@/assets/icons/search.svg" alt="details" />
          <span class="md:block text-white">Rechercher</span>
        </div>
      </Button>
    </div>

    <div
      class="bg-white md:rounded-[24px] flex flex-col gap-[24px] p-[12px] md:p-[42px] w-[100%] overflow-x-visible"
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
      
      <!--Ajout de console d'affichage en temps réel du traitement dans le serveur-->
      <div id="console" style="margin: 0 auto;">
      </div>
      
      <div v-if="loading">
        <img class="m-auto" src="@/assets/loading.svg" alt="loading" />
      </div>
      <div
        v-else-if="!loading && scrapResult.length"
        class="flex flex-col gap-[42px] items-center w-full"
      >
        <div
          class="table-section flex flex-col gap-[42px] md:items-center w-full overflow-x-scroll"
        >
          <table class="table-container w-full">
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
              <tr
                v-for="(item, index) in scrapResult.slice(0, 20)"
                :key="index"
              >
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
                        :href="
                          'https://www.facebook.com/' + getSocialname(part)
                        "
                        target="_blank"
                      >
                        <img src="@/assets/fb-logo.svg" alt="Facebook" />
                      </a>
                      <a
                        v-else-if="part.includes('insta')"
                        :href="
                          'https://www.instagram.com/' + getSocialname(part)
                        "
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
        </div>
        <Button
          style="width: fit-content"
          type="primary"
          :label="'Télécharger' + ' ' + scrapResult.length + ' ' + 'contacts'"
          @click="downloadCSV"
        />
      </div>
      <div v-else-if="!loading && !scrapResult.length">
        <img
          class="m-auto w-[250px] md:w-[500px]"
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
@media (min-width: 1136px) {
  .table-section {
    scrollbar-width: none;
  }
}
.table-container {
  position: relative;
}
.table-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  backdrop-filter: blur(3px); /* Ajustez la valeur pour contrôler le flou */
}
</style>
