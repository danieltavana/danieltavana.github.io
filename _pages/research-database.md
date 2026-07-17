---
layout: page
permalink: /research-database/
title: Research database
description: Published articles, working papers, work in progress, book reviews, and policy writing — searchable and filterable.
nav: false
published: false
---

<!--
  PREVIEW PAGE — not linked in the site nav (nav: false).
  Records are read from _data/research.yml. Edit that file to add/change records.
  Filtering, search, and counts are handled client-side by the script at the bottom.
-->

<style>
  .rdb { margin-top: 1rem; }
  .rdb-stats { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; }
  .rdb-stat {
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 8px;
    padding: 0.6rem 0.9rem;
    line-height: 1.2;
    min-width: 6.5rem;
  }
  .rdb-stat .n { font-size: 1.5rem; font-weight: 700; color: var(--global-theme-color, #b509ac); }
  .rdb-stat .l { font-size: 0.8rem; color: var(--global-text-color-light, #828282); }

  .rdb-controls { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; }
  .rdb-controls input, .rdb-controls select {
    padding: 0.45rem 0.6rem;
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #000);
    font-size: 0.9rem;
  }
  .rdb-controls input { flex: 1 1 16rem; }
  .rdb-controls select { flex: 1 1 12rem; }

  .rdb-count { font-size: 0.9rem; color: var(--global-text-color-light, #828282); margin-bottom: 1rem; }

  .rdb-record { padding: 0.9rem 0; border-top: 1px solid var(--global-divider-color, #e0e0e0); }
  .rdb-record .rdb-title { margin: 0 0 0.25rem 0; font-size: 1.05rem; font-weight: 600; }
  .rdb-record .rdb-meta { font-size: 0.9rem; color: var(--global-text-color-light, #828282); margin-bottom: 0.4rem; }
  .rdb-links { margin-bottom: 0.4rem; }
  .rdb-links a { font-size: 0.85rem; margin-right: 0.75rem; }

  .rdb-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .rdb-tag {
    font-size: 0.72rem;
    padding: 0.12rem 0.5rem;
    border-radius: 999px;
    background: var(--global-bg-color, #f5f5f5);
    border: 1px solid var(--global-divider-color, #e0e0e0);
    color: var(--global-text-color-light, #666);
    white-space: nowrap;
  }
  .rdb-tag.rdb-type { border-color: var(--global-theme-color, #b509ac); color: var(--global-theme-color, #b509ac); }
  .rdb-empty { padding: 2rem 0; color: var(--global-text-color-light, #828282); }
</style>

<div class="rdb">

  <div class="rdb-stats" id="rdb-stats"></div>

  <div class="rdb-controls">
    <input type="text" id="rdb-search" placeholder="Search titles, coauthors, venues…" aria-label="Search">
    <select id="rdb-topic" aria-label="Filter by topic"></select>
    <select id="rdb-type" aria-label="Filter by type"></select>
    <select id="rdb-venue" aria-label="Filter by publication"></select>
    <select id="rdb-language" aria-label="Filter by language"></select>
  </div>

  <div class="rdb-count" id="rdb-count"></div>

  <div id="rdb-list">
  {% for item in site.data.research %}
    {% assign primary = item.links | first %}
    <article class="rdb-record"
      data-type="{{ item.type | escape }}"
      data-topics="{{ item.topics | join: '|' | escape }}"
      data-venue="{{ item.venue | escape }}"
      data-languages="{{ item.languages | join: '|' | escape }}"
      data-year="{{ item.year }}"
      data-search="{{ item.title | append: ' ' | append: item.authors | append: ' ' | append: item.venue | downcase | escape }}">
      <p class="rdb-title">
        {% if primary %}<a href="{{ primary.url }}" target="_blank" rel="noopener">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
      </p>
      <div class="rdb-meta">
        {{ item.authors }}{% if item.venue %} · <em>{{ item.venue }}</em>{% endif %}{% if item.year %} · {{ item.year }}{% endif %}{% if item.status %} · {{ item.status }}{% endif %}
      </div>
      {% if item.links and item.links.size > 0 %}
      <div class="rdb-links">
        {% for l in item.links %}<a href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>{% endfor %}
      </div>
      {% endif %}
      <div class="rdb-tags">
        <span class="rdb-tag rdb-type">{{ item.type }}</span>
        {% for t in item.topics %}<span class="rdb-tag">{{ t }}</span>{% endfor %}
        {% for lang in item.languages %}<span class="rdb-tag rdb-lang">{{ lang }}</span>{% endfor %}
      </div>
    </article>
  {% endfor %}
  </div>

  <div class="rdb-empty" id="rdb-empty" style="display:none;">No records match your filters.</div>

</div>

<script>
(function () {
  var list = document.getElementById('rdb-list');
  var records = Array.prototype.slice.call(list.querySelectorAll('.rdb-record'));

  var searchEl = document.getElementById('rdb-search');
  var topicEl = document.getElementById('rdb-topic');
  var typeEl = document.getElementById('rdb-type');
  var venueEl = document.getElementById('rdb-venue');
  var langEl = document.getElementById('rdb-language');
  var countEl = document.getElementById('rdb-count');
  var emptyEl = document.getElementById('rdb-empty');
  var statsEl = document.getElementById('rdb-stats');

  function splitAttr(v) { return v ? v.split('|').filter(Boolean) : []; }

  // Collect values + counts
  var topics = {}, types = {}, venues = {}, langs = {};
  function bump(obj, k) { if (!k) return; obj[k] = (obj[k] || 0) + 1; }

  records.forEach(function (r) {
    bump(types, r.dataset.type);
    bump(venues, r.dataset.venue);
    splitAttr(r.dataset.topics).forEach(function (t) { bump(topics, t); });
    splitAttr(r.dataset.languages).forEach(function (l) { bump(langs, l); });
  });

  function fillSelect(el, counts, allLabel, sortAlpha) {
    var keys = Object.keys(counts);
    keys.sort(function (a, b) {
      if (sortAlpha) return a.localeCompare(b);
      return counts[b] - counts[a] || a.localeCompare(b);
    });
    var html = '<option value="">' + allLabel + '</option>';
    keys.forEach(function (k) {
      html += '<option value="' + k.replace(/"/g, '&quot;') + '">' + k + ' (' + counts[k] + ')</option>';
    });
    el.innerHTML = html;
  }

  fillSelect(topicEl, topics, 'All topics', true);
  fillSelect(typeEl, types, 'All types', false);
  fillSelect(venueEl, venues, 'All venues', true);
  fillSelect(langEl, langs, 'All languages', false);

  // Summary stat cards
  function statCard(n, label) {
    return '<div class="rdb-stat"><div class="n">' + n + '</div><div class="l">' + label + '</div></div>';
  }
  var nPublished = types['Published Article'] || 0;
  var nWorking = (types['Working Paper'] || 0) + (types['Work in Progress'] || 0);
  var nOther = (types['Policy & Other Writing'] || 0) + (types['Book Review'] || 0);
  statsEl.innerHTML =
    statCard(records.length, 'searchable records') +
    statCard(nPublished, 'published articles') +
    statCard(nWorking, 'working / in progress') +
    statCard(nOther, 'reviews & other writing');

  // Sort: by year descending; unpublished (no year) first
  records.sort(function (a, b) {
    var ya = parseInt(a.dataset.year, 10); if (isNaN(ya)) ya = Infinity;
    var yb = parseInt(b.dataset.year, 10); if (isNaN(yb)) yb = Infinity;
    return yb - ya;
  }).forEach(function (r) { list.appendChild(r); });

  function apply() {
    var q = (searchEl.value || '').trim().toLowerCase();
    var fTopic = topicEl.value, fType = typeEl.value, fVenue = venueEl.value, fLang = langEl.value;
    var shown = 0;
    records.forEach(function (r) {
      var ok = true;
      if (fType && r.dataset.type !== fType) ok = false;
      if (ok && fVenue && r.dataset.venue !== fVenue) ok = false;
      if (ok && fTopic && splitAttr(r.dataset.topics).indexOf(fTopic) === -1) ok = false;
      if (ok && fLang && splitAttr(r.dataset.languages).indexOf(fLang) === -1) ok = false;
      if (ok && q && r.dataset.search.indexOf(q) === -1) ok = false;
      r.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    countEl.textContent = shown + (shown === 1 ? ' record shown' : ' records shown');
    emptyEl.style.display = shown === 0 ? 'block' : 'none';
  }

  [searchEl, topicEl, typeEl, venueEl, langEl].forEach(function (el) {
    el.addEventListener('input', apply);
    el.addEventListener('change', apply);
  });

  apply();
})();
</script>
