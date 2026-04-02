FROM jenkins/jenkins:lts
USER root

RUN apt -get update && \
    apt -get install -y --no-install-recomments \
    curl \
    ca-certificates \
    gnupg \
    docker.io && \
    rm -rf /var/lib/apt/lists/*

RUN curl -fsSL http://deb.nodesource.com/setup_20.x| bash -&& \
    apt -get install -y --no-install-recomments nodejs && \
    npm install -g \
        newman \
        newman-reporter-htmlextra \
        newman-reporter-junitfull && \
    apt -get clean && \
    rm -rf /var/lib/apt/lists/*

RUN groupadd -f docker && usermod -aG docker jenkins

USER jenkins

ENV JAVA_OPTS=
