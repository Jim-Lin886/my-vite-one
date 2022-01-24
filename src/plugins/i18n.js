import { createI18n } from "vue-i18n";
import tw from "../assets/lang/tw.json"
import en from "../assets/lang/en.json"

const i18n = createI18n({
  locale: "tw", // 設定語言
  fallbackLocale: "tw", // 若選擇的語言缺少翻譯則退回的語言
  messages: {
    tw,
    en,
  },
});

export default i18n
