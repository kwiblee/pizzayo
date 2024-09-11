-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Хост: sql7.freemysqlhosting.net
-- Час створення: Вер 04 2024 р., 11:15
-- Версія сервера: 5.5.62-0ubuntu0.14.04.1
-- Версія PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `sql7728671`
--

-- --------------------------------------------------------

--
-- Структура таблиці `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `imageUrl` text NOT NULL,
  `ingridients` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп даних таблиці `products`
--

INSERT INTO `products` (`id`, `type`, `name`, `description`, `price`, `imageUrl`, `ingridients`) VALUES
(1, 'pizzas', 'Pizza of halves', 'Two flavors in one pizza 35 cm', 7.23, 'https://media.dodostatic.net/image/r:584x584/11EE7D61BB2BD856BD5DFD71FB7D4210.webp', 'thin mozzrella tomato'),
(2, 'pizzas', 'Cheese', 'Mozzarella, cheddar and parmesan cheeses, signature alfredo sauce', 13.3, 'https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.webp', 'Mozzarella cheddar and parmesan cheeses signature alfredo sauce'),
(3, 'pizzas', 'Pepperoni fresh', 'Spicy pepperoni, increased portion of mozzarella, tomatoes, signature tomato sauce', 8.3, 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.webp', 'Spicy pepperoni increased portion of mozzarella tomatoes signature tomato sauce'),
(4, 'pizzas', 'Double chicken', 'Chicken, mozzarella, special alfredo sauce', 9.5, 'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.webp', 'Chicken, mozzarella, special alfredo sauce'),
(5, 'pizzas', 'Ham and cheese', 'Ham, mozzarella, special alfredo sauce', 13.5, 'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.webp', 'Ham, mozzarella, special alfredo sauce'),
(6, 'pizzas', 'Chorizo fresh', 'Spicy chorizo ??sausages, bell peppers, mozzarella, signature tomato sauce', 12.53, 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp', 'Spicy chorizo ??sausages, bell peppers, mozzarella, signature tomato sauce'),
(7, 'pizzas', 'Chorizo fresh', 'Spicy chorizo sausages, bell peppers, mozzarella, signature tomato sauce', 12.53, 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp', 'Spicy chorizo sausages, bell peppers, mozzarella, signature tomato sauce'),
(8, 'pizzas', 'Pizza Julien', 'Chicken, champignons, aromatic mushroom sauce, onion, dry garlic, mozzarella, a mixture of cheddar and parmesan cheeses, signature alfredo sauce', 15.53, 'https://media.dodostatic.net/image/r:584x584/11EE7D6175C10773BFE36E56D48DF7E3.webp', 'Chicken, champignons, aromatic mushroom sauce, onion, dry garlic, mozzarella, a mixture of cheddar and parmesan cheeses, signature alfredo sauce'),
(9, 'pizzas', 'Meat', 'Chicken, ham, spicy pepperoni, spicy chorizo sausages, mozzarella, signature tomato sauce', 12.42, 'https://media.dodostatic.net/image/r:584x584/11EE7D6175C10773BFE36E56D48DF7E3.webp', 'Chicken, ham, spicy pepperoni, spicy chorizo sausages, mozzarella, signature tomato sauce'),
(10, 'pizzas', 'Burger pizza', 'Ham, pickled cucumbers, tomatoes, red onion, garlic, burger sauce, mozzarella, special tomato sauce', 13.14, 'https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.webp', 'Ham, pickled cucumbers, tomatoes, red onion, garlic, burger sauce, mozzarella, special tomato sauce'),
(11, 'pizzas', 'Cheese chicken', 'Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, signature alfredo sauce, garlic', 9.14, 'https://media.dodostatic.net/image/r:584x584/11EE7D610E8BBB248F31270BE742B4BD.webp', 'Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, signature alfredo sauce, garlic'),
(12, 'pizzas', 'Four seasons', 'An increased portion of mozzarella, ham, spicy pepperoni, cheese cubes, tomatoes, champignons, Italian herbs, signature tomato sauce', 12.64, 'https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.webp', 'Mozzarella, ham, spicy pepperoni, cheese cubes, tomatoes, champignons, Italian herbs, signature tomato sauce'),
(13, 'pizzas', 'Hawaiian', 'Double portion of chicken, pineapples, mozzarella, special alfredo sauce', 12.64, 'https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.webp', 'Double portion of chicken, pineapples, mozzarella, special alfredo sauce'),
(14, 'combos', 'Combo Breakfast for two', 'Hot breakfast for two. 2 snacks and 2 drinks of your choice', 15.64, 'https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.webp', 'Hot breakfast for two. 2 snacks and 2 drinks of your choice'),
(15, 'combos', 'Four in one', 'If you want a little bit of everything. Small pizza, appetizer, drink and sauce. The price of the combo depends on the selected products and may be increased', 24.34, 'https://media.dodostatic.net/image/r:584x584/11EEB0721E536EECA59C7BE93DC7E723.webp', ''),
(16, 'combos', '3 pizzas 25 cm', 'A real tasting. Three small pizzas at a super price. The price of the combo depends on the selected pizzas and can be increased', 21.53, 'https://media.dodostatic.net/image/r:584x584/11EEB07EB1D19D15AF2389C1567FC88C.webp', ''),
(17, 'combos', '7 pizzas', '7 is a lucky number, especially if we are talking about 7 medium pizzas for a company of 15-20 people. The price of the combo depends on the selected pizzas and can be increased', 58.23, 'https://media.dodostatic.net/image/r:584x584/11EE7E21932E5D01A54F817C7E85FDFB.webp ', ''),
(18, 'desserts', 'Puff sticks with pineapples and lingonberries', 'Here everything is at once - lingonberries and pineapple with condensed milk on puff pastry', 8.23, 'https://media.dodostatic.net/image/r:584x584/11EE796FFF9F5E6EB14E281FC5F491EC.webp', ''),
(19, 'desserts', 'Cheesecake New York', 'We tried a thousand desserts and finally found the guests favorite - the most delicate curd cheesecake', 4.59, 'https://media.dodostatic.net/image/r:584x584/11EEE20B6B6EC471AB74AB8F8885775B.webp', ''),
(20, 'desserts', 'Banana cheesecake with chocolate cookies', 'Sunny on the outside and bright in taste on the inside. Summer novelty - delicate cheesecake with banana and chocolate cookies', 4.31, 'https://media.dodostatic.net/image/r:584x584/11EE797014D8F94683D580455892ABA1.webp ', ''),
(21, 'desserts', 'Chocolate cookies', 'Cookies look like a planet, but taste like a chocolate comet with icing', 2.11, 'https://media.dodostatic.net/image/r:584x584/11EE7970210A7A54AFF74B239EA3D66F.webp', ''),
(22, 'desserts', 'Fondant', 'Four out of five guests say “Oh la la!” when they eat this French dessert with a crispy crust and melted chocolate filling', 5.18, 'https://media.dodostatic.net/image/r:584x584/11EE7D61B85ADB349AAD5044EC2803AE.webp ', ''),
(23, 'desserts', 'Bracelets', 'These are savory sweet rolls filled with a mix of natural lingonberries and condensed milk.', 3.34, 'https://media.dodostatic.net/image/r:584x584/11EF4D99F27073FDBAEBF88D28A43F8A.webp', ''),
(24, 'desserts', 'Cheesecakes with raspberry jam', 'The favorite dessert of many of our guests is rosy cheesecakes from the oven. So tender, moderately sweet and reminiscent of childhood', 1.52, 'https://media.dodostatic.net/image/r:584x584/11EE7D61B7DE873C82A72DB3BE601BD4.webp', ''),
(25, 'desserts', 'Cheesecakes with condensed milk', 'Tender cheesecakes baked in the oven with portioned condensed milk', 1.52, 'https://media.dodostatic.net/image/r:584x584/11EE7D61877A2EE09AA2178718EFB59C.webp', ''),
(26, 'drinks', 'Rich Tea Black with lemon', '', 2.1, 'https://media.dodostatic.net/image/r:584x584/11EE7D61AD5C2FCFBBBB6AA525E38A04.webp', ''),
(27, 'drinks', 'Rich Tea Black Green', '', 2.1, 'https://media.dodostatic.net/image/r:584x584/11EE7D61AB1F976991362A5A42A2613E.webp ', ''),
(28, 'drinks', 'Rich Tea Black Green with Mango', '', 2.1, 'https://media.dodostatic.net/image/r:584x584/11EE7D61AB5E21EFBAD01AF3F44296C3.webp', ''),
(29, 'drinks', 'Orange juice Rich', '', 2.73, 'https://media.dodostatic.net/image/r:584x584/11EE7D61B223E75EB71498BCAA0D4A0D.webp ', ''),
(30, 'drinks', 'Apple juice Rich', '', 2.73, 'https://media.dodostatic.net/image/r:584x584/11EE7D61B27F1652B9A918BDDD753D8D.webp', ''),
(31, 'drinks', 'Cherry nectar Rich', '', 2.73, 'https://media.dodostatic.net/image/r:584x584/11EE7D61B2E1A3F78B935F10D27FE406.webp', '');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `email` text NOT NULL,
  `password` longtext CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
