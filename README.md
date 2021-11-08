# apollo-server-prisma-ts01
apollo-server-prisma-ts01


## MEMO


```
npm run codegen
npm run dev
npm run dev:exp
npm run dev:exp-all
```
#### migrate

```
npx prisma migrate dev --name init
```

prisma studio
```
npx prisma studio
```

#### DB

```
docker-compose up -d
```

出力
```
docker exec -u root mysql_host mysqldump -u root -proot -h localhost mydb > ./mysql/bk_db/dump002.sql
```