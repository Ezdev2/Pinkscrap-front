<script setup>
import Button from "@/components/Common/Button.vue";

const scrapResult = [
  {
    nom: "John Doe",
    telephone: "555-1234",
    email: "john@example.com",
    reseauxSociaux: "@johndoe",
    lien: "http://www.example.com/johndoe",
  },
];
</script>

<template>
  <div class="flex flex-col gap-[80px]">
    <div>filtre</div>
    <div
      class="bg-white rounded-[24px] flex flex-col gap-[24px] p-[42px]"
    >
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
      <div class="flex flex-col gap-[42px] items-center">
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
              <td>{{ item.nom }}</td>
              <td
                :style="{
                  'background-color': index % 2 === 0 ? '#f2f2f2' : 'white',
                }"
              >
                {{ item.telephone }}
              </td>
              <td>{{ item.email }}</td>
              <td>{{ item.reseauxSociaux }}</td>
              <td>{{ item.lien }}</td>
            </tr>
          </tbody>
        </table>
        <Button style="width: fit-content;" type="primary" label="Télécharger 1800 contacts" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  // border-collapse: collapse;
}

th, td {
  border-bottom: 1px solid #654ded19; /* Ajoutez une bordure de 1 pixel solide avec une couleur grise */
  padding: 18px 44px;
  text-align: left;
}

th {
  // background-color: #f2f2f2;
}
</style>
