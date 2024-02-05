# Full-stack UEHS blog

A full stack blog implementation with Docker.

PS: I will later work on this project.

## Students

- Roman Vovk 46046
- Asadov Shukrulla 41156

## What I use in my project?

<div  align="center">

<img  src="https://github-readme-tech-stack.vercel.app/api/cards?title=Stack&align=center&lineCount=4&theme=github_dark&line1=node.js,NodeJS,26a269;postgresql,Postgresql,3584e4;prisma,Prisma,9141ac;express,Express,62a0ea;&line2=next.js,Next,ffffff;react,React,3584e4;Tailwind%20CSS,Tailwind%20CSS,62a0ea;&line4=docker,docker,1c71d8;&line3=OpenTelemetry,OpenTelemetry,c061cb;)"  />

</div>

## How to run project

Build and run the Docker containers:

```
   docker-compose up
```

To run in the background, use:

```
   docker-compose up -d
```

To build and run:

```
    docker-compose up --build
```

Then, project will be visually available in you localhost. Here => http://localhost:3000/

### BUGS / DO NOT FORGET to enable CORS extension on your browser:

if your browser is Firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/

Because, project is designed for production and credentials = true, so if you face CORS issue while sending requests, please do that.

And, if you install new package, stop docker containers with

```
docker compose down
```

and build then again you can start.

## Screenshots

### Project UI

<a href="https://ibb.co/8NS3xpr"><img src="https://i.ibb.co/8NS3xpr/Screenshot-2024-02-03-at-19-22-31-2.png" alt="Screenshot-2024-02-03-at-19-22-31-2" border="0"></a>
<a href="https://ibb.co/37H3FC0"><img src="https://i.ibb.co/37H3FC0/Screenshot-2024-02-03-at-19-22-47-2.png" alt="Screenshot-2024-02-03-at-19-22-47-2" border="0"></a>
<a href="https://ibb.co/qnS6gYP"><img src="https://i.ibb.co/qnS6gYP/Screenshot-2024-02-03-at-19-23-15-2.png" alt="Screenshot-2024-02-03-at-19-23-15-2" border="0"></a>
<a href="https://ibb.co/sKST0q9"><img src="https://i.ibb.co/sKST0q9/Screenshot-2024-02-03-at-19-24-33-2.png" alt="Screenshot-2024-02-03-at-19-24-33-2" border="0"></a>
<a href="https://ibb.co/xhYX6Pw"><img src="https://i.ibb.co/xhYX6Pw/Screenshot-2024-02-03-at-19-25-08-2.png" alt="Screenshot-2024-02-03-at-19-25-08-2" border="0"></a>
<a href="https://ibb.co/tP9SgJN"><img src="https://i.ibb.co/tP9SgJN/Screenshot-2024-02-03-at-19-25-21-2.png" alt="Screenshot-2024-02-03-at-19-25-21-2" border="0"></a>

### Docker Desktop containers

<a href="https://ibb.co/r5Z1S9j"><img src="https://i.ibb.co/QY61R0g/Screenshot-2024-02-03-at-19-31-03.png" alt="Screenshot-2024-02-03-at-19-31-03" border="0"></a>
<a href="https://ibb.co/Twb6FYx"><img src="https://i.ibb.co/0nFTdmR/Screenshot-2024-02-03-at-19-33-23.png" alt="Screenshot-2024-02-03-at-19-33-23" border="0"></a>

## Containers

There are 6 containers:

- Backend (Node.js, Express)
- Frontend (React)
- Prometheus (for metrics)
- Database (PostgreSQL, Prisma)
- Redis(for cashing)
- Grafana (for analytics, dashboard)
