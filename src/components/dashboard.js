import React from "react";
import { Link } from 'react-router-dom';
import '../index.css'

function Dashboard(){
    const posts = [
        {id: 1, title: 'My First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, title: 'The Benefits of React', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'},
        {id: 3, title: 'Why JavaScript is Awesome', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.'},
        {id: 4, title: 'My First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 5, title: 'The Benefits of React', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'},
        {id: 6, title: 'Why JavaScript is Awesome', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.'},
      ];
    
      return (
        <div className="blog-container">
        <h2 className="blog-title">Latest Blog Posts</h2>
        <div className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-content">{post.content}</p>
              <Link to={`/blog/${post.id}`} className="blog-post-link">Read More</Link>
            </div>
          ))}
        </div>
      </div>
      );
}
export default Dashboard;
