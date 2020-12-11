import style from './Confession.module.css';
import Id from '../id/Id';

export default function Confession(props) {
	return (
        <div className={style.confession}
            <Id {...props} />
            {props.value}
        </div>
	);
}

