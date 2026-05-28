import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  SearchInput,
  SelectInput,
} from "react-admin";

const filters = [
  <SearchInput source="q" alwaysOn />,

  <SelectInput
    source="department"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
      { id: "Finance", name: "Finance" },
    ]}
  />,
];

export const EmployeeList = () => (
  <List filters={filters} perPage={5}>
    <Datagrid rowClick="show">
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" />
      <TextField source="department" label="Département" />

      <NumberField
        source="salary"
        label="Salaire"
        options={{
          style: "currency",
          currency: "EUR",
        }}
      />

      <BooleanField source="active" label="Actif" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);