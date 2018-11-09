//https://vive-gnulinux.fr.cr/securiser-firefox/

pref("general.config.filename", "mozilla.cfg");
pref("general.config.obscure_value", 0);

//Protection Fingerprint
pref("privacy.resistFingerprinting", true);

//Vie privée.
pref("privacy.trackingprotection.enabled", true);
pref("network.cookie.cookieBehavior", 1);
pref("privacy.donottrackheader.enabled", true);

//Préchargement des liens.
pref("network.prefetch-next", false);

//Préchargement des DNS.
pref("network.dns.disablePrefetch", true);

//ouvrir les marque page dans un nouvelle onglet.
pref("browser.tabs.loadBookmarksInTabs", "true");
