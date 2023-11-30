import React from 'react';

const SingleBlog = ({ params }) => {
    console.log(params.segments);
    const [year,id]=params.segments;
    return (
        <div>
            SingleBlog {year} for {id}
        </div>
    );
};

export default SingleBlog;