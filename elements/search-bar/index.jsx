import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';

const SearchBar = () => (
  <InputGroup style={{ maxWidth: '25rem' }}>
    <FormControl
      type="text"
      placeholder="Procurar por..."
      aria-label="Procurar por..."
      aria-describedby="btnGroupAddon"
    />
    <InputGroup.Append>
      <Button>
        <MdSearch size={22} />
      </Button>
    </InputGroup.Append>
  </InputGroup>
);

export default SearchBar;
