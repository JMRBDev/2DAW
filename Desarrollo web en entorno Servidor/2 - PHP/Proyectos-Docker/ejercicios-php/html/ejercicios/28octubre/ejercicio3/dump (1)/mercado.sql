-- phpMyAdmin SQL Dump

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercado`
--
CREATE DATABASE IF NOT EXISTS `mercado` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mercado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `IdCategoria` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`IdCategoria`, `Nombre`, `Descripcion`) VALUES
(1, 'Vegetal fresco', 'Producto perecedero: vegetales y verduras frescas'),
(2, 'Vegetal congelado', 'Producto perecedero: vegetales y verduras congeladas y/o deshidratadas'),
(3, 'Pescado vivo', 'Producto perecedero: Pescados y marisco vivos'),
(4, 'Pescado fresco', 'Producto perecedero: Pescados y marisco frescos'),
(5, 'Pescado congelado', 'Producto perecedero: Pescados y marisco congelados'),
(6, 'Lácteo leche', 'Producto perecedero: Lácteos leche'),
(7, 'Lácteo queso', 'Producto perecedero: Lácteos queso'),
(8, 'Lácteo queso fresco', 'Producto perecedero: Lácteos quesos frescos'),
(9, 'Lácteo mantequilla', 'Producto perecedero: Lácteos mantequilla'),
(10, 'Zumo congelado', 'Producto perecedero: jugos y zumos congelados'),
(11, 'Zumo refrigerado', 'Producto perecedero: jugos y zumos refrigerados'),
(12, 'Fruta fresca', 'Producto perecedero: frutas frescas'),
(13, 'Fruta congelada', 'Producto perecedero: frutas congeladas'),
(14, 'Carne fresca', 'Producto perecedero: carnes frescas'),
(15, 'Carne congelada', 'Producto perecedero: carnes congeladas'),
(16, 'Alimento procesado fresco', 'Producto perecedero: alimentos procesados frescos'),
(17, 'Alimento procesado congelado', 'Producto perecedero: alimentos procesados congelados'),
(18, 'Pastas, arroces y legumbres', 'Producto de larga duración'),
(19, 'Patatas fritas y frutos secos.', 'Producto de larga duración'),
(20, 'Aceites.', 'Producto de larga duración'),
(21, 'Liquidos con', 'Liquidos con Alcohol: producto de larga duración'),
(22, 'Liquidos sin', 'Liquidos sin Alcohol: producto de larga duración');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `IdPedido` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `FechaRecogida` datetime NOT NULL,
  `Preparado` int(11) NOT NULL,
  `Recogido` int(11) NOT NULL,
  `Cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`IdPedido`, `Fecha`,`FechaRecogida`, `Preparado`, `Recogido`, `Cliente`) VALUES
(79, '2018-12-20 15:50:33', '2018-12-20 15:50:33', 1, 1, 1),
(80, '2018-12-20 15:51:41','2018-12-20 15:50:33', 1, 1, 1),
(81, '2018-12-20 16:41:13','2018-12-20 15:50:33', 0, 1, 1),
(82, '2018-12-20 17:29:39', '2018-12-20 15:50:33',0, 1, 1),
(83, '2018-12-20 23:13:23','2018-12-20 15:50:33', 0, 1, 1),
(84, '2018-12-20 23:14:07','2018-12-20 15:50:33', 0, 1, 1),
(85, '2018-12-20 23:15:02','2018-12-20 15:50:33', 0, 1, 1),
(86, '2018-12-24 10:56:29','2018-12-20 15:50:33', 0, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidosproductos`
--

CREATE TABLE `pedidosproductos` (
  `IdPedProd` int(11) NOT NULL,
  `Pedido` int(11) NOT NULL,
  `Producto` int(11) NOT NULL,
  `Unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidosproductos`
--

INSERT INTO `pedidosproductos` (`IdPedProd`, `Pedido`, `Producto`, `Unidades`) VALUES
(65, 79, 5, 1),
(66, 79, 2, 4),
(67, 80, 5, 1),
(68, 81, 3, 1),
(69, 81, 4, 1),
(70, 82, 6, 1),
(71, 82, 3, 1),
(72, 83, 5, 1),
(73, 84, 5, 1),
(74, 85, 3, 1),
(75, 86, 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `IdProd` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(90) NOT NULL,
  `Peso` float NOT NULL,
  `Stock` int(11) NOT NULL,
  `Categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`IdProd`, `Nombre`, `Descripcion`, `Peso`, `Stock`, `Categoria`) VALUES
(1, 'Azúcar', '8 paquetes de 1kg de azúcar cada uno', 8, 94, 18),
(2, 'Pimienta', '20 paquetes de 1kg cada uno', 20, 3, 18),
(3, 'Agua 0.5', '100 botellas de 0.5 litros cada una', 51, 85, 21),
(4, 'Agua 1.5', '20 botellas de 1.5 litros cada una', 31, 45, 21),
(5, 'Cerveza Alhambra tercio', '24 botellas de 33cl', 10, 12, 22),
(6, 'Vino tinto Rioja 0.75', '6 botellas de 0.75 ', 5.5, 7, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `IdCliente` int(11) NOT NULL,
  `Telefono` varchar(90) NOT NULL,
  `Nombre` varchar(90) NOT NULL,
  `Clave` varchar(45) NOT NULL,
  `CP` int(5) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`IdCliente`, `Telefono`, `Nombre`, `Clave`, `CP`, `Direccion`, `Rol`) VALUES
(1, '666666661', 'Rocio Perez', '1234', 28002, 'C/ Andalucía, 8', 1),
(2, '666666662', 'Esther Gonzalez', '1234', 11001, 'C/ Libertad, 2 ', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`IdCategoria`),
  ADD UNIQUE KEY `UN_NOM_CAT` (`Nombre`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`IdPedido`),
  ADD KEY `Cliente` (`Cliente`);

--
-- Indices de la tabla `pedidosproductos`
--
ALTER TABLE `pedidosproductos`
  ADD PRIMARY KEY (`IdPedProd`),
  ADD KEY `IdPedido` (`Pedido`),
  ADD KEY `IdProd` (`Producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IdProd`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`IdCliente`),
  ADD UNIQUE KEY `UN_RES_TEL` (`Telefono`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `IdPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `pedidosproductos`
--
ALTER TABLE `pedidosproductos`
  MODIFY `IdPedProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IdProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `IdCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`Cliente`) REFERENCES `clientes` (`IdCliente`);

--
-- Filtros para la tabla `pedidosproductos`
--
ALTER TABLE `pedidosproductos`
  ADD CONSTRAINT `pedidosproductos_ibfk_1` FOREIGN KEY (`Pedido`) REFERENCES `pedidos` (`IdPedido`),
  ADD CONSTRAINT `pedidosproductos_ibfk_2` FOREIGN KEY (`Producto`) REFERENCES `productos` (`IdProd`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`Categoria`) REFERENCES `categorias` (`IdCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
