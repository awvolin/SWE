using System.Diagnostics.CodeAnalysis;

namespace EMS.Api.Concerns
{
    public class Designation
    {
        [AllowNull]
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }

    }
}
