//https://vive-gnulinux.fr.cr/securiser-firefox/

pref("general.config.filename", "mozilla.cfg");
pref("general.config.obscure_value", 0);

//Protection Fingerprint
pref("privacy.resistFingerprinting", true);

//Vie privée.
pref("privacy.trackingprotection.enabled", true);
pref("network.cookie.cookieBehavior", 1);
pref("privacy.donottrackheader.enabled", true);

//ouvrir les marque page dans un nouvelle onglet.
pref("browser.tabs.loadBookmarksInTabs", "true");

//Cache disk
pref("browser.cache.disk.capacity", 0);
pref("browser.cache.disk.enable", false);
pref("browser.cache.disk.filesystem_reported", 0);
pref("browser.cache.disk.free_space_hard_limit", 0);
pref("browser.cache.disk.free_space_soft_limit", 0);
pref("browser.cache.disk.max_chunks_memory_usage", 0);
pref("browser.cache.disk.max_entry_size", 0);
pref("browser.cache.disk.max_priority_chunks_memory_usage", 0);
pref("browser.cache.disk.metadata_memory_limit", 0);
pref("browser.cache.disk.preload_chunk_count", 0);
pref("browser.cache.disk.smart_size.enabled", false);
pref("browser.cache.disk.smart_size.first_run", false);
pref("browser.cache.disk.smart_size.use_old_max", false);
pref("browser.cache.disk_cache_ssl", false);

//Cache memory
pref("browser.cache.memory.enable", false);
pref("browser.cache.memory.capacity", 0);
pref("browser.cache.memory.max_entry_size", 0);

//Cache offline
pref("browser.cache.offline.capacity", 0);
pref("browser.cache.offline.enable", false);
pref("browser.cache.offline.insecure.enable", false);
pref("browser.cache.offline.max_entry_size", 0);
