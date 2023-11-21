import React from 'react';  
import styles from './myStyles.module.css';   
function ModuleStyleDemo() {
    return (
        <div>  
            <h1 className={styles.mystyle}>Hello React CSS</h1>  
            <p className={styles.parastyle}>It provides great CS tutorials.</p>  
        </div> 
    );
}
export default ModuleStyleDemo;
