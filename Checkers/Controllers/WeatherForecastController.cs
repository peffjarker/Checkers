using Microsoft.AspNetCore.Mvc;

namespace Checkers.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckerController : ControllerBase
    {
        private int[,] Board = new int[8, 8]{
            {-1, 2, -1, 2, -1, 2, -1, 2 },
            {2, -1, 2, -1, 2, -1, 2, -1 },
            {-1, 2, -1, 2, -1, 2, -1, 2 },
            {0, -1, 0, -1, 0, -1, 0, -1 },
            {-1, 0, -1, 0, -1, 0, -1, 0 },
            {1, -1, 1, -1, 1, -1, 1, -1 },
            {-1, 1, -1, 1, -1, 1, -1, 1 },
            {1, -1, 1, -1, 1, -1, 1, -1 }
        };

        [HttpGet]
        public int[,] Get()
        {
            return Board;
        }
    }
}