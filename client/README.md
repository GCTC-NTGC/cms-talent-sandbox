# Getting Started
## Development

Install and then run [Node Version Manager](https://github.com/nvm-sh/nvm):

```bash
nvm use
```

Install node modules:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

Build the production application:

```bash
npm run build
```

Run the production application:

Install and then run [PM2](https://github.com/Unitech/pm2):

```bash
pm2 start npm --name "client" -- start
```