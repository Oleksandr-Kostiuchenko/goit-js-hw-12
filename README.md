================== Інтерактивна галерея ==================

Домашня робота містить два посилання: на вихідні файли і живу сторінку на GitHub
Pages Проєкт зібраний за допомогою Vite Консоль в інструментах розробника не
містить помилок, попереджень і консоль логів До проєкту підключені бібліотеки
iziToast, SimpleLightbox та css-loader Елементи на сторінці стилізовані згідно з
макетом (або власні стилі) На сторінці присутня форма пошуку зображень за
пошуковим словом При сабміті форми перед відправкою запиту на бекенд з’являється
індикатор завантаження з css-loader та очищаються попередні результати пошуку на
сторінці При сабміті форми відправляється запит на бекенд по ключовому слову для
пошуку зображень з усіма параметрами, що вказані в ТЗ Після отримання відповіді
від бекенда зникає індикатор завантаження та на сторінці відмальовуються
зображення на основі отриманих даних від бекенду, або з’являється повідомлення
про те, що підходящих результатів не було знайдено Нові зображення додаються в
DOM за одну операцію Після додавання нових елементів до списку зображень на
екземплярі SimpleLightbox викликається метод refresh() При кліку на маленьке
зображення в галереї відкривається його збільшена версія у модальному вікні з
використанням бібліотеки SimpleLightbox Під час виконання HTTP-запитів
використовуються обробники then() та catch(), щоб опрацьовувати можливі помилки
та запобігти “падінню” сторінки
