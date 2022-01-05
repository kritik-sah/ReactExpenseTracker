const Card = (props) => {
    const styles = "rounded-lg shadow-lg " + props.className;
    return (
        <div className={styles}>
            {props.children}
        </div>
    )
}

export default Card
