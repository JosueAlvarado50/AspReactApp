using Microsoft.EntityFrameworkCore;

namespace ReactAspApp.Server.Datos
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)  { 
            
        }

        //Agregar los modelos aqui(cada modelo corresponde a una tabla en la DB)
    }
}
