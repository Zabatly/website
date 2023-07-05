-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for zabatly
CREATE DATABASE IF NOT EXISTS `zabatly` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `zabatly`;

-- Dumping structure for table zabatly.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL DEFAULT '',
  `ar_name` tinytext NOT NULL DEFAULT '',
  `description` text NOT NULL DEFAULT '',
  `ar_description` text NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.categories: ~11 rows (approximately)
INSERT INTO `categories` (`id`, `name`, `ar_name`, `description`, `ar_description`) VALUES
	(25, 'Weddings', 'ا لافراح', 'Find venues suitable for wedding ceremonies and receptions, providing elegant settings and services.', 'ابحث عن الأماكن المناسبة لحفلات الزفاف والاحتفالات، وتوفر إعدادات أنيقة وخدمات متميزة'),
	(26, 'Meetings/Conferences', 'الاجتماعات/المؤتمرات', 'Discover venues equipped with meeting rooms and conference facilities for corporate events and gatherings.', 'استكشف الأماكن المجهزة بغرف اجتماعات ومرافق المؤتمرات للفعاليات والتجمعات الشركات'),
	(27, 'Workshops/Trainings', 'ورش العمل/التدريبات', 'Find venues suitable for hosting workshops, training sessions, and educational programs.', 'ابحث عن الأماكن المناسبة لاستضافة ورش العمل وجلسات التدريب والبرامج التعليمية'),
	(28, 'Parties/Events', 'الحفلات/الفعاليات', 'Discover venues for hosting parties, celebrations, and special events, offering a festive atmosphere and amenities.', 'استكشف الأماكن لاستضافة الحفلات والاحتفالات والفعاليات الخاصة، وتوفر أجواء احتفالية ووسائل راحة'),
	(29, 'Exhibitions/Trade Shows', 'المعارض/المعارض التجارية', 'Find venues suitable for hosting exhibitions, trade shows, and product showcases.', 'ابحث عن الأماكن المناسبة لاستضافة المعارض والمعارض التجارية وعروض المنتجات'),
	(30, 'Fitness/Wellness', 'اللياقة البدنية/العافية', 'Discover venues dedicated to fitness activities, including gyms, yoga studios, and wellness centers.', 'استكشف الأماكن المخصصة لأنشطة اللياقة البدنية، بما في ذلك الصالات الرياضية واستوديوهات اليوجا ومراكز العافية'),
	(31, 'Music Rehearsals', 'تجارب الموسيقى', 'Find venues suitable for music rehearsals and practice sessions for bands and musicians.', 'ابحث عن الأماكن المناسبة لتجارب الموسيقى وجلسات الممارسة للفرق الموسيقية والموسيقيين'),
	(32, 'Film/Photo Shoots', 'تصوير الأفلام/الصور', 'Discover venues suitable for film and photo shoots, providing unique backdrops and settings', 'اكتشف الأماكن المناسبة لتصوير الأفلام والصور، وتوفر خلفيات فريدة وإعدادات مميزة'),
	(33, 'Art Exhibitions', 'معارض الفن', 'Find venues dedicated to art exhibitions, showcasing visual arts, sculptures, and installations.', 'ابحث عن الأماكن المخصصة لمعارض الفن، والتي تعرض الفنون البصرية والنحت والتركيبات'),
	(34, 'Cultural Events', 'الفعاليات الثقافية', 'Discover venues hosting cultural events such as music performances, dance shows, and theatrical productions.', 'استكشف الأماكن التي تستضيف الفعاليات الثقافية مثل العروض الموسيقية وعروض الرقص والإنتاجات المسرحية'),
	(35, 'Charity Events', 'الفعاليات الخيرية', 'Find venues suitable for hosting charity events and fundraisers, supporting noble causes and philanthropic initiatives.', 'ابحث عن الأماكن المناسبة لاستضافة الفعاليات الخيرية وجمع التبرعات، ودعم القضايا النبيلة والمبادرات الخيرية');

-- Dumping structure for table zabatly.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL DEFAULT '',
  `ar_name` tinytext NOT NULL DEFAULT '',
  `zipcode` mediumint(9) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.cities: ~12 rows (approximately)
INSERT INTO `cities` (`id`, `name`, `ar_name`, `zipcode`) VALUES
	(12, 'Cairo', 'القاهرة', 12345),
	(13, 'Alexandria', 'الإسكندرية', 67890),
	(14, 'Giza', 'الجيزة', 23456),
	(15, 'Sharm El Sheikh', 'شرم الشيخ', 78901),
	(16, 'Luxor', 'الأقصر', 34567),
	(17, 'Aswan', 'أسوان', 89012),
	(18, 'Hurghada', 'الغردقة', 45678),
	(19, 'Mansoura', 'المنصورة', 90123),
	(20, 'Port Said', 'بورسعيد', 56789),
	(21, 'Suez', 'السويس', 1234),
	(22, 'Tanta', 'طنطا', 65432),
	(23, 'Asyut', 'أسيوط', 98765);

-- Dumping structure for table zabatly.featurename
CREATE TABLE IF NOT EXISTS `featurename` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL DEFAULT '',
  `ar_name` tinytext NOT NULL DEFAULT '',
  `description` text NOT NULL DEFAULT '',
  `ar_description` text NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.featurename: ~20 rows (approximately)
INSERT INTO `featurename` (`id`, `name`, `ar_name`, `description`, `ar_description`) VALUES
	(1, 'Parking facilities', 'مرافق وقوف السيارات', 'The venue provides ample parking space for the convenience of guests.', 'توفر المكان مساحة كافية لوقوف السيارات لراحة الضيوف.'),
	(2, 'Wi-Fi', ' واي فاي', 'The venue offers Wi-Fi/internet access for guests to stay connected during their visit.', 'يوفر المكان وصولًا إلى الإنترنت / واي فاي للضيوف للبقاء متصلين أثناء زيارتهم.'),
	(3, 'Audio/visual equipment', 'معدات الصوت والفيديو', 'The venue is equipped with state-of-the-art audio/visual equipment for presentations and performances.', 'يتمتع المكان بمعدات الصوت والفيديو عالية التقنية للعروض والأداء.'),
	(4, 'Stage or performance area', 'منصة أو منطقة أداء', 'The venue features a dedicated stage or performance area for live entertainment and presentations.', 'يتميز المكان بمنصة مخصصة أو منطقة أداء للترفيه المباشر والعروض.'),
	(5, 'Dance floor', 'ساحة رقص', 'The venue includes a spacious dance floor for guests to enjoy dancing and entertainment.', 'يتضمن المكان ساحة رقص واسعة لاستمتاع الضيوف بالرقص والترفيه.'),
	(6, 'Catering services', 'خدمات التموين', 'The venue offers professional catering services, providing a variety of delicious food and beverages.', 'يقدم المكان خدمات تموين محترفة، ويوفر مجموعة متنوعة من الطعام والمشروبات اللذيذة.'),
	(7, 'Bar or beverage service', 'بار أو خدمة المشروبات', 'The venue has a bar or beverage service available, serving a selection of alcoholic and non-alcoholic drinks.', 'يتوفر في المكان بار أو خدمة المشروبات، ويقدم مجموعة من المشروبات الكحولية وغير الكحولية.'),
	(8, 'Outdoor seating area', 'منطقة جلوس خارجية', 'The venue features an outdoor seating area where guests can relax and enjoy the surroundings.', 'يضم المكان منطقة جلوس خارجية حيث يمكن للضيوف الاسترخاء والاستمتاع بالمحيط.'),
	(9, 'Air conditioning/Heating', 'تكييف الهواء / التدفئة', 'The venue is equipped with air conditioning/heating systems to ensure a comfortable environment for guests.', 'مجهز المكان بأنظمة تكييف الهواء / التدفئة لضمان بيئة مريحة للضيوف.'),
	(10, 'Restrooms', 'دورات المياه', 'The venue has clean and well-maintained restrooms available for the convenience of guests.', 'يحتوي المكان على دورات مياه نظيفة ومحافظ عليها لراحة الضيوف.'),
	(11, 'Wheelchair accessibility', 'إمكانية الوصول للكراسي المتحركة', 'The venue is wheelchair accessible, providing ramps and facilities for guests with mobility needs.', 'يوفر المكان إمكانية الوصول للكراسي المتحركة، ويقدم منحدرات ومرافق لضيوف ذوي الاحتياجات الخاصة.'),
	(12, 'Projector and screen', 'جهاز العرض والشاشة', 'The venue offers a projector and screen setup for presentations, slideshows, and visual displays.', 'يوفر المكان نظام عرض الفيديو والشاشة للعروض وعروض الشرائح والعروض المرئية.'),
	(13, 'Lighting systems', 'أنظمة الإضاءة', 'The venue is equipped with professional lighting systems to create the desired ambiance and mood.', 'مجهز المكان بأنظمة إضاءة احترافية لإنشاء الأجواء والمزاج المطلوب.'),
	(14, 'Sound systems', 'أنظمة الصوت', 'The venue features high-quality sound systems to ensure clear and immersive audio experiences.', 'يتميز المكان بأنظمة صوت عالية الجودة لضمان تجارب صوتية واضحة وغامرة.'),
	(15, 'VIP/Exclusive area', 'منطقة خاصة / حصرية', 'The venue offers a VIP or exclusive area for special guests, providing enhanced services and privacy.', 'يوفر المكان منطقة خاصة أو حصرية للضيوف الخاصين، ويوفر خدمات محسنة والخصوصية.'),
	(16, 'Lounge or reception area', 'صالة أو منطقة استقبال', 'The venue includes a lounge or reception area where guests can socialize and relax.', 'يتضمن المكان صالة أو منطقة استقبال حيث يمكن للضيوف التواصل والاسترخاء.'),
	(17, 'Tables and chairs', 'الطاولات والكراسي', 'The venue provides tables and chairs for seating arrangements and dining purposes.', 'يوفر المكان طاولات وكراسي لترتيبات الجلوس وأغراض تناول الطعام.'),
	(18, 'Event coordination services', 'خدمات تنسيق الفعاليات', 'The venue offers event coordination services to assist in planning and organizing special occasions.', 'يقدم المكان خدمات تنسيق الفعاليات للمساعدة في التخطيط وتنظيم المناسبات الخاصة.'),
	(19, 'Security services', 'خدمات الأمان', 'The venue has professional security services to ensure the safety and well-being of guests and their belongings.', 'يحتوي المكان على خدمات أمان احترافية لضمان سلامة وراحة الضيوف وممتلكاتهم.'),
	(20, 'Cleaning services', 'خدمات التنظيف', 'The venue provides cleaning services to maintain a clean and tidy environment throughout the event.', 'يوفر المكان خدمات التنظيف للحفاظ على بيئة نظيفة ومرتبة طوال فترة الفعالية.');

-- Dumping structure for table zabatly.features
CREATE TABLE IF NOT EXISTS `features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `venueID` int(11) NOT NULL,
  `featureID` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_features_venues` (`venueID`),
  KEY `FK_featureID` (`featureID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.features: ~0 rows (approximately)
INSERT INTO `features` (`id`, `venueID`, `featureID`) VALUES
	(1, 14, 3),
	(2, 14, 9),
	(3, 14, 15),
	(4, 15, 2),
	(5, 15, 12),
	(6, 15, 16),
	(7, 16, 13),
	(8, 16, 14),
	(9, 16, 17),
	(10, 17, 1),
	(11, 17, 8),
	(12, 17, 10),
	(13, 18, 5),
	(14, 18, 7),
	(15, 18, 18),
	(16, 19, 1),
	(17, 19, 2),
	(18, 19, 3),
	(19, 20, 4),
	(20, 20, 6),
	(21, 20, 8),
	(22, 21, 2),
	(23, 21, 3),
	(24, 21, 9),
	(25, 22, 1),
	(26, 22, 5),
	(27, 22, 8),
	(28, 23, 1),
	(29, 23, 7),
	(30, 23, 8),
	(31, 24, 9),
	(32, 24, 10),
	(33, 24, 11),
	(34, 25, 1),
	(35, 25, 2),
	(36, 25, 5),
	(37, 26, 8),
	(38, 26, 9),
	(39, 26, 10),
	(40, 27, 1),
	(41, 27, 3),
	(42, 27, 8),
	(43, 28, 2),
	(44, 28, 4),
	(45, 28, 11),
	(46, 29, 5),
	(47, 29, 7),
	(48, 29, 8),
	(49, 30, 6),
	(50, 30, 9),
	(51, 30, 10),
	(52, 31, 3),
	(53, 31, 5),
	(54, 31, 10),
	(55, 32, 1),
	(56, 32, 4),
	(57, 32, 9),
	(58, 33, 1),
	(59, 33, 3),
	(60, 33, 8),
	(61, 34, 2),
	(62, 34, 4),
	(63, 34, 11),
	(64, 35, 1),
	(65, 35, 2),
	(66, 35, 8),
	(67, 36, 2),
	(68, 36, 9),
	(69, 36, 10),
	(70, 37, 3),
	(71, 37, 8),
	(72, 37, 10),
	(73, 38, 1),
	(74, 38, 7),
	(75, 38, 9),
	(76, 39, 4),
	(77, 39, 9),
	(78, 39, 10),
	(79, 40, 2),
	(80, 40, 3),
	(81, 40, 9),
	(82, 41, 1),
	(83, 41, 5),
	(84, 41, 6),
	(85, 42, 3),
	(86, 42, 4),
	(87, 42, 9),
	(88, 43, 1),
	(89, 43, 2),
	(90, 43, 8),
	(91, 44, 1),
	(92, 44, 2),
	(93, 44, 7),
	(94, 45, 1),
	(95, 45, 2),
	(96, 45, 4),
	(97, 46, 1),
	(98, 46, 2),
	(99, 46, 5),
	(100, 47, 1),
	(101, 47, 2),
	(102, 47, 8),
	(103, 48, 1),
	(104, 48, 2),
	(105, 48, 9),
	(106, 49, 1),
	(107, 49, 2),
	(108, 49, 3),
	(109, 50, 1),
	(110, 50, 2),
	(111, 50, 10),
	(112, 51, 2),
	(113, 51, 3),
	(114, 51, 8),
	(115, 52, 1),
	(116, 52, 4),
	(117, 52, 8),
	(118, 53, 2),
	(119, 53, 3),
	(120, 53, 5),
	(121, 54, 1),
	(122, 54, 3),
	(123, 54, 8),
	(124, 55, 2),
	(125, 55, 6),
	(126, 55, 7),
	(127, 56, 1),
	(128, 56, 3),
	(129, 56, 9),
	(130, 57, 2),
	(131, 57, 5),
	(132, 57, 9),
	(133, 58, 1),
	(134, 58, 3),
	(135, 58, 5);

-- Dumping structure for table zabatly.payments
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `reserveID` int(11) NOT NULL,
  `paymentDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `amount` smallint(6) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_payments_users` (`userID`),
  KEY `FK_payments_reservations` (`reserveID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.payments: ~0 rows (approximately)

-- Dumping structure for table zabatly.reservations
CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) DEFAULT NULL,
  `venueID` int(11) DEFAULT NULL,
  `paymentID` int(11) DEFAULT NULL,
  `reserveDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cost` int(11) NOT NULL DEFAULT 0,
  `startTime` date NOT NULL,
  `endTime` date NOT NULL,
  `guestsNumber` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reservations_users` (`userID`),
  KEY `FK_reservations_venues` (`venueID`),
  KEY `FK_reservations_payments` (`paymentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.reservations: ~0 rows (approximately)

-- Dumping structure for table zabatly.reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `venueID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `rating` tinyint(4) NOT NULL DEFAULT 0,
  `heading` tinytext NOT NULL DEFAULT '',
  `description` text NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK_reviews_venues` (`venueID`),
  KEY `FK_reviews_users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.reviews: ~0 rows (approximately)

-- Dumping structure for table zabatly.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clerkID` text NOT NULL,
  `firstName` text DEFAULT '',
  `lastName` text DEFAULT '',
  `phoneNumber` varchar(16) DEFAULT '',
  `address` text DEFAULT '',
  `email` tinytext NOT NULL,
  `username` varchar(48) NOT NULL,
  `password` tinytext DEFAULT '',
  `registerationDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `country` varchar(56) CHARACTER SET utf8 COLLATE utf8_swedish_ci DEFAULT 'Egypt',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `clerkID`, `firstName`, `lastName`, `phoneNumber`, `address`, `email`, `username`, `password`, `registerationDate`, `country`) VALUES
	(4, 'user_2Ps8RAF55OJq2uFn24iKPrkF9Pd', '', '', '', '', 'youssef.marakshy@gmail.com', 'youssefmarakshy', '', '2023-05-16 07:53:42', 'Egypt'),
	(5, 'user_2Q0rb2oAViSamYJSFdYFnXLDE1O', '', '', '', '', 'killeryoyo01@gmail.com', '', '', '2023-05-19 10:03:30', 'Egypt'),
	(6, 'user_2Q0shXuNwt1dGz9gR3ul4DDRxjA', '', '', '', '', 'youssef.marakshy@gmail.com', '', '', '2023-05-19 10:12:35', 'Egypt'),
	(7, 'user_2Q0uFc8YzZKu9fuB5xdaiNMv8Xs', '', '', '', '', 'youssef.marakshy@gmail.com', '', '', '2023-05-19 10:27:00', 'Egypt'),
	(8, 'user_2Q0uFc8YzZKu9fuB5xdaiNMv8Xs', '', '', '', '', 'youssef.marakshy@gmail.com', '', '', '2023-05-19 10:27:29', 'Egypt');

-- Dumping structure for table zabatly.venues
CREATE TABLE IF NOT EXISTS `venues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext DEFAULT '',
  `ar_name` tinytext DEFAULT '',
  `categoryID` int(11) NOT NULL,
  `cityID` int(11) NOT NULL,
  `capacity` smallint(6) DEFAULT 0,
  `description` text DEFAULT '',
  `ar_description` text DEFAULT '',
  `rating` tinyint(4) DEFAULT 0,
  `price` int(11) DEFAULT 0,
  `space` smallint(6) DEFAULT 0,
  `rules` text DEFAULT '',
  `ar_rules` text DEFAULT '',
  `policy` text DEFAULT '',
  `ar_policy` text DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK_venues_categories` (`categoryID`) USING BTREE,
  KEY `FK_venues_cities` (`cityID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.venues: ~45 rows (approximately)
INSERT INTO `venues` (`id`, `name`, `ar_name`, `categoryID`, `cityID`, `capacity`, `description`, `ar_description`, `rating`, `price`, `space`, `rules`, `ar_rules`, `policy`, `ar_policy`) VALUES
	(14, 'Nile Palace', 'قصر النيل', 25, 12, 0, 'Nile Palace offers a luxurious venue for wedding ceremonies and receptions, with breathtaking views of the Nile River.', 'قصر النيل يقدم مكانًا فخمًا لحفلات الزفاف والاحتفالات، مع إطلالات ساحرة على نهر النيل.', 0, 5000, 500, 'No smoking allowed. Outside catering is not permitted.', 'غير مسموح بالتدخين. غير مسموح بتقديم الطعام من خارج الفندق.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(15, 'Business Hub', 'مركز الأعمال', 26, 12, 0, 'Business Hub offers fully-equipped meeting rooms and conference facilities for corporate events and professional gatherings.', 'يوفر مركز الأعمال غرف اجتماعات مجهزة بالكامل ومرافق للمؤتمرات للفعاليات الشركات والتجمعات المهنية.', 0, 2000, 200, 'No outside food or drinks allowed. Respect the privacy of other attendees.', 'غير مسموح بإحضار الطعام أو الشراب من خارج المكان. احترم خصوصية المشاركين الآخرين.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(16, 'Artistic Haven', 'ملجأ فني', 33, 12, 0, 'Artistic Haven is a vibrant venue dedicated to hosting art exhibitions, featuring various visual arts, sculptures, and installations.', 'ملجأ فني هو مكان حيوي مخصص لاستضافة معارض الفن، ويضم مختلف الفنون البصرية والنحت والتركيبات.', 0, 1500, 300, 'No pets allowed inside the venue. Keep the venue clean and tidy.', 'لا يُسمح بإحضار الحيوانات الأليفة إلى داخل المكان. احتفظ بالمكان نظيفًا ومرتبًا.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(17, 'Golden Sands', 'الرمال الذهبية', 25, 13, 0, 'Golden Sands offers a stunning beachfront venue for unforgettable beach weddings and celebrations.', 'الرمال الذهبية يقدم مكانًا ساحرًا على شاطئ البحر لحفلات الزفاف والاحتفالات الشاطئية التي لا تُنسى.', 0, 6000, 400, 'No outside alcohol allowed. Follow the safety guidelines for water activities.', 'غير مسموح بإحضار الكحول من خارج المكان. اتبع إرشادات السلامة للأنشطة المائية.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(18, 'Harmony Hall', 'قاعة الانسجام', 26, 13, 0, 'Harmony Hall provides modern meeting spaces and conference rooms with state-of-the-art audiovisual equipment for successful corporate events.', 'قاعة الانسجام توفر أماكن اجتماعات حديثة وغرف مؤتمرات مجهزة بأحدث التجهيزات السمعية والبصرية للفعاليات الشركات الناجحة.', 0, 2500, 250, 'No smoking inside the venue. Maintain a professional atmosphere during the event.', 'ممنوع التدخين داخل المكان. الحفاظ على أجواء احترافية أثناء الفعالية.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(19, 'Creative Space', 'مساحة إبداعية', 33, 13, 0, 'Creative Space is a versatile venue ideal for art exhibitions and installations, providing a platform for emerging artists to showcase their work.', 'مساحة إبداعية هي مكان متعدد الاستخدامات مثالي لمعارض الفن والتركيبات، وتوفر منصة للفنانين الناشئين لعرض أعمالهم.', 0, 1800, 350, 'No food or drinks allowed near the artwork. Respect the artists and their creations.', 'لا يُسمح بتناول الطعام أو الشراب بالقرب من الأعمال الفنية. احترم الفنانين وإبداعاتهم.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(20, 'Pyramid Gardens', 'حدائق الأهرامات', 25, 14, 0, 'Pyramid Gardens offers a unique outdoor venue surrounded by the majestic pyramids of Giza, creating a magical setting for weddings and events.', 'حدائق الأهرامات تقدم مكانًا خارجيًا فريدًا محاطًا بالأهرامات الفاتنة في الجيزة، مما يخلق إعدادًا سحريًا لحفلات الزفاف والفعاليات.', 0, 5500, 600, 'No open flames allowed. Respect the historical site and its surroundings.', 'ممنوع استخدام النيران المفتوحة. احترم الموقع التاريخي ومحيطه.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(21, 'Conference Tower', 'برج المؤتمرات', 26, 14, 0, 'Conference Tower is a state-of-the-art venue equipped with modern conference facilities and panoramic views of the Giza skyline.', 'برج المؤتمرات هو مكان مجهز بأحدث مرافق المؤتمرات ويوفر إطلالات بانورامية على سماء الجيزة.', 0, 3000, 300, 'No outside marketing materials allowed. Follow the event schedule and agenda.', 'غير مسموح بتوزيع المواد التسويقية من خارج المكان. اتبع جدول الفعاليات والبرنامج.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(22, 'Oasis Retreat', 'ملاذ الواحة', 33, 14, 0, 'Oasis Retreat is a serene venue nestled in a lush oasis, providing a tranquil space for art exhibitions and creative gatherings.', 'ملاذ الواحة هو مكان هادئ يقع في واحة خضراء، ويوفر مساحة هادئة لمعارض الفن والتجمعات الإبداعية.', 0, 2000, 250, 'No smoking allowed in the oasis. Preserve the natural beauty of the surroundings.', 'ممنوع التدخين في الواحة. الحفاظ على جمال الطبيعة المحيطة.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(23, 'Beachfront Bliss', 'سعادة على الشاطئ', 28, 15, 0, 'Beachfront Bliss offers a picturesque beach venue with stunning ocean views, perfect for hosting parties and special events.', 'سعادة على الشاطئ تقدم مكانًا شاطئيًا خلابًا مع إطلالات خلابة على البحر، مثالي لاستضافة الحفلات والفعاليات الخاصة.', 0, 4500, 500, 'No glass bottles allowed on the beach. Respect the marine ecosystem.', 'ممنوع استخدام زجاجات الزجاج على الشاطئ. احترم النظام البيئي البحري.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(24, 'The Oasis Resort', 'منتجع الواحة', 30, 15, 0, 'The Oasis Resort is a wellness retreat offering a range of fitness activities, including a gym, spa, and yoga classes.', 'منتجع الواحة هو منتجع صحي يقدم مجموعة من الأنشطة الرياضية، بما في ذلك صالة ألعاب رياضية وسبا ودروس اليوجا.', 0, 3500, 400, 'Respect the tranquility of the resort. Follow the guidelines for using the facilities.', 'احترم هدوء المنتجع. اتبع الإرشادات لاستخدام المرافق.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(25, 'Underwater Paradise', 'جنة تحت الماء', 29, 15, 0, 'Underwater Paradise is a unique venue located beneath the sea, providing an extraordinary setting for underwater exhibitions and marine-themed events.', 'جنة تحت الماء هو مكان فريد يقع تحت سطح البحر، ويوفر إعدادًا استثنائيًا للمعارض تحت الماء والفعاليات ذات الثيمة البحرية.', 0, 6000, 800, 'Certified divers only. Follow the safety guidelines for underwater activities.', 'فقط الغواصين المعتمدين. اتبع إرشادات السلامة للأنشطة تحت الماء.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(26, 'Nileside Gardens', 'حدائق ضفة النيل', 28, 16, 0, 'Nileside Gardens is a beautiful outdoor venue overlooking the Nile River, ideal for hosting parties and outdoor events.', 'حدائق ضفة النيل هي مكان خارجي جميل يطل على نهر النيل، مثالي لاستضافة الحفلات والفعاليات الخارجية.', 0, 3000, 400, 'Respect the garden\'s flora and fauna. No open fires allowed.', 'احترم النباتات والحيوانات في الحديقة. غير مسموح بالنيران المفتوحة.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(27, 'Historic Palace', 'قصر تاريخي', 27, 16, 0, 'Step back in time at the Historic Palace, a venue showcasing the rich history and architecture of Luxor, perfect for cultural events and exhibitions.', 'ارجع في الوقت للخلف في قصر تاريخي، مكان يعرض التاريخ الغني والهندسة المعمارية للأقصر، مثالي للفعاليات الثقافية والمعارض.', 0, 4000, 500, 'No touching or moving of historical artifacts. Follow the guidelines for photography.', 'ممنوع لمس أو تحريك القطع التاريخية. اتبع الإرشادات للتصوير.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(28, 'Rooftop Retreat', 'ملاذ على السطح', 26, 16, 0, 'Enjoy breathtaking views of Luxor\'s skyline at the Rooftop Retreat, a venue perfect for meetings, conferences, and corporate events.', 'استمتع بإطلالات خلابة على أفق الأقصر في ملاذ على السطح، وهو مكان مثالي للاجتماعات والمؤتمرات والفعاليات الشركات.', 0, 2500, 300, 'Respect the privacy of other guests. No smoking in designated areas.', 'احترم خصوصية الضيوف الآخرين. ممنوع التدخين في المناطق المحددة.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(29, 'Beachfront Bliss', 'سعادة على الشاطئ', 28, 15, 0, 'Beachfront Bliss offers a picturesque beach venue with stunning ocean views, perfect for hosting parties and special events.', 'سعادة على الشاطئ تقدم مكانًا شاطئيًا خلابًا مع إطلالات خلابة على البحر، مثالي لاستضافة الحفلات والفعاليات الخاصة.', 0, 4500, 500, 'No glass bottles allowed on the beach. Respect the marine ecosystem.', 'ممنوع استخدام زجاجات الزجاج على الشاطئ. احترم النظام البيئي البحري.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(30, 'The Oasis Resort', 'منتجع الواحة', 30, 15, 0, 'The Oasis Resort is a wellness retreat offering a range of fitness activities, including a gym, spa, and yoga classes.', 'منتجع الواحة هو منتجع صحي يقدم مجموعة من الأنشطة الرياضية، بما في ذلك صالة ألعاب رياضية وسبا ودروس اليوجا.', 0, 3500, 400, 'Respect the tranquility of the resort. Follow the guidelines for using the facilities.', 'احترم هدوء المنتجع. اتبع الإرشادات لاستخدام المرافق.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(31, 'Underwater Paradise', 'جنة تحت الماء', 29, 15, 0, 'Underwater Paradise is a unique venue located beneath the sea, providing an extraordinary setting for underwater exhibitions and marine-themed events.', 'جنة تحت الماء هو مكان فريد يقع تحت سطح البحر، ويوفر إعدادًا استثنائيًا للمعارض تحت الماء والفعاليات ذات الثيمة البحرية.', 0, 6000, 800, 'Certified divers only. Follow the safety guidelines for underwater activities.', 'فقط الغواصين المعتمدين. اتبع إرشادات السلامة للأنشطة تحت الماء.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(32, 'Nileside Gardens', 'حدائق ضفة النيل', 28, 16, 0, 'Nileside Gardens is a beautiful outdoor venue overlooking the Nile River, ideal for hosting parties and outdoor events.', 'حدائق ضفة النيل هي مكان خارجي جميل يطل على نهر النيل، مثالي لاستضافة الحفلات والفعاليات الخارجية.', 0, 3000, 400, 'Respect the garden\'s flora and fauna. No open fires allowed.', 'احترم النباتات والحيوانات في الحديقة. غير مسموح بالنيران المفتوحة.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(33, 'Historic Palace', 'قصر تاريخي', 27, 16, 0, 'Step back in time at the Historic Palace, a venue showcasing the rich history and architecture of Luxor, perfect for cultural events and exhibitions.', 'ارجع في الوقت للخلف في قصر تاريخي، مكان يعرض التاريخ الغني والهندسة المعمارية للأقصر، مثالي للفعاليات الثقافية والمعارض.', 0, 4000, 500, 'No touching or moving of historical artifacts. Follow the guidelines for photography.', 'ممنوع لمس أو تحريك القطع التاريخية. اتبع الإرشادات للتصوير.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(34, 'Rooftop Retreat', 'ملاذ على السطح', 26, 16, 0, 'Enjoy breathtaking views of Luxor\'s skyline at the Rooftop Retreat, a venue perfect for meetings, conferences, and corporate events.', 'استمتع بإطلالات خلابة على أفق الأقصر في ملاذ على السطح، وهو مكان مثالي للاجتماعات والمؤتمرات والفعاليات الشركات.', 0, 2500, 300, 'Respect the privacy of other guests. No smoking in designated areas.', 'احترم خصوصية الضيوف الآخرين. ممنوع التدخين في المناطق المحددة.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(35, 'Riverside Terrace', 'شرفة ضفة النهر', 29, 17, 0, 'Riverside Terrace offers a stunning view of the Nile River, providing a perfect setting for workshops, training sessions, and educational programs.', 'شرفة ضفة النهر توفر إطلالة ساحرة على نهر النيل، مما يوفر بيئة مثالية لورش العمل وجلسات التدريب والبرامج التعليمية.', 0, 3500, 400, 'No loud music or disturbances. Respect the peaceful atmosphere.', 'ممنوع تشغيل الموسيقى بصوت عالٍ أو إلحاق الإزعاج. احترم الأجواء الهادئة.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(36, 'Desert Oasis', 'واحة في الصحراء', 30, 17, 0, 'Escape to the tranquility of the Desert Oasis, a wellness retreat offering yoga classes, meditation sessions, and spa treatments.', 'هرب إلى هدوء واحة الصحراء، ملاذ صحي يقدم دروس اليوجا وجلسات التأمل وعلاجات السبا.', 0, 3000, 300, 'No littering in the desert. Respect the local environment and wildlife.', 'ممنوع رمي القمامة في الصحراء. احترم البيئة المحلية والحياة البرية.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(37, 'Nubian Heritage House', 'بيت التراث النوبي', 33, 17, 0, 'Experience the rich Nubian culture at the Nubian Heritage House, a venue dedicated to art exhibitions and cultural events.', 'استمتع بثقافة النوبة الغنية في بيت التراث النوبي، مكان مخصص للمعارض الفنية والفعاليات الثقافية.', 0, 2000, 200, 'Respect the Nubian traditions and customs. No photography without permission.', 'احترم تقاليد وعادات النوبة. ممنوع التصوير بدون إذن.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(38, 'Beachside Resort', 'منتجع بجانب الشاطئ', 28, 18, 0, 'Experience luxury and relaxation at the Beachside Resort, offering a picturesque beachfront location and top-notch amenities for parties and events.', 'استمتع بالفخامة والاسترخاء في منتجع بجانب الشاطئ، الذي يوفر موقعًا ساحرًا على الشاطئ ومرافق عالية الجودة للحفلات والفعاليات.', 0, 5000, 500, 'No outside food or drinks allowed. Follow the dress code for the venue.', 'ممنوع إحضار الطعام والمشروبات من الخارج. اتبع قواعد اللباس للمكان.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(39, 'Desert Safari Camp', 'مخيم سفاري في الصحراء', 29, 18, 0, 'Embark on a thrilling desert adventure at the Desert Safari Camp, offering guided tours, camel rides, and traditional Bedouin experiences.', 'انطلق في مغامرة مثيرة في الصحراء في مخيم سفاري في الصحراء، الذي يقدم جولات مرشدة وركوب الجمال وتجارب بدوية تقليدية.', 0, 4000, 300, 'Respect the desert environment. No littering or damaging natural resources.', 'احترم بيئة الصحراء. ممنوع رمي القمامة أو التلف للموارد الطبيعية.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(40, 'Coral Reef Dive Center', 'مركز غوص في الشعاب المرجانية', 30, 18, 0, 'Explore the vibrant underwater world at the Coral Reef Dive Center, offering diving and snorkeling trips to discover the beauty of the Red Sea.', 'استكشف العالم البحري الحيوي في مركز غوص الشعاب المرجانية، الذي يقدم رحلات الغوص والغطس لاكتشاف جمال البحر الأحمر.', 0, 3000, 100, 'Follow the safety guidelines for diving and snorkeling. Respect the coral reefs and marine life.', 'اتبع إرشادات السلامة للغوص والغطس. احترم الشعاب المرجانية والحياة البحرية.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(41, 'Elegant Banquet Hall', 'قاعة الولائم الأنيقة', 25, 19, 0, 'Host your dream wedding or special event at the Elegant Banquet Hall, featuring exquisite decor, professional staff, and customizable packages.', 'احتفل بحفل زفافك أو حدثك الخاص في قاعة الولائم الأنيقة، التي تتميز بديكور راقي وطاقم عمل محترف وحزم مخصصة.', 0, 6000, 400, 'No outside catering allowed. Respect the venue premises and equipment.', 'ممنوع إحضار الطعام من الخارج. احترم منشآت ومعدات المكان.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(42, 'Sports Arena Complex', 'مجمع الساحة الرياضية', 26, 19, 0, 'Discover state-of-the-art facilities at the Sports Arena Complex, equipped with indoor courts, fitness studios, and multi-purpose spaces for various events.', 'اكتشف المرافق عالية التقنية في مجمع الساحة الرياضية، المجهز بملاعب داخلية واستوديوهات للياقة البدنية ومساحات متعددة الاستخدام لمختلف الفعاليات.', 0, 4000, 300, 'Follow the venue\'s safety guidelines for sports activities. Respect the equipment and keep the premises clean.', 'اتبع إرشادات السلامة الخاصة بالأنشطة الرياضية في المكان. احترم المعدات واحرص على نظافة المنشأة.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(43, 'Rooftop Lounge', 'صالة سطحية', 27, 19, 0, 'Relax and enjoy panoramic views at the Rooftop Lounge, offering a trendy atmosphere, live music, and a wide selection of drinks and snacks.', 'استرخ واستمتع بإطلالات بانورامية في صالة السطحية، التي توفر أجواء عصرية وموسيقى حية ومجموعة واسعة من المشروبات والوجبات الخفيفة.', 0, 2000, 100, 'Smoking is not allowed in the venue. Dress code: smart casual.', 'غير مسموح بالتدخين في المكان. قواعد اللباس: سمارت كاجوال.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(44, 'Marina Yacht Club', 'نادي مارينا اليخت', 28, 20, 0, 'Experience luxury and elegance at the Marina Yacht Club, featuring a waterfront location, upscale dining, and stunning views of the marina.', 'استمتع بالفخامة والأناقة في نادي مارينا اليخت، الذي يتميز بموقع على الواجهة البحرية وتناول الطعام الفاخر وإطلالات ساحرة على المرسى.', 0, 5000, 400, 'Respect the marine environment and follow safety instructions for water activities. No pets allowed.', 'احترم البيئة البحرية واتبع تعليمات السلامة للأنشطة المائية. غير مسموح بإحضار الحيوانات الأليفة.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(45, 'Cultural Center', 'المركز الثقافي', 29, 20, 0, 'Immerse yourself in the arts at the Cultural Center, hosting exhibitions, performances, and workshops to celebrate Port Said\'s rich cultural heritage.', 'انغمس في عالم الفنون في المركز الثقافي، الذي يستضيف معارض وعروض وورش عمل للاحتفال بالتراث الثقافي الغني لبورسعيد.', 0, 4000, 300, 'Respect the artwork and follow any guidelines provided. No photography allowed in certain exhibitions.', 'احترم الأعمال الفنية واتبع أي إرشادات مقدمة. غير مسموح بالتصوير في بعض المعارض.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(46, 'Outdoor Amphitheater', 'مدرج خارجي', 30, 20, 0, 'Enjoy open-air performances at the Outdoor Amphitheater, nestled in a scenic location and offering a vibrant ambiance for concerts and cultural events.', 'استمتع بالعروض في الهواء الطلق في المدرج الخارجي، الموجود في موقع جميل ويوفر أجواء حيوية للحفلات الموسيقية والفعاليات الثقافية.', 0, 3000, 200, 'Bring your own seating arrangement. No outside food or drinks allowed.', 'قم بإحضار ترتيب المقاعد الخاص بك. ممنوع إحضار الطعام والمشروبات من الخارج.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(47, 'Nile View Rooftop', 'روف نايل فيو', 25, 12, 0, 'Experience breathtaking views of the Nile River at the Nile View Rooftop venue. It offers a romantic setting for weddings and special events.', 'استمتع بإطلالات خلابة على نهر النيل في مكان روف نايل فيو. يوفر إعدادًا رومانسيًا لحفلات الزفاف والفعاليات الخاصة.', 0, 5000, 300, 'No outside catering allowed. Respect the venue and keep noise levels to a minimum.', 'غير مسموح بإحضار الطعام من الخارج. احترم المكان وحافظ على مستوى الضوضاء منخفضًا.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(48, 'Garden Oasis', 'واحة الحديقة', 26, 12, 0, 'Escape to the serene Garden Oasis venue, surrounded by lush greenery and offering state-of-the-art conference facilities for productive meetings and conferences.', 'ابتعد عن الضوضاء واستمتع بجو هادئ في مكان واحة الحديقة، المحاط بالخضرة الغنية ويوفر مرافق مؤتمرات حديثة لاجتماعات ومؤتمرات منتجة.', 0, 6000, 400, 'No smoking allowed. Follow the venue\'s guidelines for audiovisual equipment usage.', 'غير مسموح بالتدخين في المكان. اتبع إرشادات المكان لاستخدام معدات الصوت والفيديو.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(49, 'Artistic Studio', 'استوديو فني', 27, 12, 0, 'Unleash your creativity at the Artistic Studio venue, designed for workshops and training sessions. It provides a conducive environment for artistic expression and skill development.', 'اطلق العنان لإبداعك في مكان استوديو فني، المصمم لورش العمل وجلسات التدريب. يوفر بيئة مناسبة للتعبير الفني وتنمية المهارات.', 0, 3000, 150, 'Respect the art materials and equipment. Clean up after your session.', 'احترم المواد الفنية والمعدات. قم بتنظيف المكان بعد الانتهاء.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(50, 'Dazzling Ballroom', 'قاعة راقية', 28, 12, 0, 'Host your glamorous parties and events at the Dazzling Ballroom venue. With its exquisite decor and spacious dance floor, it creates an enchanting atmosphere for celebrations.', 'استضف الحفلات والفعاليات الراقية في مكان قاعة راقية. بفضل ديكورها الرائع وأرضيتها الراقصة الواسعة، تخلق أجواء ساحرة للاحتفالات.', 0, 8000, 500, 'No outside decoration without prior approval. Follow the venue\'s guidelines for music and entertainment.', 'لا يسمح بالزينة الخارجية دون موافقة مسبقة. اتبع إرشادات المكان بشأن الموسيقى والترفيه.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(51, 'Tech Hub', 'مركز التكنولوجيا', 29, 12, 0, 'Discover the cutting-edge Tech Hub venue, equipped with advanced technology and flexible spaces for hosting workshops, training programs, and tech-related events.', 'اكتشف مكان مركز التكنولوجيا الحديثة، المجهز بأحدث التكنولوجيا ومساحات مرنة لاستضافة ورش العمل وبرامج التدريب والفعاليات ذات الصلة بالتكنولوجيا.', 0, 4000, 250, 'No food or drinks near the technology equipment. Respect the venue and maintain cleanliness.', 'لا يُسمح بتناول الطعام أو المشروبات بالقرب من معدات التكنولوجيا. احترم المكان وحافظ على النظافة.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(52, 'Rooftop Poolside', 'روف بولسايد', 30, 12, 0, 'Experience luxury and relaxation at the Rooftop Poolside venue. With its stunning rooftop pool and panoramic views, it\'s an ideal choice for exclusive parties and events.', 'استمتع بالفخامة والاسترخاء في مكان روف بولسايد. مع بركة السباحة الفاخرة على السطح والإطلالات البانورامية، فإنها خيار مثالي للحفلات الحصرية والفعاليات.', 0, 7000, 350, 'No glassware near the pool area. Follow the venue\'s dress code and safety guidelines.', 'لا توضع الأواني الزجاجية بالقرب من منطقة البول. اتبع اللباس المحدد وإرشادات السلامة للمكان.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(53, 'Artistic Gallery', 'معرض فني', 33, 12, 0, 'Explore the Artistic Gallery venue, showcasing a diverse collection of visual arts, paintings, and sculptures. It offers a creative space for art exhibitions and cultural events.', 'استكشف مكان المعرض الفني، الذي يعرض مجموعة متنوعة من الفنون البصرية واللوحات والمنحوتات. يوفر مساحة إبداعية لمعارض الفن والفعاليات الثقافية.', 0, 6000, 300, 'Handle artworks with care. No flash photography without permission.', 'تعامل بحرص مع الأعمال الفنية. لا يُسمح بالتصوير بالفلاش دون إذن.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(54, 'Adventure Park', 'حديقة المغامرة', 23, 12, 0, 'Experience thrilling adventures at the Adventure Park venue. With exciting rides, obstacle courses, and outdoor activities, it\'s perfect for adrenaline junkies and group outings.', 'استمتع بمغامرات مثيرة في مكان حديقة المغامرة. مع الألعاب المثيرة ودورات العقبات والأنشطة الخارجية، فهو مثالي لعشاق الأدرينالين والرحلات الجماعية.', 0, 8000, 1000, 'Follow safety instructions and age restrictions for rides. Wear appropriate attire and footwear.', 'اتبع تعليمات السلامة والقيود العمرية للألعاب. ارتد ملابس وأحذية مناسبة.', 'Strict cancellation policy. Please contact us for more details.', 'سياسة إلغاء صارمة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(55, 'Gourmet Dining', 'تناول الطعام الفاخر', 36, 12, 0, 'Indulge in a gourmet dining experience at the Gourmet Dining venue. With a diverse menu and elegant ambiance, it offers a memorable culinary journey for special occasions.', 'استمتع بتجربة تناول الطعام الفاخرة في مكان تناول الطعام الفاخر. مع قائمة متنوعة وأجواء أنيقة، يوفر رحلة طهي لا تُنسى للمناسبات الخاصة.', 0, 12000, 200, 'Reservations required for a dining experience. Dress code: smart casual.', 'الحجز مطلوب لتجربة تناول الطعام. الزي الموصى به: أنيق غير رسمي.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(56, 'Sports Arena', 'الملعب الرياضي', 38, 12, 0, 'Discover the Sports Arena, a state-of-the-art facility for various sports activities and events. With top-notch equipment and ample space, it\'s ideal for tournaments and athletic competitions.', 'اكتشف الملعب الرياضي، المرفق المتطور لأنشطة وفعاليات الرياضة المختلفة. مع المعدات المتطورة والمساحة الوفيرة، فهو مثالي للبطولات والمنافسات الرياضية.', 0, 9000, 500, 'Follow sports etiquette and safety guidelines. Proper attire and footwear required.', 'اتبع آداب الرياضة وإرشادات السلامة. يتطلب ارتداء الملابس والأحذية المناسبة.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(57, 'Wellness Retreat', 'ملاذ العافية', 30, 12, 0, 'Immerse yourself in relaxation and rejuvenation at the Wellness Retreat venue. With spa facilities, yoga classes, and wellness programs, it offers a serene escape from the city.', 'غمر نفسك في الاسترخاء والتجديد في مكان ملاذ العافية. مع مرافق السبا وصفقات اليوجا وبرامج العافية، يوفر هروبًا هادئًا من الضجيج في المدينة.', 0, 7000, 400, 'Respect the tranquility of the retreat. Silence and mobile phone usage rules apply.', 'احترم هدوء الملاذ. ينطبق قواعد الصمت واستخدام الهاتف المحمول.', 'Moderate cancellation policy. Please contact us for more details.', 'سياسة إلغاء معتدلة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.'),
	(58, 'Kids Wonderland', 'عالم الأطفال', 24, 12, 0, 'Experience a magical wonderland for children at the Kids Wonderland venue. With interactive games, play areas, and themed parties, it offers a joyful and entertaining experience for kids.', 'استمتع بعالم سحري للأطفال في مكان عالم الأطفال. مع الألعاب التفاعلية ومناطق اللعب والحفلات ذات الأجواء الموضوعية، يقدم تجربة ممتعة ومسلية للأطفال.', 0, 5000, 200, 'Supervision of children by parents or guardians is required at all times.', 'يجب على الآباء أو الأوصياء الاشراف على الأطفال في جميع الأوقات.', 'Flexible cancellation policy. Please contact us for more details.', 'سياسة إلغاء مرنة. يرجى الاتصال بنا للحصول على مزيد من التفاصيل.');

-- Dumping structure for table zabatly.visited_venues
CREATE TABLE IF NOT EXISTS `visited_venues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `venueID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `visitDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_venue` (`venueID`),
  KEY `FK_user` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zabatly.visited_venues: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
