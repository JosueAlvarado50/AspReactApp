using System.ComponentModel.DataAnnotations;

namespace ReactAspApp.Server.Models
{
    public class Empresa
    {
        // Constructor predeterminado necesario para Entity Framework
        public Empresa() { }

        public Empresa(int id, string nombre, string razon_social, string rfc, string direccion_fiscal, string email, string telefono, bool estatus)
        {
            Id = id;
            Nombre = nombre;
            Razon_social = razon_social;
            RFC = rfc; // Asegúrate de que el nombre coincida
            Direccion_fiscal = direccion_fiscal;
            Email = email;
            Telefono = telefono;
            Estatus = estatus;
        }

        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "La Razón social es requerida")]
        public string Razon_social { get; set; }

        [Required(ErrorMessage = "El RFC es requerido")]
        public string RFC { get; set; }

        [Required(ErrorMessage = "La Dirección fiscal es requerida")]
        public string Direccion_fiscal { get; set; }

        [Required(ErrorMessage = "El Email es requerido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El Teléfono es requerido")]
        public string Telefono { get; set; }

        [Required(ErrorMessage = "El Estatus es requerido")]
        public bool Estatus { get; set; }
    }
}
