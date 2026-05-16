/* shared.js — helpers used on every page */

var API_KEY = 'AIzaSyA3ojztcYc5xHXBk_GpzYdYE2irCLsxmqc';
var toastTimer = null;

function gid(id) { return document.getElementById(id); }

function showLoading() {
  var el = gid('loading');
  if (el) el.className = 'on';
}
function hideLoading() {
  var el = gid('loading');
  if (el) el.className = '';
}

function showToast(msg) {
  var t = gid('toast');
  if (!t) return;
  t.innerHTML = msg;
  t.className = 'on';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.className = ''; }, 3000);
}

function fmtNum(n) {
  if (!n) return '0';
  n = parseInt(n, 10);
  if (n >= 1000000000) return (n / 1000000000).toFixed(1) + 'B';
  if (n >= 1000000)    return (n / 1000000).toFixed(1)    + 'M';
  if (n >= 1000)       return (n / 1000).toFixed(1)       + 'K';
  return '' + n;
}

function escHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildUrl(endpoint, params) {
  var url = 'https://www.googleapis.com/youtube/v3/' + endpoint + '?key=' + API_KEY;
  for (var k in params) {
    if (params.hasOwnProperty(k)) {
      url += '&' + k + '=' + encodeURIComponent(params[k]);
    }
  }
  return url;
}

function apiCall(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try { callback(null, JSON.parse(xhr.responseText)); }
        catch (e) { callback('Parse error', null); }
      } else {
        callback('HTTP ' + xhr.status, null);
      }
    }
  };
  xhr.send();
}

/* ---- State helpers (localStorage) ---- */
function saveState(key, val) {
  try { localStorage.setItem('youtv_' + key, JSON.stringify(val)); } catch (e) {}
}
function loadState(key, def) {
  try {
    var v = localStorage.getItem('youtv_' + key);
    return v !== null ? JSON.parse(v) : def;
  } catch (e) { return def; }
}