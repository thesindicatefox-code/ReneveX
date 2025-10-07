
ReneveX — Next.js (mobile deploy)

1) Создай аккаунт на https://vercel.com (в Safari на iPhone).
2) Нажми "Add New..." → "Project" → "Import Third-Party Git".
   Если нет GitHub — выбери "Deploy from a template" → "Import" и загрузите ZIP.
3) Загрузите этот ZIP, Vercel распакует и соберёт проект.
4) (Опционально) В Project Settings → Environment Variables добавь:
   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID — чтобы заявки шли в Телеграм.
5) Нажми "Deploy". Получишь ссылку вида https://renevex.vercel.app

Команды (если будешь запускать локально на ПК):
npm i
npm run dev
