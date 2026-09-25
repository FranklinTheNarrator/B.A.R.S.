## Таблица запросов

| Метод и путь | Тело | Успех | Возможная ошибка |
|---|---|---|---|
| GET /api/observations | - | 200, массив или [] | - |
| GET /api/observations/{id} | - | 200, объект | 404 |
| POST /api/observations | title, employeeId, description | 201, id, number, status: New | 400 |
| PATCH /api/observations/{id}/assignee | assigneeUserId | 200 | 404 |
| PATCH /api/observations/{id}/status | status | 200 | 404, 409 |

Статусы только: `New`, `InProgress`, `Closed`, `Cancelled`. Отмена — `Cancelled`, а не удаление строки.

Клиент не присылает при создании `id`, `number`, `status`, `stateTypeId` и исполнителя. Их определяет сервер.

## Пример JSON — POST /api/observations

```json
{
  "title": "Замер состояния оператора",
  "employeeId": 12,
  "description": "Утренний замер после планёрки"
}
```

## Пример ответа — 201

```json
{
  "id": 42,
  "number": "OBS-2026-0042",
  "status": "New"
}
```

## Пример — PATCH /api/observations/{id}/assignee

```json
{
  "assigneeUserId": 7
}
```

## Пример — PATCH /api/observations/{id}/status

```json
{
  "status": "InProgress"
}
```
