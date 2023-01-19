using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZeroToHeroServices.Models;

namespace ZeroToHeroServices.Services
{
    public class PostService
    {
        static readonly string Baseurl = "https://zerotoheroapp.azurewebsites.net";

        static HttpClient client;

        static PostService()
        {
            client = new HttpClient
            {
                BaseAddress = new Uri(Baseurl)
            };
        }

        public static async Task<IEnumerable<Post>> GetPosts()
        {
            var json = await client.GetStringAsync("api/Posts");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(json);
            return posts; 
        }

        public static async Task<IEnumerable<Post>> GetUserPosts(string username)
        {
            var json = await client.GetStringAsync($"api/Posts/user/{username}");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(json);
            return posts;
        }

        public static async Task<IEnumerable<Post>> GetPostsById(int id)
        {
            var json = await client.GetStringAsync($"api/Posts/{id}");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(json);
            return posts;
        }

        public static async Task AddPost(string username, string text)
        {
            var post = new Post
            {
                Username = username,
                Text = text
            };

            var json=JsonConvert.SerializeObject(post);
            var content=new StringContent(json, Encoding.UTF8, "application/json");
            await client.PostAsync("api/Posts", content);
        }

    }
}
