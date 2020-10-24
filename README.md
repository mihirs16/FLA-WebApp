# ![](https://github.com/mihirs16/FLA-WebApp/blob/master/static/assets/favicon-32x32.png) sand.

**S**imulation **A**pp for **N**FA and **D**FA is an Open-source web application 
that allows a user to build the transition table for any DFA or NFA Automaton and check if a 
given string is accepted or rejected by that model.

![](https://img.shields.io/github/issues/rushilrai/FLA-WebApp?color=red&style=for-the-badge)
![](https://img.shields.io/github/issues-closed/rushilrai/FLA-WebApp?color=green&style=for-the-badge)
![](https://img.shields.io/github/issues-pr-closed/rushilrai/FLA-WebApp?color=blue&style=for-the-badge)
![](https://img.shields.io/github/workflow/status/mihirs16/FLA-WebApp/Build%20and%20deploy%20Python%20app%20to%20Azure%20Web%20App%20-%20sand-fla/master?label=Azure%20Deploy%20Build&style=for-the-badge)

## Getting Started

* Fork this repository
* Clone your repository forked from this one

```bash
git clone https://github.com/:username/FLA-WebApp
```

* Install all `pip` libraries.

```bash
pip install requirements.txt
```

* Run the included development server.

```bash
python app.py
```

* You can view the frontend at `localhost:5000/` in your browser.

## Schema

* The API is capable of simulating FA Models (currently NFA and DFA).
* The schema and rules for each FA Model can be found at [FA_SCHEMA.md](https://github.com/rushilrai/FLA-WebApp/blob/master/FA_SCHEMA.md).
* The input schema for requests to the API can be found at [API_SCHEMA.md](https://github.com/rushilrai/FLA-WebApp/blob/master/API_SCHEMA.md).

---
If you found this repo cool and/or useful, please ⭐ the repo. If you want to contribute, go ahead and 🍴 it!
