# Wellabee

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then run the dev server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FAQ

- **Are you using redux for this project?** Using Redux for this small app would be overwhelming; instead, I'm using the context API to communicate between components. As you can see [here](https://github.com/DiegoSeC/wellabee-test/blob/95bb83b881a5f713f2f51122cb56b43d4ba7905d/pages/context/index.tsx#L23), first, I created a context provider as a functional component; then, I use this component as my root component.
- **What frameworks or libraries did you implement in this project?** The libraries and framework I'm using are:
  - NextJS to handle the backend side
  - React.
  - StyledComponent for my CSS Style.
  - SWR to call my API.
  - TypeScript
- **Is this an SSR application?** Kind of, I'm sending the user's info when the [page is loading](https://github.com/DiegoSeC/wellabee-test/blob/95bb83b881a5f713f2f51122cb56b43d4ba7905d/pages/index.tsx#L25), and that's all. Then, I'm using [SWR](https://github.com/DiegoSeC/wellabee-test/blob/95bb83b881a5f713f2f51122cb56b43d4ba7905d/pages/User.tsx#L71) to call the other endpoints of the app, as activities and drives, to simulate a standard app.
- **Are you using a database?** Unfortunately, I could not use one, just for lack of time. As mentioned in the document, I wanted to keep this test to only use one day of work. But I've created some [interfaces](https://github.com/DiegoSeC/wellabee-test/tree/main/interfaces) that simulate how I would make my entities in the database.
- **Why are you using StyledComponent?** I think StyledComponent is the best approach because it lets me reuse my component outside this project (if that needs it) and enables me to encapsulate the styles and avoid conflicts with other elements.
- **Where should I start?** The first file you should look at is the index file located on `pages/index.tsx`, and for the API, you should look inside of `pages/api`
