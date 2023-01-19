using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ZeroToHeroBackend.Models
{
    public partial class ZeroToHeroDBContext : DbContext
    {
        public ZeroToHeroDBContext()
        {
        }

        public ZeroToHeroDBContext(DbContextOptions<ZeroToHeroDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comment> Comments { get; set; } = null!;
        public virtual DbSet<Hearted> Hearteds { get; set; } = null!;
        public virtual DbSet<Post> Posts { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment");

                entity.Property(e => e.Image).HasColumnType("image");

                entity.Property(e => e.Username).HasMaxLength(50);
            });

            modelBuilder.Entity<Hearted>(entity =>
            {
                entity.HasKey(e => e.PostId);

                entity.ToTable("Hearted");

                entity.Property(e => e.PostId)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Username).HasMaxLength(50);
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.Property(e => e.Username).HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Username).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
