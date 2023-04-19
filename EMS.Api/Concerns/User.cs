namespace EMS.Api.Concerns
{
    public class User
    {
        public string id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string designationId { get; set; }
        public string addressLine1 { get; set; }
        public string city { get; set;}
        public string state { get; set;}
        public string country { get; set;}
        public string zipcode { get; set;}
        public string roleId { get; set;}
        public string managerId { get; set;}
         
    }
}
