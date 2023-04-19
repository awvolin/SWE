using EMS.Api.Concerns;
using EMS.Api.Contracts;
using EMS.Api.Providers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddEntityFrameworkMySql().AddDbContext<DBContext>(options => {
    options.UseMySql(builder.Configuration.GetConnectionString("appDatabase"), ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("appDatabase")));
});

builder.Services.AddTransient<ILoginContract, LoginProvider>();
builder.Services.AddTransient<IEmployeeContract, EmployeeProvider>();
builder.Services.AddTransient<IRoleContract, RoleProvider>();
builder.Services.AddTransient<IDesignationContract, DesignationProvider>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
