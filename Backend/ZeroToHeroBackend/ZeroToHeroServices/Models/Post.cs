using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZeroToHeroServices.Models
{
    public class Post
    {
        public string Username { get; set; } = null!;
        public string Text { get; set; } = null!;
        public int PostId { get; set; }
    }
}
