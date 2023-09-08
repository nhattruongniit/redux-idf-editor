import React from 'react';
import { useDebounce } from "@uidotdev/usehooks";

// components
import FieldSelect from './Fields/FieldSelect';
import FieldInput from './Fields/FieldInput';

// helpers
import { getInputType } from '../helpers/getInputType';

function IdfObjectInput({ field, fieldObject, objectItem }) {
  // states
  const [inputText, setInputText] = React.useState("");
  const [inputNumber, setInputNumber] = React.useState(0);

  // hooks
  const debouncedInputText = useDebounce(inputText, 300);
  const debouncedInputNumber = useDebounce(inputNumber, 300);

  // variables
  const isDropdown = Array.isArray(field.options.choices || field.options['object-list'])  || field.options.hasOwnProperty("external-list");
  const inputType = getInputType({
    type: field.options.type
  });
  const options = field.options.choices ? field.options.choices.map(item => ({
    label: item,
    value: item
  })) : [];

  function onSelect(e) {
    console.log('onSelect: ', {
      value: e.target.value,
      objectItem,
      field
    })
  }

  // change input text
  React.useEffect(() => {
    if (debouncedInputText) {
      console.log('debouncedInputText: ', {
        debouncedInputText,
        objectItem,
        field
      })
    }
  }, [debouncedInputText, field, objectItem]);

  // change input number
  React.useEffect(() => {
    if (debouncedInputNumber) {
      console.log('debouncedInputNumber: ', {
        debouncedInputNumber,
        objectItem,
        field
      })
    }
  }, [debouncedInputNumber, field, objectItem]);


  if(isDropdown) {
    return (
      <FieldSelect 
        defaultValue={fieldObject}
        options={options}
        className="w-full"
        onChange={onSelect}
      />
    )
  }

  if (!isDropdown && (inputType === 'text' || inputType === 'node')) {
    return (
      <FieldInput 
        defaultValue={fieldObject}
        onChange={e => setInputText(e.target.value)}
      />
    );
  }

  if (!isDropdown && inputType === 'number') {
    return (
      <FieldInput 
        type="number" 
        defaultValue={fieldObject}
        onChange={e => setInputNumber(e.target.value)}
      />
    );
  }

  return null
}

export default IdfObjectInput