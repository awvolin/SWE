using EMS.Api.Concerns;
using EMS.Api.Contracts;

namespace EMS.Api.Providers
{
    public class EmployeeProvider : IEmployeeContract
    {
        public DBContext dbContext { get; set; }
        public EmployeeProvider(DBContext dbContext) { 
            this.dbContext = dbContext;
        }

        public User AddEmployee(User user)
        {
            user.id = Guid.NewGuid().ToString();
            dbContext.Users.Add(user);
            dbContext.SaveChanges();
            return user;
        }

        public User GetEmployeeById(string id)
        {
            return dbContext.Users.Single(x => x.id == id);
        }

        public List<User> GetReportingEmployees(string id)
        {
            User employee = GetEmployeeById(id);
            if (employee.roleId == dbContext.Roles.Single(x =>  x.name == "admin").id)
            {
                return dbContext.Users.Where(user => user.id != id).ToList();
            }
            else if (employee.designationId == dbContext.Designations.Single(x => x.name == "Manager").id)
            {
                return dbContext.Users.Where(user => user.managerId == id).ToList();
            }
            else
            {
                return dbContext.Users.Where(user => user.managerId == employee.managerId && user.id != id).ToList();
            }
        }
    }
}
