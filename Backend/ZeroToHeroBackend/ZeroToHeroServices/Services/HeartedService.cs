using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZeroToHeroServices.Services
{
    public class HeartedService
    {
        static readonly string Baseurl = "https://zerotoheroapp.azurewebsites.net";

        static HttpClient client;

        static HeartedService()
        {
            client = new HttpClient
            {
                BaseAddress = new Uri(Baseurl)
            };
        }
    }
}
