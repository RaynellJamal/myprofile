import React, {useState} from 'react';

function Likes() {

const [count, setCount] = useState(0);
    return (
        <div class="likes">
            <p>{count}</p>
            <i class="fas fa-heart" onClick={() => setCount(count + 1)}></i>
        </div>
    )
}

export default Likes
