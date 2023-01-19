using System;
using System.Collections.Generic;

namespace ZeroToHeroBackend.Models
{
    public partial class Post
    {
        public string Username { get; set; } = null!;
        public string Text { get; set; } = null!;
        public int PostId { get; set; }
    }
}
