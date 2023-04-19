using EMS.Api.Concerns;

namespace EMS.Api.Contracts
{
    public interface IEmployeeContract
    {
        public User AddEmployee(User user);
        public User GetEmployeeById(string id);
        public List<User> GetReportingEmployees(string id);
    }
}
