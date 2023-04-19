using EMS.Api.Concerns;

namespace EMS.Api.Contracts
{
    public interface IDesignationContract
    {
        public Designation AddDesignation(Designation designation);
        public List<Designation> GetDesignations();
    }
}
