import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
} from "react-admin";

import { EmployeeTitle } from "./EmployeeTitle";

const validateSalary = [required(), minValue(1500)];

export const EmployeeEdit = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm>
      <TextInput source="firstname" label="Prénom" validate={required()} />

      <TextInput source="lastname" label="Nom" validate={required()} />

      <TextInput source="email" validate={required()} />

      <SelectInput
        source="department"
        validate={required()}
        choices={[
          { id: "Informatique", name: "Informatique" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
      />

      <NumberInput
        source="salary"
        label="Salaire"
        validate={validateSalary}
      />

      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);