---
layout: page
permalink: /electoral-data/
title: Electoral data
nav: false
---

<!--
  To add links to an entry, insert a list before its closing </details>:
  <ul class="course-meta">
    <li><a href="URL" target="_blank" rel="noopener">Data</a></li>
    <li><a href="URL" target="_blank" rel="noopener">Codebook</a></li>
    <li><a href="URL" target="_blank" rel="noopener">Publication</a></li>
  </ul>
  Only include the links a dataset actually has.
-->

<style>
  details { margin-bottom: 0.5rem; }
  details summary {
    padding: 0.25rem 0;
    cursor: pointer;
    list-style: none;
  }
  details summary::-webkit-details-marker { display: none; }
  details summary::before {
    content: "+";
    display: inline-block;
    width: 1rem;
    font-weight: bold;
    color: inherit;
  }
  details[open] summary::before { content: "−"; }
  details[open] summary { margin-bottom: 0.5rem; }
  h2 { margin-top: 2.5rem; }
  h3 { margin-top: 1.75rem; margin-bottom: 1rem; }
  .course-meta { list-style: none; padding: 0; margin: 0.5rem 0 0 0; }
  .course-meta li { position: relative; padding-left: 1rem; margin: 0; line-height: 1.5; }
  .course-meta li::before { content: "— "; position: absolute; left: 0; }
</style>

### Iran

<details>
<summary>Islamic Consultative Assembly Election Results [2012–2024]</summary>
<p>This dataset contains candidate-level results from the 2012, 2016, 2020, and 2024 Islamic Consultative Assembly elections in Iran. Results are disaggregated at the electoral district level.</p>
</details>

### Kuwait

<details>
<summary>Kuwait National Assembly Elections Dataset (KNAED) [1963–2024]</summary>
<p>The Kuwait National Assembly Elections Dataset (KNAED) is an original dataset that includes every candidate who ran in any general election or by-election for the Kuwait National Assembly (KNA) from 1963 to 2024. It comprises 5,762 candidate-election observations for 3,172 unique individuals across 21 general elections and 22 by-elections. For each candidate, the dataset records electoral performance (votes, rank, and result), district, incumbency, sectarian and tribal affiliation, ideological and political-current affiliation, and legislative roles such as ministerial appointments, bloc membership, and the speakership. It builds on a dataset originally collected by Michael Herb, subsequently updated, expanded, and cleaned by Daniel L. Tavana.</p>
<p>Publications:</p>
<ol>
  <li>Daniel L. Tavana and Erin York. 2025. "Legislative Cooptation in Authoritarian Regimes: Policy Cooperation in the Kuwait National Assembly." <em>British Journal of Political Science</em> 55. [<a href="https://doi.org/10.1017/S0007123424000371" target="_blank" rel="noopener">DOI</a>] [<a href="/assets/pdf/2025_bjps.pdf" target="_blank" rel="noopener">PDF</a>]</li>
  <li>Daniel L. Tavana. 2026. "Endogenous Opposition: Identity and Ideology in Kuwaiti Electoral Politics." <em>American Journal of Political Science</em> 70(2): 623-642. [<a href="https://doi.org/10.1111/ajps.12960" target="_blank" rel="noopener">DOI</a>] [<a href="/assets/pdf/2026_ajps.pdf" target="_blank" rel="noopener">PDF</a>]</li>
  <li>Mostafa El Sharkawy and Daniel L. Tavana. "Sacred Times, Sectarian Politics: Group Identity and Legislative Behavior in Authoritarian Regimes."</li>
</ol>
</details>

<details>
<summary>Kuwait Tribal Primary Election Dataset (KTPED) [1963–2016]</summary>
<p>This dataset contains candidate-level results from every tribal primary held in Kuwait from 1963 to 2016.</p>
</details>

<details>
<summary>Kuwait Electoral Demography Dataset (KEDD) [1981–2024]</summary>
<p>The Kuwait Electoral Demography Dataset (KEDD) tracks the number of registered voters by ethnic group in each of Kuwait's electoral districts from 1981 to 2024, mapping the spatial distribution of groups across the country's electoral geography. It records the size of each group — including the Sunni and Shia <em>hadhar</em>, Ahl Barr Faris, and each of the 21 tribes that have participated in electoral politics since independence — in every district over time. The data are drawn from newspaper coverage of campaigns and tribal primaries, government administrative records, and scholarly analyses by prominent Kuwaiti sociologists and political scientists, with conflicting estimates triangulated across sources. The KEDD is designed to be merged with the Kuwait National Assembly Elections Dataset (KNAED) at the group-district-year level, situating candidates within the demographic structure of their districts.</p>
<p>Publications:</p>
<ol>
  <li>Daniel L. Tavana. 2026. "Endogenous Opposition: Identity and Ideology in Kuwaiti Electoral Politics." <em>American Journal of Political Science</em> 70(2): 623-642. [<a href="https://doi.org/10.1111/ajps.12960" target="_blank" rel="noopener">DOI</a>] [<a href="/assets/pdf/2026_ajps.pdf" target="_blank" rel="noopener">PDF</a>]</li>
</ol>
</details>

### Lebanon

<details>
<summary>Lebanon Chamber of Deputies Election Results [2009, 2018, 2022]</summary>
<p>This dataset contains polling station-level results from Lebanon's 2009, 2018, and 2022 Chamber of Deputies elections, compiled from the Lebanese Ministry of Interior and Municipalities. For each polling station it records the votes won by every candidate and list, along with the number of valid, invalid, and blank ballots. Each candidate is hand-coded for party affiliation and each list is classified (for example, as a governing-party, opposition, or unaffiliated list), drawing on analyses by Lebanese civil society organizations, research centers, and media outlets. Polling stations are matched to localities using UNHCR/UNICEF locality codes, allowing results to be linked to geographic and demographic data.</p>
</details>

<details>
<summary>Lebanon Chamber of Deputies Election Voter Rolls [2018, 2022]</summary>
<p>This dataset contains the lists of registered voters released by the Lebanese Ministry of Interior and Municipalities before the 2018 and 2022 Chamber of Deputies elections. For each registered voter, the data record date of birth, gender, ethnosectarian (religious) identity, and the assigned polling station. Because voters are allocated to polling stations by gender, registration number, and registered sect, the data can be aggregated to the polling-station and locality levels to construct demographic measures such as median age, gender balance, and sectarian composition.</p>
</details>
