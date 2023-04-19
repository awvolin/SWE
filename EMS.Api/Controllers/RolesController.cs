using EMS.Api.Concerns;
using EMS.Api.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly IRoleContract _roleContract;

        public RolesController(IRoleContract roleContract) { 
            this._roleContract = roleContract;
        }


        [HttpPost("add")]
        public Role AddRole(Role role)
        {
            return this._roleContract.AddRole(role);
        }
        [HttpGet]
        public List<Role> GetRoles()
        {
            return this._roleContract.GetRoles();
        }
    }
}
