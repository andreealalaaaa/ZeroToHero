using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZeroToHeroBackend.Models;

namespace ZeroToHeroBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeartedsController : ControllerBase
    {
        private readonly ZeroToHeroDBContext _context;

        public HeartedsController(ZeroToHeroDBContext context)
        {
            _context = context;
        }

        // GET: api/Hearteds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hearted>>> GetHearteds()
        {
            return await _context.Hearteds.ToListAsync();
        }

        // GET: api/Hearteds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hearted>> GetHearted(string id)
        {
            var hearted = await _context.Hearteds.FindAsync(id);

            if (hearted == null)
            {
                return NotFound();
            }

            return hearted;
        }
        //GET: api/Hearteds/user/username
        [HttpGet("user/{username}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetPostsByUsername(string username)
        {
            var hearts = await _context.Hearteds.Where(h => h.Username == username).ToListAsync();
            if (hearts == null)
            {
                return NotFound();
            }

            var postIds = hearts.Select(h => h.PostId).ToList();
            var posts = await _context.Posts.Where(p => postIds.Contains(p.PostId.ToString())).ToListAsync();
            return posts;
        }

        // PUT: api/Hearteds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHearted(string id, Hearted hearted)
        {
            if (id != hearted.PostId)
            {
                return BadRequest();
            }

            _context.Entry(hearted).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HeartedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hearteds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hearted>> PostHearted(Hearted hearted)
        {
            _context.Hearteds.Add(hearted);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (HeartedExists(hearted.PostId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetHearted", new { id = hearted.PostId }, hearted);
        }

        // DELETE: api/Hearteds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHearted(string id)
        {
            var hearted = await _context.Hearteds.FindAsync(id);
            if (hearted == null)
            {
                return NotFound();
            }

            _context.Hearteds.Remove(hearted);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HeartedExists(string id)
        {
            return _context.Hearteds.Any(e => e.PostId == id);
        }
    }
}
