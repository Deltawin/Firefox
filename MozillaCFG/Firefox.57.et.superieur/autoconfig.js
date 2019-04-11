pref("general.config.filename", "mozilla.cfg");
pref("general.config.obscure_value", 0);

// PERFORMANCE
pref("layout.frame_rate.precise", true);
pref("webgl.force-enabled", true);
pref("layers.acceleration.force-enabled", true);
pref("layers.offmainthreadcomposition.enabled", true);
pref("layers.offmainthreadcomposition.async-animations", true);
pref("layers.async-video.enabled", true);
pref("html5.offmainthread", true);

// MEMORY REDUCTION
pref("browser.sessionhistory.max_entries", 30); // 50
pref("browser.sessionstore.max_tabs_undo ", 5); // 10
pref("browser.tabs.animate", false);
pref("browser.download.animateNotifications", false);
pref("image.mem.max_decoded_image_kb", 51200);
pref("javascript.options.mem.max", 51200);
pref("javascript.options.mem.high_water_mark", 30);
