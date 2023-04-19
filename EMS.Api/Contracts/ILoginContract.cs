using EMS.Api.Concerns;

namespace EMS.Api.Contracts
{
    public interface ILoginContract
    {
        public User Login(string email, string password);
        public User ResetPassword(string email, string password);
        public User FindUser(string email);
    }
}
