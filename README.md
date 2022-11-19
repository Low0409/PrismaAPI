npm init -y

npm i prisma express nodemon @prisma/client

npx prisma init

【SQL shellでDBを作成し、接続】
CREATE DATABASE sample;
\c sample

.envを編集
DATABASE_URL="postgresql://postgres:パスワード@localhost:5432/データベース名?schema=public"

schema.prismaにModelを作り

npx prisma migrate dev --name init　でマイグレート

npx prisma studio　DB確認
