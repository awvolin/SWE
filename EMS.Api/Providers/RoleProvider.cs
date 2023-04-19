using EMS.Api.Concerns;
using EMS.Api.Contracts;

namespace EMS.Api.Providers
{
    public class RoleProvider : IRoleContract
    {

        public DBContext dbContext { get; set; }
        public RoleProvider(DBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public Role AddRole(Role role)
        {
            role.id = Guid.NewGuid().ToString();
            dbContext.Roles.Add(role);
            dbContext.SaveChanges();
            return role;
        }

        public List<Role> GetRoles()
        {
            return dbContext.Roles.ToList();
        }
    }
}
