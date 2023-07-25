using Microsoft.AspNetCore.Mvc;
using Nancy.Json;

namespace Checkers.Controllers
{

    public class CheckerBoard
    {
        private int[] Board = new int[64]
            {
                -1, 2, -1, 2, -1, 2, -1, 2,
                2, -1, 2, -1, 2, -1, 2, -1,
                -1, 2, -1, 2, -1, 2, -1, 2,
                0, -1, 0, -1, 0, -1, 0, -1,
                -1, 0, -1, 0, -1, 0, -1, 0,
                1, -1, 1, -1, 1, -1, 1, -1,
                -1, 1, -1, 1, -1, 1, -1, 1,
                1, -1, 1, -1, 1, -1, 1, -1
            };


    private int lastMove = -1;

        public int[] CheckerBoardData
        {
            get { return Board; }
            set { Board = value; }
        }
    }

    [ApiController]
    [Route("[controller]")]
    public class CheckersController : ControllerBase
    {
        public CheckerBoard Board = new();


        [HttpGet("getboard")]
        public int[] Get()
        {
            return Board.CheckerBoardData;
        }
        
        [HttpPost("postboard")]
        public void Post([FromBody]int[] newBoard)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            Board.CheckerBoardData = newBoard;
            Console.WriteLine(Board.CheckerBoardData[0].ToString());
        }

        [HttpPut("movecount")]
        public void Put()
        {

        }
    }
}