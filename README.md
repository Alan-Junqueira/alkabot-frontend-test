## Project details

This project were developed by consuming Json Placeholder API, and its objective is get data from user, posts, and posts comments, using an current "tech stack".

The project consists in 5 routes.
- / --> Banner and general posts.
- /posts --> general posts.
- /posts/id --> Individual post info, with other posts done by the post owner.
- /users --> A list with user cards.
- /users/id --> Info card about the user, and posts done by the user.

## Acces Production project

Click to access the online build production. [https://alkabot-frontend-test.vercel.app](https://alkabot-frontend-test.vercel.app)

## Running Locally

First, clone and install dependencies.
```bash
# Clone this repository to a local repository
git clone git@github.com:Alan-Junqueira/alkabot-frontend-test.git
# Get in the repository
cd alkabot-frontend-test
# Install the dependecies
npm install
```

Second, run the development server || run the build server (faster than development server):

* Development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

* Build server
```bash
npm run build
# or
yarn build
# or
pnpm build
```
```bash
npm start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (development server || build server)

## Tech Stack

- Next Js
- React Js
- Tailwind css
- Typescript
- Axios
- Radix Ui
- phosphor-react
- eslint
