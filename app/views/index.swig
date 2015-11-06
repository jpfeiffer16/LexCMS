{% extends 'layout.swig' %}

{% block content %}
  <form method="post">
    <h1>{{ title }}</h1>
    <p>Welcome to {{ title }}</p>
    
    <span>Title</span>
    <input type="text" name="title">
    <span>Code</span>
    <input type="text" name="code">
    
    <input type="submit" value="Submit">
  </form>
{% endblock %}
