// The rgb function is incomplete. Complete it so that passing in RGB decimal values 
// will result in a hexadecimal representation being returned. Valid decimal values 
// for RGB are 0 - 255. Any values that fall out of that range must be rounded to 
// the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 
// will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    let conversion = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let arr = [r < 0 ? 0 : r > 255 ? 255 : r, g < 0 ? 0 : g > 255 ? 255 : g, b < 0 ? 0 : b > 255 ? 255 : b]
    let hex = []
    for( const x of arr ) {
      hex.push(conversion[Math.floor(x / 16)], conversion [Math.floor( (x / 16 - Math.floor(x / 16)) * 16) ] )
    }
    return hex.join('')
  }