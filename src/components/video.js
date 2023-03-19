import React,  { useState }  from "react";
import { Spotify } from "react-spotify-embed";

function Vid(){
 
  const [isFinished, setIsFinished] = useState(false);
  const handleNextClick = (content) => {
      setIsFinished(true);
      setPod(content)
  };
  const [pod, setPod] = useState("https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw");
  const [you, setYou] = useState("https://youtube.com/embed/");
  const [isFinished1, setIsFinished1] = useState(false);
  const handleClick = (id) => {
      setIsFinished1(true);
      console.log({id});
      setYou(id)
  };

  const Video = [
    { title: 'My First Blog Post', content: 'https://youtube.com/embed/'},
    { title: 'The Benefits of React', content: 'https://youtube.com/embed/'},
    { title: 'Why JavaScript is Awesome', content: 'https://youtube.com/embed/'},
    { title: 'My First Blog Post', content: 'https://youtube.com/embed/'},
    { title: 'The Benefits of React', content: 'https://youtube.com/embed/'},
    { title: 'Why JavaScript is Awesome', content: 'https://youtube.com/embed/'},
  ];

  const Podcast = [
    { title: 'a', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
    { title: 'b', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
    { title: 'c', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
    { title: 'd', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
    { title: 'e', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
    { title: 'f', content: 'https://open.spotify.com/episode/5ydZ2yKFgdBz1qE8cH0kwz?si=Xu9S53vUSleqPj9ycCS8tw'},
  ];


    return(
    <div>
{/* youtube */}
        <div>
        {!isFinished1 && !isFinished  && (
          <div>
            <h4>YouTube Video</h4>
            {Video.map((post) => (
            <button onClick={() => handleClick(post.content)}>{post.title}</button>
            ))}
          </div>
      )}
      {isFinished1 && (
               <iframe 
          width="100%" 
          height="315" 
          src={you}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          ></iframe>
          )}
        </div>

{/* spotify */}

        <div>
        {!isFinished && !isFinished1 && (
          <div>
            <h4>Spotify podcast</h4>
            {Podcast.map((post) => (
                  <button onClick={() => handleNextClick(post.content)}>{post.title}</button>
            ))}
          </div>
      )}


        {isFinished && (
        <Spotify wide link={pod} />
          )}
  

        </div>




    </div>
      
            

    )
}
export default Vid;