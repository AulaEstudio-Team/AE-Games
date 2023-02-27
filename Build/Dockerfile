FROM python:3.8-slim

#####################
# Prepare the image #
#####################

# install nginx
RUN apt-get update && apt-get install nginx -y
# copy our nginx configuration to overwrite nginx defaults.
COPY ./Build/nginx-app.conf /etc/nginx/conf.d/default.conf
# link nginx logs to container stdout
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

# Copy requirements
COPY ./requirements.txt ./app/

# change our working directory to app (where our source code will be)
WORKDIR /app

# create virtual env in /opt/venv \ update pip \ install requirements (using always the new vistual enviroment in /opt/venv)
RUN python -m venv /opt/venv && \
    /opt/venv/bin/python -m pip install pip --upgrade && \
    /opt/venv/bin/python -m pip install -r requirements.txt

# Create other relevant directories (for now only the gunicorn logs are required)
RUN mkdir mkdir /var/log/gunicorn

#################
# Load the code #
#################

# copy the django code
COPY ./src ./app

########################
# Prepare the endpoint #
########################

# Copy the endpoint.sh
COPY ./Build/entrypoint.sh ./config/

# make our entrypoint.sh executable
RUN chmod +x config/entrypoint.sh

# execute our entrypoint.sh file
CMD ["./config/entrypoint.sh"]
