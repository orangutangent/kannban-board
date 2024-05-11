# Канбан доска

## Описание проекта

Это веб-приложение для управления задачами, где пользователь может легко создавать, редактировать и перемещать задачи между различными колонками. Также пользователь может настраивать количество колонок, создавая новые, редактируя и удаляя существующие. 

## Цель задания

Основной целью данного задания является отработка следующих навыков:

- Взаимодействие с сервером: В рамках этого задания требуется создать механизм взаимодействия с сервером для получения и отправки данных, необходимых для функционирования приложения. Это может включать в себя использование HTTP-запросов, обработку ответов и ошибок сервера и обновление интерфейса при получении обновлении данных. Разработка надежного и эффективного взаимодействия с сервером является ключевым аспектом современного веб-разработки, который позволяет приложениям быть динамичными и актуальными.

- Работа с драг&дроп: В процессе выполнения задания необходимо реализовать функциональность драг&дроп для перемещения задач между различными колонками.

- Создание собственного Ui-kit: Вам необходимо будет спроектировать и  разработать набор компонентов пользовательского интерфейса (UI), который может быть многократно использован в проектах для обеспечения единообразия и согласованности в дизайне и интеракции пользователей. Этот навык позволяет разработчикам эффективно работать над проектами, сокращая время разработки и обеспечивая качество и стиль.

## Ресурсы

- Макет примерного проекта доступен по ссылке: [Figma](https://www.figma.com/file/DcFh9tfdnGkUQbMQux3kzT/Kanban-%D0%A1%D1%82%D0%B0%D0%B6%D0%B5%D1%80%D1%8B-Front-3-%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F?type=design&node-id=1-2&mode=design&t=wdCNm7LL07SsXLLo-0)

- Для имитации запросов и формирования заглушек используется: [MackAPI](https://mockapi.io/)

## Запуск проекта

```
Установить зависимости: npm install

Запустить frontend: npm run dev

Открыть приложение в браузере: http://localhost:3000

Используемая версия Node - v20.9.0
```
---
В этом проекте используется [`next/font`](https://extjs.org/docs/basic-features/font-optimization) для автоматической оптимизации и загрузки пользовательского шрифта Google Inter.

## Скрипты

- `npm run dev` - Запуск Next.js в режиме разработки
- `npm run start` - Запуск Next.js в рабочем режиме
- `npm run build` - Сборка

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

В проекте используется prettier для проверки кода.


## Адаптив

Для корректного отображения на различных разрешениях используются медиа-запросы, которые поддерживают разрешения:
1920px, 1024px, 375px, а также все промежуточные значения.


## Конфигурация проекта

Для разработки проект использует сборщик Turbopack 

## UI-компоненты

Для проекта были написаны собственные UI-компоненты, которые хранятся в shared/UI:

- ### [Button](/shared/UI/Button.tsx)

Компонент кнопки. Включает в себя 3 типа кнопок, выбираемых в зависимости от переданных пропсов

- ### [modal](/shared/UI/Modal.tsx)

Компонент модального окна. Принимает пропсами поля формы, кнопки и функции для событий.

- ### [Input](/shared/UI/Input.tsx)

Компонент инпут. Принимает пропсами необходимые элементы в зависимости от типа модального окна.

- ### [SelectColor](/shared/UI/SelectColor.tsx)

Компонент select`a. Прописана логика для выбора цвета для колонок.

- ### [Textarea](/shared/UI/Textarea.tsx)

Компонент textarea, используется для создания многострочного поля ввода.

- ### [card](/shared/UI/card.tsx)

Компонент карточки задачи, который содержит логику драг и дроп для карточки, пропсами получает объект карточки с необходимыми полями.

- ### [status](/shared/UI/status.tsx)

Компонент статуса карточки, принимает пропсами цвет и название колонки.

- ### [tag](/shared/UI/tag.tsx)

Компонет тега карточки, принимает пропсами наименование тега.


## Участники

### Гайкалов Данил
 Задачи:
 - 1
 - 2
 - 3
 - 4


### Карцев Денис
Задачи:
 - 1
 - 2
 - 3
 - 4

### Ярлыкова Юлия
Задачи:
 - Верстка и стилизация карточки, статуса, тега, колонки
 - Система нотификации (обработка ошибок с сервера, вывод ошибок пользователю)
 - Написание Readme.md
 - Верстка и стилизация кнопок удаления и кнопки добавления колонки
 - Адаптив



