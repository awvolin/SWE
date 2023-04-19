using EMS.Api.Concerns;
using EMS.Api.Contracts;

namespace EMS.Api.Providers
{
    public class LoginProvider : ILoginContract
    {
        public DBContext dbContext { get; set; }
        public LoginProvider(DBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public User FindUser(string email)
        {
            User user = dbContext.Users.FirstOrDefault(x => x.email == email);
            return user;
        }

        public User Login(string email, string password)
        {
            User user = dbContext.Users.FirstOrDefault(x => x.email == email);
            if (user != null)
            {
                if (user.password == password)
                {
                    return user;
                }
                else
                {
                    throw new Exception("Password doesn't match");
                }
            }
            else
            {
                throw new Exception("User does not exist");
            }
        }

        public User ResetPassword(string email, string password)
        {
            User user = dbContext.Users.FirstOrDefault(x => x.email == email);
            if (user != null)
            {
                user.password = password;
                dbContext.Users.Update(user);
                dbContext.SaveChanges();
                return user;
            }
            else
            {
                throw new Exception("User does not exist");
            }
        }
    }
}
