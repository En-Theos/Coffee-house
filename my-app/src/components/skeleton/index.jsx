import './skeleton.scss';

export default function Skeleton(props) {
    const { style } = props;
 
    return (
        <div className="skeleton" style={style}>
            <span className="pulse"></span>
        </div>
    )
}