# Core Suite Frontend

This repository contains the core-suite frontend code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

```bash
git clone git@github.com:moosefaceee/test-core-suite-frontend.git
```

Enter the cloned repositories' directory

```bash
cd core-suite-frontend
```

Install the projects dependencies

```bash
yarn
```

Create a `.env` file based on the [.env.example template](.env.example) (at the time of writing, no additional env vars are required)

Export the contents of the created `.env` file to the current terminal session.

```bash
set -o allexport; source .env; set +o allexport
```

Start the backend server or alternatively update the `VITE_API_HOST` value to point to a deployed backend URL.

Start the projects development server

```bash
yarn dev
```

The project should now be available at http://localhost:3000

<!-- ![login page](https://i.imgur.com/N2Kv2UV.png) -->

## Environments

Below is a detailed list of the current deployed environments, how they can accessed and any other relevant information.

### Development

> This environment is deployed to automatically on every merge to the `develop` branch.

**Access**
This environment can be accessed using the credentials below.

| Portal  | Endpoint                                           | Username | Password    |
| ------- | -------------------------------------------------- | -------- | ----------- |
| Admin   | https://backend-dev.core-suite.sovtech.org/admin/  | admin    | Sovtech123! |
| User    | https://dev.core-suite.sovtech.org/                |          |             |
| GraphQL | https://backend-dev.core-suite.sovtech.org/graphql |          |             |

### Staging

> This environment is deployed to automatically on every merge to the `master` branch.

**Access**
This environment can be accessed using the credentials below.

| Portal  | Endpoint                                           | Username | Password    |
| ------- | -------------------------------------------------- | -------- | ----------- |
| Admin   | https://backend-uat.core-suite.sovtech.org/admin/  | admin    | Sovtech123! |
| User    | https://uat.core.sovtech-suite.org/                |          |             |
| GraphQL | https://backend-uat.core-suite.sovtech.org/graphql |          |             |

### Production

> This environment is deployed to manually by promoting a build from the `master` branch.

**Access**
This environment can be accessed using the credentials below.

| Portal  | Endpoint                                            | Username | Password    |
| ------- | --------------------------------------------------- | -------- | ----------- |
| Admin   | https://backend-prod.core-suite.sovtech.org/admin/  | admin    | Sovtech123! |
| User    | https://prod.core-suite.sovtech.org/                |          |             |
| GraphQL | https://backend-prod.core-suite.sovtech.org/graphql |          |             |

## Deployment

Deployments are handled by bitbucket pipelines, below is an overview of how the deployments work:

1. Dependencies are installed with `yarn`
2. Unit tests are run with `yarn test`
3. Application is built `yarn build`
4. Static assets are deployed to Amazon S3 and the cloudfront distribution cache is invalidated.

## Environment Variables

These are the environment variables required to successfully deploy the application.

### Repository Variables

| key                   | description                                       |
| --------------------- | ------------------------------------------------- |
| AWS_DEFAULT_REGION    | Default AWS region key for deployment             |
| VITE_BUGSNAG_API_KEY  | Bugsnag project API key                           |
| AWS_ACCESS_KEY_ID     | AWS IAM access key with deploy permissions        |
| AWS_SECRET_ACCESS_KEY | AWS IAM secret access key with deploy permissions |
| COVERALLS_ENDPOINT    | SovTech custom coveralls API endpoint             |

### Deployment Variables

Each of the below keys need to be applied to each deployment (dev, uat, prod) and their values will be dependant on the environment.

| key             | description                             |
| --------------- | --------------------------------------- |
| VITE_API_HOST   | Backend API endpoint                    |
| CLOUDFRONT_DIST | Cloudfront Distribution ID              |
| VITE_STAGE      | Current environment e.g dev, uat, prod  |
| S3_BUCKET       | S3 Bucket URI for front-end static site |

## Networking

### DNS records

DNS records are managed by AWS Route53. Each record is an A alias record points to a Cloudfront distribution.

### Cloudfront CDN

All static assets are distributed via Cloudfront. Each environment has it's own Cloudfront distribution. Distributions are invalidated on every deployment.

## Security

### SSL certificates

SSL certificates are managed by AWS certificate manager. Certificates are issued for `core-suite.sovtech.org` and `*.core-suite-suite.sovtech.org` in the `us-east-1` region.
Certificates are auto renewed by AWS certificate manager granted the validation records are still present.

## Built With

Details of the tech stack that has been used.

- [React](https://reactjs.org/) - Client Framework
- [ChakraUI](https://chakra-ui.com/) - UI Framework
- [Vite](https://vitejs.dev/) - Frontend Tooling

## Architecture

A basic architecture diagram or description of the chosen architecture should be detailed here.
[Coming Soon!]

## Infrastructure

A list of infrastructure requirements

- AWS S3
- AWS CloudFront
- AWS Route53

## Services

A list of all services used in this project.

| Service Name | Owner/Admin             | Service Details                                                                                     |
| ------------ | ----------------------- | --------------------------------------------------------------------------------------------------- |
| AWS          | aws+core-suite@sov.tech | Access the core-suite org using IAM credentials, here https://sovtech.signin.aws.amazon.com/console |

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on the SovTech standard for commit messages and the accepted pull request process.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Versioning occurs automatically in the pipelines using [Semantic Release](https://github.com/semantic-release/semantic-release). For the versions available, see the tags on this repository.

## Changelog

A running changelog can be found here: [CHANGELOG.md](CHANGELOG.md)

## Authors

- **Daniel Harten** <daniel@sov.tech>

## Licenses

Place the result of `npx license-checker --summary` here

```
├─ MIT: 209
├─ ISC: 7
├─ Apache-2.0: 4
├─ BSD-3-Clause: 3
├─ 0BSD: 2
├─ CC-BY-4.0: 1
├─ W3C: 1
└─ UNLICENSED: 1
```

## Troubleshooting

Below are a few common issues users experience - including an overview of their possible cause and solutions.

## Meta

| Version | Author                             | Date       |
| ------- | ---------------------------------- | ---------- |
| 0.0.1   | Yatin Badal <yatin@sovtech.com>    | 17/03/2020 |
| 0.0.2   | Daniel Harten <daniel@sovtech.com> | 15/06/2022 |
