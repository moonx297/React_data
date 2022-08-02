import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
  return (
    //특정 구간만 강조하고 싶을 때 쓰는 태그 span
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};
export default CSSModule;