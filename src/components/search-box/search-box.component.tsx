import { ChangeEventHandler } from 'react';
import './search-box.styles.css';


interface ISearchBox {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ 
  className, 
  placeholder, 
  onChangeHandler 
}: ISearchBox) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />

);

export default SearchBox;
