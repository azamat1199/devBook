import ru from "./ru.json";
import en from "./ru.json";
import uz from "./ru.json";
import store from "../store";

const dictionary = {
  uz,
  ru,
  en,
};

function getCurrentLang() {
  return store.getState().user.user.lang || "en";
}

function trnslt() {
  const lang = store.getState().user.user.lang || "eng";
  const translation = dictionary[lang][str];
  return translation || "**" + str;
}

export { trnslt as default, getCurrentLang };
