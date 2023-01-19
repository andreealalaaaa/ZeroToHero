using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZeroToHeroServices.Models;

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

        public static async Task AddUser(string username, string password, string firstname, string lastname, string email, string country, int age)
        {
            var user = new User
            {
                Username = username,
                Password = password,
                Firstname = firstname,
                LastName = lastname,
                Email = email,
                Country = country,
                Age = age
            };

            var json = JsonConvert.SerializeObject(user);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            await client.PostAsync("api/Users", content);
        }

        public static async Task<User> GetUser(string username)
        {
            var json = await client.GetStringAsync($"api/Users/{username}");
            var user = JsonConvert.DeserializeObject<User>(json);
            return user;
        }
    }
}
