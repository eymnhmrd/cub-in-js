const TILE_SIZE = 64;
const NUM_ROWS = 15;
const NUM_COLS = 15;

const WINDOW_WIDTH = TILE_SIZE * NUM_ROWS;
const WINDOW_HEIGHT = TILE_SIZE * NUM_COLS;


class MAP {
  constructor(){
    this.grid = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,1,1,1,1,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
    ];
  }
  render()
  {
    for (var i = 0; i < NUM_ROWS; i++)
    {
       for(var j = 0; j < NUM_COLS; j++)
       {
         var tile_x = j * TILE_SIZE;
         var tile_y = i * TILE_SIZE;
         var tile_color;
         if (this.grid[i][j] == 1)
           tile_color = "#222"
         else
           tile_color = "#fff"
         stroke("#222");
         fill(tile_color);
         rect(tile_x, tile_y, TILE_SIZE, TILE_SIZE);
       }
    }
  }
}

var grid = new MAP();

function setup() {
  createCanvas(WINDOW_WIDTH,WINDOW_HEIGHT);
}

function update()
{
  
}

function draw() {
  background(300);
  grid.render();
}