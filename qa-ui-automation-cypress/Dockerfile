FROM jenkins/jenkins:lts

USER root

# Install required packages for:
RUN apt-get update && apt-get install -y \
    docker.io \
    docker-compose-v2 \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Docker socket permission inside container
RUN chmod 666 /var/run/docker.sock || true


ENV JAVA_OPTS="-Dorg.jenkinsci.plugins.durabletask.BourneShellScript.HEARTBEAT_CHECK_INTERVAL=86400"

USER jenkins
