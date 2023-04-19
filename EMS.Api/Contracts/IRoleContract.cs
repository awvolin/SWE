using EMS.Api.Concerns;

namespace EMS.Api.Contracts
{
    public interface IRoleContract
    {
        public Role AddRole(Role role);
        public List<Role> GetRoles();
    }
}
