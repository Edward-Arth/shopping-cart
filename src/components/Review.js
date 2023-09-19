import { MdStars} from "react-icons/md";

const Review = ({ content, author }) => {
    return (
        <div className="reviewCon">
            <div className="starsCon">
                <MdStars/><MdStars/><MdStars/><MdStars/><MdStars/>
            </div>
            <div className="authorCon">
                {author}
            </div>
            <div className="reviewContent">
                {content}
            </div>
        </div>
    )
}

export default Review;