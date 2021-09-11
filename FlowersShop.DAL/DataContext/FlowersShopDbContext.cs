using FlowersShop.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlowersShop.DAL.DataContext
{
    public class FlowersShopDbContext : DbContext
    {
        public FlowersShopDbContext(DbContextOptions<FlowersShopDbContext> options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId);

            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Цветы", Description = "Широкий ассортимент цветов!", PhotoPath = "/assets/images/flowers.png" },
                new Category { Id = 2, Name = "Букеты", Description = "Сборные и свадебные букеты!", PhotoPath = "/assets/images/bouquet.png" },
                new Category { Id = 3, Name = "Композиции", Description = "Композиции в шляпке, на оазисе, в корзинке!", PhotoPath = "/assets/images/composition.png" },
                new Category { Id = 4, Name = "Подарки", Description = "Гелиевые шары, открытки!", PhotoPath = "/assets/images/balloons.png" },
                new Category { Id = 5, Name = "Пиньяты", Description = "Пиньята на детский праздник сможет порадовать вашего ребенка!", PhotoPath = "/assets/images/pinata.png" },
                new Category { Id = 6, Name = "Свечи", Description = "Свечи ручной работы на любой вкус и цвет!", PhotoPath = "/assets/images/candle.png" });
        }
    }
}
