---
layout: archive
title: "Research"
permalink: /research/
excerpt: "Spatial Biology and Gene Regulation, AI and Agents for Life Sciences, and Integrative Bioinformatics."
author_profile: true
hide_title: true
---

<div class="research-overview">
  {% for area in site.data.research %}
  <section class="research-area" id="{{ area.id }}" aria-labelledby="{{ area.id }}-title">
    <h1 class="research-area__title" id="{{ area.id }}-title">{{ area.title }}</h1>
    <div class="research-area__body">
      <div class="research-area__overview">
        <p>{{ area.description }}</p>
        {% if area.description_details %}
        <p>{{ area.description_details }}</p>
        {% endif %}
        <figure class="research-area__figure">
          <img src="{{ area.image | relative_url }}" alt="{{ area.image_alt | escape }}" width="{{ area.image_width }}" height="{{ area.image_height }}" loading="lazy" decoding="async">
        </figure>
      </div>

      <div class="research-area__publications">
        <ul class="research-area__works">
          {% for work in area.works %}
          <li class="research-work">
            <h2 class="research-work__title">{% if work.paper_url %}<a href="{{ work.paper_url }}">{{ work.title }}</a>{% else %}{{ work.title }}{% endif %}</h2>
            <div class="research-work__authors">
              {% for author in work.authors %}
              <span>{% if author.name == site.name %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% if author.equal %}<sup title="Equal contribution">†</sup>{% endif %}{% if author.corresponding %}<sup title="Corresponding author">✉</sup>{% endif %}</span>{% if forloop.last %}{% if work.authors_truncated %}, et al.{% endif %}{% else %}, {% endif %}
              {% endfor %}
            </div>
            <div class="research-work__meta"><em>{{ work.venue }}</em>{% if work.volume %} <strong>{{ work.volume }}</strong>{% if work.issue %}({{ work.issue }}){% endif %}{% endif %}{% if work.pages %}, {{ work.pages }}{% elsif work.article_number %}, {{ work.article_number }}{% endif %} ({{ work.year }}).</div>
            {% if work.review_status %}
            <div class="research-work__status">{{ work.review_status | escape }}</div>
            {% endif %}
            {% if work.doi %}
            <div class="research-work__doi">DOI: <a href="https://doi.org/{{ work.doi }}">{{ work.doi }}</a></div>
            {% endif %}
            <div class="research-work__links">
              {% for link in work.links %}
              <a href="{{ link.url }}" aria-label="{{ link.label | escape }} for {{ work.short_title | escape }}">{{ link.label }}</a>
              {% endfor %}
            </div>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </section>
  {% endfor %}
  <p class="research-overview__notes">† Equal contribution. ✉ Corresponding author.</p>
</div>
