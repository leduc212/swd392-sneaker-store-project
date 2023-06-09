USE [SneakerStore]
GO
SET IDENTITY_INSERT [dbo].[brands] ON 

GO
INSERT [dbo].[brands] ([id], [name]) VALUES (1, N'Nike')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (2, N'Adidas')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (3, N'Converse')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (4, N'Vans')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (5, N'Reebok')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (6, N'Sketcher')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (7, N'Puma')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (8, N'Palladium')
GO
INSERT [dbo].[brands] ([id], [name]) VALUES (9, N'Name new')
GO
SET IDENTITY_INSERT [dbo].[brands] OFF
GO
SET IDENTITY_INSERT [dbo].[categories] ON 

GO
INSERT [dbo].[categories] ([id], [name]) VALUES (1, N'Running')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (2, N'Basketball')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (3, N'Soccer')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (4, N'Lifestyle')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (5, N'Gym')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (6, N'Golf')
GO
INSERT [dbo].[categories] ([id], [name]) VALUES (7, N'Skateboarding')
GO
SET IDENTITY_INSERT [dbo].[categories] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (1, 1, 1, CAST(N'2023-03-05 21:51:29.8591660' AS DateTime2), N'adminsneaky@gmail.com', N'Nguyen Le Admin', N'$2a$11$JtUgIe/OIgcP8JFErGmKN.NHn3c6cWASm7mgbXcAPU5WmoZUFVaOi', N'0918031377', CAST(N'2023-03-05 21:51:29.8592130' AS DateTime2))
GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (2, 1, 0, CAST(N'2023-03-05 23:07:32.9354110' AS DateTime2), N'ducfortune0@gmail.com', N'Le Minh Duc', N'$2a$11$/FCs8m3kyG4umW5Q5XQiTOcYbjEEeaVtfXcWBiDPDunblncr1iUSa', N'0931856541', CAST(N'2023-03-05 23:07:32.9354150' AS DateTime2))
GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (3, 1, 0, CAST(N'2023-03-05 23:10:59.9981390' AS DateTime2), N'ducfortune1@gmail.com', N'Tran Duong Phuc Dat', N'$2a$11$5TmkroV2X/RDDI60BE3poe.0/PMx1qxsIQ0ANPd3dn75epCBDZIQO', N'0123456789', CAST(N'2023-03-05 23:10:59.9981410' AS DateTime2))
GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (4, 1, 0, CAST(N'2023-03-05 23:12:47.0041330' AS DateTime2), N'tranngocchau@gmail.com', N'Tran Ngoc Chau', N'$2a$11$CyxyUycFq.Rf.5SDdB0hSOWmSG27j8vKzWUWvnfnVV754/kVi3P42', N'0987654321', CAST(N'2023-03-05 23:12:47.0041420' AS DateTime2))
GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (5, 1, 0, CAST(N'2023-03-05 23:16:42.1729320' AS DateTime2), N'vutrieuduong@gmail.com', N'Vu Trieu Duong', N'$2a$11$r5EjnB1moic9YQ73sc9EJO3UjVQ2UzcYeWX37Aud/dkYu42.enNsS', N'091846237', CAST(N'2023-03-05 23:17:01.6227180' AS DateTime2))
GO
INSERT [dbo].[users] ([id], [active], [admin], [created_at], [email], [name], [password], [phone], [updated_at]) VALUES (6, 0, 0, CAST(N'2023-03-05 23:18:57.3113010' AS DateTime2), N'vumanhhung@gmail.com', N'Vu Manh Hung', N'$2a$11$m0U8z6SKWyPq/d4KSZ5QTu6.SJcm8MiVZwKqLt3iZymY4L39b.nGO', N'0344867111', CAST(N'2023-03-05 23:18:57.3113040' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[users] OFF
GO
SET IDENTITY_INSERT [dbo].[products] ON 

GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (1, 1, CAST(N'2023-03-05 22:00:10.4771550' AS DateTime2), N'desc', N'img', N'Name', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-10 21:53:59.4318800' AS DateTime2), 1, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (2, 1, CAST(N'2023-03-05 22:03:05.8598210' AS DateTime2), N'desc', N'img', N'Name', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-10 21:56:41.7632020' AS DateTime2), 1, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (3, 1, CAST(N'2023-03-05 22:04:17.7598220' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/zcuilxmv.o0s.jpg?alt=media&token=51bd88d1-71c5-43e5-aeb7-947eac0b61ca', N'Nike Wmns Air Force 1 Shadow SE ‘Pixel Swoosh – Barely Green’ CV8480-300', CAST(200.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:04:17.7598270' AS DateTime2), 1, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (4, 1, CAST(N'2023-03-05 22:05:13.1655270' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/4stqrg3c.bkr.jpg?alt=media&token=2162ba81-571d-4f17-a365-f109460f1b6f', N'Nike Airforce 1 Green Strike AR7446-100', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:05:13.1655310' AS DateTime2), 1, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (5, 1, CAST(N'2023-03-05 22:06:32.7785610' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/bf41a322.qdw.png?alt=media&token=9af9a739-702f-44c8-a48c-2613f26a2178', N'Nike Dunk Low Retro ‘Reverse Brazil’ 2023 DV0833-300', CAST(180.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:06:32.7785650' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (6, 1, CAST(N'2023-03-05 22:07:30.9263080' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/oiy0nirb.rcj.jpg?alt=media&token=9de61ffe-870d-465d-a282-7100f1449f54', N'Nike Dunk Low Disrupt Game Royal Blue CK6654-100', CAST(250.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:07:30.9263130' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (7, 1, CAST(N'2023-03-05 22:08:43.2168420' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/1u4l2pm2.kpc.png?alt=media&token=decce323-6427-45cb-a6de-30c88b0c59f0', N'Nike Dunk Low ‘Dark Beetroot’ DJ6188-600', CAST(175.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:08:43.2168550' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (8, 1, CAST(N'2023-03-05 22:09:49.4707710' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/qvan5gae.anr.jpg?alt=media&token=a7c01810-60e2-4344-b999-9aad6bb569de', N'Nike Dunk Low Disrupt 2 ‘Pure Platinum’ DV4024-002', CAST(280.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:09:49.4707750' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (9, 1, CAST(N'2023-03-05 22:10:42.6441690' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/5go0may4.0os.jpg?alt=media&token=d4398aad-b267-43f4-ab3a-493b417017ad', N'Nike Dunk High GS ‘Cargo Khaki’ DB2179-105', CAST(200.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:10:42.6441730' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (10, 1, CAST(N'2023-03-05 22:12:34.3411900' AS DateTime2), N'Adidas Yeezy (or just Yeezy) was a fashion collaboration between American rapper, designer and entrepreneur Kanye West and German sportswear company Adidas. It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/gxto2ork.bpl.jpg?alt=media&token=394c62ed-606d-44df-b00c-a5489fd4c529', N'Originals Yeezy Foam Runner ‘Stone Sage’ GX4472', CAST(370.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:12:34.3411950' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (11, 1, CAST(N'2023-03-05 22:13:37.0297470' AS DateTime2), N'Adidas Yeezy (or just Yeezy) was a fashion collaboration between American rapper, designer and entrepreneur Kanye West and German sportswear company Adidas. It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/u3nl04sr.k0g.jpg?alt=media&token=e836c40b-7603-421c-b1a4-4f36b130f71f', N'Yeezy Boost 350 V2 ‘Salt’ HQ2060', CAST(369.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:13:37.0297510' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (12, 1, CAST(N'2023-03-05 22:14:29.8119210' AS DateTime2), N'Adidas Yeezy (or just Yeezy) was a fashion collaboration between American rapper, designer and entrepreneur Kanye West and German sportswear company Adidas. It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/2zfx4mi0.oex.jpg?alt=media&token=a7fe5bbc-1fb6-4dfb-bd44-f60f6972ecc9', N'Yeezy Boost 350 V2 ‘Onyx’ HQ4540', CAST(590.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:14:29.8119240' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (13, 1, CAST(N'2023-03-05 22:15:51.4308380' AS DateTime2), N'Adidas Yeezy (or just Yeezy) was a fashion collaboration between American rapper, designer and entrepreneur Kanye West and German sportswear company Adidas. It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/jbi3ixln.5rn.png?alt=media&token=26e17da5-4353-45fb-9e22-fb9a8aed748e', N'Yeezy Boost 700 ‘Bright Blue’ GZ0541', CAST(459.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:15:51.4308510' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (14, 1, CAST(N'2023-03-05 22:17:22.1087950' AS DateTime2), N'Adidas Boost technology is a product of the adidas Innovation Team (AIT) and German chemists BASF. It was created to bring together the formerly contradictory benefits of soft and responsive cushioning. At the time, EVA foam was the industry standard for performance running shoes. Boost was about to change all that, introducing a midsole made from thousands of expanded particles that work together to deliver an uptick of energy return in every stride.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/lizaoz3z.tmb.jpg?alt=media&token=e21db314-b453-4c72-a3e1-78589c70f79f', N'UltraBoost 22 ‘Linear Energy Black’ HQ0965', CAST(170.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:17:22.1088000' AS DateTime2), 2, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (15, 1, CAST(N'2023-03-05 22:18:46.6057730' AS DateTime2), N'The Adidas Ultraboost 22 is a max-cushioned, heavy-duty trainer for easy and recovery runs. It has a stable ride and is one of the most comfortable running shoes on the market albeit very expensive. The men’s version 22 of the Ultraboost is an upper only update but the women’s version has extra lugs on the outsole. Both versions have a softer ride due to the change of strobel lining and are also a little lighter than version 21 with slightly better heel lockdown.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/wviqx43l.uhh.jpg?alt=media&token=5c97252e-4836-459a-90f4-f9fd9cf8985a', N'UltraBoost 20 J ‘Black Signal Pink’ FX0455', CAST(80.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:18:46.6057790' AS DateTime2), 2, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (16, 1, CAST(N'2023-03-05 22:20:53.8267250' AS DateTime2), N'The Adidas Ultraboost 22 is a max-cushioned, heavy-duty trainer for easy and recovery runs. It has a stable ride and is one of the most comfortable running shoes on the market albeit very expensive. The men’s version 22 of the Ultraboost is an upper only update but the women’s version has extra lugs on the outsole. Both versions have a softer ride due to the change of strobel lining and are also a little lighter than version 21 with slightly better heel lockdown.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/gijzt0mh.4f0.jpg?alt=media&token=0471655e-339c-4277-bf16-ac795ba908b0', N'UltraBoost 22 ‘Black Solar Green’ GX6640', CAST(169.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:20:53.8267340' AS DateTime2), 2, 6, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (17, 1, CAST(N'2023-03-05 22:23:00.0775000' AS DateTime2), N'The Kaia Platform is a new addition to our Platform styles featuring a vulcanized look. It features a canvas upper with a synthetic FS and a characteristic rugged outsole, referencing to the hiker hybrid trend. Additionally, it includes the SoftFoam+ sockliner that provides superior cushioning and optimal comfort for every step of your day. The Kaia is the perfect combination of a sporty but yet classic shoe that will match any of your styles.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/4yt0xffo.51x.jpg?alt=media&token=cce2f029-cf09-42af-ba7e-55ae803da51c', N'Puma Kaia Platform “White” Gum 383304-01', CAST(100.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:23:00.0775040' AS DateTime2), 7, 7, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (18, 1, CAST(N'2023-03-05 22:23:55.6251000' AS DateTime2), N'The Kaia Platform is a new addition to our Platform styles featuring a vulcanized look. It features a canvas upper with a synthetic FS and a characteristic rugged outsole, referencing to the hiker hybrid trend. Additionally, it includes the SoftFoam+ sockliner that provides superior cushioning and optimal comfort for every step of your day. The Kaia is the perfect combination of a sporty but yet classic shoe that will match any of your styles.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/zgbplgqv.epa.jpg?alt=media&token=60954b6e-7135-492a-9578-3e9f8fe9b430', N'Puma Wmns Jada ‘White Black’ 380751-05', CAST(79.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:23:55.6251050' AS DateTime2), 7, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (19, 1, CAST(N'2023-03-05 22:24:52.3509990' AS DateTime2), N'The Kaia Platform is a new addition to our Platform styles featuring a vulcanized look. It features a canvas upper with a synthetic FS and a characteristic rugged outsole, referencing to the hiker hybrid trend. Additionally, it includes the SoftFoam+ sockliner that provides superior cushioning and optimal comfort for every step of your day. The Kaia is the perfect combination of a sporty but yet classic shoe that will match any of your styles.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/3gcbloz3.bkq.jpg?alt=media&token=c11686a2-6763-48c2-ab44-036cd378958e', N'Puma Wmns Jada ‘White Silver’ 380751-02', CAST(69.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:24:52.3510040' AS DateTime2), 7, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (20, 1, CAST(N'2023-03-05 22:25:42.1080570' AS DateTime2), N'The Kaia Platform is a new addition to our Platform styles featuring a vulcanized look. It features a canvas upper with a synthetic FS and a characteristic rugged outsole, referencing to the hiker hybrid trend. Additionally, it includes the SoftFoam+ sockliner that provides superior cushioning and optimal comfort for every step of your day. The Kaia is the perfect combination of a sporty but yet classic shoe that will match any of your styles.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/qzhnkb0c.jny.jpg?alt=media&token=39118fbe-b43e-4b8a-aa45-4e00a52bcae4', N'Puma Suede Mayu TC ‘White’ 385234-02', CAST(100.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:25:42.1080600' AS DateTime2), 7, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (21, 1, CAST(N'2023-03-05 22:27:47.2555400' AS DateTime2), N'Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/kvn1nfok.crf.jpg?alt=media&token=e4b64a07-cbf2-469f-ae27-0a28954d18ce', N'Reebok Wmns Nanoflex TR ‘Twisted Coral’ FX1567', CAST(69.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:27:47.2555440' AS DateTime2), 5, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (22, 1, CAST(N'2023-03-05 22:28:32.9354270' AS DateTime2), N'Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/jy2bfse5.jo5.jpg?alt=media&token=0b35adee-a820-42e1-8aa1-8db27f8069c9', N'Reebok Wmns Mega Flexagon ‘White Neon Blue’ H67656', CAST(39.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:28:32.9354320' AS DateTime2), 5, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (23, 1, CAST(N'2023-03-05 22:29:37.5266350' AS DateTime2), N'Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/rduja1eg.3i0.jpg?alt=media&token=f8a547be-f778-4d4f-9fe1-a3028e0d5c04', N'Reebok Chạy Bộ Forever Floatride Energy 2 ‘Black/Pink’ FU8279', CAST(89.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:29:37.5266400' AS DateTime2), 5, 7, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (24, 1, CAST(N'2023-03-05 22:30:30.9611890' AS DateTime2), N'Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/rkwvicez.zza.jpg?alt=media&token=c8d65d04-fed7-4bcf-8983-f1a47d9f6c16', N'Reebok Chạy Bộ Liquifect 180 2.0 Spt Ap “Black/White” FY1899', CAST(59.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:30:30.9611940' AS DateTime2), 5, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (25, 1, CAST(N'2023-03-05 22:31:21.2222660' AS DateTime2), N'Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/nfa012p4.1xj.jpg?alt=media&token=867a5150-7297-4f17-873b-11e7d2b0731b', N'Reebok Dmx Fusion Nr ‘Black’ CM9643', CAST(129.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:31:21.2222690' AS DateTime2), 5, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (26, 1, CAST(N'2023-03-05 22:33:10.6465800' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/o3razld1.qe1.jpg?alt=media&token=252ef5e4-fcde-48ab-9ad6-a1e5dd727c6f', N'Vans Notre x OG Style 36 LX ‘Blue’ VN0A4BVEBLU', CAST(189.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:33:10.6465850' AS DateTime2), 4, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (27, 1, CAST(N'2023-03-05 22:33:55.0361310' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/z1yng2rm.af5.jpg?alt=media&token=99137781-f41f-4540-8578-685faae4b3be', N'Vans Bedwin & The Heartbreakers x Authentic ‘Bandana Pack – Multi B’ VN0A4BV99R9', CAST(109.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:33:55.0361340' AS DateTime2), 4, 7, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (28, 1, CAST(N'2023-03-05 22:34:45.7576280' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/yy3g0jry.lhb.jpg?alt=media&token=8781d310-8021-45c1-b95f-f61aab32db79', N'Vans OG Old Skool LX x Bedwin & The Heartbreakers ‘Bandana Pack’ VN0A4P3X9VM1', CAST(129.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:34:45.7576380' AS DateTime2), 4, 7, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (29, 1, CAST(N'2023-03-05 22:35:55.2312820' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/gifyyxwi.kgo.jpg?alt=media&token=e92166af-6aad-4838-86ac-a3e3c35a198e', N'Vans OG Old Skool LX ‘Aztec/Black’ VN0A4P3X92N', CAST(99.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:35:55.2312850' AS DateTime2), 4, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (30, 1, CAST(N'2023-03-05 22:36:42.6787490' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/0zf0efko.h24.jpg?alt=media&token=a30fa0fd-ec52-47eb-be89-142ca40c87ba', N'Vans Vault x WTAPS OG Era LX Bones ‘Coyote’ VN0A3CXNBMD1', CAST(199.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:36:42.6787510' AS DateTime2), 4, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (31, 1, CAST(N'2023-03-05 22:37:34.5460710' AS DateTime2), N'Classic black and white Vans Old Skool Classic design, using a combination of soft, lightweight Canvas on the upper and suede on the toe and sole to give you comfort on the go. The rubber sole for skateboarding ensures durability and good grip. The ability to combine many outfits without fear of being out of tune.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/xjfjgvfp.efz.jpg?alt=media&token=f45bd335-2e9b-4fe9-8984-6209a59e73af', N'Vans Old Skool Mule – Beige 590747-0004', CAST(89.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:37:34.5461070' AS DateTime2), 4, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (32, 1, CAST(N'2023-03-05 22:39:19.7538920' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/dc0532he.ybj.jpg?alt=media&token=dea2b78e-49d5-4b71-a815-c18eb20a2463', N'Converse Chuck Taylor 1970 Plus Black High A00916C', CAST(159.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:39:19.7539000' AS DateTime2), 3, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (33, 1, CAST(N'2023-03-05 22:40:08.1284790' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/n2nv4tk2.hd3.jpg?alt=media&token=97a257f6-904b-43cf-b74b-9b4f795d74c2', N'Converse Chuck Taylor All Star 70 Plus A00915C', CAST(169.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:40:08.1284840' AS DateTime2), 3, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (34, 1, CAST(N'2023-03-05 22:41:06.5716640' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/lpm5joig.2ek.jpg?alt=media&token=27090d62-ae60-48f2-97aa-70c84d143b33', N'CONVERSE Unisex Chuck 70 Plus A00741C', CAST(100.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:41:06.5716680' AS DateTime2), 3, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (35, 1, CAST(N'2023-03-05 22:41:59.9445520' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/qgtg5vvv.rd4.jpg?alt=media&token=0e2dfdab-16ca-47c7-8b4a-80a72c014583', N'Converse Unisex Chuck 70 Plus A00740C', CAST(99.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:41:59.9445560' AS DateTime2), 3, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (36, 1, CAST(N'2023-03-05 22:42:55.9275080' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/g54eq5lw.ptz.png?alt=media&token=ef2825f7-ab82-4657-848b-d2e8458d683e', N'Converse Chuck Taylor All Star Low ‘Archive Print’ 166259C', CAST(79.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:42:55.9275120' AS DateTime2), 3, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (37, 1, CAST(N'2023-03-05 22:44:30.0804580' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/ysj0lunu.ore.jpg?alt=media&token=98d70ce4-515b-41bf-81c0-71dbfac24a06', N'Converse Chuck 70 Low ‘Flames’ 165029C', CAST(89.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:44:30.0804620' AS DateTime2), 3, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (38, 1, CAST(N'2023-03-05 22:49:43.1983280' AS DateTime2), N'Converse has been making Chuck Taylor All Star and One Star sneakers since we started over a century ago, and now we work to make new street style classics. What you wear defines sport, street, and creative culture, and we’ve been redefining it with you all along. When you wear Converse products, you create a culture of authentic street style simply by being yourself.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/1kd55afg.wck.png?alt=media&token=5db8705c-4dfb-4890-aed6-61f6da8fec8f', N'Converse UNT1TL3D High GS ‘Storm Pink’ 272574C', CAST(59.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:49:43.1983320' AS DateTime2), 3, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (39, 1, CAST(N'2023-03-05 22:51:12.3619560' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/irlrptih.dnf.png?alt=media&token=480f7de8-2799-4b69-b0cd-0f2ce65e26e4', N'Nike Air Jordan 1 Mid SE ‘Tiki Leaf Team Red’ (W) DZ2820-601', CAST(249.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:51:12.3619600' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (40, 1, CAST(N'2023-03-05 22:54:46.1638150' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/iclszfh4.kmf.png?alt=media&token=a1d57363-fb82-4521-915a-40f0bd99887e', N'Nike Air Jordan 1 High Zoom Air CMFT 2 ‘Year Of The Rabbit’ FD4327-121', CAST(239.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:54:46.1638200' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (41, 1, CAST(N'2023-03-05 22:56:06.9725870' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/5wazgcyy.nzg.png?alt=media&token=e1c5504f-f838-4912-8527-1935768b45cb', N'Nike Air Jordan 1 Low GS ‘Halloween’ (2023) DV1335-800', CAST(149.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:56:06.9725910' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (42, 1, CAST(N'2023-03-05 22:56:59.1744580' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/4dtga224.xnz.jpg?alt=media&token=f68233d8-e05a-436f-8594-3bd556bfaf30', N'Air Jordan 1 Retro High OG ‘Light Fusion Red’ 555088-603', CAST(259.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:56:59.1744610' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (43, 1, CAST(N'2023-03-05 22:58:14.6236710' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/cwh5mrlr.dmk.png?alt=media&token=6cb8a4a4-34e1-4384-ba60-9de287bac25f', N'Nike Air Jordan 1 Retro High OG ‘White Cement’ DZ5485-052', CAST(259.00 AS Decimal(20, 2)), CAST(N'2023-03-05 22:58:14.6236740' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (44, 1, CAST(N'2023-03-05 23:00:38.4674600' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/eomhlkke.4mt.jpg?alt=media&token=0474e1c3-d0c9-46b6-aeb2-7b945e9ba700', N'Nike Air Jordan 1 Retro High OG ‘Visionaire’ 555088-702', CAST(199.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:00:38.4674640' AS DateTime2), 1, 2, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (45, 1, CAST(N'2023-03-05 23:02:09.0341170' AS DateTime2), N'First launched in 1985 by Jordan Brand, the Nike Air Jordan 1 continues to maintain its "style" and even has a great influence on today''s youth sneaker culture. At any time, the Air Jordan 1s are always enthusiastically welcomed by their wide coverage on major newspapers and social media platforms around the globe.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/fqpvq13t.ntr.png?alt=media&token=c18f8456-eeb2-4f68-9dfc-a52f4671e2d2', N'Air Jordan 1 High Zoom Comfort ‘Black University Red’ CT0979-006', CAST(229.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:02:09.0341210' AS DateTime2), 1, 7, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (46, 1, CAST(N'2023-03-05 23:03:33.0900560' AS DateTime2), N'True classic. Previously, Stan Smith was once a big star of the tennis village. Wearing adidas shoes worthy of his name, you will be a street star. From top to bottom, this classic shoe captures the stylish quintessence of the original 1971 silhouette, with a minimalist leather design and clean lines.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/k0shfaa0.oj4.jpg?alt=media&token=61139649-74bb-46aa-9538-81508c68f479', N'Adidas Stansmith Heart ‘White’ GX9307', CAST(69.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:03:33.0900610' AS DateTime2), 2, 5, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (47, 1, CAST(N'2023-03-05 23:04:14.6705390' AS DateTime2), N'True classic. Previously, Stan Smith was once a big star of the tennis village. Wearing adidas shoes worthy of his name, you will be a street star. From top to bottom, this classic shoe captures the stylish quintessence of the original 1971 silhouette, with a minimalist leather design and clean lines.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/gxeplnbm.ztm.jpg?alt=media&token=7025bdc7-f584-4c51-905b-38e539a315e3', N'Originals Stan Smith ‘Grey’ GX3239', CAST(169.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:04:14.6705460' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (48, 1, CAST(N'2023-03-05 23:04:57.9985600' AS DateTime2), N'True classic. Previously, Stan Smith was once a big star of the tennis village. Wearing adidas shoes worthy of his name, you will be a street star. From top to bottom, this classic shoe captures the stylish quintessence of the original 1971 silhouette, with a minimalist leather design and clean lines.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/m1ptuw5v.auj.png?alt=media&token=8692ac86-4c50-4498-9baa-d15d5ec5eb75', N'Monsters Inc. x Stan Smith ‘Mike Wazowski’ FZ2706', CAST(129.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:04:57.9985640' AS DateTime2), 2, 4, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (49, 1, CAST(N'2023-03-05 23:05:43.1683870' AS DateTime2), N'True classic. Previously, Stan Smith was once a big star of the tennis village. Wearing adidas shoes worthy of his name, you will be a street star. From top to bottom, this classic shoe captures the stylish quintessence of the original 1971 silhouette, with a minimalist leather design and clean lines.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/4kms035v.2bl.jpg?alt=media&token=0a9cd540-4e21-4b10-890d-11a2dd38cca9', N'Stan Smith J Parley GW8164', CAST(79.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:05:43.1683890' AS DateTime2), 2, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (50, 1, CAST(N'2023-03-06 07:03:59.9778540' AS DateTime2), N'Designed by Bruce Kilgore in 1982 with the idea of taking its name from the AIR FORCE ONE, the AF1 quickly became a revolutionary shoe in the sneaker world, selling out in one day. record time. Although nearly 40 years have passed, NIKE AIR FORCE 1 still brings in hundreds of millions of dollars annually for NIKE.', N'https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/tc2jvlg1.mny.jpg?alt=media&token=8cee7891-3054-427f-9438-005f14edfd38', N'Nike Air Force 1 Low LV8 (GS) ‘Pinnacle White’ FD9912-181', CAST(190.00 AS Decimal(20, 2)), CAST(N'2023-03-06 08:50:48.5898500' AS DateTime2), 1, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (51, 1, CAST(N'2023-03-10 21:11:01.2280020' AS DateTime2), N'desc', N'img', N'Name', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-10 21:11:01.2288320' AS DateTime2), 1, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (52, 1, CAST(N'2023-03-10 21:12:40.4282300' AS DateTime2), N'desc', N'img', N'Name', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-10 21:12:40.4286190' AS DateTime2), 1, 1, 1)
GO
INSERT [dbo].[products] ([id], [active], [created_at], [description], [image], [name], [price], [updated_at], [brand_id], [category_id], [creator_id]) VALUES (53, 1, CAST(N'2023-03-10 21:12:56.9441200' AS DateTime2), N'desc', N'img', N'Name', CAST(120.00 AS Decimal(20, 2)), CAST(N'2023-03-10 21:12:56.9441240' AS DateTime2), 1, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[products] OFF
GO
SET IDENTITY_INSERT [dbo].[carts] ON 

GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (1, 1)
GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (2, 2)
GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (3, 3)
GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (4, 4)
GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (5, 5)
GO
INSERT [dbo].[carts] ([id], [user_id]) VALUES (6, 6)
GO
SET IDENTITY_INSERT [dbo].[carts] OFF
GO
SET IDENTITY_INSERT [dbo].[sizes] ON 

GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (1, N'5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (2, N'5.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (3, N'6 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (4, N'6.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (5, N'7 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (6, N'7.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (7, N'8 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (8, N'8.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (9, N'9 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (10, N'9.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (11, N'10 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (12, N'10.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (13, N'11 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (14, N'11.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (15, N'12 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (16, N'12.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (17, N'13 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (18, N'13.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (19, N'14 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (20, N'14.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (21, N'15 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (22, N'15.5 US')
GO
INSERT [dbo].[sizes] ([id], [name]) VALUES (23, N'16 US')
GO
SET IDENTITY_INSERT [dbo].[sizes] OFF
GO
SET IDENTITY_INSERT [dbo].[orders] ON 

GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (1, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:08:21.2404120' AS DateTime2), N'Cash On Delivery', N'0931856541', 2, 2, CAST(949.00 AS Decimal(20, 2)), CAST(N'2023-03-11 13:02:59.4512810' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (2, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:09:02.5678740' AS DateTime2), N'Cash On Delivery', N'0931856541', 4, 2, CAST(275.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:15:14.8865010' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (3, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:09:34.3760260' AS DateTime2), N'Cash On Delivery', N'0931856541', 2, 1, CAST(360.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:14:36.1186250' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (4, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:10:08.5356930' AS DateTime2), N'Cash On Delivery', N'0931856541', 1, 2, CAST(187.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:10:08.5356940' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (5, N'Bitexco Financial Tower, Ho Chi Minh city', CAST(N'2023-03-05 23:11:50.7953110' AS DateTime2), N'Cash On Delivery', N'0123456789', 3, 2, CAST(308.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:14:54.4687660' AS DateTime2), 3)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (6, N'BitexCo Tower, Ho Chi Minh city', CAST(N'2023-03-05 23:12:17.7427350' AS DateTime2), N'Cash On Delivery', N'0123456789', 1, 2, CAST(297.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:12:17.7427360' AS DateTime2), 3)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (7, N'Phu Quoc Prison', CAST(N'2023-03-05 23:13:34.7850720' AS DateTime2), N'Cash On Delivery', N'0987654321', 5, 3, CAST(1018.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:13:40.5322990' AS DateTime2), 4)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (8, N'Phu Quoc Prison', CAST(N'2023-03-05 23:13:59.1048380' AS DateTime2), N'Cash On Delivery', N'0987654321', 1, 2, CAST(387.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:13:59.1048400' AS DateTime2), 4)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (9, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:17:25.6621680' AS DateTime2), N'Cash On Delivery', N'091846237', 1, 1, CAST(239.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:17:25.6621690' AS DateTime2), 5)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (10, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:17:55.8213900' AS DateTime2), N'Cash On Delivery', N'+849318565410', 4, 1, CAST(129.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:20:29.7119220' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (11, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-05 23:18:23.7801190' AS DateTime2), N'Cash On Delivery', N'0931856541', 1, 1, CAST(259.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:18:23.7801240' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (12, N'Hoa Lo Prison, Ha Noi', CAST(N'2023-03-05 23:19:34.1797560' AS DateTime2), N'Cash On Delivery', N'0344867111', 5, 2, CAST(328.00 AS Decimal(20, 2)), CAST(N'2023-03-05 23:19:38.6443560' AS DateTime2), 6)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (13, N'Hoa Lo Prison, Ha Noi', CAST(N'2023-03-05 23:19:55.0222390' AS DateTime2), N'Cash On Delivery', N'0344867111', 5, 1, CAST(149.00 AS Decimal(20, 2)), CAST(N'2023-03-06 08:45:14.3639410' AS DateTime2), 6)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (14, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-06 08:43:44.1398710' AS DateTime2), N'Cash On Delivery', N'+84931856541', 1, 2, CAST(1145.00 AS Decimal(20, 2)), CAST(N'2023-03-06 08:43:44.1399120' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (10014, N'2, D4, Phuoc Long B, Thu Duc city, Ho Chi Minh city', CAST(N'2023-03-09 15:04:16.0820180' AS DateTime2), N'Cash On Delivery', N'+84931856541', 1, 2, CAST(269.00 AS Decimal(20, 2)), CAST(N'2023-03-09 15:04:16.0822660' AS DateTime2), 2)
GO
INSERT [dbo].[orders] ([id], [address], [created_at], [payment], [phone], [status], [total_item], [total_price], [updated_at], [user_id]) VALUES (20014, N'2, D4, kp6', CAST(N'2023-03-11 14:12:49.7404490' AS DateTime2), N'COD', N'0918031377', 1, 1, CAST(150.00 AS Decimal(20, 2)), CAST(N'2023-03-11 14:12:49.7410810' AS DateTime2), 2)
GO
SET IDENTITY_INSERT [dbo].[orders] OFF
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (2, 1, 1, 9)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 45, 1, 10)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 7, 2, 17)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 20, 2, 14)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 1, 3, 14)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (2, 38, 4, 8)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 46, 4, 16)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 38, 5, 14)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 39, 5, 4)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 35, 6, 1)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (2, 35, 6, 7)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 13, 7, 2)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 13, 7, 5)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 34, 7, 14)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 31, 8, 12)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (2, 41, 8, 22)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 40, 9, 19)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 48, 10, 12)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 43, 11, 14)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 29, 12, 9)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 45, 12, 16)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 41, 13, 21)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (2, 45, 14, 10)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (3, 45, 14, 16)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 49, 10014, 10)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (1, 50, 10014, 4)
GO
INSERT [dbo].[order_items] ([quantity], [product_id], [order_id], [size_id]) VALUES (69, 48, 20014, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 3)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 51)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 52)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (1, 53)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 1)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 2)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 3)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 10)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 21)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 24)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 27)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 37)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 38)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 39)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 43)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 51)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 52)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (2, 53)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 1)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 2)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 3)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 10)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 21)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 24)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 27)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 28)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 37)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 39)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 51)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 52)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (3, 53)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 1)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 2)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 3)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 10)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 21)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 24)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 28)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 39)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 47)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (4, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 3)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 21)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 28)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 39)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 47)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (5, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (6, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 10)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 49)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (7, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 10)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 29)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 37)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 38)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 43)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (8, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 4)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 11)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 14)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 18)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 29)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 37)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 41)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 46)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 49)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (9, 50)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 4)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 14)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 16)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 18)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 23)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 46)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 47)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (10, 49)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 4)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 12)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 17)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 23)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 41)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (11, 47)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 4)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 17)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 23)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (12, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 17)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 20)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 23)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (13, 49)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 17)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 20)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 23)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 27)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 36)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 38)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (14, 43)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 17)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 18)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 20)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 22)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 26)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 27)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 30)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 35)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 36)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 41)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 46)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (15, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 9)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 18)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 22)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 26)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 27)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 30)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 34)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 36)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (16, 46)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 8)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 9)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 26)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 30)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (17, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 9)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 30)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 31)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (18, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 9)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 13)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 44)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (19, 45)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 7)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 9)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 15)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 19)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (20, 43)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 5)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 15)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 19)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 25)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 41)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (21, 48)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 15)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 19)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 28)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 32)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (22, 41)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 6)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 15)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 19)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 28)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 33)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 40)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 42)
GO
INSERT [dbo].[product_sizes] ([size_id], [product_id]) VALUES (23, 44)
GO
