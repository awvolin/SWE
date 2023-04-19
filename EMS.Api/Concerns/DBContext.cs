using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Data;

namespace EMS.Api.Concerns
    {
    public partial class DBContext : DbContext
    {
        public DBContext()
        {
        }

        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Designation> Designations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.id).HasColumnType("varchar(45)");

                entity.Property(e => e.name)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.email)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.password)
                    .IsRequired()
                    .HasMaxLength(45);
                entity.Property(e => e.designationId)
                    .IsRequired()
                    .HasMaxLength(45);
                entity.Property(e => e.addressLine1)
                    .HasMaxLength(45);
                entity.Property(e => e.city)
                    .HasMaxLength(45);

                entity.Property(e => e.state)
                    .HasMaxLength(45);

                entity.Property(e => e.country)
                    .HasMaxLength(45);

                entity.Property(e => e.zipcode)
                    .HasMaxLength(45);

                entity.Property(e => e.roleId)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.managerId)
                    .HasMaxLength(50);
            });
            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.id).HasColumnType("varchar(45)");

                entity.Property(e => e.name)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.description)
                    .HasMaxLength(45);
            });
            modelBuilder.Entity<Designation>(entity =>
            {
                entity.ToTable("designation");

                entity.Property(e => e.id).HasColumnType("varchar(45)");

                entity.Property(e => e.name)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.description)
                    .HasMaxLength(45);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
