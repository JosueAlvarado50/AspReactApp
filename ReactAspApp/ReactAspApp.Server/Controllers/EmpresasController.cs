using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAspApp.Server.Datos;
using ReactAspApp.Server.Models;

namespace ReactAspApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")] //se aplica la politica de CORS
    public class EmpresasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmpresasController(ApplicationDbContext context)
        {
            _context = context;
        }


        //POST create
        [HttpPost]
        public async Task<ActionResult<Empresa>> AddEmpresa(Empresa empresa)
        {
            _context.Empresa.Add(empresa);
            await _context.SaveChangesAsync();

            //Devuelve un 201 created con la ubicacion del nuevo recurso
            return CreatedAtAction(nameof(GetEmpresaById), new { id = empresa.Id }, empresa);
        }

        //GET: api/Empresas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empresa>>> GetEmpresas()
        {
            try
            {
                //Obtiene la lista de empresas desde la base de datos
                var empresas = await _context.Empresa.ToListAsync();
                return Ok(empresas);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //GET EmpresaById
        [HttpGet("{id}")]
        public async Task<ActionResult<Empresa>> GetEmpresaById(int id)
        {
            var empresa = await _context.Empresa.FindAsync(id);

            if (empresa == null)
            {
                return NotFound();
            }
            return Ok(empresa);
        }

        private bool EmpresaExists(int id)
        {
            return _context.Empresa.Any(emp => emp.Id == id);
        }


        //Update
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmpresa(int id, Empresa empresa)
        {
            if (id != empresa.Id)
            {
                return BadRequest();
            }

            _context.Entry(empresa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpresaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        //DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpresa(int id)
        {
            var empresa = await _context.Empresa.FindAsync(id);
            if (empresa == null)
            {
                return NotFound();
            }
            _context.Empresa.Remove(empresa);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
