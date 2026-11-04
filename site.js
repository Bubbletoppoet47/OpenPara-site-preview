// PREVIEW: the version and the download button follow the newest Playground build (dev- pre-release).
(function () {
  fetch("https://api.github.com/repos/Bubbletoppoet47/OpenPara/releases?per_page=30").then(function (r) { return r.ok ? r.json() : null; }).then(function (list) {
    var rel = (list || []).filter(function (x) { return /^dev-/.test(x.tag_name || "") && !x.draft; })[0];
    if (!rel) return;
    var exe = (rel.assets || []).filter(function (a) { return /Setup.*\.exe$/i.test(a.name); })[0];
    var v = (rel.tag_name || "").replace(/^dev-/, "");
    var b = document.getElementById("ver-btn"); if (b && v) b.textContent = "(" + v + ")";
    var f = document.getElementById("foot-ver"); if (f && v) f.textContent = v + " (playground)";
    var d = document.getElementById("dl-exe"); if (d && exe) { d.href = exe.browser_download_url; d.textContent = "Download OpenPara Playground " + v + " for Windows"; }
    var i = document.getElementById("dl-info");
    if (i && v) i.textContent = "Newest Playground build " + v + (exe ? " (" + Math.round(exe.size / 1048576) + " MB)" : "") + ", built " + new Date(rel.published_at).toLocaleDateString() + ".";
  }).catch(function () {});
})();
