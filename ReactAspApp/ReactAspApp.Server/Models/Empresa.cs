using System.ComponentModel.DataAnnotations;

namespace ReactAspApp.Server.Models
{
    public class Empresa
    {
        public Empresa(int id, string nombre, string razon_social, string rfc, string direccion_fiscal, string email, string telefono, Boolean estatus)
        {
            Id = id;
            Nombre = nombre;
            Razon_social = razon_social;
            RFC = rfc;
            Direccion_fiscal = direccion_fiscal;
            Email = email;
            Telefono = telefono;
            Estatus = estatus;
        }


        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es requerido")]
        public string Nombre { get; set; }

        [Required (ErrorMessage = "La Razon social es requerida")]
        public string Razon_social { get; set; }

        [Required(ErrorMessage = "El RFC es requerido")]
        public string RFC { get; set; }

        [Required (ErrorMessage = "La Direccion fiscal es requerida")]
        public string Direccion_fiscal { get; set; }

        [Required (ErrorMessage = "El Email es requerido")]
        public string Email { get; set; }

        [Required (ErrorMessage = "El Telefono es requerido")]
        public string Telefono { get; set; }

        [Required (ErrorMessage = "El Estatus es requerido")]
        public Boolean Estatus { get; set; }
        
    }
}
