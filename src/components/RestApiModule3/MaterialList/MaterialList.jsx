function MaterialList({ item, updateMaterial, removeMaterial }) {
  return (
    <div>
      <p>Назва: {item.title}</p>
      <a href={item.link}>Посилання: {item.link}</a>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          removeMaterial(item.id);
        }}
      >
        Видалити
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          updateMaterial({ id: item.id, title: 'update' });
        }}
      >
        Редагувати
      </button>
    </div>
  );
}

export { MaterialList };
