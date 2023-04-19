using EMS.Api.Concerns;
using EMS.Api.Contracts;

namespace EMS.Api.Providers
{
    public class DesignationProvider : IDesignationContract
    {
        public DBContext dbContext { get; set; }
        public DesignationProvider(DBContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public Designation AddDesignation(Designation designation)
        {
            designation.id = Guid.NewGuid().ToString();
            dbContext.Designations.Add(designation);
            dbContext.SaveChanges();
            return designation;
        }

        public List<Designation> GetDesignations()
        {
            return dbContext.Designations.ToList();
        }
    }
}
