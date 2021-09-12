﻿// <auto-generated />
using FlowersShop.DAL.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FlowersShop.DAL.Migrations
{
    [DbContext(typeof(FlowersShopDbContext))]
    [Migration("20210911141211_CategoriesSeeding")]
    partial class CategoriesSeeding
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FlowersShop.DAL.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoPath")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Широкий ассортимент цветов!",
                            Name = "Цветы",
                            PhotoPath = "/assets/images/flowers.png"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Сборные и свадебные букеты!",
                            Name = "Букеты",
                            PhotoPath = "/assets/images/bouquet.png"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Композиции в шляпке, на оазисе, в корзинке!",
                            Name = "Композиции",
                            PhotoPath = "/assets/images/composition.png"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Гелиевые шары, открытки!",
                            Name = "Подарки",
                            PhotoPath = "/assets/images/balloons.png"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Пиньята на детский праздник сможет порадовать вашего ребенка!",
                            Name = "Пиньяты",
                            PhotoPath = "/assets/images/pinata.png"
                        },
                        new
                        {
                            Id = 6,
                            Description = "Свечи ручной работы на любой вкус и цвет!",
                            Name = "Свечи",
                            PhotoPath = "/assets/images/candle.png"
                        });
                });

            modelBuilder.Entity("FlowersShop.DAL.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("FlowersShop.DAL.Entities.Product", b =>
                {
                    b.HasOne("FlowersShop.DAL.Entities.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("FlowersShop.DAL.Entities.Category", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}