<template>
  <v-card class="mx-auto" max-width="500">
    <v-list shaped @update:active="list_active">
      <v-list-item-group v-model="selectedItem" multiple>
        <template v-for="(item, i) in items.items">
          <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

          <v-list-item
            v-else
            :key="`item-${i}`"
            :value="item"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
  <h2>{{ $t("label.selectLang") }}:{{ items.selectedDesc }}</h2>
  <h2>{{ $t("label.history") }}:{{ historyDesc }}</h2>

  <v-btn rounded="lg" color="primary" @click="stopWatchitems">
    <p>Stop Watch {{ $t("label.history") }}</p>
  </v-btn>
</template>

<script>
import { ref, reactive, computed } from "@vue/reactivity";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
export default {
  name: "LanguageChooser",
  // data: () => ({
  //   items: ["Dog Photos", "Cat Photos", "", "Potatoes", "Carrots"],
  //   model: ["Carrots"],
  // }),
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const handleChangeLanguage = (e) => {
      console.log("handleChangeLanguage", e);
      this.$store.commit("setLocaleLang", e[0]);
    };

    const items = reactive({
      items: [
        { name: "中文", value: "tw" },
        { name: "English", value: "en" },
      ],
      selectedItem: null,
      selectedDesc: computed(() => {
        return items.selectedItem ? items.selectedItem.name : "";
      }),
    });
    const stopWatchitems = watch(
      () => items,
      (items, prevState) => {
        console.log("watch-items", items);
        history.value.push(items.selectedItem);
      },
      { deep: true }
    );
    const history = ref([]);
    const historyDesc = computed(() => {
      let desc = "";
      history.value.forEach((item) => {
        desc += item ? item.name + ">>" : "";
        console.log("historyDesc", item);
      });
      return desc;
    });

    return {
      locale,
      items,
      history,
      historyDesc,
      stopWatchitems,
      handleChangeLanguage,
    };
  },
  methods: {
    list_active(e) {
      console.log("list_active", e[0]);
      let currLang = e[0] || this.items.items[1];
      this.items.selectedItem = currLang;
      console.log("list_active-selectedItem", this.items.selectedItem);
      this.$store.commit("setLocaleLang", currLang.value);
    },
  },
};
</script>

<style></style>
