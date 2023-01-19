using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZeroToHeroServices.Models;

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

        public static async Task AddComments(string username, int postid,string commenttext)
        {
            var comment = new Comment
            {
                Username = username,
                PostId = postid,
                CommentText = commenttext
            };

            var json = JsonConvert.SerializeObject(comment);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            await client.PostAsync("api/Comments", content);
        }

        public static async Task<IEnumerable<Comment>> GetCommentsByPost(int postid)
        {
            var json = await client.GetStringAsync($"api/Comments/Posts/{postid}");
            var comments = JsonConvert.DeserializeObject<IEnumerable<Comment>>(json);
            return comments;
        }
    }
}
