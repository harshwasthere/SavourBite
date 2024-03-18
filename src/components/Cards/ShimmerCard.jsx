import "./ShimmerCard.css";

export default function ShimmerCard() {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-details">
                <span className="shimmer-name"></span>
                <span className="shimmer-cuisine"></span>
            </div>
            <div className="shimmer-features">
                <div className="shimmer-rating"></div>
                <div className="shimmer-delivery-time"></div>
            </div>
        </div>
    );
}
