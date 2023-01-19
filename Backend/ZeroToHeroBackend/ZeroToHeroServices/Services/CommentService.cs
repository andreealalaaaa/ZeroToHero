using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZeroToHeroServices.Services
{
    public class CommentService
    {
        static readonly string Baseurl = "https://zerotoheroapp.azurewebsites.net";

        static HttpClient client;

        static CommentService()
        {
            client = new HttpClient
            {
                BaseAddress = new Uri(Baseurl)
            };
        }
    }
}
