const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const audioFilePath = "path_to_audio_file.mp3"; // Replace with your audio file path

    // Set appropriate headers for audio streaming
    res.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Content-Length": fs.statSync(audioFilePath).size,
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0,
    });

    // Read the audio file and stream it to the response
    const stream = fs.createReadStream(audioFilePath);
    stream.pipe(res);
});

const port = 3000; // Replace with your desired port number
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
