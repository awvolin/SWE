using EMS.Api.Concerns;
using EMS.Api.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace EMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeContract _employeeContract;

        public EmployeeController(IEmployeeContract employeeContract)
        {
            _employeeContract = employeeContract;
        }

        [HttpPost("add")]
        public User AddEmployee(User user)
        {
            return this._employeeContract.AddEmployee(user);
        }

        [HttpGet("employeeById/{id}")]
        public User GetEmployeeById(string id)
        {
            return this._employeeContract.GetEmployeeById(id);
        }

        [HttpGet("reportingEmployees/{id}")]
        public List<User> GetReportingEmployees(string id)
        {
            return this._employeeContract.GetReportingEmployees(id);
        }
    }

}
