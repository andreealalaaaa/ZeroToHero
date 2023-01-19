using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZeroToHeroServices.Models;

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

        public static async Task AddToHearts(string username, int postid)
        {
            var heart = new Hearted
            {
                Username = username,
                PostId = postid.ToString()
            };

            var json = JsonConvert.SerializeObject(heart);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            await client.PostAsync("api/Hearteds", content);
        }

        public static async Task<IEnumerable<Post>> GetHeartedPostsByUser(string username)
        {
            var json = await client.GetStringAsync($"api/Hearteds/user/{username}");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(json);
            return posts;
        }

        public static async Task DeleteFromHearted(int id)
        {
            var idstring = id.ToString();
            await client.DeleteAsync($"api/Hearteds/{idstring}");
        }
    }
}
