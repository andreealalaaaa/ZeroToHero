using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZeroToHeroServices.Services
{
    public class UserService
    {
        static readonly string Baseurl = "https://zerotoheroapp.azurewebsites.net";

        static HttpClient client;

        static UserService()
        {
            client = new HttpClient
            {
                BaseAddress = new Uri(Baseurl)
            };
        }
    }
}
