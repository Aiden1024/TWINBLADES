var en = require("./translations.en.json");
var cn = require("./translations.cn.json");
var hk = require("./translations.hk.json");

const i18n = {
	translations: {
		en,
		cn,
		hk,
	},
	defaultLang: "en",
	useBrowserDefault: true,
	// optional property will default to "query" if not set
	languageDataStore:  "localStorage",
};

module.exports = i18n;