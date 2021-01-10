import { 
    FC,
    useState 
} from 'react';
import './Main.css';

type TProps = {
    name: string,
}

const CheckBox: FC<TProps> = (props: TProps) => {
    const [checked, setChecked] = useState(false);

    return(
        <div className="checkbox-container" onClick={() => setChecked(!checked)}>
            <input type="checkbox" checked={checked} />
            <label>{props.name}</label>
        </div>        
    )
}

export default CheckBox;