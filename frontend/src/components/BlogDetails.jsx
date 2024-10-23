import React, { useState, useRef, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // Choose a theme
import axios from 'axios';







const BlogDetails = () => {

    const [mediaList, setMediaList] = useState([]);

  // Fetch media data with metadata
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get('http://localhost:5000/media');
        setMediaList(response.data);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, []);

     // Handle video controls
  const VideoPlayer = ({ url, description }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Toggle play/pause
    const togglePlayPause = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    // Update progress bar
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    // Seek video using the progress bar
    const handleProgressChange = (event) => {
      const newTime = (event.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(event.target.value);
    };

    return (
      <div className="video-player" style={{ marginBottom: '20px' }}>
        <h3>{description}</h3>
        <video
          ref={videoRef}
          src={`http://localhost:5000${url}`}
          onTimeUpdate={handleTimeUpdate}
          style={{ width: '400px', marginBottom: '10px' }}
        />
        <div className="controls">
          <button
            onClick={togglePlayPause}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            value={progress}
            onChange={handleProgressChange}
            className="progress-bar"
            min="0"
            max="100"
          />
        </div>
      </div>
    );
  };


    useEffect(() => {
        hljs.highlightAll(); // This will apply the syntax highlighting to your code block
      }, []);
    
      const copyCode = () => {
        const codeBlock = document.getElementById('codeBlock').innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
          alert('Code copied to clipboard!');
        });
      };


    return ( 
        <div>
            <div className="md:flex  h-screen pt-[17%] animate-fadeIn  ">
                <div className=' w-[100%] h-[200px] md:w-[40%]  md:h-full '>
                    <div className='w-full h-[100%] md:h-[30%] rounded-md border text-white'>

                    <div className="media-container">
                    {mediaList.map((media) => (
                    <div key={media._id} className="media-item">
                        <h3>{media.description}</h3>
                        {media.mediaType === 'image' ? (
                        <img
                            src={`http://localhost:5000${media.url}`}
                            alt={media.description}
                            style={{ width: '300px', marginBottom: '10px' }}
                        />
                        ) : (
                        <VideoPlayer url={media.url} description={media.description} />
                        )}
                    </div>
                    ))}
                </div>

                   </div>
                </div>

                <div className=' w-[100%]  md:w-[60%] md:h-full  scroll-container scroll-hidde'>

                    <div className=" p-10    text-gray-500 w-[100%]  md:mr-20 lg:mr-40  ">
                        <h2 className="font-bold  text-[#fa2d5d]">The rose birth</h2>
                        <p className="p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, distinctio consequuntur quam doloremque nulla cum unde nisi aliquid, ad amet praesentium tempore hic labore deserunt harum debitis iusto facilis dolores. Tempore non explicabo eius ipsum numquam omnis earum! Possimus, facilis. Soluta facilis quisquam cumque harum facere vero minus saepe ducimus magnam incidunt odit a! Iste fugiat cumque quis blanditiis odio! Dicta et quibusdam earum magni. Suscipit, enim minima. Ratione enim, exercitationem quis natus, nihil modi deleniti soluta, a tempore sint accusantium dolor ut hic minima fugiat quisquam? Dolore, fuga.</p>
                    </div> 

                   <div className=" relative mb-10 px-2 bg-[#05070a] text-gray-500  rounded-sm overflow-x-auto over font-mono text-sm">
        
                        <button
                            onClick={copyCode}
                            className="absolute top-2 right-2 bg-gray-700 bg-opacity-60 text-gray-300 px-2 py-1 rounded-full text-xs hover:bg-gray-700"
                        >
                            Copy
                        </button>

<pre id="codeBlock">
    <code className="language-C++ ">
{`#include <iostream>
using namespace std;

int main() {
    cout << endl << endl << "\t\t\t:::::::::::::: *** STUDENT'S PORTAL *** ::::::::::::::::" << endl << endl;
    cout << ">> Choose the fellowing options." << endl << endl;
    cout << "    :::::::::::::::::::::::::::::::::::::::::::::::::" << endl << endl;
    cout << "      ::::   Student registration          1   ::::" << endl;
    cout << "      ::::   Delete student                2   ::::" << endl;
    cout << "      ::::   Add grade                     3   ::::" << endl;
    cout << "      ::::   Print all students            4   ::::" << endl;
    cout << "      ::::   Exite                         0   ::::" << endl << endl;
    cout << "    :::::::::::::::::::::::::::::::::::::::::::::::::" << endl << endl;

    return 0;
}`}
    </code>
</pre>

                    </div> 

                </div>

            </div>
        </div>
     );
}
 
export default BlogDetails;















 












