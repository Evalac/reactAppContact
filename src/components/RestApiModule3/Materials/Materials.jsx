import { MaterialList } from '../MaterialList/MaterialList';

function Materials({ data, removeMaterial, updateMaterial }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <MaterialList
            removeMaterial={removeMaterial}
            updateMaterial={updateMaterial}
            item={item}
          />
        </li>
      ))}
    </ul>
  );
}

export { Materials };
