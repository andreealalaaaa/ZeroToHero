using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZeroToHeroServices.Models
{
    public class Comment
    {
        public string Username { get; set; } = null!;
        public int PostId { get; set; }
        public string? CommentText { get; set; }
        public byte[]? Image { get; set; }
        public int CommentId { get; set; }
    }
}
