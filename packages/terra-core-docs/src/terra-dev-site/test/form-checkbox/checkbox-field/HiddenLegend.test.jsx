import React from 'react';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

const checkboxField = () => (
  <CheckboxField legend="Desired Department" isLegendHidden>
    <Checkbox id="ux-dept" name="dept[]" labelText="UX/Interaction Design" value="ux" />
    <Checkbox id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" value="magazine" />
    <Checkbox id="website-dept" name="dept[]" labelText="Website Advertisements" value="website" />
    <Checkbox id="events-dept" name="dept[]" labelText="Event Promotions" value="events" />
  </CheckboxField>
);

export default checkboxField;
