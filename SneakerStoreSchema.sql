USE [SneakerStore]
GO
/****** Object:  Table [dbo].[brands]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brands](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](75) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[cart_items]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart_items](
	[quantity] [int] NULL,
	[product_id] [bigint] NOT NULL,
	[size_id] [bigint] NOT NULL,
	[cart_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cart_id] ASC,
	[product_id] ASC,
	[size_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[carts]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[carts](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[categories]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categories](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](75) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[order_items]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_items](
	[quantity] [int] NULL,
	[product_id] [bigint] NOT NULL,
	[order_id] [bigint] NOT NULL,
	[size_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[order_id] ASC,
	[product_id] ASC,
	[size_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[orders]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[address] [nvarchar](max) NULL,
	[created_at] [datetime2](6) NULL,
	[payment] [nvarchar](155) NULL,
	[phone] [nvarchar](15) NULL,
	[status] [tinyint] NOT NULL DEFAULT ((1)),
	[total_item] [int] NULL,
	[total_price] [decimal](20, 2) NOT NULL,
	[updated_at] [datetime2](6) NULL,
	[user_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[product_sizes]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_sizes](
	[size_id] [bigint] NOT NULL,
	[product_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[size_id] ASC,
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[product_tags]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_tags](
	[tag_id] [bigint] NOT NULL,
	[product_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[tag_id] ASC,
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[products]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[active] [tinyint] NOT NULL DEFAULT ((1)),
	[created_at] [datetime2](6) NULL,
	[description] [nvarchar](max) NULL,
	[image] [nvarchar](max) NULL,
	[name] [nvarchar](155) NOT NULL,
	[price] [decimal](20, 2) NOT NULL,
	[updated_at] [datetime2](6) NULL,
	[brand_id] [bigint] NULL,
	[category_id] [bigint] NULL,
	[creator_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[sizes]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sizes](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](75) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tags]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tags](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](75) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[users]    Script Date: 3/13/2023 2:10:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[active] [tinyint] NOT NULL DEFAULT ((1)),
	[admin] [tinyint] NOT NULL DEFAULT ((0)),
	[created_at] [datetime2](6) NULL,
	[email] [nvarchar](50) NULL,
	[name] [nvarchar](155) NOT NULL,
	[password] [nvarchar](100) NULL,
	[phone] [nvarchar](15) NULL,
	[updated_at] [datetime2](6) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK13bjx0o7t93tkgan9ikdbw779] FOREIGN KEY([size_id])
REFERENCES [dbo].[sizes] ([id])
GO
ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK13bjx0o7t93tkgan9ikdbw779]
GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK1re40cjegsfvw58xrkdp6bac6] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK1re40cjegsfvw58xrkdp6bac6]
GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FKpcttvuq4mxppo8sxggjtn5i2c] FOREIGN KEY([cart_id])
REFERENCES [dbo].[carts] ([id])
GO
ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FKpcttvuq4mxppo8sxggjtn5i2c]
GO
ALTER TABLE [dbo].[carts]  WITH CHECK ADD  CONSTRAINT [FKb5o626f86h46m4s7ms6ginnop] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[carts] CHECK CONSTRAINT [FKb5o626f86h46m4s7ms6ginnop]
GO
ALTER TABLE [dbo].[order_items]  WITH CHECK ADD  CONSTRAINT [FK9t2qyxv7hnjv24ox49t7oyga2] FOREIGN KEY([size_id])
REFERENCES [dbo].[sizes] ([id])
GO
ALTER TABLE [dbo].[order_items] CHECK CONSTRAINT [FK9t2qyxv7hnjv24ox49t7oyga2]
GO
ALTER TABLE [dbo].[order_items]  WITH CHECK ADD  CONSTRAINT [FKbioxgbv59vetrxe0ejfubep1w] FOREIGN KEY([order_id])
REFERENCES [dbo].[orders] ([id])
GO
ALTER TABLE [dbo].[order_items] CHECK CONSTRAINT [FKbioxgbv59vetrxe0ejfubep1w]
GO
ALTER TABLE [dbo].[order_items]  WITH CHECK ADD  CONSTRAINT [FKocimc7dtr037rh4ls4l95nlfi] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[order_items] CHECK CONSTRAINT [FKocimc7dtr037rh4ls4l95nlfi]
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FK32ql8ubntj5uh44ph9659tiih] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FK32ql8ubntj5uh44ph9659tiih]
GO
ALTER TABLE [dbo].[product_sizes]  WITH CHECK ADD  CONSTRAINT [FK3bqabm2nc8yyl9to7fo8trak4] FOREIGN KEY([size_id])
REFERENCES [dbo].[sizes] ([id])
GO
ALTER TABLE [dbo].[product_sizes] CHECK CONSTRAINT [FK3bqabm2nc8yyl9to7fo8trak4]
GO
ALTER TABLE [dbo].[product_sizes]  WITH CHECK ADD  CONSTRAINT [FK4isa0j51hpdn7cx04m831jic4] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[product_sizes] CHECK CONSTRAINT [FK4isa0j51hpdn7cx04m831jic4]
GO
ALTER TABLE [dbo].[product_tags]  WITH CHECK ADD  CONSTRAINT [FK5rk6s19k3risy7q7wqdr41uss] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[product_tags] CHECK CONSTRAINT [FK5rk6s19k3risy7q7wqdr41uss]
GO
ALTER TABLE [dbo].[product_tags]  WITH CHECK ADD  CONSTRAINT [FKpur2885qb9ae6fiquu77tcv1o] FOREIGN KEY([tag_id])
REFERENCES [dbo].[tags] ([id])
GO
ALTER TABLE [dbo].[product_tags] CHECK CONSTRAINT [FKpur2885qb9ae6fiquu77tcv1o]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKa3a4mpsfdf4d2y6r8ra3sc8mv] FOREIGN KEY([brand_id])
REFERENCES [dbo].[brands] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKa3a4mpsfdf4d2y6r8ra3sc8mv]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKid1quonr11ajt1rq1xbvx9p47] FOREIGN KEY([creator_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKid1quonr11ajt1rq1xbvx9p47]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKog2rp4qthbtt2lfyhfo32lsw9] FOREIGN KEY([category_id])
REFERENCES [dbo].[categories] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKog2rp4qthbtt2lfyhfo32lsw9]
GO
