using EMS.Api.Concerns;
using EMS.Api.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace EMS.Api.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class LoginController : ControllerBase
    {

        private readonly ILogger<LoginController> _logger;
        private readonly ILoginContract _loginContract;

        public LoginController(ILoginContract loginContract,ILogger<LoginController> logger)
        {
            _logger = logger;
            _loginContract = loginContract;
        }


        [HttpGet("login/{email}/{password}")]
        public IActionResult Login(string email, string password)
        {
            try
            {
                return Ok(_loginContract.Login(email, password));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("reset/{email}/{password}")]
        public IActionResult ResetPassword(string email, string password)
        {
            try
            {
                return Ok(_loginContract.ResetPassword(email, password));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("findUser/{email}")]
        public User FindUser(string email)
        {
            return _loginContract.FindUser(email);
        }
    }
}