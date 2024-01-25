import styles from "./styles.module.css";

const Banner = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 20
            }}
        />
    );
    return ( 
        <div >
            <div className={styles.banner}>
                <h1 className="display-1">Battle Factory</h1>
            </div>
            <ColoredLine color="#00f898 " />
        </div>
        
     );
}
 
export default Banner;