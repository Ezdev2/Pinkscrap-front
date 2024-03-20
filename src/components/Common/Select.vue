<script setup>
import { ref } from "vue";
import ASelect from 'ant-design-vue/lib/select';

const emit = defineEmits(["onChange"]);

defineProps({
  options: {
    type: Array,
    default: [
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
    ],
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const handleChange = (value) => {
  emit("onChange", value);
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref(undefined);
</script>
<template>
  <div class="flex flex-col items-start">
    <p class="font-bold text-lg">{{ label }}</p>
    <a-select
      v-model:value="value"
      :disabled="disabled"
      show-search
      :placeholder="placeholder"
      style="width: 200px"
      :options="options"
      :filter-option="filterOption"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
  </div>
</template>
