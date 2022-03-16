const e= React.createElement;

function LikeButton(){
    // Display a "Like" <Button>
    return e(
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'Like'
    );
}

//const button=()=>{
// return <butto>Like</button>
//}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);