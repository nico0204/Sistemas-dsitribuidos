FROM python:3.12

# Install dig (dnsutils)
RUN apt-get update && apt-get install -y dnsutils

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .