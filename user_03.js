/* Firefox user.js
   Compiled by krathalan
   
   Updated August 9, 2018
   
   Copyright (c) 2018 ghacksuserjs
   Copyright (c) 2018 krathalan
   Copyright (c) 2018 pyllyukko

   Homepage: https://gitlab.com/krathalan/firefox-tweaks
   License: https://mitlicense.org/

   Android version available here: https://gitlab.com/krathalan/firefox-tweaks/blob/master/user-android.js
*/

/*
    Autofill and sign on
*/

// Disable password manager -- use KeePass instead
user_pref("signon.rememberSignons", false);

// Disable autofill -- tracking scripts can capture login information. 
// More information: https://www.howtogeek.com/338209/you-should-turn-off-autofill-in-your-password-manager/
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

/*
    DOM
*/

// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);

// Disable resource/navigation timing for better protection against attacks like Meltdown/Spectre
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_performance", false);

// Stop websites from viewing your connection type (e.g. WiFi, cellular, etc.)
user_pref("dom.netinfo.enabled", false);

// Stop websites from detecting when your connection information changes (e.g. WiFi --> cellular)
user_pref("dom.network.enabled", false);

// Stop websites from using the web audio API to fingerprint you
user_pref("dom.webaudio.enabled", false);

/* 
	Miscellaneous tweaks
*/

// Stop websites from sending analytics and tracking data after you've left the website 
// More information: https://w3c.github.io/beacon/
user_pref("beacon.enabled", false);

// Disable URL bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable device sensors
user_pref("device.sensors.enabled", false);

// Disable microphone and camera status tracking
user_pref("media.navigator.enabled", false);

// Disallow websites from seeing when you connect or disconnect media devices
user_pref("media.ondevicechange.enabled", false);

// Disable video statistics reporting
user_pref("media.video_stats.enabled", false);

// Force websites to ask you to store data for offline use
user_pref("offline-apps.allow_by_default", false);

// Disable Firefox Tracking Protection -- use uBlock Origin instead
user_pref("privacy.trackingprotection.enabled",	false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Disallow websites from accessing WebGL debug information
user_pref("webgl.enable-debug-renderer-info", false);

/*
    Network
*/

// Disable third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Disable DNS prefetching 
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Stop Firefox from connecting to a link's domain when you hover over that link with your mouse 
user_pref("network.http.speculative-parallel-limit", "0");

// Stop Firefox from making predictive connections
user_pref("network.predictor.enabled", false);

// Disable prefetching of <link rel="next"> URLS
// More information: http://kb.mozillazine.org/Network.prefetch-next
user_pref("network.prefetch-next", false);

/*
    All lines below here are commented out. Go through each tweak (or don't) and decide what tweaks you want. 
    To use a tweak, simply delete the // at the beginning of the line.
*/

/*
    Extensions
*/

// Disable Pocket
// user_pref("extensions.pocket.enabled", false);

// Disable Screenshots server upload button
// user_pref("extensions.screenshots.upload-disabled", true);

/*
    Personal preferences
*/

// Disable full screen video fade -- making a video full screen happens immediately, like Google Chrome
// user_pref("full-screen-api.transition-duration.enter", "0 0");
// user_pref("full-screen-api.transition-duration.leave", "0 0");
// user_pref("full-screen-api.warning.timeout", 0);

// Make Firefox scrolling feel like Microsoft Edge
// user_pref("general.smoothScroll.currentVelocityWeighting", "0.1");
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
// user_pref("mousewheel.min_line_scroll_amount", 40);

// Make Firefox scrolling feel like Google Chrome
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.82");

// Block new permission requests
// user_pref("permissions.default.camera", 2);
// user_pref("permissions.default.desktop-notification", 2);
// user_pref("permissions.default.geo", 2);
// user_pref("permissions.default.microphone", 2);

/* 
	Potential breakage
*/

// Stop websites from reading or modifying clipboard contents. May break some websites with text editors
// user_pref("dom.event.clipboardevents.enabled", false);

// Disable service workers. May break some websites
// user_pref("dom.serviceWorkers.enabled", false);

// Enable webrender (Nightly only)
// user_pref("gfx.webrender.all", true);

// Disable WebRTC. May break some websites
// More information: https://www.privacytools.io/#webrtc
// user_pref("media.peerconnection.enabled", false);
// user_pref("media.peerconnection.use_document_iceservers", false);
// user_pref("media.peerconnection.video.enabled", false);
// user_pref("media.peerconnection.identity.enabled", false);
// user_pref("media.peerconnection.identity.timeout", 1);
// user_pref("media.peerconnection.turn.disable", true);
// user_pref("media.peerconnection.ice.tcp", false);
// user_pref("media.navigator.video.enabled", false);

// Restricts cookies, cache, etc. to the domain level. May break third party logins
// More information: https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/
// user_pref("privacy.firstparty.isolate", true);

// Stop Firefox from opening when Windows starts
// user_pref("toolkit.winRegisterApplicationRestart", false);

// Disable WebGL. May break graphics on some websites
// More information: https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
// user_pref("webgl.disabled", true);
// user_pref("webgl.disable-extensions", true);

/*
	Telemetry
*/

// Disable Mozilla Normandy and Shield Studies
// More information: https://github.com/mozilla/normandy
// user_pref("app.normandy.api_url", "");
// user_pref("app.normandy.enabled", false);
// user_pref("app.shield.optoutstudies.enabled", false);

// Disable crash reports. Crash reports may contain sensitive data, but Firefox ALWAYS ASKS if you want to send a crash report.
// user_pref("breakpad.reportURL", "");
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
// user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable Health Report
// More information: https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// user_pref("datareporting.healthreport.uploadEnabled", false);
// user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Stop Firefox from sending addon metadata to Mozilla to recommend you addons
// More information: https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
// user_pref("extensions.getAddons.cache.enabled", false);

// Disable Firefox Experiments 
// More information: https://wiki.mozilla.org/Telemetry/Experiments
// user_pref("experiments.activeExperiment", false);
// user_pref("experiments.enabled", false);
// user_pref("experiments.manifest.uri", "");
// user_pref("experiments.supported", false);
// user_pref("network.allow-experiments", false);

// Disable the "Get Add-ons" panel on about:addons (uses Google Analytics, and there's no way to disable just Google Analytics)
// user_pref("extensions.getAddons.showPane", false);
// user_pref("extensions.webservice.discoverURL", "");

// Disable Firefox telemetry
// user_pref("toolkit.telemetry.unified", false);
// user_pref("toolkit.telemetry.enabled", false);
// user_pref("toolkit.telemetry.server", "data:,");
// user_pref("toolkit.telemetry.archive.enabled", false);
// user_pref("toolkit.telemetry.cachedClientID", "");
// user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
// user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
// user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
// user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
// user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
// user_pref("toolkit.telemetry.hybridContent.enabled", false); // (FF59+)