FROM ruby:2.7

WORKDIR /app

RUN apt-get update -y -q \
	&& apt-get install -y -q \
	build-essential mariadb-client

# install entrykit
ENV ENTRYKIT_VERSION 0.4.0
RUN wget https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && tar -xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && mv entrykit /bin/entrykit \
  && chmod +x /bin/entrykit \
  && entrykit --symlink

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler:2.1
RUN mkdir -p /app/tmp/cache /app/tmp/pids /app/tmp/sockets

COPY . /app

RUN bundle config path /bundle

ENTRYPOINT ["prehook", "bundle install --path /bundle --jobs 4", "--"]
