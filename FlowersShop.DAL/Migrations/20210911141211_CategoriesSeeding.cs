using Microsoft.EntityFrameworkCore.Migrations;

namespace FlowersShop.DAL.Migrations
{
    public partial class CategoriesSeeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "Name", "PhotoPath" },
                values: new object[,]
                {
                    { 1, "Широкий ассортимент цветов!", "Цветы", "/assets/images/flowers.png" },
                    { 2, "Сборные и свадебные букеты!", "Букеты", "/assets/images/bouquet.png" },
                    { 3, "Композиции в шляпке, на оазисе, в корзинке!", "Композиции", "/assets/images/composition.png" },
                    { 4, "Гелиевые шары, открытки!", "Подарки", "/assets/images/balloons.png" },
                    { 5, "Пиньята на детский праздник сможет порадовать вашего ребенка!", "Пиньяты", "/assets/images/pinata.png" },
                    { 6, "Свечи ручной работы на любой вкус и цвет!", "Свечи", "/assets/images/candle.png" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
