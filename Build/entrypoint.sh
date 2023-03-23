#!/bin/bash

# Variables
RUN_PORT="8000"     # Gunicorn run port 


# Migrate the changes of the database. (dont request user input)
/opt/venv/bin/python manage.py migrate --no-input 
# Collect all the static files (css, js, assets, ...) to the folder specified in the settings.py file
/opt/venv/bin/python manage.py collectstatic
# run nginx      
nginx
# run gnunicorn
/opt/venv/bin/gunicorn ae_games.wsgi --bind "0.0.0.0:${RUN_PORT}" --error-logfile /var/log/gunicorn/error.log --access-logfile /var/log/gunicorn/access.log --capture-output --log-level debug --reload
