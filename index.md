---
layout: default
title: Hi I'm Paul
---
  <div id="posts">
      {% for post in site.posts offset: 0 limit: 3 %}
         <div class="post-title"><a> <!-- href="{{ post.url }}" -->{{ post.title }}</a> <em>{{ post.date | date_to_string }}</em></div>

        {{ post.content }}
      {% endfor %}
  </div>