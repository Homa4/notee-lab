const { Readable } = require('stream');

class CustomStream extends Readable {
  constructor(options) {
    super(options); // called parent constructor
    this.currentIndex = 0; // Start from 0
    this.maxIndex = 5;     // Maximum data chunks
  }

  // Automatically called to feed data to the stream
  _read() {
    if (this.currentIndex < this.maxIndex) {
      const chunk = `Chunk ${this.currentIndex}\n`;
      console.log(`Pushing: ${chunk.trim()}`);
      this.push(chunk); // Push the data chunk to the stream buffer
      this.currentIndex++;
    } else {
      console.log('No more data to push');
      this.push(null); // End of stream
    }
  }
}

const customStream = new CustomStream({
  highWaterMark:10
}); // Buffer size limit (10 bytes)

customStream.on('data', (chunk) => {
  console.log('Received:', chunk.toString());
});

customStream.on('end', () => {
  console.log('Stream ended.');
});
