using Microsoft.EntityFrameworkCore;
using ReactAspApp.Server.Models;

namespace ReactAspApp.Server.Datos
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)  { 
            
        }
        public DbSet<Empresa> Empresa { get; set; }
        //Agregar los modelos aqui(cada modelo corresponde a una tabla en la DB)
    }
}
