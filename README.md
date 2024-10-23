# Install dependencies
```bash
npm install
```

## Create migrations
```bash
npx typeorm migration:create src/migrations/name_migrations --outputJs 
```

## Run migrations
```bash
npx typeorm migration:run -d src/config/typeorm.config.js
```

## Run application
```bash
npm run dev
```