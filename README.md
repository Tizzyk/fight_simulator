#MMA Fight Simulation App

The purpose of this app is to allow a user to simulate a fight between two professional MMA fighters based on individual attributes. Fighters from any weight class can be matched up, but they must fight the same gender.

#Code Example

#Motivation

This project was created as my Capstone project for Thinkful's Python course. As an MMA fan I thought it would be fun project and eventually the goal is to create a strong enough prediction model with increased accuracy.

#Installation

Choose directory to clone files to

From source:

Inital setup:
```
git clone https://github.com/tydonk/fight_simulator
pip install requirements.txt
createdb fight_simulator_db
```

Update config.py with database settings:

In your database configuration file change USER and PASSWORD to yours
```
SQLALCHEMY_DATABASE_URI = "postgresql://USER:PASSWORD@localhost:5432/fight_simulator_db"
```

Populate database:
```
python3 scrapers.py PROMOTION_NAME
```

Currently, you can scrape for UFC and Bellator fighters. Each promotion must be scraped separately.

Run app:
```
python3 manage.py run
```

In your browser navigate to '0.0.0.0:8080' and page should be active.

#API Reference

Fighters currently pulled from UFC API (http://ufc-data-api.ufc.com/api/v3/iphone/fighters).

Fighters from other organizations will be added later as currently they don't offer API's.

#License

MIT License
See [license file](license.md)
