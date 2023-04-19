using EMS.Api.Concerns;
using EMS.Api.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignationsController : ControllerBase
    {
        private readonly IDesignationContract _designationContract;

        public DesignationsController(IDesignationContract designationContract)
        {
            this._designationContract = designationContract;
        }


        [HttpPost("add")]
        public Designation AddDesignation(Designation designation)
        {
            return this._designationContract.AddDesignation(designation);
        }
        [HttpGet]
        public List<Designation> GetDesignations()
        {
            return this._designationContract.GetDesignations();
        }
    }
}
