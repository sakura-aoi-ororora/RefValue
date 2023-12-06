FROM ubuntu:24.04

RUN --mount=type=cache,target=/var/lib/apt/lists \
  --mount=type=cache,target=/var/cache/apt/archives \
  apt-get update && apt-get install -y git curl unzip

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN ln -s /root/.deno/bin/deno /usr/bin/deno