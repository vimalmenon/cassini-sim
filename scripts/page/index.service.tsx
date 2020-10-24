import {localization} from "model";

export const init = ():void => {
	const userLang = document.getElementsByTagName("html")[0].lang;
	localization.setLanguage(userLang);
};