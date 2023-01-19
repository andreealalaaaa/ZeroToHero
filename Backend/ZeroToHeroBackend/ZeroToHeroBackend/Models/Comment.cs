using System;
using System.Collections.Generic;

namespace ZeroToHeroBackend.Models
{
    public partial class Comment
    {
        public string Username { get; set; } = null!;
        public int PostId { get; set; }
        public string? CommentText { get; set; }
        public byte[]? Image { get; set; }
        public int CommentId { get; set; }
    }
}
