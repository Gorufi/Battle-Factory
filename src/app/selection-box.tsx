import styles from "./styles.module.css";

const SelectionBox = () => {
    return ( 
        
            <div className={styles.text_box}>
                <div className={styles.text_box_inside}>
                    <div className={styles.text_box_text}>
                        <p className="row">
                            The TRAINER is apparently skilled in the handling of the 
                            <select className="form-select w-auto">
                                <option value="">NO TYPE SELECTED</option>
                                <option value="normal">NORMAL</option>
                                <option value="fighting">FIGHTING</option>
                                <option value="flying">FLYING</option>
                                <option value="ground">GROUND</option>
                                <option value="rock">ROCK</option>
                                <option value="bug">BUG</option>
                                <option value="ghost">GHOST</option>
                                <option value="steel">STEEL</option>
                                <option value="fire">FIRE</option>
                                <option value="water">WATER</option>
                                <option value="grass">GRASS</option>
                                <option value="electric">ELECTRIC</option>
                                <option value="psychic">PSYCHIC</option>
                                <option value="ice">ICE</option>
                                <option value="dragon">DRAGON</option>
                                <option value="dark">DARK</option>
                            </select>
                            type.
                        </p>
                        
                        <p className="row">
                            Their favorite battle style appears to be
                            <select className="form-select w-auto">
                                <option value="0"> free-spirited and unrestrained</option>
                                <option value="1"> one based on total preparation</option>
                                <option value="2"> slow and steady</option>
                                <option value="3"> one of endurance</option>
                                <option value="4"> high risk, high return</option>
                                <option value="5"> weakening the foe to start</option>
                                <option value="6">  impossible to predict</option>
                                <option value="7">depending on the battle&apos;s flow</option>
                                <option value="8"> flexibly adaptable to the situation</option>
                            </select>
                            .
                        </p>
                    </div>
                    
                </div>
                
            </div>
        

     );
}
 
export default SelectionBox;