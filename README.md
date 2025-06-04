# Typescript Networked Store

Интернет-магазин центральных процессоров (некоммерческое веб-приложение)

## Стек :

- React
- Typescript
- Redux Toolkit
- Supabase
- Swiper.js React
- React Router
- React-hook-form
- CRA, node.js v.10.8.0

## Страницы сайта :

### Главная страница
<a href="https://crede322.github.io/TNS/#/" target="_blank" rel="noopener noreferrer"><img src="./screenshots/screenshot1mainpage.webp" alt="Главная страница"></a>
<details>
<summary>Содержимое главной страницы</summary>
<img style="margin-bottom: 20px;" src="./screenshots/screenshot2mainpage.webp" alt="главная страница">
<h2 style="color: #0080f5;">Блок "Вы недавно смотрели"</h2>
<img src="./screenshots/screenshot3mainpage.webp" alt="главная страница">
</details>
<div style="margin-bottom: 50px;"></div>


### Каталог / Поиск
<a href="https://crede322.github.io/TNS/#/catalog?q=null&page=1" target="_blank" rel="noopener noreferrer"><img src="./screenshots/screenshot1catalogpage.jpg" alt="каталог"></a>
<details>
<summary>Содержимое таблицы товаров</summary>
<img src="./screenshots/screenshot2catalogpage.jpg" alt="каталог">
</details>
<div style="margin-bottom: 50px;"></div>


### Страница товара
<a href="https://crede322.github.io/TNS/#/product/5" target="_blank" rel="noopener noreferrer"><img src="./screenshots/screenshot1productpage.webp" alt="товар"></a>
<div style="margin-bottom: 50px;"></div>


### Страница "Избранные"

Количество избранных товаров всегда актуально и отображается на кнопке в хедере, реализовано через localStorage + redux
<a href="https://crede322.github.io/TNS/#/wishlist" target="_blank" rel="noopener noreferrer"><img src="./screenshots/screenshot1wishlist.jpg" alt="избранные"></a>
<img src="./screenshots/screenshot2wishlist.jpg" alt="избранные"/>
<div style="margin-bottom: 50px;"></div>


### Страница "Корзина"

При наведении на кнопку корзины в хедере, показывается popup с содержимым,
также на кнопке отображается число экземпляров

<a href="https://crede322.github.io/TNS/#/cart" target="_blank" rel="noopener noreferrer"><img src="./screenshots/screenshot1cartpage.jpg" alt="корзина"></a>

<details>
<summary>Содержимое страницы корзины</summary>
Учитываются как экземпляры, так и единицы.
В левой части карточки товаров, можно менять количество конкретного товара, это отобразится в калькуляторе справа:
7шт процессора1, 1шт процессора2, 1шт процессора3 - итого 9 товаров на сумму 238 500 рублей.
<img src="./screenshots/screenshot2cartpage.jpg" alt="корзина"/>
</details>
<div style="margin-bottom: 50px;"></div>

### Страница "Авторизация"

При наведении на кнопку "профиля" в хедере показывается popup

<img src="/screenshots/schreenshot1authpage.jpg" alt="авторизация"/>
<img src="/screenshots/schreenshot2authpage.jpg" alt="авторизация"/>

## Описание :

##### Компоненты функциональные.

##### Авторизация на Supabase и стейт-менеджер Redux привязаны в основном к Header-компоненту.

##### Слайдеры на сайте: Swiper.js.

##### Ссылки ведущие на страницы "не про программирование" ведут на мокап-страницу.

## Деплой

[crede322.github.io/TNS/](https://crede322.github.io/TNS/)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
