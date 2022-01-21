import React, { useState } from 'react';
import './index.css';

const SideNav = () => {
  const [addField, setAddField] = useState(false);
  const addNewSkill = () => {
    if (addField) {
      return (
        <span className='adding_skill'>
          <input className='interest_name_input' />
          <span className='save_new_skill' onClick={saveInterest}>
            Add
          </span>
        </span>
      );
    } else {
      return (
        <span className='add_interest_button' onClick={addNewField}>
          Add New Skill
        </span>
      );
    }
  };
  const addNewField = () => {
    setAddField(true);
  };

	const saveInterest =()=>{
		setAddField(false)
	}

  return (
    <div className='side_nav_main_div'>
      <div className='area_of_interest_div'>
        <h4>Area Of Interest</h4>
        <span className='interest_field'> JavaScript</span>
      </div>
			<hr/>
      <div className='add_interest_area'>
        {/*Here a add Icon needed */}
        {addNewSkill()}
      </div>
    </div>
  );
};

export default SideNav;
